#!/bin/bash

echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo "z x c v b n m , . /"

while true; do

	read -n1 key
	

	# set note var according to key pressed

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

	# Append note to song

	./makeh.sh $note
	sox song.wav "$note"h.wav song2.wav
	rm song.wav
	mv song2.wav song.wav
	play "$note"h.wav &>/dev/null &

	
	case $key in
		'') play song.wav ;;

		z)
			
			echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "\e[7mz\e[27m x c v b n m , . /"
		 ;;
		s) play -n synth 0.3 square 69.3 &>/dev/null &
			echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " \e[7ms\e[27m d   g h j   l ; '"
	echo "z x c v b n m , . /"
	;;
		x) play -n synth 0.3 square 73.42 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "z \e[7mx\e[27m c v b n m , . /"
;;
		d) play -n synth 0.3 square 77.78 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s \e[7md\e[27m   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		c) play -n synth 0.3 square 82.41 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "z x \e[7mc\e[27m v b n m , . /"
 ;;
		v) play -n synth 0.3 square 87.31 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "z x c \e[7mv\e[27m b n m , . /"
;;
		g) play -n synth 0.3 square 92.5 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   \e[7mg\e[27m h j   l ; '"
	echo "z x c v b n m , . /"
;;
		b) play -n synth 0.3 square 98 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "z x c v \e[7mb\e[27m n m , . /"
;;
		h) play -n synth 0.3 square 103.83 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g \e[7mh\e[27m j   l ; '"
	echo "z x c v b n m , . /"
;;
		n) play -n synth 0.3 square 110 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "z x c v b \e[7mn\e[27m m , . /"
;;
		j) play -n synth 0.3 square 116.54 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h \e[7mj\e[27m   l ; "
	echo "z x c v b n m , . /"
;;
		m) play -n synth 0.3 square 123.47 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "z x c v b n \e[7mm\e[27m , . /"
;;
		,) play -n synth 0.3 square 130.81 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "z x c v b n m \e[7m,\e[27m . /"
;;
		l) play -n synth 0.3 square 138.59 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   \e[7ml\e[27m ; '"
	echo "z x c v b n m , . /"
;;
		.) play -n synth 0.3 square 146.83 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "z x c v b n m , \e[7m.\e[27m /"
;;
		\;) play -n synth 0.3 square 155.56 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   l \e[7m;\e[27m '"
	echo "z x c v b n m , . /"
;;
		/) play -n synth 0.3 square 164.81 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo " s d   g h j   l ; '"
	echo -e "z x c v b n m , . \e[7m/\e[27m"
;;
		
		q) play -n synth 0.3 square 130.81 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "\e[7mq\e[27m w e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		2) play -n synth 0.3 square 138.59 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo -e " \e[7m2\e[27m 3   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		w) play -n synth 0.3 square 146.83 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q \e[7mw\e[27m e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		3) play -n synth 0.3 square 155.56 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo -e " 2 \e[7m3\e[27m   5 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		e) play -n synth 0.3 square 164.81 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w \e[7me\e[27m r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		r) play -n synth 0.3 square 174.61 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w e \e[7mr\e[27m t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		5) play -n synth 0.3 square 185 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo -e " 2 3   \e[7m5\e[27m 6 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		t) play -n synth 0.3 square 196 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w e r \e[7mt\e[27m y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		6) play -n synth 0.3 square 207.65 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo -e " 2 3   5 \e[7m6\e[27m 7   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		y) play -n synth 0.3 square 220 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w e r t \e[7my\e[27m u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		7) play -n synth 0.3 square 233.08 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo -e " 2 3   5 6 \e[7m7\e[27m   9 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		u) play -n synth 0.3 square 246.94 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w e r t y \e[7mu\e[27m i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		i) play -n synth 0.3 square 261.63 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w e r t y u \e[7mi\e[27m o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		9) play -n synth 0.3 square 277.18 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo -e " 2 3   5 6 7   \e[7m9\e[27m 0   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		o) play -n synth 0.3 square 293.66 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w e r t y u i \e[7mo\e[27m p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		0) play -n synth 0.3 square 311.13 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo -e " 2 3   5 6 7   9 \e[7m0\e[27m   ="
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		p) play -n synth 0.3 square 329.63 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w e r t y u i o \e[7mp\e[27m [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		[) play -n synth 0.3 square 349.23 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w e r t y u i o p \e[7m[\e[27m ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		=) play -n synth 0.3 square 369.99 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo -e " 2 3   5 6 7   9 0   \e[7m=\e[27m"
	echo "q w e r t y u i o p [ ]"
	echo -e " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
		]) play -n synth 0.3 square 392 &>/dev/null &
echo "Synth ready..."
	echo ""
	echo " 2 3   5 6 7   9 0   ="
	echo -e "q w e r t y u i o p [ \e[7m]\e[27m"
	echo " s d   g h j   l ; '"
	echo "z x c v b n m , . /"
;;
	esac
done
