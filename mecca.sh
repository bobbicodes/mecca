#!/bin/bash

# Generate a half note at freq of arg1

sox -n out.wav synth 0.5 tri $1

# Play it

play out.wav
