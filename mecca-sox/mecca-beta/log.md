# LinuxFest presentation log

## 4-21-2019

LinuxFest Northwest is next weekend!

I'm breaking the program I wrote into individual components, following the Unix philosophy. I should give an overview of that as well. 

## 4-22-2019

Took screenshots of Bryan Cantrill's slides. I should make a slideshare and put them on it.

[And here it is.](https://www.slideshare.net/BobbyTowers1/unix-141630706)

The *Unix philosophy* according to Doug Mcllroy:

* Write programs that do one thing and do it well
* Write programs to work together
* Write programs that handle text streams, because that is a universal interface

Bryan Cantrill:

> Four decades later, this philosophy remains the single most important revolution in software systems thinking!

Me:

> In case it isn't obvious, I say that this is because it allows our programs to be used in ways beyond that which we intended.

## A tour of music code formats

Make sure to cover:

* Music XML or whatever
* [Alda](https://github.com/alda-lang/alda)/Edna!
* Lilypond/TeX
* [Music Macro Language (MML)](https://en.wikipedia.org/wiki/Music_Macro_Language) looks especially interesting, at least from a historical perspective on 8-bit music. It began in BASIC:

```
 10 TEMPO 4
 20 A$="E5R1E3R0D3R0E3R0E1R0D1R0-G4R1"
 30 B$="F3R0F1R0F1R0A3R0F1R0E1R0D1R0D1R0E5R0"
 40 C$="C3R0C1R0C1R0E3R0C1R0-B1R0C1R0-B1R0-A1R0-A1-B5R0"
 50 D$="E1R0E1R0E1R0E1R0E1R0E1R0D1R0E1R0E1R0E1R0D1R0-A1R0-A1R0B3R1"
 60 E$="-A1R0-B1R0C1R0D1R0E1R0F1R0E1R0F3R1A3R1B1R0A1R0F3R0E3R0E1R0E4R0"
 100 MUSIC A$+B$+B$
 110 MUSIC C$+C$+B$
 120 MUSIC C$+D$+E$
```

My `.mec` format is superior, because it represents absolute notes. `A2`, for example, represents the `a` note in the second octave. **Which means we don't need to deal with that other octave bullshit.**

But what I want to do is remove the wave information. The instrument assignment should be left to whatever is calling it. And while I'm at it, I'll use `#` instead of `s` to represent sharp as long as that doesn't cause any problems.

I second thought... perhaps it's good that we encode the wave too, since the note does in fact have to be one. The files conform to the spec. However... we don't encode the tempo info! Perhaps I'll give it a shot.

And it works! You can now run:

`$ ./build-track zelda-bass1 tri 120`

The `zelda-bass1` file:

```
a#2 4
f3 4
a#3 2
g#2 4
d#3 4
g#3 2
f#2 4
c#3 4
f#3 2
f2 4
c3 4
f3 2
```

Quarter-note triplets and eighth-note triplets are `4t` and `8t` respectively. Just tested and it works.

Created a `build-song` script, but it's kinda pointless since it just does `sox -m $* mix.wav`. But it might be expanded to also perform the track creation, including the drum track, so I'll keep it for now.

Here is our `create_drum_track` function:

```
create_drum_track () {
	echo "Creating drum track..."
	# hi-hat
	sox -n drum-h-whole.wav synth 0.01 noise fade 0 "$whole" "$whole" trim 0.0 "$whole" &>/dev/null
	sox drum-h-whole.wav drum-h-half.wav trim 0.0 "$half"
	sox drum-h-whole.wav drum-h-quarter.wav trim 0 "$quarter"
	sox drum-h-whole.wav drum-h-eighth.wav trim 0 "$eighth"
	sox drum-h-whole.wav drum-h-teenth.wav trim 0 "$teenth"
	# snare
	sox -n drum-s-whole.wav synth 0.1 noise fade 0 "$whole" "$whole" trim 0 "$whole" &>/dev/null
	sox drum-s-whole.wav drum-s-half.wav trim 0 "$half" &>/dev/null
	sox drum-s-whole.wav drum-s-quarter.wav trim 0 "$quarter" &>/dev/null
	sox drum-s-whole.wav drum-s-eighth.wav trim 0 "$eighth" &>/dev/null
	sox drum-s-whole.wav drum-s-teenth.wav trim 0 "$teenth" &>/dev/null
	# create pattern and loop it for length of song
	songlen="$(soxi -D "$song"-bass.wav)"
	sox drum-h-eighth.wav drum-h-teenth.wav drum-h-teenth.wav drum-s-eighth.wav drum-h-teenth.wav drum-h-teenth.wav "$song"-drums.wav
	sox "$song"-drums.wav "$song"-drums.wav "$song"-drums.wav "$song"-drums.wav "$song"-drums4.wav
	sox "$song"-drums4.wav "$song"-drums4.wav "$song"-drums4.wav "$song"-drums4.wav "$song"-drums16.wav
	sox "$song"-drums16.wav "$song"-drums16.wav "$song"-drums16.wav "$song"-drums16.wav "$song"-drums64.wav
	sox "$song"-drums64.wav "$song"-drums64.wav "$song"-drums128.wav trim 0 "$songlen"
}
```

It needs to be given a song, and a tempo from which to compute note lengths. That means we can either include that in the script, or, make it a separate program.

OK just made the `drum` script and ran it like so (after creating the bass and lead tracks):

```
$ ./drums zelda 120
```

Then successfully built the song with:

```
$ sox -m zelda-drums.wav zelda-bass.wav zelda-lead.wav zelda.wav
```

So what I think we want is a script that will do all of this... but it would need to look for all the song files.

End of day:

Finished the `build-song` script, which at this point does exactly what the old `mecca` script did, produces a 3-track mix with drums from a bass and lead file. Not bad!

## 4-23-2019

Made a kick drum, and wrote `create-drums` and `build-drums` scripts to make the drum sequencer work the same as the other instruments.

Still need to make the song builder use the drum sequencer though... done!

I want a way to more easily create sections and loop them. Since that is what our drum sequencer needs to do, loop itself for the length of the song.

We could make `build-track` take multiple files to build sequentially.

I'll start by breaking the files apart by section.

## 4-24-2019

I think the thing to do is to use an optional *control file* for each track that will include the arrangement and any other info. By default it will just find each of the source files and append them in order, but first it will look and see if there's a control file. Let's call it `<song>-<instrument>.mec` and it will look like this:

```
A
A
B
A
A
``` 

That's the arrangement for the megaman bassline.

I do think this should happen in the `build-song` script rather than `build-track`, that way `build-track` is left as nothing more than the program that reads a text file and spits out a `.wav`.