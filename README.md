# MECCA-platform

The Music Education, Composition, Creation Application.
You are the student.
You are the composer.
You are the creator.

Seeking comprehensive integration of learning, writing and performance. When these are fully realized as part of a potentially greater activity, life will finally be [a dream](https://www.youtube.com/watch?v=0TgrorCZg80). To subtly encourage musical idioms without limiting expressivity, like the ultimate teacher who inspires and empowers you, the student, the composer, the creator.

[![asciicast](https://asciinema.org/a/177671.png)](https://asciinema.org/a/177671)

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
    
You will see a "virtual piano" on the screen indicating which keys to press.
You have 2 full octaves, following the usual convention starting with the "z" key at C2 with the black keys starting with "s", and then the second octave along the row beginning with "q" and the black keys on the number row.
You begin by entering notes to build the bassline, using the menu to change note length.
A semicolon (;) enters a rest. Use the play option any time to hear what you've got.
If you mess up just fix it, there's unlimited undo!
When satisfied with your bassline, save it and move on to the lead.
When you save a song, you will then have <song>.mec and <song>-bass.mec, which you can hack on in your text editor.

# TODO

The spacebar-menu thing is cool, but would be twice as fast to switch note values if we give them dedicated keys.
When we do it with ncurses for mouse support we can use the arrow and/or function keys.


## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
