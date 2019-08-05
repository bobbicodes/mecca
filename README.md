# MECCA Music Platform

The Music Education, Composition, Creation Application

You are the student. You are the composer. You are the creator.

This project has gone through multiple incarnations, each with the goal of doing just one thing - easily composing songs in a style based on the [NES](http://famitracker.com/wiki/index.php?title=Sound_hardware#Nintendo_MMC5) and [C64](https://en.wikipedia.org/wiki/MOS_Technology_6581) sound chips. All instruments and drum sounds are synthesized from 

The MECCA-Alpha interface is a menu-driven interactive sequencer operated from the command-line. It uses plain text files to store the note data, which can also be edited manually for efficient copy-paste composition.

MECCA-Beta focused on creating an improved text-based music encoding format and breaking the program up into individual scripts, following the *Unix Philosophy* of creating composable software by writing programs that each do just one thing, and can be chained together using plain text as a universal interface.

See and hear it in action:

[Megaman 2 - Dr. Wily](https://www.youtube.com/watch?v=2EVTeP9KlmM)  

The version currently in development is built for the web using the Reagent React library for Clojurescript, and aims to be an authentic emulator of the NES APU. The sonic pallet could not be more simple:

* Band-limited (anti-aliased) quantized "pseudo-triangle" generator for basslines. 

* 2 variable duty-cycle pulse waves for leads, with adjustable volume, vibrato, pitch-bend, and the classic chip arpeggiator.

* White noise generator for drums, with variable randomness patterns to create the sense of multiple pitches.

A multitude of advanced UI features are underway, including:

* Switchable piano roll and "tracker" style editors - the former is better for editing individual tracks because the note grid offers an intuitive visualization of the change in pitch over time. On the other hand, the vertically-scrolling "tracker" style compact interface excels at editing the full arrangement.

* Music staff notation editor - with eventual support for MIDI, MusicXML and Lilypond formats.

* Keyboard, electric and acoustic guitar, bass, cello, violin and ukulele interfaces with automatic chord progressions and rhythm patterns. These will use sampled sounds, and be more focused on live performance.

* Filling out the "E" in MECCA (Education) will be a set of music theory training tools for learning common rhythms, harmonic intervals, scales and modes from around the world, composition techniques and drum/instrument sound design labs.

* Some time in the future it would be cool to add basic multitrack audio and video recording, to produce "chiptunified karaoke" tracks... super fun!

* All this will be finished in about 10 years.

# Installation - Original command-line sequencer:

Clone the repository and set the scripts to be executable:

```
$ git clone https://github.com/porkostomus/mecca.git
$ cd mecca
/mecca$ chmod +x *
```

## Dependencies

```
$ sudo apt install sox bc
```

# Usage

## Live synth

If you just want to jam on the keyboard:

```
/mecca$ ./synth
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
/mecca$ ./drum-machine
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
/mecca$ ./build-song <song> <tempo>
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

## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
