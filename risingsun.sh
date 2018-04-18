#!/bin/bash

# Cleanup temp files
rm *.wav

# Set pattern variable
i=1

# Process chord progression


# for 60bpm:
# sox -n h60.wav synth 1 tri 130.81 fade 0 1.2 0.25 trim 0 1


for note in "$@"
do
# Generate half-note samples
    case "$note" in
	c2) sox -n c2h.wav synth 0.5 tri 65.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	cs2) sox -n cs2h.wav synth 0.5 tri 69.3 fade 0 0.7 0.25 trim 0 0.5 ;;
	d2) sox -n d2h.wav synth 0.5 tri 73.42 fade 0 0.7 0.25 trim 0 0.5 ;;
	ds2) sox -n ds2h.wav synth 0.5 tri 77.78 fade 0 0.7 0.25 trim 0 0.5 ;;
	e2) sox -n e2h.wav synth 0.5 tri 82.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	f2) sox -n f2h.wav synth 0.5 tri 87.31 fade 0 0.7 0.25 trim 0 0.5 ;;
	fs2) sox -n fs2h.wav synth 0.5 tri 92.5 fade 0 0.7 0.25 trim 0 0.5 ;;
	g2) sox -n g2h.wav synth 0.5 tri 98 fade 0 0.7 0.25 trim 0 0.5 ;;
	gs2) sox -n gs2h.wav synth 0.5 tri 103.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	a2) sox -n a2h.wav synth 0.5 tri 110 fade 0 0.7 0.25 trim 0 0.5 ;;
	as2) sox -n as2h.wav synth 0.5 tri 116.54 fade 0 0.7 0.25 trim 0 0.5 ;;
	b2) sox -n b2h.wav synth 0.5 tri 123.47 fade 0 0.7 0.25 trim 0 0.5 ;;
	c3) sox -n c3h.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	cs3) sox -n cs3h.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5 ;;
	d3) sox -n d3h.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	ds3) sox -n ds3h.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5 ;;
	e3) sox -n e3h.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	f3) sox -n f3h.wav synth 0.5 tri 174.61 fade 0 0.7 0.25 trim 0 0.5 ;;
	fs3) sox -n fs3h.wav synth 0.5 tri 185 fade 0 0.7 0.25 trim 0 0.5 ;;
	g3) sox -n g3h.wav synth 0.5 tri 196 fade 0 0.7 0.25 trim 0 0.5 ;;
	gs3) sox -n gs3h.wav synth 0.5 tri 207.65 fade 0 0.7 0.25 trim 0 0.5 ;;
	a3) sox -n a3h.wav synth 0.5 tri 220 fade 0 0.7 0.25 trim 0 0.5 ;;
	as3) sox -n as3h.wav synth 0.5 tri 233.08 fade 0 0.7 0.25 trim 0 0.5 ;;
	b3) sox -n b3h.wav synth 0.5 tri 246.94 fade 0 0.7 0.25 trim 0 0.5 ;;
	c4) sox -n c4h.wav synth 0.5 tri 261.63 fade 0 0.7 0.25 trim 0 0.5 ;;
	cs4) sox -n cs4h.wav synth 0.5 tri 277.18 fade 0 0.7 0.25 trim 0 0.5 ;;
	d4) sox -n d4h.wav synth 0.5 tri 293.66 fade 0 0.7 0.25 trim 0 0.5 ;; 
	ds4) sox -n ds4h.wav synth 0.5 tri 311.13 fade 0 0.7 0.25 trim 0 0.5 ;; 
	e4) sox -n e4h.wav synth 0.5 tri 329.63 fade 0 0.7 0.25 trim 0 0.5 ;; 
	f4) sox -n f4h.wav synth 0.5 tri 349.23 fade 0 0.7 0.25 trim 0 0.5 ;; 
	fs4) sox -n fs4h.wav synth 0.5 tri 369.99 fade 0 0.7 0.25 trim 0 0.5 ;; 
	g4) sox -n g4h.wav synth 0.5 tri 392 fade 0 0.7 0.25 trim 0 0.5 ;;
	gs4) sox -n gs4h.wav synth 0.5 tri 415.30 fade 0 0.7 0.25 trim 0 0.5 ;; 
	a4) sox -n a4h.wav synth 0.5 tri 440 fade 0 0.7 0.25 trim 0 0.5 ;; 
	as4) sox -n as4h.wav synth 0.5 tri 466.16 fade 0 0.7 0.25 trim 0 0.5 ;; 
	b4) sox -n b4h.wav synth 0.5 tri 493.88 fade 0 0.7 0.25 trim 0 0.5 ;; 
	c5) sox -n c5h.wav synth 0.5 tri 523.25 fade 0 0.7 0.25 trim 0 0.5 ;; 
    esac
    
    # From the half notes make quarters and eighths
    sox "$note"h.wav "$note"q.wav trim 0.25 0.5
    sox "$note"h.wav "$note"e.wav trim 0.375 0.5
 
    # Make double-eighths
    sox "$note"e.wav "$note"e.wav "$note"de.wav splice 0.125
    

    # Compose beats into bars
    sox "$note"q.wav "$note"de.wav "$note"de.wav "$note"q.wav "$note"q.wav "$note"q.wav bar"$i".wav splice 0.25

i=$((i+1))
    
done

play $(ls bar*.wav | sort -n)
