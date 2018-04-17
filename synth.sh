#!/bin/bash
while true; do
	echo "Synth ready..."
	
# Grab single keypress from user
	
	read -n1 key
	
# Map keypress to notes C2 - C4 following the usual convention for virtual pianos
	
	case $key in
		z) play -n synth 0.3 tri 65.41 & ;;
		s) play -n synth 0.3 tri 69.3 & ;;
		x) play -n synth 0.3 tri 73.42 & ;;
		d) play -n synth 0.3 tri 77.78 & ;;
		c) play -n synth 0.3 tri 82.41 & ;;
		v) play -n synth 0.3 tri 87.31 & ;;
		g) play -n synth 0.3 tri 92.5 & ;;
		b) play -n synth 0.3 tri 98 & ;;
		h) play -n synth 0.3 tri 103.83 & ;;
		n) play -n synth 0.3 tri 110 & ;;
		j) play -n synth 0.3 tri 116.54 & ;;
		m) play -n synth 0.3 tri 123.47 & ;;
		,) play -n synth 0.3 tri 130.81 & ;;
		l) play -n synth 0.3 tri 138.59 & ;;
		.) play -n synth 0.3 tri 146.83 & ;;
		\;) play -n synth 0.3 tri 155.56 & ;;
		/) play -n synth 0.3 tri 164.81 & ;;
		\') play -n synth 0.3 tri 174.61 & ;;
		q) play -n synth 0.3 tri 130.81 & ;;
		2) play -n synth 0.3 tri 138.59 & ;;
		w) play -n synth 0.3 tri 146.83 & ;;
		3) play -n synth 0.3 tri 155.56 & ;;
		e) play -n synth 0.3 tri 164.81 & ;;
		r) play -n synth 0.3 tri 174.61 & ;;
		5) play -n synth 0.3 tri 185 & ;;
		t) play -n synth 0.3 tri 196 & ;;
		6) play -n synth 0.3 tri 207.65 & ;;
		y) play -n synth 0.3 tri 220 & ;;
		7) play -n synth 0.3 tri 233.08 & ;;
		u) play -n synth 0.3 tri 246.94 & ;;
		i) play -n synth 0.3 tri 261.63 & ;;
		9) play -n synth 0.3 tri 277.18 & ;;
		o) play -n synth 0.3 tri 293.66 & ;;
		0) play -n synth 0.3 tri 311.13 & ;;
		p) play -n synth 0.3 tri 329.63 & ;;
		[) play -n synth 0.3 tri 349.23 & ;;
		=) play -n synth 0.3 tri 369.99 & ;;
		]) play -n synth 0.3 tri 392 & ;;
	esac
done
