const C = "#1a1a2e";
const A = "#4AB8D8";
const ND = "#ffffff";

export function IllustC01() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Video ad — bold play circle (left) */}
      <circle cx="108" cy="108" r="75" fill={A} fillOpacity="0.12" stroke={A} strokeOpacity="0.55" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite" }}/>
      <polygon points="88,80 88,136 138,108" fill={A} fillOpacity="0.88"/>
      {/* REC dot */}
      <circle cx="140" cy="76" r="9" fill={C} fillOpacity="0.7"/>
      {/* Still image frame (right) */}
      <rect x="210" y="42" width="162" height="118" rx="4" fill={C} fillOpacity="0.07" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
      {/* Inner corner marks of frame */}
      <line x1="222" y1="54"  x2="242" y2="54"  stroke={C} strokeOpacity="0.4" strokeWidth="1.5"/>
      <line x1="222" y1="54"  x2="222" y2="74"  stroke={C} strokeOpacity="0.4" strokeWidth="1.5"/>
      <line x1="360" y1="148" x2="340" y2="148" stroke={A} strokeOpacity="0.4" strokeWidth="1.5"/>
      <line x1="360" y1="148" x2="360" y2="128" stroke={A} strokeOpacity="0.4" strokeWidth="1.5"/>
      {/* Image scene — mountain + sun */}
      <polygon points="230,148 278,96 326,148" fill={A} fillOpacity="0.14" stroke={A} strokeOpacity="0.35" strokeWidth="1.5"/>
      <circle cx="342" cy="68" r="13" fill={C} fillOpacity="0.28" stroke={C} strokeOpacity="0.35" strokeWidth="1.5"/>
      {/* Profit bars (client result) */}
      <line x1="55" y1="262" x2="345" y2="262" stroke={C} strokeOpacity="0.2" strokeWidth="2"/>
      <rect x="72"  y="232" width="32" height="30"  fill={C} fillOpacity="0.1"  stroke={C} strokeOpacity="0.35" strokeWidth="2"/>
      <rect x="120" y="212" width="32" height="50"  fill={C} fillOpacity="0.12" stroke={C} strokeOpacity="0.4"  strokeWidth="2"/>
      <rect x="168" y="188" width="32" height="74"  fill={C} fillOpacity="0.15" stroke={C} strokeOpacity="0.45" strokeWidth="2"/>
      <rect x="216" y="160" width="32" height="102" fill={A} fillOpacity="0.2"  stroke={A} strokeOpacity="0.68" strokeWidth="2" className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite" }}/>
      {/* Trend arrow */}
      <polyline points="88,232 136,212 184,188 232,160" stroke={A} strokeOpacity="0.78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="222,145 244,145 233,160" fill={A}/>
      {/* Corner brackets */}
      <line x1="28" y1="28" x2="62" y2="28" stroke={C} strokeOpacity="0.35" strokeWidth="2.5"/>
      <line x1="28" y1="28" x2="28" y2="62" stroke={C} strokeOpacity="0.35" strokeWidth="2.5"/>
      <line x1="372" y1="272" x2="338" y2="272" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
      <line x1="372" y1="272" x2="372" y2="238" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
    </svg>
  );
}

export function IllustC02() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Search bar */}
      <rect x="30" y="18" width="340" height="34" rx="17" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.72" strokeWidth="2.5"/>
      <circle cx="50" cy="35" r="7" fill={A} fillOpacity="0.55"/>
      <line x1="65" y1="31" x2="198" y2="31" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
      <line x1="65" y1="40" x2="148" y2="40" stroke={C} strokeOpacity="0.22" strokeWidth="1.5"/>
      <circle cx="345" cy="35" r="9" stroke={A} strokeOpacity="0.82" strokeWidth="2.5" fill="none"/>
      <line x1="351" y1="41" x2="360" y2="50" stroke={A} strokeOpacity="0.82" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Rising indicator */}
      <line x1="45" y1="62" x2="45" y2="52" stroke={A} strokeOpacity="0.75" strokeWidth="2.5"/>
      <polygon points="39,56 51,56 45,46" fill={A} fillOpacity="0.85"/>
      {/* Rank #1 badge */}
      <circle cx="45" cy="87" r="16" fill={A} fillOpacity="0.85" className="svg-anim" style={{ animation: "svgCorePulse 2.5s ease-in-out infinite" }}/>
      <line x1="45" y1="79" x2="45" y2="95" stroke={ND} strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="41" y1="82" x2="45" y2="79" stroke={ND} strokeWidth="3.5" strokeLinecap="round"/>
      {/* Article Card 1 (featured, #1) */}
      <rect x="68" y="62" width="304" height="60" rx="5" fill={A} fillOpacity="0.13" stroke={A} strokeOpacity="0.7" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite" }}/>
      <rect x="78" y="70" width="54" height="44" rx="3" fill={C} fillOpacity="0.15" stroke={C} strokeOpacity="0.32" strokeWidth="1.5"/>
      <polyline points="78,101 93,89 106,97 120,83 132,97" stroke={A} strokeOpacity="0.45" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <circle cx="92" cy="79" r="6" fill={A} fillOpacity="0.45"/>
      <circle cx="146" cy="76" r="5" fill={A} fillOpacity="0.75"/>
      <line x1="156" y1="76" x2="240" y2="76" stroke={A} strokeOpacity="0.58" strokeWidth="2"/>
      <line x1="146" y1="92" x2="362" y2="92" stroke={C} strokeOpacity="0.65" strokeWidth="3"/>
      <line x1="146" y1="106" x2="330" y2="106" stroke={C} strokeOpacity="0.35" strokeWidth="2"/>
      <line x1="146" y1="116" x2="200" y2="116" stroke={C} strokeOpacity="0.2" strokeWidth="1.5"/>
      {/* Rank #2 badge */}
      <circle cx="45" cy="157" r="14" stroke={C} strokeOpacity="0.42" strokeWidth="2" fill={C} fillOpacity="0.05"/>
      <circle cx="45" cy="157" r="4"  fill={C} fillOpacity="0.4"/>
      {/* Article Card 2 */}
      <rect x="68" y="134" width="304" height="50" rx="5" fill={C} fillOpacity="0.05" stroke={C} strokeOpacity="0.32" strokeWidth="2"/>
      <rect x="78" y="142" width="42" height="34" rx="2" fill={C} fillOpacity="0.1" stroke={C} strokeOpacity="0.25" strokeWidth="1.5"/>
      <circle cx="133" cy="149" r="4" fill={C} fillOpacity="0.5"/>
      <line x1="141" y1="149" x2="215" y2="149" stroke={C} strokeOpacity="0.38" strokeWidth="1.5"/>
      <line x1="133" y1="162" x2="356" y2="162" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
      <line x1="133" y1="175" x2="300" y2="175" stroke={C} strokeOpacity="0.22" strokeWidth="1.5"/>
      {/* Rank #3 badge */}
      <circle cx="45" cy="222" r="12" stroke={C} strokeOpacity="0.25" strokeWidth="1.5" fill="none"/>
      {/* Article Card 3 */}
      <rect x="68" y="202" width="304" height="46" rx="5" fill={C} fillOpacity="0.03" stroke={C} strokeOpacity="0.2" strokeWidth="1.5"/>
      <rect x="78" y="210" width="38" height="30" rx="2" fill={C} fillOpacity="0.07" stroke={C} strokeOpacity="0.18" strokeWidth="1.5"/>
      <circle cx="129" cy="216" r="4" fill={C} fillOpacity="0.35"/>
      <line x1="137" y1="216" x2="205" y2="216" stroke={C} strokeOpacity="0.28" strokeWidth="1.5"/>
      <line x1="129" y1="228" x2="352" y2="228" stroke={C} strokeOpacity="0.32" strokeWidth="2"/>
      <line x1="129" y1="240" x2="288" y2="240" stroke={C} strokeOpacity="0.18" strokeWidth="1.5"/>
      {/* Corner brackets */}
      <line x1="28" y1="28" x2="62" y2="28" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
      <line x1="28" y1="28" x2="28" y2="62" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
      <line x1="372" y1="272" x2="338" y2="272" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
      <line x1="372" y1="272" x2="372" y2="238" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
    </svg>
  );
}

export function IllustC04() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Smartphone frame (center) */}
      <rect x="152" y="28" width="96" height="168" rx="14" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.55" strokeWidth="2.5"/>
      <rect x="164" y="46" width="72" height="132" rx="4"  fill={C} fillOpacity="0.05" stroke={C} strokeOpacity="0.18" strokeWidth="1.5"/>
      {/* Notch */}
      <rect x="185" y="34" width="30" height="6" rx="3" fill={C} fillOpacity="0.28"/>
      {/* Home button */}
      <circle cx="200" cy="214" r="7" stroke={A} strokeOpacity="0.4" strokeWidth="1.5" fill="none"/>
      {/* SNS post squares */}
      <rect x="40"  y="35"  width="78" height="78" rx="6" fill={C} fillOpacity="0.07" stroke={C} strokeOpacity="0.42" strokeWidth="2.5"/>
      <rect x="282" y="35"  width="78" height="78" rx="6" fill={A} fillOpacity="0.12" stroke={A} strokeOpacity="0.52" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3.5s ease-in-out infinite" }}/>
      <rect x="35"  y="175" width="78" height="78" rx="6" fill={A} fillOpacity="0.1"  stroke={A} strokeOpacity="0.45" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 4s ease-in-out infinite", animationDelay: "0.5s" }}/>
      <rect x="287" y="175" width="78" height="78" rx="6" fill={C} fillOpacity="0.07" stroke={C} strokeOpacity="0.38" strokeWidth="2.5"/>
      {/* Content lines in posts */}
      <line x1="55" y1="60" x2="103" y2="60" stroke={A} strokeOpacity="0.38" strokeWidth="1.5"/>
      <line x1="55" y1="75" x2="95"  y2="75" stroke={C} strokeOpacity="0.22" strokeWidth="1.5"/>
      <line x1="297" y1="60" x2="345" y2="60" stroke={A} strokeOpacity="0.45" strokeWidth="1.5"/>
      <line x1="297" y1="75" x2="338" y2="75" stroke={C} strokeOpacity="0.22" strokeWidth="1.5"/>
      {/* Arrows from phone to posts */}
      <line x1="152" y1="80"  x2="120" y2="74"  stroke={A} strokeOpacity="0.5" strokeWidth="2" strokeDasharray="5,4"/>
      <line x1="248" y1="80"  x2="282" y2="74"  stroke={A} strokeOpacity="0.5" strokeWidth="2" strokeDasharray="5,4"/>
      <line x1="152" y1="168" x2="118" y2="212" stroke={A} strokeOpacity="0.42" strokeWidth="2" strokeDasharray="5,4"/>
      <line x1="248" y1="168" x2="288" y2="212" stroke={A} strokeOpacity="0.42" strokeWidth="2" strokeDasharray="5,4"/>
      {/* Engagement indicators */}
      <circle cx="112" cy="88" r="10" fill={A} fillOpacity="0.68" className="svg-anim" style={{ animation: "svgPulse 2s ease-in-out infinite" }}/>
      <circle cx="352" cy="88" r="10" fill={A} fillOpacity="0.65" className="svg-anim" style={{ animation: "svgPulse 2.2s ease-in-out infinite", animationDelay: "0.4s" }}/>
      <circle cx="108" cy="228" r="8"  fill={A} fillOpacity="0.58" className="svg-anim" style={{ animation: "svgPulse 2.5s ease-in-out infinite", animationDelay: "0.8s" }}/>
      <circle cx="356" cy="228" r="8"  fill={A} fillOpacity="0.55" className="svg-anim" style={{ animation: "svgPulse 2.8s ease-in-out infinite", animationDelay: "1.2s" }}/>
      {/* Corner brackets */}
      <line x1="28" y1="28" x2="62" y2="28" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
      <line x1="28" y1="28" x2="28" y2="62" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
      <line x1="372" y1="272" x2="338" y2="272" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
      <line x1="372" y1="272" x2="372" y2="238" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
    </svg>
  );
}

export function IllustC05() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Person — left */}
      <circle cx="102" cy="78" r="38" fill={C} fillOpacity="0.1" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
      <path d="M52,238 C52,182 72,158 102,158 C132,158 152,182 152,238" fill={C} fillOpacity="0.08" stroke={C} strokeOpacity="0.4" strokeWidth="2.5"/>
      {/* Company building — right */}
      <rect x="248" y="68" width="112" height="170" rx="3" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.55" strokeWidth="2.5"/>
      {/* Roof triangle */}
      <polygon points="248,68 360,68 304,38" fill={A} fillOpacity="0.14" stroke={A} strokeOpacity="0.42" strokeWidth="2"/>
      {/* Windows */}
      <rect x="264" y="88"  width="18" height="15" rx="2" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.35" strokeWidth="1"/>
      <rect x="293" y="88"  width="18" height="15" rx="2" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.35" strokeWidth="1"/>
      <rect x="322" y="88"  width="18" height="15" rx="2" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.35" strokeWidth="1"/>
      <rect x="264" y="118" width="18" height="15" rx="2" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.35" strokeWidth="1"/>
      <rect x="293" y="118" width="18" height="15" rx="2" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.35" strokeWidth="1"/>
      <rect x="322" y="118" width="18" height="15" rx="2" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.35" strokeWidth="1"/>
      <rect x="264" y="148" width="18" height="15" rx="2" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.35" strokeWidth="1"/>
      <rect x="293" y="148" width="18" height="15" rx="2" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.35" strokeWidth="1"/>
      {/* Building door */}
      <rect x="288" y="195" width="32" height="43" rx="3" fill={A} fillOpacity="0.28" stroke={A} strokeOpacity="0.5" strokeWidth="1.5"/>
      {/* Match connector */}
      <line x1="152" y1="158" x2="248" y2="158" stroke={A} strokeOpacity="0.65" strokeWidth="3"/>
      <circle cx="200" cy="158" r="24" fill={A} fillOpacity="0.2" stroke={A} strokeOpacity="0.72" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgCorePulse 2.5s ease-in-out infinite" }}/>
      {/* Check mark */}
      <polyline points="190,158 197,166 214,147" stroke="white" strokeOpacity="0.88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Arc at top */}
      <path d="M102,40 Q200,5 304,38" stroke={A} strokeOpacity="0.38" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="8,5"/>
      {/* Corner brackets */}
      <line x1="28" y1="28" x2="62" y2="28" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
      <line x1="28" y1="28" x2="28" y2="62" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
      <line x1="372" y1="272" x2="338" y2="272" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
      <line x1="372" y1="272" x2="372" y2="238" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
    </svg>
  );
}

export const ILLUST_MAP: Record<string, () => React.JSX.Element> = {
  "1": IllustC01,
  "2": IllustC02,
  "3": IllustC04,
  "4": IllustC05,
};
