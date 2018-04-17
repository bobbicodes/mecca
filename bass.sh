#!/bin/bash

# Generate note samples

sox -n c2_half.wav synth 0.5 tri 65.41 fade 0 0.7 0.25 trim 0 0.5
sox c2_half.wav c2_quarter.wav trim 0.25 0.5
sox c2_half.wav c2_eighth.wav trim 0.375 0.5
sox c2_eighth.wav c2_eighth.wav c2_double_eighth.wav splice 0.125
sox c2_quarter.wav c2_double_eighth.wav mmc2.wav splice 0.25
sox mmc2.wav mmc2.wav mmc2-2.wav splice 0.5
sox mmc2-2.wav mmc2-2.wav mmc2-4.wav splice 1

sox -n csharp2_half.wav synth 0.5 tri 69.3 fade 0 0.7 0.25 trim 0 0.5
sox csharp2_half.wav csharp2_quarter.wav trim 0.25 0.5
sox csharp2_half.wav csharp2_eighth.wav trim 0.375 0.5
sox csharp2_eighth.wav csharp2_eighth.wav csharp2_double_eighth.wav splice 0.125
sox csharp2_quarter.wav csharp2_double_eighth.wav mmcsharp2.wav splice 0.25
sox mmcsharp2.wav mmcsharp2.wav mmcsharp2-2.wav splice 0.5
sox mmcsharp2-2.wav mmcsharp2-2.wav mmcsharp2-4.wav splice 1

sox -n d2_half.wav synth 0.5 tri 73.42 fade 0 0.7 0.25 trim 0 0.5
sox d2_half.wav d2_quarter.wav trim 0.25 0.5
sox d2_half.wav d2_eighth.wav trim 0.375 0.5
sox d2_eighth.wav d2_eighth.wav d2_double_eighth.wav splice 0.125
sox d2_quarter.wav d2_double_eighth.wav mmd2.wav splice 0.25
sox mmd2.wav mmd2.wav mmd2-2.wav splice 0.5
sox mmd2-2.wav mmd2-2.wav mmd2-4.wav splice 1

sox -n dsharp2_half.wav synth 0.5 tri 77.78 fade 0 0.7 0.25 trim 0 0.5
sox dsharp2_half.wav dsharp2_quarter.wav trim 0.25 0.5
sox dsharp2_half.wav dsharp2_eighth.wav trim 0.375 0.5
sox dsharp2_eighth.wav dsharp2_eighth.wav dsharp2_double_eighth.wav splice 0.125
sox dsharp2_quarter.wav dsharp2_double_eighth.wav mmdsharp3.wav splice 0.25
sox mmdsharp2.wav mmdsharp2.wav mmdsharp2-2.wav splice 0.5
sox mmdsharp2-2.wav mmdsharp2-2.wav mmdsharp2-4.wav splice 1

sox -n e2_half.wav synth 0.5 tri 82.41 fade 0 0.7 0.25 trim 0 0.5
sox e2_half.wav e2_quarter.wav trim 0.25 0.5
sox e2_half.wav e2_eighth.wav trim 0.375 0.5
sox e2_eighth.wav e2_eighth.wav e2_double_eighth.wav splice 0.125
sox e2_quarter.wav e2_double_eighth.wav mme2.wav splice 0.25
sox mme2.wav mme2.wav mme2-2.wav splice 0.5
sox mme2-2.wav mme2-2.wav mme2-4.wav splice 1

sox -n f2_half.wav synth 0.5 tri 87.31 fade 0 0.7 0.25 trim 0 0.5
sox f2_half.wav f2_quarter.wav trim 0.25 0.5
sox f2_half.wav f2_eighth.wav trim 0.375 0.5
sox f2_eighth.wav f2_eighth.wav f2_double_eighth.wav splice 0.125
sox f2_quarter.wav f2_double_eighth.wav mmf2.wav splice 0.25
sox mmf2.wav mmf2.wav mmf2-2.wav splice 0.5
sox mmf2-2.wav mmf2-2.wav mmf2-4.wav splice 1

sox -n fsharp2_half.wav synth 0.5 tri 92.5 fade 0 0.7 0.25 trim 0 0.5
sox fsharp2_half.wav fsharp2_quarter.wav trim 0.25 0.5
sox fsharp2_half.wav fsharp2_eighth.wav trim 0.375 0.5
sox fsharp2_eighth.wav fsharp2_eighth.wav fsharp2_double_eighth.wav splice 0.125
sox fsharp2_quarter.wav fsharp2_double_eighth.wav mmfsharp2.wav splice 0.25
sox mmfsharp2.wav mmfsharp2.wav mmfsharp2-2.wav splice 0.5
sox mmfsharp2-2.wav mmfsharp2-2.wav mmfsharp2-4.wav splice 1

sox -n g2_half.wav synth 0.5 tri 98 fade 0 0.7 0.25 trim 0 0.5
sox g2_half.wav g2_quarter.wav trim 0.25 0.5
sox g2_half.wav g2_eighth.wav trim 0.375 0.5
sox g2_eighth.wav g2_eighth.wav g2_double_eighth.wav splice 0.125
sox g2_quarter.wav g2_double_eighth.wav mmg2.wav splice 0.25
sox mmg2.wav mmg2.wav mmg2-2.wav splice 0.5
sox mmg2-2.wav mmg2-2.wav mmg2-4.wav splice 1

sox -n gsharp2_half.wav synth 0.5 tri 103.83 fade 0 0.7 0.25 trim 0 0.5
sox gsharp2_half.wav gsharp2_quarter.wav trim 0.25 0.5
sox gsharp2_half.wav gsharp2_eighth.wav trim 0.375 0.5
sox gsharp2_eighth.wav gsharp2_eighth.wav gsharp2_double_eighth.wav splice 0.125
sox gsharp2_quarter.wav gsharp2_double_eighth.wav mmgsharp2.wav splice 0.25
sox mmgsharp2.wav mmgsharp2.wav mmgsharp2-2.wav splice 0.5
sox mmgsharp2-2.wav mmgsharp2-2.wav mmgsharp2-4.wav splice 1

sox -n a2_half.wav synth 0.5 tri 110 fade 0 0.7 0.25 trim 0 0.5
sox a2_half.wav a2_quarter.wav trim 0.25 0.5
sox a2_half.wav a2_eighth.wav trim 0.375 0.5
sox a2_eighth.wav a2_eighth.wav a2_double_eighth.wav splice 0.125
sox a2_quarter.wav a2_double_eighth.wav mma2.wav splice 0.25
sox mma2.wav mma2.wav mma2-2.wav splice 0.5
sox mma2-2.wav mma2-2.wav mma2-4.wav splice 1

sox -n asharp2_half.wav synth 0.5 tri 116.54 fade 0 0.7 0.25 trim 0 0.5
sox asharp2_half.wav asharp2_quarter.wav trim 0.25 0.5
sox asharp2_half.wav asharp2_eighth.wav trim 0.375 0.5
sox asharp2_eighth.wav asharp2_eighth.wav asharp2_double_eighth.wav splice 0.125
sox asharp2_quarter.wav asharp2_double_eighth.wav mmasharp2.wav splice 0.25
sox mmasharp2.wav mmasharp2.wav mmasharp2-2.wav splice 0.5
sox mmasharp2-2.wav mmasharp2-2.wav mmasharp2-4.wav splice 1

sox -n b2_half.wav synth 0.5 tri 123.47 fade 0 0.7 0.25 trim 0 0.5
sox b2_half.wav b2_quarter.wav trim 0.25 0.5
sox b2_half.wav b2_eighth.wav trim 0.375 0.5
sox b2_eighth.wav b2_eighth.wav b2_double_eighth.wav splice 0.125
sox b2_quarter.wav b2_double_eighth.wav mmb2.wav splice 0.25
sox mmb2.wav mmb2.wav mmb2-2.wav splice 0.5
sox mmb2-2.wav mmb2-2.wav mmb2-4.wav splice 1

sox -n c3_half.wav synth 0.5 tri 130.81 fade 0 0.7 0.25 trim 0 0.5
sox c3_half.wav c3_quarter.wav trim 0.25 0.5
sox c3_half.wav c3_eighth.wav trim 0.375 0.5
sox c3_eighth.wav c3_eighth.wav c3_double_eighth.wav splice 0.125
sox c3_quarter.wav c3_double_eighth.wav mmc3.wav splice 0.25
sox mmc3.wav mmc3.wav mmc3-2.wav splice 0.5
sox mmc3-2.wav mmc3-2.wav mmc3-4.wav splice 1

sox -n csharp3_half.wav synth 0.5 tri 138.59 fade 0 0.7 0.25 trim 0 0.5
sox csharp3_half.wav csharp3_quarter.wav trim 0.25 0.5
sox csharp3_half.wav csharp3_eighth.wav trim 0.375 0.5
sox csharp3_eighth.wav csharp3_eighth.wav csharp3_double_eighth.wav splice 0.125
sox csharp3_quarter.wav csharp3_double_eighth.wav mmcsharp3.wav splice 0.25
sox mmcsharp3.wav mmcsharp3.wav mmcsharp3-2.wav splice 0.5
sox mmcsharp3-2.wav mmcsharp3-2.wav mmcsharp3-4.wav splice 1

sox -n d3_half.wav synth 0.5 tri 146.83 fade 0 0.7 0.25 trim 0 0.5
sox d3_half.wav d3_quarter.wav trim 0.25 0.5
sox d3_half.wav d3_eighth.wav trim 0.375 0.5
sox d3_eighth.wav d3_eighth.wav d3_double_eighth.wav splice 0.125
sox d3_quarter.wav d3_double_eighth.wav mmd3.wav splice 0.25
sox mmd3.wav mmd3.wav mmd3-2.wav splice 0.5
sox mmd3-2.wav mmd3-2.wav mmd3-4.wav splice 1

sox -n dsharp3_half.wav synth 0.5 tri 155.56 fade 0 0.7 0.25 trim 0 0.5
sox dsharp3_half.wav dsharp3_quarter.wav trim 0.25 0.5
sox dsharp3_half.wav dsharp3_eighth.wav trim 0.375 0.5
sox dsharp3_eighth.wav dsharp3_eighth.wav dsharp3_double_eighth.wav splice 0.125
sox dsharp3_quarter.wav dsharp3_double_eighth.wav mmdsharp3.wav splice 0.25
sox mmdsharp3.wav mmdsharp3.wav mmdsharp3-2.wav splice 0.5
sox mmdsharp3-2.wav mmdsharp3-2.wav mmdsharp3-4.wav splice 1

sox -n e3_half.wav synth 0.5 tri 164.81 fade 0 0.7 0.25 trim 0 0.5
sox e3_half.wav e3_quarter.wav trim 0.25 0.5
sox e3_half.wav e3_eighth.wav trim 0.375 0.5
sox e3_eighth.wav e3_eighth.wav e3_double_eighth.wav splice 0.125
sox e3_quarter.wav e3_double_eighth.wav mme3.wav splice 0.25
sox mme3.wav mme3.wav mme3-2.wav splice 0.5
sox mme3-2.wav mme3-2.wav mme3-4.wav splice 1

sox -n f3_half.wav synth 0.5 tri 174.61 fade 0 0.7 0.25 trim 0 0.5
sox f3_half.wav f3_quarter.wav trim 0.25 0.5
sox f3_half.wav f3_eighth.wav trim 0.375 0.5
sox f3_eighth.wav f3_eighth.wav f3_double_eighth.wav splice 0.125
sox f3_quarter.wav f3_double_eighth.wav mmf3.wav splice 0.25
sox mmf3.wav mmf3.wav mmf3-2.wav splice 0.5
sox mmf3-2.wav mmf3-2.wav mmf3-4.wav splice 1

sox -n fsharp3_half.wav synth 0.5 tri 185 fade 0 0.7 0.25 trim 0 0.5
sox fsharp3_half.wav fsharp3_quarter.wav trim 0.25 0.5
sox fsharp3_half.wav fsharp3_eighth.wav trim 0.375 0.5
sox fsharp3_eighth.wav fsharp3_eighth.wav fsharp3_double_eighth.wav splice 0.125
sox fsharp3_quarter.wav fsharp3_double_eighth.wav mmfsharp3.wav splice 0.25
sox mmfsharp3.wav mmfsharp3.wav mmfsharp3-2.wav splice 0.5
sox mmfsharp3-2.wav mmfsharp3-2.wav mmfsharp3-4.wav splice 1

sox -n g3_half.wav synth 0.5 tri 196 fade 0 0.7 0.25 trim 0 0.5
sox g3_half.wav g3_quarter.wav trim 0.25 0.5
sox g3_half.wav g3_eighth.wav trim 0.375 0.5
sox g3_eighth.wav g3_eighth.wav g3_double_eighth.wav splice 0.125
sox g3_quarter.wav g3_double_eighth.wav mmg3.wav splice 0.25
sox mmg3.wav mmg3.wav mmg3-2.wav splice 0.5
sox mmg3-2.wav mmg3-2.wav mmg3-4.wav splice 1

sox -n gsharp3_half.wav synth 0.5 tri 207.65 fade 0 0.7 0.25 trim 0 0.5
sox gsharp3_half.wav gsharp3_quarter.wav trim 0.25 0.5
sox gsharp3_half.wav gsharp3_eighth.wav trim 0.375 0.5
sox gsharp3_eighth.wav gsharp3_eighth.wav gsharp3_double_eighth.wav splice 0.125
sox gsharp3_quarter.wav gsharp3_double_eighth.wav mmgsharp3.wav splice 0.25
sox mmgsharp3.wav mmgsharp3.wav mmgsharp3-2.wav splice 0.5
sox mmgsharp3-2.wav mmgsharp3-2.wav mmgsharp3-4.wav splice 1

sox -n a3_half.wav synth 0.5 tri 220 fade 0 0.7 0.25 trim 0 0.5
sox a3_half.wav a3_quarter.wav trim 0.25 0.5
sox a3_half.wav a3_eighth.wav trim 0.375 0.5
sox a3_eighth.wav a3_eighth.wav a3_double_eighth.wav splice 0.125
sox a3_quarter.wav a3_double_eighth.wav mma3.wav splice 0.25
sox mma3.wav mma3.wav mma3-2.wav splice 0.5
sox mma3-2.wav mma3-2.wav mma3-4.wav splice 1

sox -n asharp3_half.wav synth 0.5 tri 233.08 fade 0 0.7 0.25 trim 0 0.5
sox asharp3_half.wav asharp3_quarter.wav trim 0.25 0.5
sox asharp3_half.wav asharp3_eighth.wav trim 0.375 0.5
sox asharp3_eighth.wav asharp3_eighth.wav asharp3_double_eighth.wav splice 0.125
sox asharp3_quarter.wav asharp3_double_eighth.wav mmasharp3.wav splice 0.25
sox mmasharp3.wav mmasharp3.wav mmasharp3-2.wav splice 0.5
sox mmasharp3-2.wav mmasharp3-2.wav mmasharp3-4.wav splice 1

sox -n b3_half.wav synth 0.5 tri 246.94 fade 0 0.7 0.25 trim 0 0.5
sox b3_half.wav b3_quarter.wav trim 0.25 0.5
sox b3_half.wav b3_eighth.wav trim 0.375 0.5
sox b3_eighth.wav b3_eighth.wav b3_double_eighth.wav splice 0.125
sox b3_quarter.wav b3_double_eighth.wav mmb3.wav splice 0.25
sox mmb3.wav mmb3.wav mmb3-2.wav splice 0.5
sox mmb3-2.wav mmb3-2.wav mmb3-4.wav splice 1
