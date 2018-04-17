#!/bin/bash

sox mm$1-4.wav mm$1-4.wav mm$1-8.wav splice 2
sox mm$2-4.wav mm$2-4.wav mm$2-8.wav splice 2
sox mm$3-4.wav mm$3-4.wav mm$3-8.wav splice 2
sox mm$4-4.wav mm$4-4.wav mm$4-8.wav splice 2

sox mm$1-8.wav mm$2-8.wav pata.wav splice 4
sox mm$3-8.wav mm$4-8.wav patb.wav splice 4
sox pata.wav patb.wav songa.wav splice 8
play songa.wav
