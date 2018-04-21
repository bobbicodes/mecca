#!/bin/bash

./drums.sh

sox -m drums16.wav song.wav mmmix.wav
play mmmix.wav
