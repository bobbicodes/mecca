#!/bin/bash

# Generate a half note at freq of arg1

sox -n half.wav synth 0.5 tri $1 fade 0 0.7 0.25 trim 0 0.5

# Make quarter note

sox half.wav quarter.wav trim 0.25 0.5

# Make eighth note

sox half.wav eighth.wav trim 0.37 0.5

# Play them

play half.wav
play quarter.wav
play eighth.wav
