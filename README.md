# MECCA Music Platform

The Music Education, Composition, Creation Application

MECCA is a browser-based music editor inspired by Mario Paint, written in Clojurescript and re-frame, utilizing the Web Audio API and an interface built entirely of hand-coded SVG.

[Live app in its current state](https://porkostomus.github.io/mecca/)

## Start local development server:

```
clojure -A:fig -b dev -r
```

## Compile with advanced optimizations:

```
clj -m figwheel.main -O advanced -bo dev
```

The vastly simplified system of music notation used in the Mario Paint music maker requires no use or knowledge of sharps/flats, note durations, stems, beams and rests. Furthermore, the use of styled note heads indicating their voices allows us to put them all on the same staff. This set of functionality, while limited, provides a delightful scope of creative possibilities while remaining very uncluttered and accessible to all ages and experience levels.

This model will be used as a starting point for the MECCA platform, with the primary areas of expansion being interactive sound design, and a selection of methods of note entry including piano roll, vertically-scrolling tracker style, and purely text-based.

The live synthesis engine will consist of an emulation of the 4 channels of the audio processing unit of the Nintendo Entertainment System, in which basslines are typically played with triangle waves, drum sounds are carved out of white noise and 2 variable pulse wave channels are provided for melodies. 

Check out the paper [Mario Paint: An Accessible Environment of Musical Creativity
and Sound Exploration](docs/Mario_Paint_An_Accessible_Environment_of.pdf).

## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
