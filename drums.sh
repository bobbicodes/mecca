#!/bin/bash

# Make hi-hat

sox -n h.wav synth 0.01 noise fade 0 0.25 0.25
sox h.wav hh.wav
sox hh.wav hhs.wav trim 0 0.125

# Make snare

sox -n s.wav synth 0.25 noise fade 0 0.25 0.25
sox s.wav sn.wav

# Put together into pattern

sox hh.wav hhs.wav hhs.wav sn.wav hhs.wav hhs.wav drums.wav
sox drums.wav drums.wav drums.wav drums.wav drums4.wav
sox drums4.wav drums4.wav drums4.wav drums4.wav drums16.wav


# play drums16.wav
