# MECCA-platform

The Music Education, Composition, Creation Application.
You are the student.
You are the composer.
You are the creator.

Seeking comprehensive integration of learning, writing and performance. For when these processes are fully realized as agents of a more complex entity, life will finally be [a dream](https://www.youtube.com/watch?v=0TgrorCZg80). To subtly encourage musical idioms without limiting expressivity, like the ultimate teacher who inspires and empowers you, the student, the composer, the creator.

See and hear it in action:  
[Zelda theme](https://www.youtube.com/watch?v=DO0MNkvrhI4)  
[Megaman 2 - Dr. Wily](https://www.youtube.com/watch?v=zQRW3vwydeU)

# Installation

Download the mecca script and set it to be executable:

    $ git clone https://github.com/porkostomus/mecca.git
    $ cd mecca
    $ chmod +x mecca
    
MECCA uses [SoX](http://sox.sourceforge.net/), the Swiss-Army Knife of audio manipulation. It began life in 1991 as a command-line tool for converting audio formats, and was tortured throughout its adolesence and made to do all sorts of things to sounds like bind them, cut them, and apply effects all over them. Most fascinatingly, at some point it developed the ability to actually synthesize its own waveforms, a most distinguished craft which has seduced us into bringing this long history of abuse to its thrilling climax, and proudly introduce the one, the only... SoX, the Sequencer.

Your distro might already include SoX. Otherwise do something like:

    $ sudo apt-get install sox

Or whatever it is you do to install things on your thing.

# Usage
    
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

## Editing your song's .mec files

You might find it more convenient to work in a text editor. One of the project's goals was to use music data files that are easy to read, edit and share. For this reason it uses .mec files, which are simply text files that contain a list of notes and their attributes like this:

    as2 square half
    f2 square half
    r square quarter
    as2 square quarter
    as2 square eighth
    c3 square eighth
    d3 square eighth
    ds3 square eighth   
    
As you might expect, each line is a note and its octave (**`s` stands for sharp**, `r` for rest) followed by its synth type (`tri`= triangle wave, `square`= square wave), followed by its length (`eighth`, `etrip`, `quarter`, `qtrip`, `half`).  One file is used per instrument. You'll likely find that by copy/pasting sections it is possible to build songs extremely quickly.

## To change the drum pattern

Edit line `103` of the `mecca` script:

```
sox drum-h-eighth.wav drum-h-teenth.wav drum-h-teenth.wav drum-s-eighth.wav drum-h-teenth.wav drum-h-teenth.wav "$song"-drums.wav
```

This command creates the sample `<song>-drums.wav` consisting of 3 hi-hats (1/8 note followed by 2 1/16 notes), an 1/8-note snare and 2 more 1/16-note hi-hats. For a different beat, change it to whatever you'd like. (As long as it's some combination of snares and hats.)

## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
