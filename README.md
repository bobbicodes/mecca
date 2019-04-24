# MECCA Music Platform

The Music Education, Composition, Creation Application

You are the student.
You are the composer.
You are the creator.

See and hear it in action:

[Megaman 2 - Dr. Wily](https://www.youtube.com/watch?v=2EVTeP9KlmM)  


The MECCA Platform was born out of the inspiration that we should develop a music software suite to provide comprehensive integration of learning, writing and performance. For when these forms of understanding and expression are fully realized as components of a higher-order activity, life will finally be [a dream](https://www.youtube.com/watch?v=0TgrorCZg80). The goal is to subtly encourage musical idioms without limiting expressivity, like the ultimate teacher who inspires and empowers you, the student, the composer, the creator.

MECCA uses [SoX](http://sox.sourceforge.net/), the Swiss-Army Knife of audio manipulation. It began life in 1991 as a command-line tool for converting audio formats, and was tortured throughout its adolesence and made to do all sorts of things to sounds like bind them, cut them, and apply effects all over them. Most fascinatingly, at some point it developed the ability to actually synthesize its own waveforms, a most distinguished craft which has seduced us into bringing this long history of abuse to its thrilling climax, and proudly introduce the one, the only... SoX, the Sequencer.

# Installation

Clone the repository and set the scripts to be executable:

    $ git clone https://github.com/porkostomus/mecca.git
    $ cd mecca
    $ chmod +x *

## Dependencies

If your distro doesn't already include `SoX`, do this:

    $ sudo apt-get install sox

Or whatever it is you do to install things on your thing.

# Usage

The new version of the program is run with the `build-song` script:

```
~/mecca$ ./build-song <song> <tempo>
```

The music files look like this:

```
c3 8
c#3 16
d#3 16
b4 8
c#3 16
c#3 16

```

The format is simply a note (with its octave) followed by its duration in terms of whole `1`, half `2`, quarter `4`, quarter-note triplet `4t`, eighth `8`, eighth-note triplet `8t`, or sixteenth `16`, one note per line. The last line must be blank.

The program looks for music files named `<song>-drums`, `<song>-bass`, and `<song>-lead`. If you create 2 lead tracks they must be named `<song>-lead1` and `<song>-lead2`.

The drum sequencer works similarly, written as kicks `k`, snares `s` and hi-hats `h`:

```
k 8
h 16
h 16
s 8
h 16
h 16

```

## Old sequencer:

The original mecca interface still works:

    $ ./mecca [tempo]
    
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

## Creating songs using the built-in sequencer:
    
The "virtual piano" on the screen indicates which keys play notes.
You have 2 full octaves, one starting with the `z` key, and one starting with `q`, with the sharps/flats located above them like on a piano.
1. Enter notes to build the bassline using triangle-waves.
2. Use the spacebar-menu to change note lengths.
3. **A semicolon (`;`) enters a rest.**
4. If you mess up, use the undo! Use the play option any time to hear what you've got.
5. When satisfied with your bassline, move on to the lead.

## Editing your song's `.mec` files

You might find it more convenient to work in a text editor. One of the project's goals was to use music data files that are easy to read, edit and share. For this reason it uses .mec files, which are simply text files that contain a list of notes and their attributes like this:

    as2 square half
    f2 square half
    r square quarter
    as2 square quarter
    as2 square eighth
    c3 square eighth
    d3 square eighth
    ds3 square eighth   
    
As you might expect, each line is a note and its octave (**`s` stands for sharp**, `r` for rest) followed by its synth type (`tri`= triangle wave, `square`= square wave), followed by its length (`teenth`, `eighth`, `etrip`, `quarter`, `qtrip`, `half`).  One file is used per instrument. You'll likely find that by copy/pasting sections it is possible to build songs extremely quickly.

## To change the drum pattern

Edit line `103` of the `mecca` script:

```
sox drum-h-eighth.wav drum-h-teenth.wav drum-h-teenth.wav drum-s-eighth.wav drum-h-teenth.wav drum-h-teenth.wav "$song"-drums.wav
```

This command creates the sample `<song>-drums.wav` consisting of 3 hi-hats (1/8 note followed by 2 1/16 notes), an 1/8-note snare and 2 more 1/16-note hi-hats. For a different beat, change it to whatever you'd like. (As long as it's some combination of snares and hats.)

## Live synth

For use as a *virtual instrument*, I have provided another file called `synth` which offers better key-response for live performance, as well as the nice touch of indicating the notes on the screen as you play.

## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
