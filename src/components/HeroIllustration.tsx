"use client";

const C  = "#1a1a2e";
const A  = "#4AB8D8";
const BG = "#0d1b2a";
const ND = "#ffffff";
const NP = "#c084fc";

/* ─── A: 有機的データアート ─── */
const HeroA = () => (
  <svg viewBox="0 0 480 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Central glow */}
    <circle cx="285" cy="265" r="160" fill={A} fillOpacity="0.04"/>
    <circle cx="285" cy="265" r="100" fill={A} fillOpacity="0.07"/>
    <circle cx="285" cy="265" r="52"  fill={A} fillOpacity="0.12"/>
    <circle cx="285" cy="265" r="20"  fill={A} fillOpacity="0.5" className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite" }}/>
    <circle cx="285" cy="265" r="7"   fill={A}/>
    {/* Organic paths */}
    <path d="M285,265 C240,228 205,202 175,178" stroke={A} strokeOpacity="0.35" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="5,4" style={{ animation: "svgDash 3s linear infinite" }}/>
    <path d="M285,265 C333,230 362,196 392,162" stroke={A} strokeOpacity="0.35" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="5,4" style={{ animation: "svgDashRev 3s linear infinite" }}/>
    <path d="M285,265 C222,278 172,292 122,308" stroke={C} strokeOpacity="0.25" strokeWidth="1"   fill="none" strokeLinecap="round" strokeDasharray="4,5" style={{ animation: "svgDash 4s linear infinite" }}/>
    <path d="M285,265 C362,290 408,315 448,335" stroke={A} strokeOpacity="0.28" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="5,4" style={{ animation: "svgDashRev 2.5s linear infinite" }}/>
    <path d="M285,265 C268,332 252,388 234,438" stroke={A} strokeOpacity="0.25" strokeWidth="1"   fill="none" strokeLinecap="round" strokeDasharray="4,5" style={{ animation: "svgDash 3.5s linear infinite" }}/>
    <path d="M285,265 C318,328 345,388 368,445" stroke={C} strokeOpacity="0.2"  strokeWidth="1"   fill="none" strokeLinecap="round" strokeDasharray="4,5" style={{ animation: "svgDashRev 4s linear infinite" }}/>
    <path d="M175,178 C132,174 108,172 84,168"  stroke={C} strokeOpacity="0.18" strokeWidth="0.75" fill="none" strokeLinecap="round"/>
    <path d="M392,162 C420,158 440,156 458,155"  stroke={A} strokeOpacity="0.2"  strokeWidth="0.75" fill="none" strokeLinecap="round"/>
    <path d="M122,308 C108,362 100,408 94,448"   stroke={C} strokeOpacity="0.18" strokeWidth="0.75" fill="none" strokeLinecap="round"/>
    <path d="M448,335 C450,400 448,452 446,498"  stroke={A} strokeOpacity="0.18" strokeWidth="0.75" fill="none" strokeLinecap="round"/>
    <path d="M234,438 C222,468 212,495 200,520"  stroke={C} strokeOpacity="0.15" strokeWidth="0.75" fill="none" strokeLinecap="round"/>
    <path d="M368,445 C362,472 358,498 355,520"  stroke={C} strokeOpacity="0.15" strokeWidth="0.75" fill="none" strokeLinecap="round"/>
    {/* Main organic nodes */}
    {([
      [175,178, 22, A, 0.18, 0.5,  0],
      [392,162, 25, A, 0.15, 0.6,  0.8],
      [122,308, 17, C, 0.15, 0.45, 1.6],
      [448,335, 21, A, 0.15, 0.55, 0.4],
      [234,438, 15, A, 0.18, 0.5,  1.2],
      [368,445, 18, C, 0.15, 0.45, 2.0],
    ] as [number,number,number,string,number,number,number][]).map(([x,y,r,col,fo,sa,d]) => (
      <g key={`${x}-${y}`}>
        <circle cx={x} cy={y} r={r*2.2} fill={col} fillOpacity={fo*0.4}/>
        <circle cx={x} cy={y} r={r}     fill={col} fillOpacity={fo}     stroke={col} strokeOpacity={sa} strokeWidth="1"
          className="svg-anim" style={{ animation: `svgPulse ${2.5+d*0.3}s ease-in-out infinite`, animationDelay: `${d}s` }}/>
        <circle cx={x} cy={y} r={r*0.4} fill={col} fillOpacity="0.9"/>
      </g>
    ))}
    {/* Secondary nodes */}
    {([
      [84,168,12,C,0.12], [458,155,13,A,0.14], [94,448,13,C,0.12],
      [446,498,10,A,0.13], [200,520,11,A,0.12], [355,520,9,C,0.1],
    ] as [number,number,number,string,number][]).map(([x,y,r,col,fo]) => (
      <g key={`s${x}-${y}`}>
        <circle cx={x} cy={y} r={r*1.8} fill={col} fillOpacity={fo*0.35}/>
        <circle cx={x} cy={y} r={r}     fill={col} fillOpacity={fo+0.05} stroke={col} strokeOpacity="0.4" strokeWidth="0.75"/>
      </g>
    ))}
    {/* Micro texture dots */}
    {([
      [140,220],[230,140],[340,210],[420,240],[180,360],
      [310,350],[65,255],[460,400],[265,480],[390,310],
      [115,390],[350,175],[200,430],[430,120],[80,320],
    ] as [number,number][]).map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r={1.5+Math.sin(i)*0.8} fill={i%3===0?A:C} fillOpacity={0.15+i*0.01}/>
    ))}
  </svg>
);

/* ─── B: ミニマル編集イラスト ─── */
const HeroB = () => (
  <svg viewBox="0 0 480 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Main screen frame */}
    <rect x="80" y="95" width="305" height="215" rx="5" stroke={C} strokeOpacity="0.35" strokeWidth="0.75"/>
    <line x1="80" y1="116" x2="385" y2="116" stroke={C} strokeOpacity="0.2" strokeWidth="0.5"/>
    <circle cx="96"  cy="106" r="4" stroke={C} strokeOpacity="0.3" strokeWidth="0.75"/>
    <circle cx="110" cy="106" r="4" stroke={C} strokeOpacity="0.3" strokeWidth="0.75"/>
    <circle cx="124" cy="106" r="4" stroke={C} strokeOpacity="0.3" strokeWidth="0.75"/>
    {/* Screen content lines */}
    <line x1="100" y1="136" x2="365" y2="136" stroke={C} strokeOpacity="0.14" strokeWidth="0.5"/>
    <line x1="100" y1="150" x2="330" y2="150" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    <line x1="100" y1="164" x2="348" y2="164" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    <line x1="100" y1="178" x2="305" y2="178" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    {/* Metric card (left) */}
    <rect x="100" y="200" width="115" height="75" rx="3" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    <line x1="115" y1="215" x2="200" y2="215" stroke={C} strokeOpacity="0.14" strokeWidth="0.5"/>
    <line x1="115" y1="228" x2="195" y2="228" stroke={A} strokeOpacity="0.5"  strokeWidth="1" style={{ animation: "svgBlink 3s ease-in-out infinite" }}/>
    <line x1="115" y1="241" x2="190" y2="241" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    <line x1="115" y1="254" x2="200" y2="254" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    {/* Bar chart (right of card) */}
    <line x1="240" y1="275" x2="360" y2="275" stroke={C} strokeOpacity="0.15" strokeWidth="0.5"/>
    <rect x="248" y="240" width="14" height="35" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    <rect x="268" y="228" width="14" height="47" stroke={C} strokeOpacity="0.25" strokeWidth="0.75"/>
    <rect x="288" y="214" width="14" height="61" stroke={C} strokeOpacity="0.28" strokeWidth="0.75"/>
    <rect x="308" y="200" width="14" height="75" stroke={A} strokeOpacity="0.55" strokeWidth="0.75" style={{ animation: "svgBlink 2.5s ease-in-out infinite" }}/>
    <polyline points="255,240 275,228 295,214 315,200" stroke={A} strokeOpacity="0.6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "svgDash 2s linear infinite", strokeDasharray: "4,3" }}/>
    {/* Stand */}
    <line x1="232" y1="310" x2="232" y2="342" stroke={C} strokeOpacity="0.2" strokeWidth="0.75"/>
    <line x1="190" y1="342" x2="274" y2="342" stroke={C} strokeOpacity="0.2" strokeWidth="0.75"/>
    {/* Floating circle lens (top-right) */}
    <circle cx="418" cy="128" r="42" stroke={A} strokeOpacity="0.45" strokeWidth="0.75" style={{ animation: "svgBlink 4s ease-in-out infinite" }}/>
    <circle cx="418" cy="128" r="28" stroke={C} strokeOpacity="0.2"  strokeWidth="0.5"/>
    <circle cx="418" cy="128" r="5"  fill={A}   fillOpacity="0.7"/>
    <line x1="437" y1="147" x2="455" y2="165" stroke={A} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Mobile device */}
    <rect x="92"  y="390" width="55" height="88" rx="7" stroke={C} strokeOpacity="0.28" strokeWidth="0.75"/>
    <line x1="105" y1="407" x2="135" y2="407" stroke={C} strokeOpacity="0.12" strokeWidth="0.5"/>
    <line x1="105" y1="419" x2="128" y2="419" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    <line x1="105" y1="431" x2="132" y2="431" stroke={A} strokeOpacity="0.3"   strokeWidth="0.75"/>
    <line x1="118" y1="463" x2="128" y2="463" stroke={C} strokeOpacity="0.2"  strokeWidth="0.75"/>
    {/* Tablet */}
    <rect x="175" y="400" width="96" height="68" rx="5" stroke={C} strokeOpacity="0.25" strokeWidth="0.75"/>
    <line x1="188" y1="415" x2="258" y2="415" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    <line x1="188" y1="427" x2="248" y2="427" stroke={A} strokeOpacity="0.3"   strokeWidth="0.75"/>
    <line x1="188" y1="439" x2="252" y2="439" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    {/* Connection lines device→screen */}
    <path d="M120,390 C130,370 155,355 190,310" stroke={C} strokeOpacity="0.14" strokeWidth="0.5" fill="none" strokeDasharray="3,3"/>
    <path d="M223,400 C228,380 230,360 232,342" stroke={C} strokeOpacity="0.14" strokeWidth="0.5" fill="none" strokeDasharray="3,3"/>
    {/* Data flow accent */}
    <rect x="310" y="390" width="130" height="80" rx="4" stroke={C} strokeOpacity="0.2" strokeWidth="0.75"/>
    <line x1="325" y1="408" x2="425" y2="408" stroke={C} strokeOpacity="0.12" strokeWidth="0.5"/>
    <line x1="325" y1="420" x2="415" y2="420" stroke={A} strokeOpacity="0.4"   strokeWidth="1"/>
    <line x1="325" y1="432" x2="420" y2="432" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    <line x1="325" y1="444" x2="410" y2="444" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    {/* Corner marks */}
    <line x1="32" y1="32" x2="52" y2="32" stroke={C} strokeOpacity="0.3" strokeWidth="0.75"/>
    <line x1="32" y1="32" x2="32" y2="52" stroke={C} strokeOpacity="0.3" strokeWidth="0.75"/>
    <line x1="448" y1="548" x2="428" y2="548" stroke={A} strokeOpacity="0.4" strokeWidth="0.75"/>
    <line x1="448" y1="548" x2="448" y2="528" stroke={A} strokeOpacity="0.4" strokeWidth="0.75"/>
  </svg>
);

/* ─── C: ボールドグラフィック ─── */
/* Hero: デジタルメディアでクライアントの利益を最大化 */
const HeroC = () => (
  <svg viewBox="0 0 480 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Subtle context ring */}
    <circle cx="240" cy="310" r="218" stroke={C} strokeOpacity="0.07" strokeWidth="2"/>
    {/* Monitor frame */}
    <rect x="82" y="152" width="288" height="200" rx="6" fill={A} fillOpacity="0.06" stroke={A} strokeOpacity="0.52" strokeWidth="2.5"/>
    <line x1="82" y1="180" x2="370" y2="180" stroke={A} strokeOpacity="0.22" strokeWidth="1.5"/>
    {/* Window dots */}
    <circle cx="102" cy="166" r="6" fill={A} fillOpacity="0.55"/>
    <circle cx="120" cy="166" r="6" fill={C} fillOpacity="0.4"/>
    <circle cx="138" cy="166" r="6" fill={C} fillOpacity="0.22"/>
    {/* Monitor stand */}
    <line x1="226" y1="352" x2="226" y2="390" stroke={A} strokeOpacity="0.28" strokeWidth="2.5"/>
    <line x1="185" y1="390" x2="267" y2="390" stroke={A} strokeOpacity="0.28" strokeWidth="2.5"/>
    {/* Rising profit bars */}
    <rect x="108" y="286" width="36" height="56"  fill={C} fillOpacity="0.12" stroke={C} strokeOpacity="0.38" strokeWidth="2"/>
    <rect x="158" y="260" width="36" height="82"  fill={C} fillOpacity="0.15" stroke={C} strokeOpacity="0.42" strokeWidth="2"/>
    <rect x="208" y="228" width="36" height="114" fill={C} fillOpacity="0.18" stroke={C} strokeOpacity="0.48" strokeWidth="2"/>
    <rect x="258" y="192" width="36" height="150" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.72" strokeWidth="2" className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite" }}/>
    {/* Trend polyline */}
    <polyline points="126,286 176,260 226,228 276,192" stroke={A} strokeOpacity="0.82" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Profit arrow breaking out of screen top */}
    <line x1="226" y1="152" x2="226" y2="55" stroke={A} strokeOpacity="0.78" strokeWidth="3"/>
    <polygon points="210,60 242,60 226,28" fill={A} fillOpacity="0.92"/>
    {/* "+" growth symbol top-right */}
    <circle cx="378" cy="208" r="32" fill={A} fillOpacity="0.14" stroke={A} strokeOpacity="0.55" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgCorePulse 2.8s ease-in-out infinite" }}/>
    <line x1="378" y1="194" x2="378" y2="222" stroke={A} strokeOpacity="0.88" strokeWidth="3.5"/>
    <line x1="364" y1="208" x2="392" y2="208" stroke={A} strokeOpacity="0.88" strokeWidth="3.5"/>
    {/* Left digital channel circle */}
    <circle cx="50" cy="108" r="42" fill={A} fillOpacity="0.12" stroke={A} strokeOpacity="0.45" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgBlink 4s ease-in-out infinite" }}/>
    <circle cx="50" cy="108" r="15" fill={A} fillOpacity="0.55"/>
    <line x1="88"  y1="132" x2="116" y2="156" stroke={A} strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="5,4"/>
    {/* Right digital channel circle */}
    <circle cx="422" cy="108" r="36" fill={C} fillOpacity="0.07" stroke={C} strokeOpacity="0.32" strokeWidth="2.5"/>
    <circle cx="422" cy="108" r="12" fill={C} fillOpacity="0.42"/>
    <line x1="390" y1="130" x2="362" y2="154" stroke={C} strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="5,4"/>
    {/* Bottom media nodes */}
    <circle cx="82"  cy="455" r="30" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.32" strokeWidth="2" className="svg-anim" style={{ animation: "svgPulse 4.5s ease-in-out infinite", animationDelay: "0.5s" }}/>
    <circle cx="368" cy="455" r="24" fill={C} fillOpacity="0.06" stroke={C} strokeOpacity="0.22" strokeWidth="2"/>
    {/* Bold corner brackets */}
    <line x1="28"  y1="28"  x2="62"  y2="28"  stroke={C} strokeOpacity="0.4"  strokeWidth="2"/>
    <line x1="28"  y1="28"  x2="28"  y2="62"  stroke={C} strokeOpacity="0.4"  strokeWidth="2"/>
    <line x1="452" y1="552" x2="422" y2="552" stroke={A}  strokeOpacity="0.55" strokeWidth="2"/>
    <line x1="452" y1="552" x2="452" y2="522" stroke={A}  strokeOpacity="0.55" strokeWidth="2"/>
    <line x1="452" y1="28"  x2="422" y2="28"  stroke={C} strokeOpacity="0.3"  strokeWidth="1.5"/>
    <line x1="452" y1="28"  x2="452" y2="58"  stroke={C} strokeOpacity="0.3"  strokeWidth="1.5"/>
    <line x1="28"  y1="552" x2="58"  y2="552" stroke={A}  strokeOpacity="0.4"  strokeWidth="1.5"/>
    <line x1="28"  y1="552" x2="28"  y2="522" stroke={A}  strokeOpacity="0.4"  strokeWidth="1.5"/>
  </svg>
);

/* ─── D: Neural Poly ─── */
// Brain boundary: 12 vertices forming dual-lobe silhouette (LEFT PEAK, top-dip, RIGHT PEAK, ...)
const HERO_BPTS: [number,number][] = [
  [218,115],[290,135],[362,115],
  [432,168],[452,258],[428,348],
  [362,408],[290,426],[218,408],
  [132,348],[108,258],[148,168],
];
const HCX = 290, HCY = 258; // brain center

const HeroD = () => (
  <svg viewBox="0 0 480 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    {/* Fan triangulation: each boundary edge → center */}
    {HERO_BPTS.map(([x,y],i) => {
      const [nx,ny] = HERO_BPTS[(i+1)%12];
      return (
        <polygon key={i}
          points={`${x},${y} ${nx},${ny} ${HCX},${HCY}`}
          fill={A} fillOpacity={i%2===0?0.055:0.03}
          stroke={A} strokeOpacity={i%2===0?0.28:0.17} strokeWidth="0.75"
        />
      );
    })}
    {/* Interior mesh lines for depth */}
    {([[218,115],[362,115],[132,348],[452,258],[108,258],[428,348]] as [number,number][]).map(([x,y],i) => (
      <line key={i} x1={HCX} y1={HCY} x2={x} y2={y} stroke={A} strokeOpacity="0.14" strokeWidth="0.5"/>
    ))}
    {/* Neural signal: left-lobe → center → bottom (primary) */}
    <path d={`M218,115 L${HCX},${HCY} L290,426`}
      stroke={A} strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"
      strokeDasharray="10,8" style={{ animation: "svgDash 2.2s linear infinite" }}/>
    {/* Neural signal: right-lobe → center (pink, secondary) */}
    <path d={`M362,115 L${HCX},${HCY}`}
      stroke={NP} strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round"
      strokeDasharray="8,6" style={{ animation: "svgDash 2.8s linear infinite", animationDelay: "0.6s" }}/>
    {/* Center node (pink = "neural core") */}
    <circle cx={HCX} cy={HCY} r="22" fill={NP} fillOpacity="0.08"/>
    <circle cx={HCX} cy={HCY} r="11" fill={NP} fillOpacity="0.18"/>
    <circle cx={HCX} cy={HCY} r="5.5" fill={NP} className="svg-anim" style={{ animation: "svgCorePulse 2s ease-in-out infinite" }}/>
    {/* Boundary nodes */}
    {HERO_BPTS.map(([x,y],i) => {
      const isPeak = i===0 || i===2;
      const col = isPeak ? NP : A;
      return (
        <g key={i}>
          <circle cx={x} cy={y} r={isPeak?15:10} fill={col} fillOpacity="0.08"/>
          <circle cx={x} cy={y} r={isPeak?7.5:5} fill={col} fillOpacity="0.2"/>
          <circle cx={x} cy={y} r={isPeak?3.5:2.5} fill={col}
            className="svg-anim"
            style={{ animation:`${isPeak?"svgNeuralFire":"svgPulse"} ${2.5+i*0.12}s ease-in-out infinite`, animationDelay:`${(i*0.18)%2.2}s` }}/>
        </g>
      );
    })}
  </svg>
);

/* ─── E: Low-Poly Human ─── */
// Facet helper: polygon + shimmer animation with unique delay
const F = (pts: string, fill: string, dur: number, delay: number) => (
  <polygon points={pts} fill={fill} style={{ opacity:0.85, animation:`svgFacet ${dur}s ease-in-out infinite`, animationDelay:`${delay}s` }}/>
);

const HeroE = () => (
  <svg viewBox="0 0 480 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <g className="svg-anim" style={{ animation:"svgFloat 5s ease-in-out infinite" }}>
      {/* HEAD */}
      {F("240,42 210,60 240,88",     "#2C7A7B", 3.2, 0.0)}
      {F("240,42 240,88 270,60",     "#1E3A5F", 2.8, 0.3)}
      {F("210,60 228,98 240,88",     "#1D4ED8", 3.5, 0.6)}
      {F("270,60 240,88 252,98",     "#0F766E", 3.0, 0.9)}
      {/* NECK */}
      {F("228,98 252,98 248,116 232,116", "#374151", 4.0, 0.2)}
      {/* SHOULDERS */}
      {F("228,98 232,116 195,132 160,132", "#DC2626", 3.8, 0.5)}
      {F("252,98 320,132 285,132 248,116", "#1D4ED8", 3.5, 0.8)}
      {/* LEFT ARM */}
      {F("160,132 148,175 175,192 195,132", "#EA580C", 3.2, 0.4)}
      {F("148,175 140,260 165,265 175,192", "#B91C1C", 4.2, 1.0)}
      {F("140,260 148,328 165,265",          "#0F766E", 3.5, 1.5)}
      {F("148,328 152,350 165,265",          "#CA8A04", 2.9, 1.8)}
      {/* RIGHT ARM */}
      {F("320,132 285,132 305,192 332,175", "#0F766E", 3.2, 0.6)}
      {F("332,175 305,192 318,265 340,260", "#1D4ED8", 4.0, 1.1)}
      {F("340,260 332,328 318,265",          "#DC2626", 3.5, 1.6)}
      {F("332,328 328,350 318,265",          "#2C7A7B", 2.9, 1.9)}
      {/* CHEST */}
      {F("195,132 232,116 215,190 175,192", "#CA8A04", 4.5, 0.7)}
      {F("232,116 248,116 268,190 215,190", "#1D4ED8", 3.8, 1.0)}
      {F("248,116 285,132 305,192 268,190", "#DC2626", 4.2, 1.3)}
      {/* TORSO */}
      {F("175,192 215,190 182,268",          "#EA580C", 3.5, 1.4)}
      {F("215,190 268,190 240,265",          "#0F766E", 4.0, 0.5)}
      {F("268,190 305,192 298,268",          "#1E3A5F", 3.6, 1.7)}
      {/* HIPS */}
      {F("182,268 240,265 178,305",          "#1D4ED8", 4.2, 0.3)}
      {F("240,265 298,268 302,305",          "#CA8A04", 3.9, 1.2)}
      {F("178,305 240,265 302,305 240,312",  "#0F766E", 3.2, 0.8)}
      {/* LEFT LEG */}
      {F("178,305 188,368 240,312",          "#DC2626", 4.0, 1.0)}
      {F("240,312 188,368 208,368",          "#1E3A5F", 3.5, 0.2)}
      {F("188,368 185,432 208,432 208,368",  "#0F766E", 3.8, 1.6)}
      {F("185,432 190,498 208,498 208,432",  "#EA580C", 4.2, 0.6)}
      {F("190,498 195,545 210,545 208,498",  "#B91C1C", 3.2, 1.9)}
      {/* RIGHT LEG */}
      {F("302,305 292,368 240,312",          "#0F766E", 4.0, 0.9)}
      {F("240,312 292,368 272,368",          "#DC2626", 3.5, 0.4)}
      {F("292,368 295,432 272,432 272,368",  "#1D4ED8", 3.8, 1.3)}
      {F("295,432 290,498 272,498 272,432",  "#CA8A04", 4.2, 0.7)}
      {F("290,498 285,545 270,545 272,498",  "#0F766E", 3.2, 1.5)}
    </g>
  </svg>
);

export default function HeroIllustration() {
  return (
    <div className="w-full max-w-xs lg:max-w-lg">
      <HeroC />
    </div>
  );
}
