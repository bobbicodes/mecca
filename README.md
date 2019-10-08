# MECCA Music Platform

The Music Education, Composition, Creation Application

MECCA is a sample-based music editor inspired by Mario Paint written in Clojurescript and re-frame.

It was originally meant to be a chiptune tracker that would simply emulate the 4 channels of the NES. But then I started playing around with alternative interfaces and while working on an SVG music notation rendering engine I realized that my priorities were definitely out of whack, and what my program really needed was a jumping Mario.

[Live app in its current state](https://porkostomus.github.io/mecca/)

![Screenshot](mecca.png)

I found that the specific subset of musical features used in the Mario Paint music maker provides a delightful scope of creative possibilities while remaining very approachable.

Check out the paper [Mario Paint: An Accessible Environment of Musical Creativity
and Sound Exploration](docs/Mario_Paint_An_Accessible_Environment_of.pdf).


## Progress

Implemented Undodog and Redorabbit. The second one I made up. Actually I think it's supposed to be a frog but whatevs.

Added a sharp button, expanding to all 12 chromatic tones. Editor scrolls mostly right. Animation... not so much.

Currently working on MusicXML import feature. That means I had to actually use proper midi-numbers which broke the Mario Ghost House theme and Zelda Overworld sample songs. Which will be fine once I'm done because then we'll be able to import any number of songs.

## Future ideas

It would be cool to be able to record, link or upload your own samples. However, Koji Kondo said that composing for the SNES is 1000 times harder than composing for the NES, and the difference is the SNES being sample based can sound like anything, but the NES only plays one set of built-in sounds.

One idea is to make an 8-bit / 16-bit switch that will transform the whole UI respectively from synth oscillator to sample mode.

For the synths, I believe that by using the very efficient algorithms from Blargg's blip-buf library, a full emulation can be done in the browser quite easily. Since the NES produces sound via a sample/hold circuit, it is only necessary to generate the ends of the waveforms (the transitions) since the middle part is the same regardless of frequency, differing only in length.

* Noise channel produces pseudo-random bits by linear feedback shift register method. This is then played back at 16 possible sample rates. A much shorter bit sequence is also possible, which produces a metallic tone.

* Triangle wave (for bass and kick drums) is actually a 16 step quantized triangle-ish wave with a slight shark fin shape that also has tiny sawteeth on it. Gotta get this stuff right.

* Linear-interpolated bandlimiting will be good enough, since we have the ability to use the hardware clock exposed by the Web Audio API to oversample at an extremely high rate, supressing aliasing far below perceptible limits.

Also very exciting is the possibility of an SVG pixel art / animation studio. Like the way it was in Mario Paint but more better because stuff like custom color pallets, upload your own coloring books, etc.

## Start local development server:

```
clojure -A:fig -b dev -r
```

You'll probably need to change the line in `music.cljs` to point to the directory with the samples:

```
(defn load-samples []
  (go-loop [result {}
            sounds (range 1 27)]
    (if-not (nil? (first sounds))
      (let [sound (first sounds)
            decoded-buffer (<! (get-and-decode {:url (str "/audio/" sound ".mp3")
                                                :sound sound}))]
        (prn sound)
        (prn decoded-buffer)
        (recur (assoc result sound decoded-buffer)
               (rest sounds)))
      result)))
```

## Compile with advanced optimizations:

```
clj -m figwheel.main -O advanced -bo dev
```

Thanks to [Bruce Hauman](https://github.com/bhauman), [Chris Ford](https://github.com/ctford) and [Dave Yarwood](https://github.com/daveyarwood) for blazing the CLJS Web Audio trail. No way I could have figured this all out.