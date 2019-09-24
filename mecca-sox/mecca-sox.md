# Original command-line sequencer:

Clone the repository and set the scripts to be executable:

```
$ git clone https://github.com/porkostomus/mecca.git
$ cd mecca-beta
/mecca-beta$ chmod +x *
```

## Dependencies

```
/mecca-beta$ sudo apt install sox bc
```

# Usage

## Live synth

If you just want to jam on the keyboard:

```
/mecca-beta$ ./synth
```

```
 -------------------------
  | 2 | 3 |   | 5 | 6 | 7 |
---------------------------------
| q | w | e | r | t | y | u | i |
---------------------------------
  | s | d |    | g | h | j |
---------------------------------
| z | x | c | v | b | n | m | , |
---------------------------------
```

The "virtual piano" on the screen indicates which keys play notes. You have 2 full octaves, one starting with the `z` key, and one starting with `q`, with the sharps/flats located above them like on a piano.

## Live drum synth

```
/mecca-beta$ ./drum-machine
```

Play the drums using the `a` `s` `d` keys.

## Multitrack text-based sequencer

#### Note/drum files

The MECCA music encoding format consists of *note files*, text files made up of a list of notes (with their octave) and their duration in terms of whole `1`, half `2`, quarter `4`, quarter-note triplet `4t`, eighth `8`, eighth-note triplet `8t`, sixteenth `16`, or a rest `r`, one note per line:

```
c3 8
c#3 16
d#3 16
b4 8
c#3 16
c#3 16

```

**Notice the blank line at the end.** Without it, your last note will get cut off.

The drum sequencer works similarly, written as kicks `k`, snares `s` and hi-hats `h`:

```
k 8
h 16
h 16
s 8
h 16
h 16

```

The program looks for music files named `<song>-drums`, `<song>-bass`, and `<song>-lead`, or 2 lead tracks named `<song>-lead1` and `<song>-lead2`.

#### Song (`.mec`) files

The drum and note files can be looked at as musical patterns that can be looped and composed into a more complex arrangement. This is done using song files:

```
A
A
B
A
A

```

This example will create a song in the form AABAA using the note patterns contained in the files `<song>-<instrument>-A` and `<song>-<instrument>-B`.

### **Build your song!**

```
/mecca-beta$ ./build-song <song> <tempo>
```

Check out the `zelda` and `megaman` examples!

## Interactive sequencer:

Allright, now forget about all those text files! The *Mecca Alpha* interface handles it all for you and lets you build songs interactively:

```
/mecca/mecca-alpha$ ./mecca [tempo]
    
`tempo` is an integer in beats-per-minute (defaults to `120`).
The Zelda sample song sounds right at `120`, Megaman is `175`.  
To play a song, just load it and select play from the spacebar-menu:

    MECCA Music Platform
    1 - New song
    2 - Load song
    > 2
    Enter song name
    > zelda
      -------------------------
      | 2 | 3 |   | 5 | 6 | 7 |
    ---------------------------------
    | q | w | e | r | t | y | u | i |
    ---------------------------------
      | s | d |    | g | h | j |
    ---------------------------------
    | z | x | c | v | b | n | m | , |
    ---------------------------------

    Synth ready. Press <spacebar> for options
    > 
    [space] Play song
    [1] Undo last note
    [2] Record lead
    [3] Add eighth-notes
    [4] Add eighth-note triplets
    [5] Add quarter-notes
    [6] Add quarter-note triplets
    [7] Add half-notes

    Enter option >
```
    
1. Enter notes to build the bassline using triangle-waves.
2. Use the spacebar-menu to change note lengths.
3. **A semicolon (`;`) enters a rest.**
4. If you mess up, use the undo! Use the play option any time to hear what you've got.
5. When satisfied with your bassline, move on to the lead.

## Motivation

The MECCA Platform was born out of the inspiration that we should develop a music software suite to provide comprehensive integration of learning, writing and performance. For when these forms of understanding and expression are fully realized as components of a higher-order activity, life will finally be [a dream](https://www.youtube.com/watch?v=0TgrorCZg80). The goal is to subtly encourage musical idioms without limiting expressivity, like the ultimate teacher who inspires and empowers you, the student, the composer, the creator.

MECCA uses [SoX](http://sox.sourceforge.net/), the Swiss-Army Knife of audio manipulation. It began life in 1991 as a command-line tool for converting audio formats, and was tortured throughout its adolesence and made to do all sorts of things to sounds like bind them, cut them, and apply effects all over them. Most fascinatingly, at some point it developed the ability to actually synthesize its own waveforms, a most distinguished craft which has seduced us into bringing this long history of abuse to its thrilling climax, and proudly introduce the one, the only... SoX, the Sequencer.