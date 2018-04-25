# MECCA-platform

The Music Education, Composition, Creation Application.
You are the student.
You are the composer.
You are the creator.

Seeking comprehensive integration of learning, writing and performance. For when these processes are fully realized as agents of a more complex entity, life will finally be [a dream](https://www.youtube.com/watch?v=0TgrorCZg80). To subtly encourage musical idioms without limiting expressivity, like the ultimate teacher who inspires and empowers you, the student, the composer, the creator.

See and hear it in action:

[Zelda theme](https://www.youtube.com/watch?v=m_t79-4WlE8)

[Megaman 2 Dr. Wily ](https://www.youtube.com/watch?v=b2-qQKJRWdo)

# Installation

## Windows:

Install [MinGW](http://www.mingw.org/) and add it to your system PATH according to [these instructions](http://www.computerhope.com/issues/ch000549.htm). You can now start your bash shell and continue as with Mac/Linux.

## Mac/Linux:

Download the mecca script and set it to be executable:

    $ git clone https://github.com/porkostomus/mecca.git
    $ cd mecca
    $ chmod +x mecca
    
MECCA uses [SoX](http://sox.sourceforge.net/), the Swiss-Army Knife of audio manipulation. It began life in 1991 as a command-line tool for converting audio formats, and was tortured throughout its adolesence and made to do all sorts of things to sounds like bind them, cut them, and apply effects all over them. Most fascinatingly, at some point it developed the ability to actually synthesize its own waveforms, a most distinguished craft which has seduced us into bringing this long history of abuse to its thrilling climax, and proudly introduce the one, the only... SoX, the Sequencer.

Your distro might already include SoX. Otherwise do something like:

    $ sudo apt-get install sox

Or whatever it is you do to install stuff on your thing.

# Usage
    
    $ ./mecca
    
To play a song, just load it and select play from the spacebar-menu.

To create your own from scratch:
    
You will see a "virtual piano" on the screen indicating which keys to press.
You have 2 full octaves, following the usual convention starting with the "z" key at C2 with the black keys starting with "s", and then the second octave along the row beginning with "q" and the black keys on the number row.
You begin by entering notes to build the bassline, using the menu to change note length.
A semicolon (;) enters a rest. Use the play option any time to hear what you've got.
If you mess up just fix it, there's unlimited undo!
When satisfied with your bassline, move on to the lead.

# About the .mec file format

One of the project's goals is to create music data files that are easy to read, edit and share. For this reason it uses .mec files, which are simply text files that contain a list of notes and their attributes, one note per line, like this:

    as2 square half
    f2 tri half
    r tri quarter
    as2 square quarter
    as2 square eighth
    c3 square eighth
    d3 square eighth
    ds3 square eighth   
    
One file is used per instrument. Open it in any text editor and change stuff, copy sections, send them to your friends.

# TODO

The spacebar-menu thing is alright, but we can do much better and give dedicated keys to the note-length functions.
The plan is to move this into C with ncurses and add support for mouse, arrow and function keys.

You might have noticed that the entire concept of tempo has been ignored. This perception would be correct. It's locked at 60 beats per minute, because that way I only had to calculate note lengths for a fixed tempo. While the tempo can be altered to some extent, the output becomes distorted, and the right way to tackle this is of course to create a function that will derive the right note lengths from a given bpm.

## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
