# MECCA Music Platform

The Music Education, Composition, Creation Application

You are the student. You are the composer. You are the creator.

This project was born out of the idea that we should make tools that treat learning and creating as complimentary activities. By designing a music software suite that is equally a digital audio workstation and a theory trainer, we can provide a more effective platform for creative exploration.

The first part I made is an interactive chiptune step-sequencer that you run from the command-line:

[Megaman 2 - Dr. Wily](https://www.youtube.com/watch?v=2EVTeP9KlmM)

It uses SoX to generate soundwaves, and offers a super simple text-based music encoding format optimized for building songs very quickly by copy-pasting sections.

The version of the MECCA Platform currently in development uses the Web Audio API, and makes extensive use of animated SVGs to produce a highly interactive experience modeled after Mario Paint, with several important enhancements:

* High quality, dynamically rendered SVG music notation on traditional bass, treble, and drum clefs, in addition to the simpler mario paint system of single duration notes made of cute and fun sounding character heads, with no need to worry about note values, stems, beams and rests.

* In addition to the sampled instruments, we will be running an emulation of the NES APU. That is, a live in browser implementation of the 4 synthesized channels output by the audio processing unit of the Nintendo Entertainment System.

As an introduction to the principles of sound design, elements of harmony and art of composition, this is a wonderful place to start - basslines played with triangle waves, drums carved out of white noise and variable pulse waves for melodies.

Check out the paper [Mario Paint: An Accessible Environment of Musical Creativity
and Sound Exploration](docs/Mario_Paint_An_Accessible_Environment_of.pdf).

[Live app in its current state](https://porkostomus.github.io/mecca/)

## LICENSE

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
