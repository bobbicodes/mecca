# MECCA-platform
The Music Education, Composition, Creation Application.

You are the student.
You are the composer.
You are the creator.

Seeking comprehensive integration of learning, writing and performance. When these are fully realized as part of a potentially greater activity, life will finally be [a dream](https://www.youtube.com/watch?v=0TgrorCZg80). To subtly encourage musical idioms without limiting expressivity, like the ultimate teacher who inspires and empowers you, the student, the composer, the creator.

Written completely in bash using simple scripts to generate waveforms and automagically stitch them together into songs.

# Installation

## Windows:

Install [MinGW](http://www.mingw.org/) and add it to your system PATH according to [these instructions](http://www.computerhope.com/issues/ch000549.htm). You can now start your bash shell and continue as with Mac/Linux.

## Mac/Linux:

Download the above scripts and set them to be executable:

    $ git clone https://github.com/porkostomus/mecca.git
    $ cd mecca
    $ chmod +x *.sh
    
MECCA uses [sox](http://sox.sourceforge.net/), the Swiss-Army Knife of audio manipulation. Your distro might already have it.
If not:

    $ sudo apt-get install sox

# Usage
    
    $ ./stepseq.sh
    
You will see a "virtual piano" on the screen indicating which keys to press.
You begin in bass mode. Use the menu to change note length.
A semicolon (;) enters a rest. Use option 1 at any time to play back what you've got.
When satisfied with your bassline, pick option 6 to save and move on to the lead.
Then do number 5 to hear it all together with drums!

## To just jam on the live synth:

    $./synth.sh

## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
