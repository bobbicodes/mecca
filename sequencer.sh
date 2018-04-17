#!/bin/bash

# Generate note samples for each of the 4 args


case $1 in
	z) sox -n c2h.wav synth 0.5 tri 65.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	s) sox -n cs2h.wav synth 0.5 tri 69.3 fade 0 0.7 0.25 trim 0 0.5 ;;
	x) sox -n d2h.wav synth 0.5 tri 73.42 fade 0 0.7 0.25 trim 0 0.5 ;;
	d) sox -n ds2h.wav synth 0.5 tri 77.78 fade 0 0.7 0.25 trim 0 0.5 ;;
	c) sox -n e2h.wav synth 0.5 tri 82.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	v) sox -n f2h.wav synth 0.5 tri 87.31 fade 0 0.7 0.25 trim 0 0.5 ;;
	g) sox -n fs2h.wav synth 0.5 tri 92.5 fade 0 0.7 0.25 trim 0 0.5 ;;
	b) sox -n g2h.wav synth 0.5 tri 98 fade 0 0.7 0.25 trim 0 0.5 ;;
	h) sox -n gs2h.wav synth 0.5 tri 103.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	n) sox -n a2h.wav synth 0.5 tri 110 fade 0 0.7 0.25 trim 0 0.5 ;;
	j) sox -n as2h.wav synth 0.5 tri 116.54 fade 0 0.7 0.25 trim 0 0.5 ;;
	m) sox -n b2h.wav synth 0.5 tri 123.47 fade 0 0.7 0.25 trim 0 0.5 ;;
	,) sox -n c3h.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	l) sox -n cs3h.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5 ;;
	.) sox -n d3h.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	\;) sox -n ds3h.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5 ;;
	/) sox -n e3h.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	q) sox -n c3h.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	2) sox -n cs3h.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5 ;;
	w) sox -n d3h.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	3) sox -n ds3h.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5 ;;
	e) sox -n e3h.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	r) sox -n f3h.wav synth 0.5 tri 174.61 fade 0 0.7 0.25 trim 0 0.5 ;;
	5) sox -n fs3h.wav synth 0.5 tri 185 fade 0 0.7 0.25 trim 0 0.5 ;;
	t) sox -n g3h.wav synth 0.5 tri 196 fade 0 0.7 0.25 trim 0 0.5 ;;
	6) sox -n gs3h.wav synth 0.5 tri 207.65 fade 0 0.7 0.25 trim 0 0.5 ;;
	y) sox -n a3h.wav synth 0.5 tri 220 fade 0 0.7 0.25 trim 0 0.5 ;;
	7) sox -n as3h.wav synth 0.5 tri 233.08 fade 0 0.7 0.25 trim 0 0.5 ;;
	u) sox -n b3h.wav synth 0.5 tri 246.94 fade 0 0.7 0.25 trim 0 0.5 ;;
	i) sox -n c4h.wav synth 0.5 tri 261.63 fade 0 0.7 0.25 trim 0 0.5 ;;
	9) sox -n cs4h.wav synth 0.5 tri 277.18 fade 0 0.7 0.25 trim 0 0.5 ;;
	o) sox -n d4h.wav synth 0.5 tri 293.66 fade 0 0.7 0.25 trim 0 0.5 ;; 
	0) sox -n ds4h.wav synth 0.5 tri 311.13 fade 0 0.7 0.25 trim 0 0.5 ;; 
	p) sox -n e4h.wav synth 0.5 tri 329.63 fade 0 0.7 0.25 trim 0 0.5 ;; 
	[) sox -n f4h.wav synth 0.5 tri 349.23 fade 0 0.7 0.25 trim 0 0.5 ;; 
	=) sox -n fs4h.wav synth 0.5 tri 369.99 fade 0 0.7 0.25 trim 0 0.5 ;; 
	]) sox -n gh.wav synth 0.5 tri 392 fade 0 0.7 0.25 trim 0 0.5 ;;
esac

case $2 in
	z) sox -n c2h.wav synth 0.5 tri 65.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	s) sox -n cs2h.wav synth 0.5 tri 69.3 fade 0 0.7 0.25 trim 0 0.5 ;;
	x) sox -n d2h.wav synth 0.5 tri 73.42 fade 0 0.7 0.25 trim 0 0.5 ;;
	d) sox -n ds2h.wav synth 0.5 tri 77.78 fade 0 0.7 0.25 trim 0 0.5 ;;
	c) sox -n e2h.wav synth 0.5 tri 82.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	v) sox -n f2h.wav synth 0.5 tri 87.31 fade 0 0.7 0.25 trim 0 0.5 ;;
	g) sox -n fs2h.wav synth 0.5 tri 92.5 fade 0 0.7 0.25 trim 0 0.5 ;;
	b) sox -n g2h.wav synth 0.5 tri 98 fade 0 0.7 0.25 trim 0 0.5 ;;
	h) sox -n gs2h.wav synth 0.5 tri 103.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	n) sox -n a2h.wav synth 0.5 tri 110 fade 0 0.7 0.25 trim 0 0.5 ;;
	j) sox -n as2h.wav synth 0.5 tri 116.54 fade 0 0.7 0.25 trim 0 0.5 ;;
	m) sox -n b2h.wav synth 0.5 tri 123.47 fade 0 0.7 0.25 trim 0 0.5 ;;
	,) sox -n c3h.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	l) sox -n cs3h.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5 ;;
	.) sox -n d3h.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	\;) sox -n ds3h.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5 ;;
	/) sox -n e3h.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	q) sox -n c3h.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	2) sox -n cs3h.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5 ;;
	w) sox -n d3h.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	3) sox -n ds3h.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5 ;;
	e) sox -n e3h.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	r) sox -n f3h.wav synth 0.5 tri 174.61 fade 0 0.7 0.25 trim 0 0.5 ;;
	5) sox -n fs3h.wav synth 0.5 tri 185 fade 0 0.7 0.25 trim 0 0.5 ;;
	t) sox -n g3h.wav synth 0.5 tri 196 fade 0 0.7 0.25 trim 0 0.5 ;;
	6) sox -n gs3h.wav synth 0.5 tri 207.65 fade 0 0.7 0.25 trim 0 0.5 ;;
	y) sox -n a3h.wav synth 0.5 tri 220 fade 0 0.7 0.25 trim 0 0.5 ;;
	7) sox -n as3h.wav synth 0.5 tri 233.08 fade 0 0.7 0.25 trim 0 0.5 ;;
	u) sox -n b3h.wav synth 0.5 tri 246.94 fade 0 0.7 0.25 trim 0 0.5 ;;
	i) sox -n c4h.wav synth 0.5 tri 261.63 fade 0 0.7 0.25 trim 0 0.5 ;;
	9) sox -n cs4h.wav synth 0.5 tri 277.18 fade 0 0.7 0.25 trim 0 0.5 ;;
	o) sox -n d4h.wav synth 0.5 tri 293.66 fade 0 0.7 0.25 trim 0 0.5 ;; 
	0) sox -n ds4h.wav synth 0.5 tri 311.13 fade 0 0.7 0.25 trim 0 0.5 ;; 
	p) sox -n e4h.wav synth 0.5 tri 329.63 fade 0 0.7 0.25 trim 0 0.5 ;; 
	[) sox -n f4h.wav synth 0.5 tri 349.23 fade 0 0.7 0.25 trim 0 0.5 ;; 
	=) sox -n fs4h.wav synth 0.5 tri 369.99 fade 0 0.7 0.25 trim 0 0.5 ;; 
	]) sox -n gh.wav synth 0.5 tri 392 fade 0 0.7 0.25 trim 0 0.5 ;;
esac

case $3 in
	z) sox -n c2h.wav synth 0.5 tri 65.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	s) sox -n cs2h.wav synth 0.5 tri 69.3 fade 0 0.7 0.25 trim 0 0.5 ;;
	x) sox -n d2h.wav synth 0.5 tri 73.42 fade 0 0.7 0.25 trim 0 0.5 ;;
	d) sox -n ds2h.wav synth 0.5 tri 77.78 fade 0 0.7 0.25 trim 0 0.5 ;;
	c) sox -n e2h.wav synth 0.5 tri 82.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	v) sox -n f2h.wav synth 0.5 tri 87.31 fade 0 0.7 0.25 trim 0 0.5 ;;
	g) sox -n fs2h.wav synth 0.5 tri 92.5 fade 0 0.7 0.25 trim 0 0.5 ;;
	b) sox -n g2h.wav synth 0.5 tri 98 fade 0 0.7 0.25 trim 0 0.5 ;;
	h) sox -n gs2h.wav synth 0.5 tri 103.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	n) sox -n a2h.wav synth 0.5 tri 110 fade 0 0.7 0.25 trim 0 0.5 ;;
	j) sox -n as2h.wav synth 0.5 tri 116.54 fade 0 0.7 0.25 trim 0 0.5 ;;
	m) sox -n b2h.wav synth 0.5 tri 123.47 fade 0 0.7 0.25 trim 0 0.5 ;;
	,) sox -n c3h.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	l) sox -n cs3h.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5 ;;
	.) sox -n d3h.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	\;) sox -n ds3h.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5 ;;
	/) sox -n e3h.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	q) sox -n c3h.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	2) sox -n cs3h.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5 ;;
	w) sox -n d3h.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	3) sox -n ds3h.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5 ;;
	e) sox -n e3h.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	r) sox -n f3h.wav synth 0.5 tri 174.61 fade 0 0.7 0.25 trim 0 0.5 ;;
	5) sox -n fs3h.wav synth 0.5 tri 185 fade 0 0.7 0.25 trim 0 0.5 ;;
	t) sox -n g3h.wav synth 0.5 tri 196 fade 0 0.7 0.25 trim 0 0.5 ;;
	6) sox -n gs3h.wav synth 0.5 tri 207.65 fade 0 0.7 0.25 trim 0 0.5 ;;
	y) sox -n a3h.wav synth 0.5 tri 220 fade 0 0.7 0.25 trim 0 0.5 ;;
	7) sox -n as3h.wav synth 0.5 tri 233.08 fade 0 0.7 0.25 trim 0 0.5 ;;
	u) sox -n b3h.wav synth 0.5 tri 246.94 fade 0 0.7 0.25 trim 0 0.5 ;;
	i) sox -n c4h.wav synth 0.5 tri 261.63 fade 0 0.7 0.25 trim 0 0.5 ;;
	9) sox -n cs4h.wav synth 0.5 tri 277.18 fade 0 0.7 0.25 trim 0 0.5 ;;
	o) sox -n d4h.wav synth 0.5 tri 293.66 fade 0 0.7 0.25 trim 0 0.5 ;; 
	0) sox -n ds4h.wav synth 0.5 tri 311.13 fade 0 0.7 0.25 trim 0 0.5 ;; 
	p) sox -n e4h.wav synth 0.5 tri 329.63 fade 0 0.7 0.25 trim 0 0.5 ;; 
	[) sox -n f4h.wav synth 0.5 tri 349.23 fade 0 0.7 0.25 trim 0 0.5 ;; 
	=) sox -n fs4h.wav synth 0.5 tri 369.99 fade 0 0.7 0.25 trim 0 0.5 ;; 
	]) sox -n gh.wav synth 0.5 tri 392 fade 0 0.7 0.25 trim 0 0.5 ;;
esac

case $4 in
	z) sox -n c2h.wav synth 0.5 tri 65.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	s) sox -n cs2h.wav synth 0.5 tri 69.3 fade 0 0.7 0.25 trim 0 0.5 ;;
	x) sox -n d2h.wav synth 0.5 tri 73.42 fade 0 0.7 0.25 trim 0 0.5 ;;
	d) sox -n ds2h.wav synth 0.5 tri 77.78 fade 0 0.7 0.25 trim 0 0.5 ;;
	c) sox -n e2h.wav synth 0.5 tri 82.41 fade 0 0.7 0.25 trim 0 0.5 ;;
	v) sox -n f2h.wav synth 0.5 tri 87.31 fade 0 0.7 0.25 trim 0 0.5 ;;
	g) sox -n fs2h.wav synth 0.5 tri 92.5 fade 0 0.7 0.25 trim 0 0.5 ;;
	b) sox -n g2h.wav synth 0.5 tri 98 fade 0 0.7 0.25 trim 0 0.5 ;;
	h) sox -n gs2h.wav synth 0.5 tri 103.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	n) sox -n a2h.wav synth 0.5 tri 110 fade 0 0.7 0.25 trim 0 0.5 ;;
	j) sox -n as2h.wav synth 0.5 tri 116.54 fade 0 0.7 0.25 trim 0 0.5 ;;
	m) sox -n b2h.wav synth 0.5 tri 123.47 fade 0 0.7 0.25 trim 0 0.5 ;;
	,) sox -n c3h.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	l) sox -n cs3h.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5 ;;
	.) sox -n d3h.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	\;) sox -n ds3h.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5 ;;
	/) sox -n e3h.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	q) sox -n c3h.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	2) sox -n cs3h.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5 ;;
	w) sox -n d3h.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5 ;;
	3) sox -n ds3h.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5 ;;
	e) sox -n e3h.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5 ;;
	r) sox -n f3h.wav synth 0.5 tri 174.61 fade 0 0.7 0.25 trim 0 0.5 ;;
	5) sox -n fs3h.wav synth 0.5 tri 185 fade 0 0.7 0.25 trim 0 0.5 ;;
	t) sox -n g3h.wav synth 0.5 tri 196 fade 0 0.7 0.25 trim 0 0.5 ;;
	6) sox -n gs3h.wav synth 0.5 tri 207.65 fade 0 0.7 0.25 trim 0 0.5 ;;
	y) sox -n a3h.wav synth 0.5 tri 220 fade 0 0.7 0.25 trim 0 0.5 ;;
	7) sox -n as3h.wav synth 0.5 tri 233.08 fade 0 0.7 0.25 trim 0 0.5 ;;
	u) sox -n b3h.wav synth 0.5 tri 246.94 fade 0 0.7 0.25 trim 0 0.5 ;;
	i) sox -n c4h.wav synth 0.5 tri 261.63 fade 0 0.7 0.25 trim 0 0.5 ;;
	9) sox -n cs4h.wav synth 0.5 tri 277.18 fade 0 0.7 0.25 trim 0 0.5 ;;
	o) sox -n d4h.wav synth 0.5 tri 293.66 fade 0 0.7 0.25 trim 0 0.5 ;; 
	0) sox -n ds4h.wav synth 0.5 tri 311.13 fade 0 0.7 0.25 trim 0 0.5 ;; 
	p) sox -n e4h.wav synth 0.5 tri 329.63 fade 0 0.7 0.25 trim 0 0.5 ;; 
	[) sox -n f4h.wav synth 0.5 tri 349.23 fade 0 0.7 0.25 trim 0 0.5 ;; 
	=) sox -n fs4h.wav synth 0.5 tri 369.99 fade 0 0.7 0.25 trim 0 0.5 ;; 
	]) sox -n gh.wav synth 0.5 tri 392 fade 0 0.7 0.25 trim 0 0.5 ;;
esac

# From the half notes make quarter notes

sox $1h.wav $1.wav trim 0.25 0.5
sox $2h.wav $2q.wav trim 0.25 0.5
sox $3h.wav $3q.wav trim 0.25 0.5
sox $4h.wav $4q.wav trim 0.25 0.5

# And then eighths

sox $1q.wav $1e.wav trim 0.375 0.5
sox $2q.wav $2e.wav trim 0.375 0.5
sox $3q.wav $3e.wav trim 0.375 0.5
sox $4q.wav $4e.wav trim 0.375 0.5

# Make double-eighths

sox $1e.wav $1e.wav $1de.wav splice 0.125
sox $2e.wav $2e.wav $2de.wav splice 0.125
sox $3e.wav $3e.wav $3de.wav splice 0.125
sox $4e.wav $4e.wav $4de.wav splice 0.125


# Quarter followed by double-eighth pattern

sox $1q.wav $1de.wav mm$1.wav splice 0.25
sox $2q.wav $2de.wav mm$2.wav splice 0.25
sox $3q.wav $3de.wav mm$3.wav splice 0.25
sox $4q.wav $4de.wav mm$4.wav splice 0.25

# Stick them together

sox mm$1.wav mm$1.wav mm$1-2.wav splice 0.5
sox mm$2.wav mm$2.wav mm$2-2.wav splice 0.5
sox mm$3.wav mm$3.wav mm$3-2.wav splice 0.5
sox mm$4.wav mm$4.wav mm$4-2.wav splice 0.5

# And then...

sox mm$1-2.wav mm$1-2.wav mm$1-4.wav splice 1
sox mm$2-2.wav mm$2-2.wav mm$2-4.wav splice 1
sox mm$3-2.wav mm$3-2.wav mm$3-4.wav splice 1
sox mm$4-2.wav mm$4-2.wav mm$4-4.wav splice 1

sox mm$1-4.wav mm$1-4.wav mm$1-8.wav splice 2
sox mm$2-4.wav mm$2-4.wav mm$2-8.wav splice 2
sox mm$3-4.wav mm$3-4.wav mm$3-8.wav splice 2
sox mm$4-4.wav mm$4-4.wav mm$4-8.wav splice 2

sox mm$1-8.wav mm$2-8.wav pata.wav splice 4
sox mm$3-8.wav mm$4-8.wav patb.wav splice 4
sox pata.wav patb.wav songa.wav splice 8

# And play what we've got

play songa.wav
