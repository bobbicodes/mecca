# MECCA-platform
The Music Education, Composition, Creation Application.

You are the student.
You are the composer.
You are the creator.

Seeking comprehensive integration of learning, writing and performance. When these are fully realized as part of a potentially greater activity, life will be at once [a dream](https://www.youtube.com/watch?v=0TgrorCZg80). We must subtly encourage what culture recognizes as "desirable" musical idioms while preserving expressivity, like the ultimate teacher who inspires and empowers you, the student, the composer, the creator.

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
    
You can jam on your keyboard in 2 full octaves:

     2 3   5 6 7   9 0   =   
    q w e r t y u i o p [ ]
     s d   g h j   l ; '
    z x c v b n m , . /


## Building songs

    $ ./sequencer [note 1] [note 2] [note 3] [note 4]
    
Define a 4-chord progression for the bassline using the same note keys.

  

You can try the test progression, the boss stage from Megaman 2:

    $ ./sequencer , n m ,


## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
