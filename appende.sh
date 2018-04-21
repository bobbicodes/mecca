#!/bin/bash

sox -n -c 1 song.wav trim 0.0 0.0

while true; do

	read -n1 key

	case $key in
		z) note=c2 ;;
		s) note=cs2 ;;
		x) note=d2 ;;
		d) note=ds2 ;;
		c) note=e2 ;;
		v) note=f2 ;;
		g) note=fs2 ;;
		b) note=g2 ;;
		h) note=gs2 ;;
		n) note=a2 ;;
		j) note=as2 ;;
		m) note=b2 ;;
		,) note=c3 ;;
		l) note=cs3 ;;
		.) note=d3 ;;
		\;) note=ds3 ;;
		/) note=e3 ;;
		q) note=c3 ;;
		2) note=cs3 ;;
		w) note=d3 ;;
		3) note=ds3 ;;
		e) note=e3 ;;
		r) note=f3 ;;
		5) note=fs3 ;;
		t) note=g3 ;;
		6) note=gs3 ;;
		y) note=a3 ;;
		7) note=as3 ;;
		u) note=b3 ;;
		i) note=c4 ;;
		9) note=cs4 ;;
		o) note=d4 ;;
		0) note=ds4 ;;
		p) note=e4 ;;
		[) note=f4 ;;
		=) note=fs4 ;;
		]) note=g4 ;;
	esac


	if [ "$key" = '' ]; then
		play song.wav
	else
		./note.sh $note
		sox song.wav "$note"e.wav song2.wav
		mv song2.wav song.wav
		play "$note"q.wav &>/dev/null &
	fi
done
