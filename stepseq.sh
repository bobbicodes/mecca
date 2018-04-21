#!/bin/bash

# Create new song file
sox -n -c 1 song.wav trim 0.0 0.0

# Produce silent notes, or "rests" as the music-type-people like to call them
sox -n -c 1 rh.wav trim 0.0 0.5
sox -n -c 1 rq.wav trim 0.0 0.25
sox -n -c 1 re.wav trim 0.0 0.125
sox -n -c 1 rs.wav trim 0.0 0.5
sox -n -c 1 rsq.wav trim 0.0 0.25
sox -n -c 1 rse.wav trim 0.0 0.125
sox -n -c 1 rsh.wav trim 0.0 0.5

# Start main event loop
while true; do

	# Display "virtual keyboard" and prompt
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; "
	echo "z x c v b n m , . /"
	echo ""
	echo "Synth ready. Press <space> for options."

	# Grab single keypress from user
	read -n1 key

	# Map keys to notes
	case $key in
		z) note=c2 ;; s) note=cs2 ;; x) note=d2 ;; d) note=ds2 ;; c) note=e2 ;;
		v) note=f2 ;; g) note=fs2 ;; b) note=g2 ;; h) note=gs2 ;; n) note=a2 ;;
		j) note=as2 ;; m) note=b2 ;; ,) note=c3 ;; l) note=cs3 ;; .) note=d3 ;;
		\;) note=r ;; /) note=e3 ;; q) note=c3 ;; 2) note=cs3 ;; w) note=d3 ;;
		3) note=ds3 ;; e) note=e3 ;; r) note=f3 ;; 5) note=fs3 ;; t) note=g3 ;;
		6) note=gs3 ;; y) note=a3 ;; 7) note=as3 ;; u) note=b3 ;; i) note=c4 ;;
		9) note=cs4 ;; o) note=d4 ;; 0) note=ds4 ;; p) note=e4 ;; [) note=f4 ;;
		=) note=fs4 ;; ]) note=g4 ;;
	esac

	# Spacebar (or enter) activates menu options

	if [ "$key" = '' ]; then
		echo "1 - play"
		echo "2 - add half-notes"
		echo "3 - add quarter-notes"
		echo "4 - add eighth-notes"
		echo "5 - play with beat"
		echo "6 - record lead"
		echo -n "> "
		read -n1 character
		if [ "$character" = "1" ]; then
			play song.wav
		elif [ "$character" = "2" ]; then
    			len=h
			echo ""
			echo "Inserting half-notes..."
		elif [ "$character" = "3" ]; then
    			len=q
			echo ""
			echo "Inserting quarter-notes..."
		elif [ "$character" = "4" ]; then
			len=e
			echo ""
			echo "Inserting eighth-notes..."
		elif [ "$character" = "5" ]; then
			./seq.sh
		elif [ "$character" = "6" ]; then
    			mv song.wav bass.wav
			sox -n -c 1 song.wav trim 0.0 0.0	
			synth=s
			echo ""
			echo "Bassline saved! Recording lead..."
		else
    			echo "Invalid selection..."
		fi
	else
		if [ "$note" = "r" ]; then
			echo ""
			echo "Rest inserted."    	
		else
		./note.sh $note $synth
		fi
		
		sox song.wav "$note""$synth""$len".wav song2.wav
		mv song2.wav song.wav
		play "$note""$synth""$len".wav &>/dev/null &
	fi
done
