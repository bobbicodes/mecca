#!/bin/bash

# Generate a half note at freq of arg1

sox -n half.wav synth 0.5 tri $1 fade 0 0.7 0.25 trim 0 0.5

# Play it

play out.wav
