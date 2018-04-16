# MECCA-platform
The Music Education Composition Creation Application.

You are the student.
You are the composer.
You are the creator.

Aiming to unify the process of learning, writing and performing music. Because once these are realized as all part of a single activity, life will finally be [a dream](https://www.youtube.com/watch?v=0TgrorCZg80). We must subtly encourage "desirable" musical idioms while preserving maximum expressive potential, like the ultimate teacher who inspires and empowers you, the student, the composer, the creator.

## Dependencies
MECCA uses sox, the Swiss-Army Knife of audio manipulation. Your distro might already have it.
If not:

    $ sudo apt-get install sox


## Usage

    $ chmod +x bass.sh
    $ ./bass.sh

This will produce triangle wave samples for the notes C2 - B3, in half, quarter, and eighth-note lengths as well as a double-eighth note sample for each. 

Then, start the synth:

    $ chmod +x synth.sh
    $ ./synth.sh
    
You can now jam on your keyboard in 2 full octaves:

     2 3   6 7 8
    q w e r t y u i
     s d   g h j
    z x c v b n m ,


## TODO:

Make virtual piano with mouse support using ncurses.
