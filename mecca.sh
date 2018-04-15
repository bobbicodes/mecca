# A - 110hz

sox -n 6-2.wav synth 0.5 tri 110
sox 6-2.wav 6-2f.wav fade 0 0.7 0.25
sox 6-2f.wav 6-2.wav trim 0 0.5
sox 6-2.wav 6-8.wav trim 0.37 0.5
sox 6-8.wav 6-8.wav 6-88.wav splice 0.2
sox 6-2.wav 6-4.wav trim 0.25 0.5

sox 6-4.wav 6-88.wav 6-mm.wav splice 0.25
sox 6-mm.wav 6-mm.wav 6-mm2.wav splice 0.5
sox 6-mm2.wav 6-mm2.wav 6-mm4.wav splice 0.5
