# MECCA-platform
The Music Education, Composition, Creation Application.

You are the student.
You are the composer.
You are the creator.

Seeking comprehensive integration of learning, writing and performance. When these are fully realized as part of a potentially greater activity, life will be at once [a dream](https://www.youtube.com/watch?v=0TgrorCZg80). To subtly encourage musical idioms without limiting expressivity, like the ultimate teacher who inspires and empowers you, the student, the composer, the creator.

Written completely in bash shell using simple scripts to generate waveforms and automagically stitch them together into songs.

# Installation

    $ chmod +x synth.sh sequencer.sh
    
MECCA uses [sox](http://sox.sourceforge.net/), the Swiss-Army Knife of audio manipulation. Your distro might already have it.
If not:

    $ sudo apt-get install sox

## Windows:

Install [MinGW](http://www.mingw.org/) and add it to your system PATH according to [these instructions](http://www.computerhope.com/issues/ch000549.htm).

# Usage
    
    $ ./synth.sh
    
This brings up an on-screen "virtual piano" that you can play notes on.

## Building songs
    
Define a chord progression for the bassline using the following syntax:

    $ ./sequencer.sh [note1] [note2] [note3] [note4] . . .
    
Where a note can be:

     cs2  ds2     fs2 gs2 as2    cs3  ds3     fs3 gs3 as3
    c2  d2  e2  f2  g2  a2  b2  c3  d3  e3  f3  g3  a3  b3  c4
    
You can try the bassline to the boss stage from Megaman 2:

    $ ./sequencer.sh cs3 cs3 a2 a2 b2 b2 cs3 cs3
    
Or maybe House of the Rising Sun:

    $ ./sequencer.sh a2 c3 d3 f3 a2 c3 e3 e3

## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
