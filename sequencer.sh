#!/bin/bash

# Generate note samples for each of the 4 args


case $1 in
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
esac

case $2 in
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
esac

case $3 in
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
esac

case $4 in
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
esac

# From the half notes make quarter notes

sox $1h.wav $1q.wav trim 0.25 0.5
sox $2h.wav $2q.wav trim 0.25 0.5
sox $3h.wav $3q.wav trim 0.25 0.5
sox $4h.wav $4q.wav trim 0.25 0.5

# And then eighths

sox $1h.wav $1e.wav trim 0.375 0.5
sox $2h.wav $2e.wav trim 0.375 0.5
sox $3h.wav $3e.wav trim 0.375 0.5
sox $4h.wav $4e.wav trim 0.375 0.5

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
