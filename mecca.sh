#!/bin/bash

# Generate half, quarter, eighth note at freq of arg1 in Hz
# Apply fade at note tail and trim to proper length

sox -n half.wav synth 0.5 tri $1 fade 0 0.7 0.25 trim 0 0.5
sox half.wav quarter.wav trim 0.25 0.5
sox half.wav eighth.wav trim 0.37 0.5

# Play them

play half.wav
play quarter.wav
play eighth.wav
