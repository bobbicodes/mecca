#!/bin/bash
while true; do
	echo "Synth ready..."
	read -n1 key

	case $key in
		z)
			play c2_quarter.wav
			;;
		s)
			play csharp2_quarter.wav
			;;
		x)
			play d2_quarter.wav
			;;
		d)
			play dsharp2_quarter.wav
			;;
		c)
			play e2_quarter.wav
			;;
		v)
			play f2_quarter.wav
			;;
		g)
			play fsharp2_quarter.wav
			;;
		b)
			play g2_quarter.wav
			;;
		h)
			play gsharp2_quarter.wav
			;;
		n)
			play a2_quarter.wav
			;;
		j)
			play asharp2_quarter.wav
			;;
		m)
			play b2_quarter.wav
			;;
		,)
			play c3_quarter.wav
			;;
		l)
			play csharp3_quarter.wav
			;;
		.)
			play d3_quarter.wav
			;;
		\;)
			play dsharp3_quarter.wav
			;;
		/)
			play e3_quarter.wav
			;;
		q)
			play c3_quarter.wav
        ;;
		2)
			play csharp3_quarter.wav
  		    ;;
		w)
			play d3_quarter.wav
	 		;;
		3)
			play dsharp3_quarter.wav
  	      ;;
		e)
			play e3_quarter.wav
		    ;;
		r)
			play f3_quarter.wav
		    ;;
		5)
			play fsharp3_quarter.wav
			;;
		t)
			play g3_quarter.wav
  	      ;;
		6)
			play gsharp3_quarter.wav
  	      ;;
		y)
			play a3_quarter.wav
  	      ;;
		7)
			play asharp3_quarter.wav
  	      ;;
		u)
			play b3_quarter.wav
  	      ;;
		i)
			play c3_quarter.wav
  	      ;;
	esac
done
