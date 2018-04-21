#!/bin/bash

sox -n -c 1 song.wav trim 0.0 0.0
sox -n -c 1 rh.wav trim 0.0 0.5
sox -n -c 1 rq.wav trim 0.0 0.25
sox -n -c 1 re.wav trim 0.0 0.125

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
		\;) note=r ;;
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
		echo "1 - play"
		echo "2 - add half-notes"
		echo "3 - add quarter-notes"
		echo "4 - add eighth-notes"
		echo "5 - play with beat"
		echo "6 - record lead"
		echo -n " > "

read -n1 character

if [ "$character" = "1" ]; then
    play song.wav
elif [ "$character" = "2" ]; then
    len=h
	echo "Inserting half-notes..."
elif [ "$character" = "3" ]; then
    len=q
	echo "Inserting quarter-notes..."
elif [ "$character" = "4" ]; then
	len=e
	echo "Inserting eighth-notes..."
elif [ "$character" = "5" ]; then
	./seq.sh
elif [ "$character" = "6" ]; then
    mv song.wav bass.wav
	sox -n -c 1 song.wav trim 0.0 0.0	
	synth=s
else
    echo "ERROR..."
fi
	else

if [ "$note" = "r" ]; then
echo "rest inserted"    	
else
		./note.sh $note $synth
fi
		
		sox song.wav "$note""$synth""$len".wav song2.wav
		mv song2.wav song.wav
		play "$note""$synth""$len".wav &>/dev/null &
	fi

done
