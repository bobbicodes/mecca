#!/bin/bash

./drums.sh
./mmbass.sh cs3 cs3 a2 a2 b2 b2 cs3 cs3

sox -m drums16.wav mmbass.wav mmmix.wav
play mmmix.wav
