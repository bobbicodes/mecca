#!/bin/bash

case "$1" in
	c2) note=65.41 ;;
	cs2) note=69.3 ;;
	d2) note=73.42 ;;
	ds2) note=77.78 ;;
	e2) note=82.41 ;;
	f2) note=87.31 ;;
	fs2) note=92.5 ;;
	g2) note=98 ;;
	gs2) note=103.83 ;;
	a2) note=110 ;;
	as2) note=116.54 ;;
	b2) note=123.47 ;;
	c3) note=130.81 ;;
	cs3) note=138.59 ;;
	d3) note=146.83 ;;
	ds3) note=155.56 ;;
	e3) note=164.81 ;;
	f3) note=174.61 ;;
	fs3) note=185 ;;
	g3) note=196 ;;
	gs3) note=207.65 ;;
	a3) note=220 ;;
	as3) note=233.08 ;;
	b3) note=246.94 ;;
	c4) note=261.63 ;;
	cs4) note=277.18 ;;
	d4) note=293.66 ;; 
	ds4) note=311.13 ;; 
	e4) note=329.63 ;; 
	f4) note=349.23 ;; 
	fs4) note=369.99 ;; 
	g4) note=392 ;;
	gs4) note=415.30 ;; 
	a4) note=440 ;; 
	as4) note=466.16 ;; 
	b4) note=493.88 ;; 
	c5) note=523.25 ;; 
esac

if [ "$2" = "s" ]; then
	sox -n "$1"s.wav synth 0.5 square $note fade 0 0.7 0.25 trim 0 0.5 gain -10
	sox "$1"s.wav "$1"sh.wav
	sox "$1"sh.wav "$1"sq.wav trim 0.25 0.5
	sox "$1"sh.wav "$1"se.wav trim 0.375 0.5
else
	sox -n "$1".wav synth 0.5 tri $note fade 0 0.7 0.25 trim 0 0.5
	sox "$1".wav "$1"h.wav
	sox "$1"h.wav "$1"q.wav trim 0.25 0.5
	sox "$1"h.wav "$1"e.wav trim 0.375 0.5
fi
