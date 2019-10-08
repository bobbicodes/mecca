(ns mecca.score
  (:require [tubax.core :refer [xml->clj]]))

(def zelda "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<!DOCTYPE score-partwise PUBLIC \"-//Recordare//DTD MusicXML 3.1 Partwise//EN\" \"http://www.musicxml.org/dtds/partwise.dtd\">
<score-partwise version=\"3.1\">
  <identification>
    <encoding>
      <software>MuseScore 3.0.5</software>
      <encoding-date>2019-04-12</encoding-date>
      <supports element=\"accidental\" type=\"yes\"/>
      <supports element=\"beam\" type=\"yes\"/>
      <supports element=\"print\" attribute=\"new-page\" type=\"yes\" value=\"yes\"/>
      <supports element=\"print\" attribute=\"new-system\" type=\"yes\" value=\"yes\"/>
      <supports element=\"stem\" type=\"yes\"/>
      </encoding>
    </identification>
  <defaults>
    <scaling>
      <millimeters>7.05556</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1683.36</page-height>
      <page-width>1190.88</page-width>
      <page-margins type=\"even\">
        <left-margin>56.6929</left-margin>
        <right-margin>56.6929</right-margin>
        <top-margin>56.6929</top-margin>
        <bottom-margin>113.386</bottom-margin>
        </page-margins>
      <page-margins type=\"odd\">
        <left-margin>56.6929</left-margin>
        <right-margin>56.6929</right-margin>
        <top-margin>56.6929</top-margin>
        <bottom-margin>113.386</bottom-margin>
        </page-margins>
      </page-layout>
    <word-font font-family=\"FreeSerif\" font-size=\"10\"/>
    <lyric-font font-family=\"FreeSerif\" font-size=\"11\"/>
    </defaults>
  <credit page=\"1\">
    <credit-words default-x=\"595.44\" default-y=\"1626.67\" justify=\"center\" valign=\"top\" font-size=\"24\">Zelda</credit-words>
    </credit>
  <credit page=\"1\">
    <credit-words default-x=\"595.44\" default-y=\"1569.97\" justify=\"center\" valign=\"top\" font-size=\"14\">Main Theme</credit-words>
    </credit>
  <credit page=\"1\">
    <credit-words default-x=\"56.6929\" default-y=\"1626.67\" justify=\"left\" valign=\"top\" font-size=\"18\">Piano</credit-words>
    </credit>
  <credit page=\"1\">
    <credit-words default-x=\"1134.19\" default-y=\"1526.67\" justify=\"right\" valign=\"bottom\" font-size=\"12\">Composer: Koji Kondo
</credit-words>
    <credit-words>Arranger The Blue Notes
</credit-words>
    </credit>
  <part-list>
    <score-part id=\"P1\">
      <part-name>Piano</part-name>
      <part-abbreviation>Pno.</part-abbreviation>
      <score-instrument id=\"P1-I1\">
        <instrument-name>Piano</instrument-name>
        </score-instrument>
      <midi-device id=\"P1-I1\" port=\"1\"></midi-device>
      <midi-instrument id=\"P1-I1\">
        <midi-channel>3</midi-channel>
        <midi-program>1</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id=\"P1\">
    <measure number=\"1\" width=\"237.31\">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>-0.00</right-margin>
            </system-margins>
          <top-system-distance>170.00</top-system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <attributes>
        <divisions>12</divisions>
        <key>
          <fifths>-2</fifths>
          </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <staves>2</staves>
        <clef number=\"1\">
          <sign>G</sign>
          <line>2</line>
          </clef>
        <clef number=\"2\">
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement=\"above\">
        <direction-type>
          <metronome parentheses=\"no\" default-x=\"-36.32\" relative-y=\"20.00\">
            <beat-unit>quarter</beat-unit>
            <per-minute>90</per-minute>
            </metronome>
          </direction-type>
        <staff>1</staff>
        <sound tempo=\"90\"/>
        </direction>
      <note default-x=\"111.57\" default-y=\"-20.00\" dynamics=\"77.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"163.86\" default-y=\"-20.00\" dynamics=\"77.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"180.09\" default-y=\"-35.00\" dynamics=\"68.89\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"196.32\" default-y=\"-35.00\" dynamics=\"68.89\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"212.54\" default-y=\"-20.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"111.93\" default-y=\"-135.00\" dynamics=\"66.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"137.89\" default-y=\"-115.00\" dynamics=\"66.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"163.50\" default-y=\"-100.00\" dynamics=\"66.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"2\" width=\"155.56\">
      <note default-x=\"16.27\" default-y=\"-25.00\" dynamics=\"68.89\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"45.20\" default-y=\"-30.00\" dynamics=\"74.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"60.87\" default-y=\"-25.00\" dynamics=\"84.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"114.11\" default-y=\"-25.00\" dynamics=\"84.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-140.00\" dynamics=\"66.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"83.44\" default-y=\"-120.00\" dynamics=\"66.67\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"114.11\" default-y=\"-105.00\" dynamics=\"66.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"3\" width=\"189.42\">
      <note default-x=\"15.91\" default-y=\"-20.00\" dynamics=\"83.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"89.77\" default-y=\"-20.00\" dynamics=\"83.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"118.71\" default-y=\"-30.00\" dynamics=\"76.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"141.68\" default-y=\"-30.00\" dynamics=\"83.33\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"164.65\" default-y=\"-20.00\" dynamics=\"81.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-145.00\" dynamics=\"66.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"53.02\" default-y=\"-125.00\" dynamics=\"66.67\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"89.41\" default-y=\"-110.00\" dynamics=\"66.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"4\" width=\"117.45\">
      <note default-x=\"10.00\" default-y=\"-25.00\" dynamics=\"87.78\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"25.67\" default-y=\"-30.00\" dynamics=\"87.78\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"41.33\" default-y=\"-25.00\" dynamics=\"75.56\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"83.87\" default-y=\"-25.00\" dynamics=\"75.56\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-150.00\" dynamics=\"66.67\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"59.40\" default-y=\"-130.00\" dynamics=\"66.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"83.87\" default-y=\"-115.00\" dynamics=\"66.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"5\" width=\"178.38\">
      <note default-x=\"15.91\" default-y=\"-45.00\" dynamics=\"93.33\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note>
        <rest/>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-135.00\" dynamics=\"74.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"35.89\" default-y=\"-115.00\" dynamics=\"77.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"55.51\" default-y=\"-100.00\" dynamics=\"74.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"75.13\" default-y=\"-115.00\" dynamics=\"63.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"94.75\" default-y=\"-100.00\" dynamics=\"77.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"114.37\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"133.99\" default-y=\"-100.00\" dynamics=\"97.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"153.61\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      </measure>
    <measure number=\"6\" width=\"178.38\">
      <note default-x=\"15.91\" default-y=\"-45.00\" dynamics=\"90.00\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note>
        <rest/>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x=\"16.27\" default-y=\"-135.00\" dynamics=\"58.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"35.89\" default-y=\"-115.00\" dynamics=\"82.22\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"55.51\" default-y=\"-100.00\" dynamics=\"74.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"75.13\" default-y=\"-115.00\" dynamics=\"77.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"94.75\" default-y=\"-100.00\" dynamics=\"74.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"114.37\" default-y=\"-115.00\" dynamics=\"62.22\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"133.99\" default-y=\"-100.00\" dynamics=\"82.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"153.61\" default-y=\"-115.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"7\" width=\"321.34\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>137.07</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <barline location=\"left\">
        <bar-style>heavy-light</bar-style>
        <repeat direction=\"forward\"/>
        </barline>
      <note default-x=\"118.84\" default-y=\"-20.00\" dynamics=\"100.00\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"162.42\" default-y=\"-35.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"206.00\" default-y=\"-35.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"227.79\" default-y=\"-20.00\" dynamics=\"104.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"249.58\" default-y=\"-20.00\" dynamics=\"98.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"265.24\" default-y=\"-15.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"280.91\" default-y=\"-10.00\" dynamics=\"86.67\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"296.58\" default-y=\"-5.00\" dynamics=\"85.56\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"118.84\" default-y=\"-135.00\" dynamics=\"81.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"140.63\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"162.42\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"184.21\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"206.00\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"227.79\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"249.58\" default-y=\"-100.00\" dynamics=\"92.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"280.91\" default-y=\"-115.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"8\" width=\"248.80\">
      <note default-x=\"16.27\" default-y=\"0.00\" dynamics=\"103.33\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"41.73\" default-y=\"-55.00\" dynamics=\"88.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"70.67\" default-y=\"-55.00\" dynamics=\"98.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"93.93\" default-y=\"-50.00\" dynamics=\"98.89\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"113.40\" default-y=\"-45.00\" dynamics=\"103.33\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"129.32\" default-y=\"-40.00\" dynamics=\"105.56\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"144.98\" default-y=\"-35.00\" dynamics=\"87.78\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-140.00\" dynamics=\"76.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"41.73\" default-y=\"-120.00\" dynamics=\"83.33\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"70.67\" default-y=\"-105.00\" dynamics=\"82.22\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"113.40\" default-y=\"-120.00\" dynamics=\"76.67\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"145.34\" default-y=\"-105.00\" dynamics=\"92.22\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"170.81\" default-y=\"-120.00\" dynamics=\"73.33\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"196.27\" default-y=\"-105.00\" dynamics=\"105.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"221.74\" default-y=\"-120.00\" dynamics=\"82.22\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"9\" width=\"250.61\">
      <note default-x=\"16.27\" default-y=\"-20.00\" dynamics=\"88.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"74.14\" default-y=\"-35.00\" dynamics=\"95.56\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"125.78\" default-y=\"-35.00\" dynamics=\"95.56\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"151.61\" default-y=\"-20.00\" dynamics=\"95.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"177.43\" default-y=\"-20.00\" dynamics=\"103.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"193.57\" default-y=\"-15.00\" dynamics=\"97.78\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"209.71\" default-y=\"-10.00\" dynamics=\"87.78\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"225.85\" default-y=\"-5.00\" dynamics=\"95.56\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-145.00\" dynamics=\"86.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"45.20\" default-y=\"-125.00\" dynamics=\"75.56\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"74.14\" default-y=\"-110.00\" dynamics=\"76.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"99.96\" default-y=\"-125.00\" dynamics=\"67.78\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"125.78\" default-y=\"-110.00\" dynamics=\"76.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"151.61\" default-y=\"-125.00\" dynamics=\"58.89\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"177.43\" default-y=\"-110.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"209.71\" default-y=\"-125.00\" dynamics=\"76.67\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"10\" width=\"235.73\">
      <note default-x=\"10.00\" default-y=\"0.00\" dynamics=\"87.78\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"34.95\" default-y=\"-55.00\" dynamics=\"87.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"59.90\" default-y=\"-55.00\" dynamics=\"91.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"83.17\" default-y=\"-50.00\" dynamics=\"85.56\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"102.63\" default-y=\"-45.00\" dynamics=\"88.89\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"118.30\" default-y=\"-40.00\" dynamics=\"92.22\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"133.97\" default-y=\"-35.00\" dynamics=\"101.11\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-150.00\" dynamics=\"55.56\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"34.95\" default-y=\"-130.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"59.90\" default-y=\"-115.00\" dynamics=\"90.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"102.63\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"134.33\" default-y=\"-115.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"159.28\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"184.23\" default-y=\"-115.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"209.18\" default-y=\"-130.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"11\" width=\"396.20\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>137.07</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"90.47\" default-y=\"-45.00\" dynamics=\"86.67\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"90.47\" default-y=\"-20.00\" dynamics=\"103.33\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"149.17\" default-y=\"-45.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"149.17\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"178.00\" default-y=\"-45.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"178.00\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"209.33\" default-y=\"-50.00\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"209.33\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"238.15\" default-y=\"-45.00\" dynamics=\"104.44\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"238.15\" default-y=\"-35.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"267.50\" default-y=\"-20.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"290.14\" default-y=\"-45.00\" dynamics=\"87.78\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"290.14\" default-y=\"-20.00\" dynamics=\"86.67\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"310.46\" default-y=\"-45.00\" dynamics=\"97.78\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"310.46\" default-y=\"-20.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"330.79\" default-y=\"-40.00\" dynamics=\"94.44\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"330.79\" default-y=\"-15.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"351.11\" default-y=\"-35.00\" dynamics=\"93.33\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"351.11\" default-y=\"-10.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"371.43\" default-y=\"-30.00\" dynamics=\"97.78\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"371.43\" default-y=\"-5.00\" dynamics=\"86.67\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"90.47\" default-y=\"-135.00\" dynamics=\"74.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"119.82\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"149.17\" default-y=\"-100.00\" dynamics=\"72.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"193.66\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"238.15\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"267.50\" default-y=\"-115.00\" dynamics=\"82.22\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"310.46\" default-y=\"-100.00\" dynamics=\"105.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"351.11\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"12\" width=\"297.97\">
      <note default-x=\"16.27\" default-y=\"-25.00\" dynamics=\"88.89\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"16.27\" default-y=\"0.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"62.79\" default-y=\"-20.00\" dynamics=\"103.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"81.82\" default-y=\"-20.00\" dynamics=\"103.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"100.86\" default-y=\"-15.00\" dynamics=\"95.56\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"119.89\" default-y=\"-10.00\" dynamics=\"101.11\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"138.93\" default-y=\"-5.00\" dynamics=\"103.33\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"157.96\" default-y=\"0.00\" dynamics=\"85.56\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"185.45\" default-y=\"0.00\" dynamics=\"95.56\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"212.93\" default-y=\"-25.00\" dynamics=\"87.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"212.93\" default-y=\"0.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"241.87\" default-y=\"-20.00\" dynamics=\"92.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"241.87\" default-y=\"5.00\" dynamics=\"86.67\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"273.20\" default-y=\"-15.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"273.20\" default-y=\"10.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-140.00\" dynamics=\"81.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"43.76\" default-y=\"-120.00\" dynamics=\"83.33\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"81.82\" default-y=\"-105.00\" dynamics=\"81.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"119.89\" default-y=\"-120.00\" dynamics=\"77.78\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"157.96\" default-y=\"-105.00\" dynamics=\"84.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"185.45\" default-y=\"-120.00\" dynamics=\"81.11\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"212.93\" default-y=\"-105.00\" dynamics=\"97.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"257.53\" default-y=\"-120.00\" dynamics=\"80.00\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"13\" width=\"362.33\">
      <note default-x=\"16.27\" default-y=\"-10.00\" dynamics=\"101.11\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"16.27\" default-y=\"15.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"71.66\" default-y=\"-30.00\" dynamics=\"101.11\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"94.32\" default-y=\"-30.00\" dynamics=\"98.89\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"123.25\" default-y=\"-25.00\" dynamics=\"103.33\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"145.91\" default-y=\"-20.00\" dynamics=\"103.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"168.57\" default-y=\"-15.00\" dynamics=\"98.89\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"191.24\" default-y=\"-10.00\" dynamics=\"105.56\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"240.74\" default-y=\"-10.00\" dynamics=\"92.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"240.74\" default-y=\"15.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"267.57\" default-y=\"-10.00\" dynamics=\"104.44\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"267.57\" default-y=\"15.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"300.34\" default-y=\"-15.00\" dynamics=\"98.89\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"300.34\" default-y=\"10.00\" dynamics=\"91.11\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"333.89\" default-y=\"-20.00\" dynamics=\"102.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"333.89\" default-y=\"5.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-145.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"48.99\" default-y=\"-125.00\" dynamics=\"71.11\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"94.32\" default-y=\"-110.00\" dynamics=\"86.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"145.91\" default-y=\"-125.00\" dynamics=\"72.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"191.24\" default-y=\"-110.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"223.96\" default-y=\"-125.00\" dynamics=\"80.00\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"267.57\" default-y=\"-110.00\" dynamics=\"94.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"317.12\" default-y=\"-125.00\" dynamics=\"75.56\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"14\" width=\"466.35\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>137.07</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"108.78\" default-y=\"-10.00\" dynamics=\"98.89\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"108.78\" default-y=\"10.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"162.64\" default-y=\"-20.00\" dynamics=\"85.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"162.64\" default-y=\"5.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"191.85\" default-y=\"-25.00\" dynamics=\"105.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"191.85\" default-y=\"0.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"221.05\" default-y=\"-25.00\" dynamics=\"93.33\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"257.56\" default-y=\"-30.00\" dynamics=\"105.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"286.76\" default-y=\"-25.00\" dynamics=\"94.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"340.63\" default-y=\"-25.00\" dynamics=\"104.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"369.83\" default-y=\"-25.00\" dynamics=\"104.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"369.83\" default-y=\"0.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"399.04\" default-y=\"-30.00\" dynamics=\"85.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"435.54\" default-y=\"-25.00\" dynamics=\"97.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"108.78\" default-y=\"-160.00\" dynamics=\"92.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"144.39\" default-y=\"-140.00\" dynamics=\"73.33\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"191.85\" default-y=\"-125.00\" dynamics=\"77.78\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"239.31\" default-y=\"-140.00\" dynamics=\"67.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"286.76\" default-y=\"-125.00\" dynamics=\"86.67\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"322.38\" default-y=\"-140.00\" dynamics=\"71.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"369.83\" default-y=\"-125.00\" dynamics=\"94.44\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"417.29\" default-y=\"-140.00\" dynamics=\"86.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"15\" width=\"303.03\">
      <note default-x=\"16.27\" default-y=\"-30.00\" dynamics=\"88.89\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"16.27\" default-y=\"-5.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"47.62\" default-y=\"-30.00\" dynamics=\"93.33\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"47.62\" default-y=\"-5.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"67.21\" default-y=\"-35.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"67.21\" default-y=\"0.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"96.15\" default-y=\"-30.00\" dynamics=\"102.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"96.15\" default-y=\"5.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"127.50\" default-y=\"-30.00\" dynamics=\"85.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"156.43\" default-y=\"-25.00\" dynamics=\"95.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"176.03\" default-y=\"-20.00\" dynamics=\"103.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"238.73\" default-y=\"-25.00\" dynamics=\"96.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"238.73\" default-y=\"0.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"270.08\" default-y=\"-30.00\" dynamics=\"90.00\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"270.08\" default-y=\"-5.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-130.00\" dynamics=\"67.78\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"47.62\" default-y=\"-110.00\" dynamics=\"83.33\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"96.15\" default-y=\"-95.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"127.50\" default-y=\"-110.00\" dynamics=\"72.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"176.03\" default-y=\"-95.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"207.38\" default-y=\"-110.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"238.73\" default-y=\"-95.00\" dynamics=\"92.22\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"270.08\" default-y=\"-110.00\" dynamics=\"77.78\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"16\" width=\"287.11\">
      <note default-x=\"16.27\" default-y=\"-35.00\" dynamics=\"103.33\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"16.27\" default-y=\"-10.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"45.42\" default-y=\"-35.00\" dynamics=\"87.78\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"45.42\" default-y=\"-10.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"63.65\" default-y=\"-40.00\" dynamics=\"90.00\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"63.65\" default-y=\"-5.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"81.87\" default-y=\"-35.00\" dynamics=\"97.78\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"81.87\" default-y=\"0.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"111.02\" default-y=\"-35.00\" dynamics=\"88.89\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"139.96\" default-y=\"-30.00\" dynamics=\"88.89\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"168.89\" default-y=\"-25.00\" dynamics=\"100.00\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"227.20\" default-y=\"-30.00\" dynamics=\"104.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"227.20\" default-y=\"-5.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"256.36\" default-y=\"-35.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"256.36\" default-y=\"-10.00\" dynamics=\"88.89\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-135.00\" dynamics=\"82.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"45.42\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"81.87\" default-y=\"-100.00\" dynamics=\"82.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"111.02\" default-y=\"-115.00\" dynamics=\"76.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"168.89\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"198.05\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"227.20\" default-y=\"-100.00\" dynamics=\"105.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"256.36\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"17\" width=\"382.77\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>137.07</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"101.78\" default-y=\"-35.00\" dynamics=\"97.78\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"101.78\" default-y=\"-15.00\" dynamics=\"91.11\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"131.57\" default-y=\"-15.00\" dynamics=\"87.78\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"150.19\" default-y=\"-10.00\" dynamics=\"85.56\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"179.12\" default-y=\"-35.00\" dynamics=\"92.22\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"179.12\" default-y=\"0.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"208.91\" default-y=\"-35.00\" dynamics=\"102.22\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"235.94\" default-y=\"-35.00\" dynamics=\"104.44\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"254.55\" default-y=\"-30.00\" dynamics=\"85.56\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"284.35\" default-y=\"-30.00\" dynamics=\"87.78\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"302.97\" default-y=\"-25.00\" dynamics=\"85.56\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"321.58\" default-y=\"-20.00\" dynamics=\"92.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"321.58\" default-y=\"5.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"351.38\" default-y=\"-15.00\" dynamics=\"101.11\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"351.38\" default-y=\"5.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"101.78\" default-y=\"-130.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"131.57\" default-y=\"-110.00\" dynamics=\"83.33\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"179.12\" default-y=\"-95.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"208.91\" default-y=\"-110.00\" dynamics=\"82.22\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"254.55\" default-y=\"-95.00\" dynamics=\"81.11\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"284.35\" default-y=\"-110.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"321.58\" default-y=\"-95.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"351.38\" default-y=\"-110.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"18\" width=\"350.53\">
      <note default-x=\"10.00\" default-y=\"-25.00\" dynamics=\"85.56\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"10.00\" default-y=\"0.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"46.07\" default-y=\"-60.00\" dynamics=\"86.67\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"46.07\" default-y=\"-35.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"69.33\" default-y=\"-60.00\" dynamics=\"95.56\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"69.33\" default-y=\"-35.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"102.10\" default-y=\"-60.00\" dynamics=\"88.89\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"102.10\" default-y=\"-35.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"138.17\" default-y=\"-60.00\" dynamics=\"87.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"138.17\" default-y=\"-35.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"161.43\" default-y=\"-60.00\" dynamics=\"97.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"161.43\" default-y=\"-35.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"184.70\" default-y=\"-65.00\" dynamics=\"88.89\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"184.70\" default-y=\"-35.00\" dynamics=\"86.67\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"220.77\" default-y=\"-65.00\" dynamics=\"94.44\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"220.77\" default-y=\"-35.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"244.03\" default-y=\"-65.00\" dynamics=\"91.11\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"244.03\" default-y=\"-35.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"276.80\" default-y=\"-65.00\" dynamics=\"96.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"276.80\" default-y=\"-35.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"312.87\" default-y=\"-65.00\" dynamics=\"95.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"312.87\" default-y=\"-35.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-150.00\" dynamics=\"82.22\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"46.07\" default-y=\"-130.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"102.10\" default-y=\"-115.00\" dynamics=\"75.56\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"138.17\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"184.70\" default-y=\"-115.00\" dynamics=\"67.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"220.77\" default-y=\"-130.00\" dynamics=\"81.11\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"276.80\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"312.87\" default-y=\"-130.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"19\" width=\"323.19\">
      <note default-x=\"10.00\" default-y=\"-45.00\" dynamics=\"91.11\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"10.00\" default-y=\"-20.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"71.26\" default-y=\"-45.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"71.26\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"100.09\" default-y=\"-45.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"100.09\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"131.49\" default-y=\"-50.00\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"131.49\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"160.31\" default-y=\"-45.00\" dynamics=\"94.44\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"160.31\" default-y=\"-35.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"190.95\" default-y=\"-20.00\" dynamics=\"105.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"213.58\" default-y=\"-45.00\" dynamics=\"104.44\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"213.58\" default-y=\"-20.00\" dynamics=\"105.56\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"234.79\" default-y=\"-45.00\" dynamics=\"102.22\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"234.79\" default-y=\"-20.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"256.01\" default-y=\"-40.00\" dynamics=\"88.89\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"256.01\" default-y=\"-15.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"277.22\" default-y=\"-35.00\" dynamics=\"93.33\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"277.22\" default-y=\"-10.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"298.43\" default-y=\"-30.00\" dynamics=\"103.33\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"298.43\" default-y=\"-5.00\" dynamics=\"91.11\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-135.00\" dynamics=\"57.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"40.63\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"71.26\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"115.79\" default-y=\"-115.00\" dynamics=\"77.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"160.31\" default-y=\"-100.00\" dynamics=\"92.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"190.95\" default-y=\"-115.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"234.79\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"277.22\" default-y=\"-115.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"20\" width=\"376.41\">
      <print new-page=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>-0.00</right-margin>
            </system-margins>
          <top-system-distance>70.00</top-system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"101.78\" default-y=\"-25.00\" dynamics=\"102.22\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"101.78\" default-y=\"0.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"146.63\" default-y=\"-20.00\" dynamics=\"90.00\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"164.98\" default-y=\"-20.00\" dynamics=\"90.00\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"183.33\" default-y=\"-15.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"201.68\" default-y=\"-10.00\" dynamics=\"94.44\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"220.03\" default-y=\"-5.00\" dynamics=\"91.11\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"238.38\" default-y=\"0.00\" dynamics=\"93.33\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"264.88\" default-y=\"0.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"291.38\" default-y=\"-25.00\" dynamics=\"91.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"291.38\" default-y=\"0.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"320.31\" default-y=\"-20.00\" dynamics=\"92.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"320.31\" default-y=\"5.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"351.64\" default-y=\"-15.00\" dynamics=\"92.22\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"351.64\" default-y=\"10.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"101.78\" default-y=\"-140.00\" dynamics=\"90.00\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"128.28\" default-y=\"-120.00\" dynamics=\"77.78\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"164.98\" default-y=\"-105.00\" dynamics=\"83.33\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"201.68\" default-y=\"-120.00\" dynamics=\"77.78\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"238.38\" default-y=\"-105.00\" dynamics=\"86.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"264.88\" default-y=\"-120.00\" dynamics=\"77.78\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"291.38\" default-y=\"-105.00\" dynamics=\"105.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"335.98\" default-y=\"-120.00\" dynamics=\"84.44\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"21\" width=\"213.55\">
      <note default-x=\"16.63\" default-y=\"-10.00\" dynamics=\"97.78\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"16.63\" default-y=\"15.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"166.00\" default-y=\"0.00\" dynamics=\"101.11\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"166.00\" default-y=\"25.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.99\" default-y=\"-145.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"45.92\" default-y=\"-125.00\" dynamics=\"83.33\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"74.86\" default-y=\"-110.00\" dynamics=\"80.00\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"97.64\" default-y=\"-125.00\" dynamics=\"82.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"120.43\" default-y=\"-110.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"143.21\" default-y=\"-125.00\" dynamics=\"82.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"166.00\" default-y=\"-110.00\" dynamics=\"100.00\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"188.78\" default-y=\"-125.00\" dynamics=\"76.67\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"22\" width=\"178.51\">
      <note default-x=\"13.80\" default-y=\"-5.00\" dynamics=\"96.67\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"13.80\" default-y=\"20.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"53.42\" default-y=\"-15.00\" dynamics=\"87.78\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"53.42\" default-y=\"10.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"133.76\" default-y=\"-25.00\" dynamics=\"98.89\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"133.76\" default-y=\"0.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"13.80\" default-y=\"-150.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"33.79\" default-y=\"-130.00\" dynamics=\"66.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"53.79\" default-y=\"-115.00\" dynamics=\"75.56\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"73.78\" default-y=\"-130.00\" dynamics=\"76.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"93.77\" default-y=\"-115.00\" dynamics=\"77.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"113.76\" default-y=\"-130.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"133.76\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"153.75\" default-y=\"-130.00\" dynamics=\"76.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"23\" width=\"288.02\">
      <note default-x=\"16.27\" default-y=\"5.00\" dynamics=\"85.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"38.02\" default-y=\"-55.00\" dynamics=\"101.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"69.36\" default-y=\"-45.00\" dynamics=\"87.78\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"98.29\" default-y=\"-35.00\" dynamics=\"90.00\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"120.05\" default-y=\"-20.00\" dynamics=\"100.00\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"151.38\" default-y=\"-10.00\" dynamics=\"104.44\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"180.31\" default-y=\"0.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"233.37\" default-y=\"15.00\" dynamics=\"98.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-150.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"53.69\" default-y=\"-130.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"98.29\" default-y=\"-115.00\" dynamics=\"97.78\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"135.71\" default-y=\"-130.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"180.31\" default-y=\"-115.00\" dynamics=\"90.00\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"206.84\" default-y=\"-130.00\" dynamics=\"92.22\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"233.37\" default-y=\"-115.00\" dynamics=\"107.78\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"259.89\" default-y=\"-130.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"24\" width=\"392.37\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>114.85</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>69.62</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"94.27\" default-y=\"0.00\" dynamics=\"102.22\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"94.27\" default-y=\"10.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"162.27\" default-y=\"-35.00\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"162.27\" default-y=\"0.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"191.10\" default-y=\"-35.00\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"191.10\" default-y=\"0.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"225.95\" default-y=\"-35.00\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"225.95\" default-y=\"0.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"254.78\" default-y=\"-35.00\" dynamics=\"100.00\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"254.78\" default-y=\"0.00\" dynamics=\"91.11\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"322.77\" default-y=\"0.00\" dynamics=\"104.44\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-80.00\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"94.27\" default-y=\"-154.62\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"128.27\" default-y=\"-134.62\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"162.27\" default-y=\"-119.62\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"208.52\" default-y=\"-134.62\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"254.78\" default-y=\"-119.62\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"288.78\" default-y=\"-134.62\" dynamics=\"92.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"322.77\" default-y=\"-119.62\" dynamics=\"82.22\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"356.77\" default-y=\"-134.62\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"25\" width=\"352.22\">
      <note default-x=\"16.27\" default-y=\"5.00\" dynamics=\"101.11\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"45.66\" default-y=\"-55.00\" dynamics=\"103.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"82.39\" default-y=\"-45.00\" dynamics=\"100.00\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"111.78\" default-y=\"-35.00\" dynamics=\"88.89\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"141.17\" default-y=\"-20.00\" dynamics=\"97.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"177.90\" default-y=\"-10.00\" dynamics=\"98.89\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"207.29\" default-y=\"0.00\" dynamics=\"90.00\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"278.96\" default-y=\"15.00\" dynamics=\"90.00\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-80.00\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-154.62\" dynamics=\"92.22\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"64.02\" default-y=\"-134.62\" dynamics=\"100.00\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"111.78\" default-y=\"-119.62\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"159.53\" default-y=\"-134.62\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"207.29\" default-y=\"-119.62\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"243.12\" default-y=\"-134.62\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"278.96\" default-y=\"-119.62\" dynamics=\"97.78\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"314.79\" default-y=\"-134.62\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"26\" width=\"311.90\">
      <note default-x=\"13.80\" default-y=\"0.00\" dynamics=\"97.78\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"13.80\" default-y=\"10.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"81.80\" default-y=\"-35.00\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"81.80\" default-y=\"0.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"110.62\" default-y=\"-35.00\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"110.62\" default-y=\"0.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"145.48\" default-y=\"-35.00\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"145.48\" default-y=\"0.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"174.30\" default-y=\"-35.00\" dynamics=\"100.00\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"174.30\" default-y=\"0.00\" dynamics=\"91.11\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"242.30\" default-y=\"-10.00\" dynamics=\"97.78\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-80.00\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"13.80\" default-y=\"-154.62\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"47.80\" default-y=\"-134.62\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"81.80\" default-y=\"-119.62\" dynamics=\"90.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"128.05\" default-y=\"-134.62\" dynamics=\"81.11\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"174.30\" default-y=\"-119.62\" dynamics=\"77.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"208.30\" default-y=\"-134.62\" dynamics=\"80.00\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"242.30\" default-y=\"-119.62\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"276.30\" default-y=\"-134.62\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"27\" width=\"395.15\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>92.48</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"101.78\" default-y=\"-30.00\" dynamics=\"86.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"101.78\" default-y=\"-5.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"320.70\" default-y=\"-15.00\" dynamics=\"98.89\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"320.70\" default-y=\"5.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"102.14\" default-y=\"-130.00\" dynamics=\"97.78\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"138.57\" default-y=\"-110.00\" dynamics=\"75.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"174.99\" default-y=\"-95.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"211.42\" default-y=\"-110.00\" dynamics=\"81.11\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"247.85\" default-y=\"-95.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"284.27\" default-y=\"-110.00\" dynamics=\"83.33\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"320.70\" default-y=\"-95.00\" dynamics=\"103.33\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"357.13\" default-y=\"-110.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"28\" width=\"268.77\">
      <note default-x=\"10.00\" default-y=\"-20.00\" dynamics=\"104.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"10.00\" default-y=\"0.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"73.93\" default-y=\"-35.00\" dynamics=\"92.22\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"73.93\" default-y=\"-10.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"202.88\" default-y=\"-45.00\" dynamics=\"103.33\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"202.88\" default-y=\"-20.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-135.00\" dynamics=\"84.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"42.15\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"74.29\" default-y=\"-100.00\" dynamics=\"100.00\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"106.44\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"138.59\" default-y=\"-100.00\" dynamics=\"103.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"170.73\" default-y=\"-115.00\" dynamics=\"92.22\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"202.88\" default-y=\"-100.00\" dynamics=\"107.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"235.02\" default-y=\"-115.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"29\" width=\"392.57\">
      <note default-x=\"16.27\" default-y=\"-35.00\" dynamics=\"88.89\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"16.27\" default-y=\"-15.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"58.44\" default-y=\"-35.00\" dynamics=\"88.89\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"58.44\" default-y=\"-15.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"87.26\" default-y=\"-35.00\" dynamics=\"88.89\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"87.26\" default-y=\"-10.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"116.20\" default-y=\"-35.00\" dynamics=\"91.11\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"116.20\" default-y=\"0.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"158.37\" default-y=\"-35.00\" dynamics=\"103.33\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"185.39\" default-y=\"-35.00\" dynamics=\"87.78\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"211.75\" default-y=\"-30.00\" dynamics=\"95.56\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"253.92\" default-y=\"-30.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"280.27\" default-y=\"-25.00\" dynamics=\"94.44\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"306.63\" default-y=\"-20.00\" dynamics=\"91.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"306.63\" default-y=\"5.00\" dynamics=\"88.89\">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"348.80\" default-y=\"-15.00\" dynamics=\"101.11\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-130.00\" dynamics=\"103.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"58.44\" default-y=\"-110.00\" dynamics=\"86.67\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"116.20\" default-y=\"-95.00\" dynamics=\"90.00\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"158.37\" default-y=\"-110.00\" dynamics=\"74.44\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"211.75\" default-y=\"-95.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"253.92\" default-y=\"-110.00\" dynamics=\"82.22\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"306.63\" default-y=\"-95.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"348.80\" default-y=\"-110.00\" dynamics=\"81.11\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"30\" width=\"463.87\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>97.11</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"90.47\" default-y=\"-25.00\" dynamics=\"88.89\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"90.47\" default-y=\"0.00\" dynamics=\"86.67\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"129.07\" default-y=\"-60.00\" dynamics=\"95.56\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"129.07\" default-y=\"-35.00\" dynamics=\"103.33\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"153.20\" default-y=\"-60.00\" dynamics=\"96.67\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"153.20\" default-y=\"-35.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"185.97\" default-y=\"-60.00\" dynamics=\"95.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"185.97\" default-y=\"-35.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"224.57\" default-y=\"-60.00\" dynamics=\"102.22\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"224.57\" default-y=\"-35.00\" dynamics=\"105.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"248.69\" default-y=\"-60.00\" dynamics=\"85.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"248.69\" default-y=\"-35.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"272.81\" default-y=\"-65.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"272.81\" default-y=\"-35.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"311.41\" default-y=\"-65.00\" dynamics=\"93.33\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"311.41\" default-y=\"-35.00\" dynamics=\"88.89\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"335.54\" default-y=\"-65.00\" dynamics=\"104.44\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"335.54\" default-y=\"-35.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"368.31\" default-y=\"-65.00\" dynamics=\"87.78\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"368.31\" default-y=\"-35.00\" dynamics=\"105.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"406.90\" default-y=\"-65.00\" dynamics=\"105.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"406.90\" default-y=\"-35.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"90.47\" default-y=\"-150.00\" dynamics=\"82.22\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"129.07\" default-y=\"-130.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"185.97\" default-y=\"-115.00\" dynamics=\"75.56\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"224.57\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"272.81\" default-y=\"-115.00\" dynamics=\"67.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"311.41\" default-y=\"-130.00\" dynamics=\"81.11\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"368.31\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"406.90\" default-y=\"-130.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <barline location=\"right\">
        <bar-style>light-heavy</bar-style>
        <repeat direction=\"backward\"/>
        </barline>
      </measure>
    <measure number=\"31\" width=\"273.63\">
      <note default-x=\"10.00\" default-y=\"-45.00\" dynamics=\"94.44\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"10.00\" default-y=\"-20.00\" dynamics=\"86.67\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"124.45\" default-y=\"-45.00\" dynamics=\"94.44\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"124.45\" default-y=\"-20.00\" dynamics=\"86.67\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"168.64\" default-y=\"-45.00\" dynamics=\"90.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"168.64\" default-y=\"-20.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"193.92\" default-y=\"-45.00\" dynamics=\"93.33\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"193.92\" default-y=\"-20.00\" dynamics=\"91.11\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"217.31\" default-y=\"-45.00\" dynamics=\"90.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"217.31\" default-y=\"-20.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"248.64\" default-y=\"-45.00\" dynamics=\"105.56\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"248.64\" default-y=\"-20.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.36\" default-y=\"-135.00\" dynamics=\"81.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"38.88\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"67.41\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"95.93\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"124.45\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"152.98\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"193.92\" default-y=\"-100.00\" dynamics=\"92.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"232.98\" default-y=\"-115.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"32\" width=\"318.99\">
      <note default-x=\"16.27\" default-y=\"-50.00\" dynamics=\"104.44\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"16.27\" default-y=\"-20.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"65.08\" default-y=\"-50.00\" dynamics=\"87.78\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"65.08\" default-y=\"-25.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"91.55\" default-y=\"-50.00\" dynamics=\"88.89\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"91.55\" default-y=\"-20.00\" dynamics=\"88.89\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"156.09\" default-y=\"-50.00\" dynamics=\"93.33\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"156.09\" default-y=\"-20.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"204.91\" default-y=\"-50.00\" dynamics=\"90.00\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"204.91\" default-y=\"-20.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"231.37\" default-y=\"-50.00\" dynamics=\"100.00\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"231.37\" default-y=\"-20.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"257.84\" default-y=\"-50.00\" dynamics=\"95.56\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"257.84\" default-y=\"-20.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"290.92\" default-y=\"-50.00\" dynamics=\"98.89\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"290.92\" default-y=\"-20.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-140.00\" dynamics=\"76.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"48.54\" default-y=\"-120.00\" dynamics=\"83.33\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"91.55\" default-y=\"-105.00\" dynamics=\"82.22\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"123.82\" default-y=\"-120.00\" dynamics=\"76.67\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"156.09\" default-y=\"-105.00\" dynamics=\"92.22\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"188.37\" default-y=\"-120.00\" dynamics=\"73.33\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"231.37\" default-y=\"-105.00\" dynamics=\"105.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"274.38\" default-y=\"-120.00\" dynamics=\"82.22\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"33\" width=\"397.84\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>97.11</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"101.78\" default-y=\"-45.00\" dynamics=\"92.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"101.78\" default-y=\"-20.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"149.51\" default-y=\"-45.00\" dynamics=\"85.56\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"149.51\" default-y=\"-25.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"175.39\" default-y=\"-45.00\" dynamics=\"93.33\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"175.39\" default-y=\"-20.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"238.51\" default-y=\"-45.00\" dynamics=\"93.33\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"238.51\" default-y=\"-20.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"286.25\" default-y=\"-45.00\" dynamics=\"90.00\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"286.25\" default-y=\"-20.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"312.13\" default-y=\"-45.00\" dynamics=\"100.00\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"312.13\" default-y=\"-20.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"338.01\" default-y=\"-45.00\" dynamics=\"95.56\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"338.01\" default-y=\"-20.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"370.36\" default-y=\"-45.00\" dynamics=\"98.89\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"370.36\" default-y=\"-20.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"101.78\" default-y=\"-145.00\" dynamics=\"86.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"133.34\" default-y=\"-125.00\" dynamics=\"75.56\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"175.39\" default-y=\"-110.00\" dynamics=\"76.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"206.95\" default-y=\"-125.00\" dynamics=\"67.78\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"238.51\" default-y=\"-110.00\" dynamics=\"76.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"270.07\" default-y=\"-125.00\" dynamics=\"58.89\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"312.13\" default-y=\"-110.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"354.19\" default-y=\"-125.00\" dynamics=\"76.67\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"34\" width=\"341.19\">
      <note default-x=\"16.27\" default-y=\"-45.00\" dynamics=\"94.44\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"16.27\" default-y=\"-20.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"53.01\" default-y=\"-60.00\" dynamics=\"87.78\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"53.01\" default-y=\"-35.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"76.28\" default-y=\"-60.00\" dynamics=\"91.11\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"76.28\" default-y=\"-35.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"99.55\" default-y=\"-60.00\" dynamics=\"96.67\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"99.55\" default-y=\"-35.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"136.29\" default-y=\"-60.00\" dynamics=\"103.33\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"136.29\" default-y=\"-35.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"159.56\" default-y=\"-60.00\" dynamics=\"91.11\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"159.56\" default-y=\"-35.00\" dynamics=\"92.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"182.82\" default-y=\"-60.00\" dynamics=\"94.44\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"182.82\" default-y=\"-35.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"219.57\" default-y=\"-60.00\" dynamics=\"104.44\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"219.57\" default-y=\"-35.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"242.83\" default-y=\"-60.00\" dynamics=\"104.44\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"242.83\" default-y=\"-35.00\" dynamics=\"92.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"266.10\" default-y=\"-60.00\" dynamics=\"86.67\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"266.10\" default-y=\"-35.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"302.84\" default-y=\"-60.00\" dynamics=\"87.78\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"302.84\" default-y=\"-35.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-150.00\" dynamics=\"55.56\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"53.01\" default-y=\"-130.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"99.55\" default-y=\"-115.00\" dynamics=\"90.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"136.29\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"182.82\" default-y=\"-115.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"219.57\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"266.10\" default-y=\"-115.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"302.84\" default-y=\"-130.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"35\" width=\"317.46\">
      <note default-x=\"10.00\" default-y=\"-45.00\" dynamics=\"102.22\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"10.00\" default-y=\"-20.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"69.95\" default-y=\"-45.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"69.95\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"98.78\" default-y=\"-45.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"98.78\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"130.11\" default-y=\"-50.00\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"130.11\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"158.93\" default-y=\"-45.00\" dynamics=\"104.44\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"158.93\" default-y=\"-35.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"209.67\" default-y=\"-45.00\" dynamics=\"95.56\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"209.67\" default-y=\"-20.00\" dynamics=\"92.22\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"230.42\" default-y=\"-45.00\" dynamics=\"101.11\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"230.42\" default-y=\"-20.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"251.18\" default-y=\"-40.00\" dynamics=\"88.89\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"251.18\" default-y=\"-15.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"271.94\" default-y=\"-35.00\" dynamics=\"98.89\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"271.94\" default-y=\"-10.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"292.70\" default-y=\"-30.00\" dynamics=\"88.89\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"292.70\" default-y=\"-5.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-135.00\" dynamics=\"74.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"39.98\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"69.95\" default-y=\"-100.00\" dynamics=\"72.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"114.44\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"158.93\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"188.91\" default-y=\"-115.00\" dynamics=\"82.22\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"230.42\" default-y=\"-100.00\" dynamics=\"105.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"271.94\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"36\" width=\"529.42\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>97.11</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"101.78\" default-y=\"-25.00\" dynamics=\"87.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"101.78\" default-y=\"0.00\" dynamics=\"105.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"175.20\" default-y=\"-20.00\" dynamics=\"93.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"205.25\" default-y=\"-20.00\" dynamics=\"98.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"235.29\" default-y=\"-15.00\" dynamics=\"96.67\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"265.33\" default-y=\"-10.00\" dynamics=\"91.11\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"295.37\" default-y=\"-5.00\" dynamics=\"94.44\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"325.42\" default-y=\"0.00\" dynamics=\"95.56\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"368.80\" default-y=\"0.00\" dynamics=\"103.33\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"412.19\" default-y=\"-25.00\" dynamics=\"104.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"412.19\" default-y=\"0.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"447.77\" default-y=\"-20.00\" dynamics=\"97.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"447.77\" default-y=\"5.00\" dynamics=\"91.11\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"492.24\" default-y=\"-15.00\" dynamics=\"98.89\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"492.24\" default-y=\"10.00\" dynamics=\"103.33\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"101.78\" default-y=\"-140.00\" dynamics=\"81.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"145.16\" default-y=\"-120.00\" dynamics=\"83.33\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"205.25\" default-y=\"-105.00\" dynamics=\"81.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"265.33\" default-y=\"-120.00\" dynamics=\"77.78\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"325.42\" default-y=\"-105.00\" dynamics=\"84.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"368.80\" default-y=\"-120.00\" dynamics=\"81.11\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"412.19\" default-y=\"-105.00\" dynamics=\"97.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"470.00\" default-y=\"-120.00\" dynamics=\"80.00\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"37\" width=\"527.07\">
      <note default-x=\"16.27\" default-y=\"-10.00\" dynamics=\"90.00\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"16.27\" default-y=\"15.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"98.46\" default-y=\"-30.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"132.09\" default-y=\"-30.00\" dynamics=\"95.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"165.72\" default-y=\"-25.00\" dynamics=\"102.22\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"199.34\" default-y=\"-20.00\" dynamics=\"94.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"232.97\" default-y=\"-15.00\" dynamics=\"102.22\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"266.60\" default-y=\"-10.00\" dynamics=\"94.44\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"306.43\" default-y=\"-10.00\" dynamics=\"95.56\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"306.43\" default-y=\"15.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"356.21\" default-y=\"-10.00\" dynamics=\"103.33\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"356.21\" default-y=\"15.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"396.04\" default-y=\"-10.00\" dynamics=\"96.67\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"396.04\" default-y=\"15.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"435.86\" default-y=\"-15.00\" dynamics=\"95.56\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"435.86\" default-y=\"10.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"485.65\" default-y=\"-20.00\" dynamics=\"87.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"485.65\" default-y=\"5.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-145.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"64.83\" default-y=\"-125.00\" dynamics=\"71.11\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"132.09\" default-y=\"-110.00\" dynamics=\"86.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"199.34\" default-y=\"-125.00\" dynamics=\"72.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"266.60\" default-y=\"-110.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"331.32\" default-y=\"-125.00\" dynamics=\"80.00\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"396.04\" default-y=\"-110.00\" dynamics=\"94.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"460.76\" default-y=\"-125.00\" dynamics=\"75.56\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"38\" width=\"414.88\">
      <print new-page=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <top-system-distance>70.00</top-system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"108.78\" default-y=\"-10.00\" dynamics=\"96.67\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"108.78\" default-y=\"10.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"154.81\" default-y=\"-25.00\" dynamics=\"90.00\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"154.81\" default-y=\"5.00\" dynamics=\"88.89\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"179.71\" default-y=\"-25.00\" dynamics=\"100.00\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"179.71\" default-y=\"0.00\" dynamics=\"103.33\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"204.61\" default-y=\"-25.00\" dynamics=\"101.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"235.94\" default-y=\"-30.00\" dynamics=\"95.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"260.84\" default-y=\"-25.00\" dynamics=\"97.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"start\" bracket=\"yes\"/>
          </notations>
        </note>
      <note default-x=\"306.87\" default-y=\"-25.00\" dynamics=\"102.22\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          <normal-type>eighth</normal-type>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"332.14\" default-y=\"-25.00\" dynamics=\"94.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"332.14\" default-y=\"0.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"357.05\" default-y=\"-30.00\" dynamics=\"104.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"388.38\" default-y=\"-25.00\" dynamics=\"86.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"108.78\" default-y=\"-160.00\" dynamics=\"92.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"139.14\" default-y=\"-140.00\" dynamics=\"73.33\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"179.71\" default-y=\"-125.00\" dynamics=\"77.78\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"220.28\" default-y=\"-140.00\" dynamics=\"67.78\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"260.84\" default-y=\"-125.00\" dynamics=\"86.67\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"291.20\" default-y=\"-140.00\" dynamics=\"71.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"332.14\" default-y=\"-125.00\" dynamics=\"94.44\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"372.71\" default-y=\"-140.00\" dynamics=\"86.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"39\" width=\"320.87\">
      <note default-x=\"16.27\" default-y=\"-30.00\" dynamics=\"97.78\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"16.27\" default-y=\"-5.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"46.68\" default-y=\"-30.00\" dynamics=\"97.78\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"46.68\" default-y=\"-5.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"62.35\" default-y=\"-5.00\" dynamics=\"95.56\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"78.01\" default-y=\"0.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"106.95\" default-y=\"-30.00\" dynamics=\"95.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"106.95\" default-y=\"5.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"137.36\" default-y=\"-30.00\" dynamics=\"97.78\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"137.36\" default-y=\"5.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"153.02\" default-y=\"-30.00\" dynamics=\"95.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"181.96\" default-y=\"-25.00\" dynamics=\"94.44\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"197.62\" default-y=\"-20.00\" dynamics=\"91.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"258.45\" default-y=\"-25.00\" dynamics=\"101.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"258.45\" default-y=\"0.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"288.86\" default-y=\"-30.00\" dynamics=\"102.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"288.86\" default-y=\"-5.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-130.00\" dynamics=\"67.78\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"46.68\" default-y=\"-110.00\" dynamics=\"83.33\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"106.95\" default-y=\"-95.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"137.36\" default-y=\"-110.00\" dynamics=\"72.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"197.62\" default-y=\"-95.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"228.04\" default-y=\"-110.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"258.45\" default-y=\"-95.00\" dynamics=\"92.22\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"288.86\" default-y=\"-110.00\" dynamics=\"77.78\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"40\" width=\"320.74\">
      <note default-x=\"16.27\" default-y=\"-35.00\" dynamics=\"85.56\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"16.27\" default-y=\"-10.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"46.66\" default-y=\"-35.00\" dynamics=\"85.56\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"46.66\" default-y=\"-10.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"62.32\" default-y=\"-10.00\" dynamics=\"101.11\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"77.99\" default-y=\"-5.00\" dynamics=\"104.44\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"93.66\" default-y=\"-35.00\" dynamics=\"95.56\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"93.66\" default-y=\"0.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"124.05\" default-y=\"-35.00\" dynamics=\"97.78\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"124.05\" default-y=\"0.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"139.71\" default-y=\"-35.00\" dynamics=\"95.56\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"168.65\" default-y=\"-30.00\" dynamics=\"94.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"197.58\" default-y=\"-25.00\" dynamics=\"91.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"258.36\" default-y=\"-30.00\" dynamics=\"86.67\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"258.36\" default-y=\"-5.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"288.75\" default-y=\"-35.00\" dynamics=\"105.56\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"288.75\" default-y=\"-10.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-135.00\" dynamics=\"82.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"46.66\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"93.66\" default-y=\"-100.00\" dynamics=\"82.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"124.05\" default-y=\"-115.00\" dynamics=\"76.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"197.58\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"227.97\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"258.36\" default-y=\"-100.00\" dynamics=\"105.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"288.75\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"41\" width=\"387.68\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>100.66</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"101.78\" default-y=\"-35.00\" dynamics=\"95.56\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"101.78\" default-y=\"-15.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"131.22\" default-y=\"-15.00\" dynamics=\"87.78\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"151.61\" default-y=\"-10.00\" dynamics=\"85.56\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"180.54\" default-y=\"-35.00\" dynamics=\"105.56\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"180.54\" default-y=\"0.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"230.37\" default-y=\"-35.00\" dynamics=\"97.78\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"250.76\" default-y=\"-30.00\" dynamics=\"93.33\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"280.20\" default-y=\"-30.00\" dynamics=\"93.33\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"295.87\" default-y=\"-30.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"311.53\" default-y=\"-25.00\" dynamics=\"97.78\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"327.20\" default-y=\"-20.00\" dynamics=\"88.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"327.20\" default-y=\"5.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"356.64\" default-y=\"-15.00\" dynamics=\"85.56\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"101.78\" default-y=\"-130.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"131.22\" default-y=\"-110.00\" dynamics=\"83.33\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"180.54\" default-y=\"-95.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"209.98\" default-y=\"-110.00\" dynamics=\"82.22\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"250.76\" default-y=\"-95.00\" dynamics=\"81.11\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"280.20\" default-y=\"-110.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"327.20\" default-y=\"-95.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"356.64\" default-y=\"-110.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"42\" width=\"340.86\">
      <note default-x=\"10.00\" default-y=\"-25.00\" dynamics=\"95.56\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"10.00\" default-y=\"0.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"47.63\" default-y=\"-60.00\" dynamics=\"96.67\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"47.63\" default-y=\"-35.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"71.15\" default-y=\"-60.00\" dynamics=\"92.22\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"71.15\" default-y=\"-35.00\" dynamics=\"88.89\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"94.67\" default-y=\"-60.00\" dynamics=\"90.00\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"94.67\" default-y=\"-35.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"132.29\" default-y=\"-60.00\" dynamics=\"88.89\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"132.29\" default-y=\"-35.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"155.81\" default-y=\"-60.00\" dynamics=\"100.00\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"155.81\" default-y=\"-35.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"179.33\" default-y=\"-60.00\" dynamics=\"101.11\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"179.33\" default-y=\"-35.00\" dynamics=\"103.33\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"216.96\" default-y=\"-60.00\" dynamics=\"96.67\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"216.96\" default-y=\"-35.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"240.48\" default-y=\"-60.00\" dynamics=\"85.56\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"240.48\" default-y=\"-35.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"264.00\" default-y=\"-60.00\" dynamics=\"97.78\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"264.00\" default-y=\"-35.00\" dynamics=\"87.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"301.63\" default-y=\"-60.00\" dynamics=\"93.33\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"301.63\" default-y=\"-35.00\" dynamics=\"101.11\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-150.00\" dynamics=\"82.22\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"47.63\" default-y=\"-130.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"94.67\" default-y=\"-115.00\" dynamics=\"75.56\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"132.29\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"179.33\" default-y=\"-115.00\" dynamics=\"67.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"216.96\" default-y=\"-130.00\" dynamics=\"81.11\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"264.00\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"301.63\" default-y=\"-130.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"43\" width=\"327.96\">
      <note default-x=\"10.00\" default-y=\"-45.00\" dynamics=\"97.78\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"10.00\" default-y=\"-20.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"72.92\" default-y=\"-45.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"72.92\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"101.74\" default-y=\"-45.00\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"101.74\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"133.99\" default-y=\"-50.00\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"133.99\" default-y=\"-35.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type=\"stop\"/>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"162.82\" default-y=\"-45.00\" dynamics=\"104.44\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"162.82\" default-y=\"-35.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"216.06\" default-y=\"-45.00\" dynamics=\"95.56\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"216.06\" default-y=\"-20.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"237.84\" default-y=\"-45.00\" dynamics=\"103.33\">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"237.84\" default-y=\"-20.00\" dynamics=\"95.56\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"259.62\" default-y=\"-40.00\" dynamics=\"88.89\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"259.62\" default-y=\"-15.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"281.41\" default-y=\"-35.00\" dynamics=\"87.78\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"281.41\" default-y=\"-10.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"303.19\" default-y=\"-30.00\" dynamics=\"95.56\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"303.19\" default-y=\"-5.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-135.00\" dynamics=\"57.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"41.46\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"72.92\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"117.87\" default-y=\"-115.00\" dynamics=\"77.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"162.82\" default-y=\"-100.00\" dynamics=\"92.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"194.27\" default-y=\"-115.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"237.84\" default-y=\"-100.00\" dynamics=\"86.67\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"281.41\" default-y=\"-115.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"44\" width=\"393.78\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>100.66</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"101.78\" default-y=\"-25.00\" dynamics=\"95.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"101.78\" default-y=\"0.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"150.62\" default-y=\"-20.00\" dynamics=\"87.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"170.60\" default-y=\"-20.00\" dynamics=\"97.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"190.58\" default-y=\"-15.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"210.57\" default-y=\"-10.00\" dynamics=\"93.33\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"230.55\" default-y=\"-5.00\" dynamics=\"91.11\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"250.53\" default-y=\"0.00\" dynamics=\"92.22\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"279.39\" default-y=\"0.00\" dynamics=\"88.89\">
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"308.24\" default-y=\"-25.00\" dynamics=\"95.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"308.24\" default-y=\"0.00\" dynamics=\"92.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"337.18\" default-y=\"-20.00\" dynamics=\"88.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"337.18\" default-y=\"5.00\" dynamics=\"91.11\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"368.51\" default-y=\"-15.00\" dynamics=\"91.11\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"368.51\" default-y=\"10.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"101.78\" default-y=\"-140.00\" dynamics=\"90.00\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"130.64\" default-y=\"-120.00\" dynamics=\"77.78\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"170.60\" default-y=\"-105.00\" dynamics=\"83.33\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"210.57\" default-y=\"-120.00\" dynamics=\"77.78\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"250.53\" default-y=\"-105.00\" dynamics=\"86.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"279.39\" default-y=\"-120.00\" dynamics=\"77.78\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"308.24\" default-y=\"-105.00\" dynamics=\"105.56\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"352.84\" default-y=\"-120.00\" dynamics=\"84.44\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"45\" width=\"230.92\">
      <note default-x=\"16.63\" default-y=\"-10.00\" dynamics=\"91.11\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"16.63\" default-y=\"15.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"177.83\" default-y=\"0.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"177.83\" default-y=\"25.00\" dynamics=\"105.56\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.99\" default-y=\"-145.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"45.93\" default-y=\"-125.00\" dynamics=\"83.33\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"74.86\" default-y=\"-110.00\" dynamics=\"80.00\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"100.60\" default-y=\"-125.00\" dynamics=\"82.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"126.35\" default-y=\"-110.00\" dynamics=\"92.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"152.09\" default-y=\"-125.00\" dynamics=\"82.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"177.83\" default-y=\"-110.00\" dynamics=\"100.00\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"203.57\" default-y=\"-125.00\" dynamics=\"76.67\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"46\" width=\"195.88\">
      <note default-x=\"13.80\" default-y=\"-5.00\" dynamics=\"96.67\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"13.80\" default-y=\"20.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>6</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"58.39\" default-y=\"-15.00\" dynamics=\"105.56\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"58.39\" default-y=\"10.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"148.64\" default-y=\"-25.00\" dynamics=\"98.89\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"148.64\" default-y=\"0.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"13.80\" default-y=\"-150.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"36.27\" default-y=\"-130.00\" dynamics=\"66.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"58.75\" default-y=\"-115.00\" dynamics=\"75.56\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"81.22\" default-y=\"-130.00\" dynamics=\"76.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"103.69\" default-y=\"-115.00\" dynamics=\"77.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"126.17\" default-y=\"-130.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"148.64\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"171.12\" default-y=\"-130.00\" dynamics=\"76.67\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"47\" width=\"235.92\">
      <note default-x=\"21.63\" default-y=\"-15.00\" dynamics=\"88.89\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"21.63\" default-y=\"5.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"182.83\" default-y=\"-10.00\" dynamics=\"95.56\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"182.83\" default-y=\"15.00\" dynamics=\"90.00\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-94.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"21.99\" default-y=\"-150.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"50.93\" default-y=\"-130.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"79.86\" default-y=\"-115.00\" dynamics=\"97.78\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"105.60\" default-y=\"-130.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"131.35\" default-y=\"-115.00\" dynamics=\"90.00\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"157.09\" default-y=\"-130.00\" dynamics=\"92.22\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"182.83\" default-y=\"-115.00\" dynamics=\"107.78\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"208.58\" default-y=\"-130.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"48\" width=\"260.94\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>100.66</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"94.27\" default-y=\"-15.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"94.27\" default-y=\"10.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"134.46\" default-y=\"-25.00\" dynamics=\"91.11\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"134.46\" default-y=\"0.00\" dynamics=\"86.67\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"215.91\" default-y=\"-25.00\" dynamics=\"97.78\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"215.91\" default-y=\"0.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"94.27\" default-y=\"-150.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"114.55\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"134.82\" default-y=\"-115.00\" dynamics=\"80.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"155.09\" default-y=\"-130.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"175.36\" default-y=\"-115.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"195.63\" default-y=\"-130.00\" dynamics=\"92.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"215.91\" default-y=\"-115.00\" dynamics=\"82.22\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"236.18\" default-y=\"-130.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"49\" width=\"220.51\">
      <note default-x=\"21.63\" default-y=\"-15.00\" dynamics=\"91.11\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"21.63\" default-y=\"5.00\" dynamics=\"104.44\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"172.56\" default-y=\"-10.00\" dynamics=\"102.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"172.56\" default-y=\"15.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"21.99\" default-y=\"-150.00\" dynamics=\"92.22\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"50.93\" default-y=\"-130.00\" dynamics=\"100.00\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"79.86\" default-y=\"-115.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"103.04\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"126.21\" default-y=\"-115.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"149.38\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"172.56\" default-y=\"-115.00\" dynamics=\"97.78\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"195.73\" default-y=\"-130.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"50\" width=\"180.47\">
      <note default-x=\"13.80\" default-y=\"-15.00\" dynamics=\"105.56\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"13.80\" default-y=\"10.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"53.98\" default-y=\"-25.00\" dynamics=\"98.89\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"53.98\" default-y=\"0.00\" dynamics=\"105.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"135.43\" default-y=\"-25.00\" dynamics=\"92.22\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"135.43\" default-y=\"-10.00\" dynamics=\"88.89\">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"13.80\" default-y=\"-150.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"34.07\" default-y=\"-130.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"54.34\" default-y=\"-115.00\" dynamics=\"90.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"74.62\" default-y=\"-130.00\" dynamics=\"81.11\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"94.89\" default-y=\"-115.00\" dynamics=\"77.78\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"115.16\" default-y=\"-130.00\" dynamics=\"80.00\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"135.43\" default-y=\"-115.00\" dynamics=\"84.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"155.70\" default-y=\"-130.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"51\" width=\"217.90\">
      <note default-x=\"16.63\" default-y=\"-30.00\" dynamics=\"93.33\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"16.63\" default-y=\"-5.00\" dynamics=\"103.33\">
        <chord/>
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"169.82\" default-y=\"-15.00\" dynamics=\"85.56\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"169.82\" default-y=\"5.00\" dynamics=\"92.22\">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.99\" default-y=\"-130.00\" dynamics=\"97.78\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"45.93\" default-y=\"-110.00\" dynamics=\"75.56\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"76.86\" default-y=\"-95.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"100.10\" default-y=\"-110.00\" dynamics=\"81.11\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"123.34\" default-y=\"-95.00\" dynamics=\"82.22\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"146.58\" default-y=\"-110.00\" dynamics=\"83.33\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"169.82\" default-y=\"-95.00\" dynamics=\"103.33\">
        <pitch>
          <step>C</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"193.06\" default-y=\"-110.00\" dynamics=\"84.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"52\" width=\"176.67\">
      <note default-x=\"10.00\" default-y=\"-20.00\" dynamics=\"105.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"10.00\" default-y=\"0.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"50.18\" default-y=\"-35.00\" dynamics=\"95.56\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"50.18\" default-y=\"-10.00\" dynamics=\"92.22\">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"131.63\" default-y=\"-45.00\" dynamics=\"102.22\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"131.63\" default-y=\"-20.00\" dynamics=\"105.56\">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-89.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-135.00\" dynamics=\"84.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"30.27\" default-y=\"-115.00\" dynamics=\"83.33\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"50.54\" default-y=\"-100.00\" dynamics=\"100.00\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"70.82\" default-y=\"-115.00\" dynamics=\"86.67\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"91.09\" default-y=\"-100.00\" dynamics=\"103.33\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"111.36\" default-y=\"-115.00\" dynamics=\"92.22\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"131.63\" default-y=\"-100.00\" dynamics=\"107.78\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"151.90\" default-y=\"-115.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"53\" width=\"381.62\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>100.66</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"101.78\" default-y=\"-35.00\" dynamics=\"100.00\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"101.78\" default-y=\"-15.00\" dynamics=\"94.44\">
        <chord/>
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"130.36\" default-y=\"-15.00\" dynamics=\"96.67\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"150.16\" default-y=\"-10.00\" dynamics=\"86.67\">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"179.09\" default-y=\"-35.00\" dynamics=\"96.67\">
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"179.09\" default-y=\"0.00\" dynamics=\"93.33\">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>-1</alter>
          <octave>5</octave>
          </pitch>
        <duration>9</duration>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"227.47\" default-y=\"-35.00\" dynamics=\"92.22\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">backward hook</beam>
        </note>
      <note default-x=\"247.27\" default-y=\"-30.00\" dynamics=\"87.78\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"275.85\" default-y=\"-30.00\" dynamics=\"87.78\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          <tuplet type=\"start\" bracket=\"no\"/>
          </notations>
        </note>
      <note default-x=\"291.52\" default-y=\"-30.00\" dynamics=\"88.89\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">continue</beam>
        </note>
      <note default-x=\"307.18\" default-y=\"-25.00\" dynamics=\"90.00\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>16th</type>
        <time-modification>
          <actual-notes>3</actual-notes>
          <normal-notes>2</normal-notes>
          </time-modification>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        <notations>
          <tuplet type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"322.85\" default-y=\"-20.00\" dynamics=\"92.22\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"322.85\" default-y=\"5.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"351.44\" default-y=\"-15.00\" dynamics=\"86.67\">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-84.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"101.78\" default-y=\"-130.00\" dynamics=\"103.33\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"130.36\" default-y=\"-110.00\" dynamics=\"86.67\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"179.09\" default-y=\"-95.00\" dynamics=\"90.00\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"207.68\" default-y=\"-110.00\" dynamics=\"74.44\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"247.27\" default-y=\"-95.00\" dynamics=\"83.33\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"275.85\" default-y=\"-110.00\" dynamics=\"82.22\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"322.85\" default-y=\"-95.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"351.44\" default-y=\"-110.00\" dynamics=\"81.11\">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"54\" width=\"334.79\">
      <note default-x=\"10.00\" default-y=\"-25.00\" dynamics=\"100.00\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"10.00\" default-y=\"0.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>5</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"46.72\" default-y=\"-60.00\" dynamics=\"101.11\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"46.72\" default-y=\"-35.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"69.99\" default-y=\"-60.00\" dynamics=\"104.44\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"69.99\" default-y=\"-35.00\" dynamics=\"92.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"93.25\" default-y=\"-60.00\" dynamics=\"93.33\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"93.25\" default-y=\"-35.00\" dynamics=\"100.00\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"129.97\" default-y=\"-60.00\" dynamics=\"95.56\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"129.97\" default-y=\"-35.00\" dynamics=\"96.67\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"153.24\" default-y=\"-60.00\" dynamics=\"105.56\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"153.24\" default-y=\"-35.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"176.50\" default-y=\"-60.00\" dynamics=\"103.33\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"176.50\" default-y=\"-35.00\" dynamics=\"102.22\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"213.22\" default-y=\"-60.00\" dynamics=\"105.56\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"213.22\" default-y=\"-35.00\" dynamics=\"97.78\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"236.49\" default-y=\"-60.00\" dynamics=\"94.44\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"236.49\" default-y=\"-35.00\" dynamics=\"98.89\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"259.75\" default-y=\"-60.00\" dynamics=\"102.22\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"259.75\" default-y=\"-35.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"296.47\" default-y=\"-60.00\" dynamics=\"100.00\">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <notations>
          <fermata type=\"upright\">square</fermata>
          </notations>
        </note>
      <note default-x=\"296.47\" default-y=\"-35.00\" dynamics=\"85.56\">
        <chord/>
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-84.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-150.00\" dynamics=\"94.44\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"46.72\" default-y=\"-130.00\" dynamics=\"94.44\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"93.25\" default-y=\"-115.00\" dynamics=\"100.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"129.97\" default-y=\"-130.00\" dynamics=\"67.78\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <note default-x=\"176.50\" default-y=\"-115.00\" dynamics=\"100.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">begin</beam>
        </note>
      <note default-x=\"213.22\" default-y=\"-130.00\" dynamics=\"84.44\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"259.75\" default-y=\"-115.00\" dynamics=\"100.00\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"296.47\" default-y=\"-130.00\" dynamics=\"80.00\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>6</duration>
        <voice>5</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>2</staff>
        <beam number=\"1\">end</beam>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"55\" width=\"160.31\">
      <direction placement=\"above\">
        <direction-type>
          <metronome parentheses=\"no\" relative-y=\"20.00\">
            <beat-unit>quarter</beat-unit>
            <per-minute>75</per-minute>
            </metronome>
          </direction-type>
        <staff>1</staff>
        <sound tempo=\"75\"/>
        </direction>
      <note default-x=\"10.36\" default-y=\"-20.00\" dynamics=\"75.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"75.15\" default-y=\"-20.00\" dynamics=\"75.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"95.28\" default-y=\"-35.00\" dynamics=\"74.44\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"115.41\" default-y=\"-35.00\" dynamics=\"74.44\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"135.54\" default-y=\"-20.00\" dynamics=\"70.00\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-84.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.72\" default-y=\"-135.00\" dynamics=\"71.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"42.93\" default-y=\"-115.00\" dynamics=\"71.11\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"74.79\" default-y=\"-100.00\" dynamics=\"71.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"56\" width=\"179.77\">
      <note default-x=\"16.27\" default-y=\"-25.00\" dynamics=\"76.67\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"45.20\" default-y=\"-30.00\" dynamics=\"74.44\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"62.70\" default-y=\"-25.00\" dynamics=\"73.33\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"128.82\" default-y=\"-25.00\" dynamics=\"73.33\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-84.15\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"16.27\" default-y=\"-140.00\" dynamics=\"71.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"90.69\" default-y=\"-120.00\" dynamics=\"71.11\">
        <pitch>
          <step>E</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"128.82\" default-y=\"-105.00\" dynamics=\"71.11\">
        <pitch>
          <step>A</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"57\" width=\"386.64\">
      <print new-system=\"yes\">
        <system-layout>
          <system-margins>
            <left-margin>21.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <system-distance>100.66</system-distance>
          </system-layout>
        <staff-layout number=\"2\">
          <staff-distance>65.00</staff-distance>
          </staff-layout>
        </print>
      <note default-x=\"101.42\" default-y=\"-20.00\" dynamics=\"68.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"227.67\" default-y=\"-20.00\" dynamics=\"68.89\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <note default-x=\"267.02\" default-y=\"-30.00\" dynamics=\"73.33\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"306.36\" default-y=\"-30.00\" dynamics=\"82.22\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">continue</beam>
        </note>
      <note default-x=\"345.70\" default-y=\"-20.00\" dynamics=\"65.56\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-80.00\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"101.78\" default-y=\"-145.00\" dynamics=\"71.11\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"164.73\" default-y=\"-125.00\" dynamics=\"71.11\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"227.31\" default-y=\"-110.00\" dynamics=\"71.11\">
        <pitch>
          <step>G</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"58\" width=\"229.17\">
      <note default-x=\"10.00\" default-y=\"-25.00\" dynamics=\"72.22\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">begin</beam>
        <beam number=\"2\">begin</beam>
        </note>
      <note default-x=\"35.30\" default-y=\"-30.00\" dynamics=\"82.22\">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number=\"1\">end</beam>
        <beam number=\"2\">end</beam>
        </note>
      <note default-x=\"60.60\" default-y=\"-25.00\" dynamics=\"71.11\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>18</duration>
        <tie type=\"start\"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"start\"/>
          </notations>
        </note>
      <note default-x=\"156.37\" default-y=\"-25.00\" dynamics=\"71.11\">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <tie type=\"stop\"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>1</staff>
        <notations>
          <tied type=\"stop\"/>
          </notations>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-80.00\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.00\" default-y=\"-150.00\" dynamics=\"71.11\">
        <pitch>
          <step>F</step>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"101.07\" default-y=\"-130.00\" dynamics=\"71.11\">
        <pitch>
          <step>C</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"156.37\" default-y=\"-115.00\" dynamics=\"71.11\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      </measure>
    <measure number=\"59\" width=\"213.92\">
      <note default-x=\"10.36\" default-y=\"-20.00\" dynamics=\"74.44\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>36</duration>
        <voice>1</voice>
        <type>half</type>
        <dot/>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <note>
        <rest/>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"start\" line=\"yes\" default-y=\"-80.00\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <note default-x=\"10.72\" default-y=\"-135.00\" dynamics=\"71.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"61.12\" default-y=\"-115.00\" dynamics=\"71.11\">
        <pitch>
          <step>F</step>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"111.52\" default-y=\"-100.00\" dynamics=\"71.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note default-x=\"161.92\" default-y=\"-95.00\" dynamics=\"71.11\">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      </measure>
    <measure number=\"60\" width=\"226.77\">
      <note>
        <rest/>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
        </note>
      <note default-x=\"67.74\" default-y=\"-35.00\" dynamics=\"71.11\">
        <pitch>
          <step>F</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
        </note>
      <note default-x=\"116.86\" default-y=\"-20.00\" dynamics=\"71.11\">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>24</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
        </note>
      <backup>
        <duration>48</duration>
        </backup>
      <note default-x=\"18.27\" default-y=\"-90.00\" dynamics=\"71.11\">
        <pitch>
          <step>D</step>
          <alter>-1</alter>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>2</staff>
        </note>
      <note>
        <rest/>
        <duration>24</duration>
        <voice>5</voice>
        <type>half</type>
        <staff>2</staff>
        </note>
      <note>
        <rest/>
        <duration>12</duration>
        <voice>5</voice>
        <type>quarter</type>
        <staff>2</staff>
        </note>
      <direction placement=\"below\">
        <direction-type>
          <pedal type=\"stop\" line=\"yes\"/>
          </direction-type>
        <staff>2</staff>
        </direction>
      <barline location=\"right\">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>")

(def zelda-parsed (xml->clj zelda))
