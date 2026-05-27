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
      {/* ── Character head (center) ── */}
      {/* Animal ears — outer */}
      <circle cx="168" cy="108" r="22" fill={C} fillOpacity="0.14" stroke={C} strokeOpacity="0.42" strokeWidth="2"/>
      <circle cx="232" cy="108" r="22" fill={C} fillOpacity="0.14" stroke={C} strokeOpacity="0.42" strokeWidth="2"/>
      {/* Animal ears — inner (cyan) */}
      <circle cx="168" cy="108" r="10" fill={A} fillOpacity="0.28" stroke={A} strokeOpacity="0.45" strokeWidth="1.5"/>
      <circle cx="232" cy="108" r="10" fill={A} fillOpacity="0.28" stroke={A} strokeOpacity="0.45" strokeWidth="1.5"/>
      {/* Head */}
      <circle cx="200" cy="155" r="56" fill={A} fillOpacity="0.12" stroke={A} strokeOpacity="0.62" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite" }}/>
      {/* Eyes */}
      <circle cx="182" cy="148" r="7.5" fill={C} fillOpacity="0.78"/>
      <circle cx="218" cy="148" r="7.5" fill={C} fillOpacity="0.78"/>
      {/* Eye shine */}
      <circle cx="185" cy="145" r="3" fill={A} fillOpacity="0.92"/>
      <circle cx="221" cy="145" r="3" fill={A} fillOpacity="0.92"/>
      {/* Smile */}
      <path d="M184,168 Q200,181 216,168" stroke={C} strokeOpacity="0.6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* ── Card 1: Video (top-left) ── */}
      <rect x="38" y="38" width="90" height="62" rx="5" fill={C} fillOpacity="0.08" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
      {/* Play button */}
      <polygon points="66,55 66,83 94,69" fill={A} fillOpacity="0.85"/>
      {/* REC dot */}
      <circle cx="116" cy="48" r="6" fill={C} fillOpacity="0.55"/>

      {/* ── Card 2: Article (top-right) ── */}
      <rect x="272" y="38" width="90" height="62" rx="5" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.55" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3.5s ease-in-out infinite" }}/>
      {/* Title line */}
      <line x1="284" y1="56" x2="350" y2="56" stroke={A} strokeOpacity="0.65" strokeWidth="2.5"/>
      {/* Body lines */}
      <line x1="284" y1="68" x2="344" y2="68" stroke={C} strokeOpacity="0.3" strokeWidth="1.5"/>
      <line x1="284" y1="78" x2="348" y2="78" stroke={C} strokeOpacity="0.2" strokeWidth="1.5"/>
      <line x1="284" y1="88" x2="336" y2="88" stroke={C} strokeOpacity="0.15" strokeWidth="1.5"/>

      {/* ── Card 3: Heart / SNS (bottom-left) ── */}
      <rect x="38" y="200" width="90" height="62" rx="5" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.5" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 4s ease-in-out infinite", animationDelay: "0.5s" }}/>
      {/* Heart shape */}
      <path d="M83,252 C83,252 52,236 52,220 C52,209 60,204 70,208 C76,211 82,218 83,224 C84,218 90,211 96,208 C106,204 114,209 114,220 C114,236 83,252 83,252Z" fill={A} fillOpacity="0.75"/>

      {/* ── Card 4: Stars (bottom-right) ── */}
      <rect x="272" y="200" width="90" height="62" rx="5" fill={C} fillOpacity="0.07" stroke={C} strokeOpacity="0.42" strokeWidth="2.5"/>
      {/* Star 1 (large, animated) */}
      <polygon points="305,217 308,225 317,226 310,232 313,241 305,236 297,241 300,232 293,226 302,225" fill={A} fillOpacity="0.85" className="svg-anim" style={{ animation: "svgPulse 2.5s ease-in-out infinite" }}/>
      {/* Star 2 (medium) */}
      <polygon points="330,222 333,228 340,228 334,233 337,241 330,236 323,241 326,233 320,228 327,228" fill={A} fillOpacity="0.52"/>
      {/* Star 3 (small) */}
      <polygon points="350,226 352,231 357,231 353,235 355,240 350,237 345,240 347,235 343,231 348,231" fill={A} fillOpacity="0.28"/>

      {/* ── Dashed connection lines: head → cards ── */}
      <line x1="155" y1="122" x2="128" y2="100" stroke={A} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5,4" style={{ animation: "svgDash 2s linear infinite" }}/>
      <line x1="245" y1="122" x2="272" y2="100" stroke={A} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5,4" style={{ animation: "svgDash 2.2s linear infinite" }}/>
      <line x1="153" y1="188" x2="128" y2="200" stroke={A} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5,4" style={{ animation: "svgDash 2.4s linear infinite" }}/>
      <line x1="247" y1="188" x2="272" y2="200" stroke={A} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5,4" style={{ animation: "svgDash 2.6s linear infinite" }}/>

      {/* ── Sparkles (above ears, between top cards) ── */}
      <circle cx="200" cy="82" r="4" fill={A} fillOpacity="0.72" className="svg-anim" style={{ animation: "svgPulse 2s ease-in-out infinite" }}/>
      <circle cx="178" cy="73" r="2.5" fill={A} fillOpacity="0.48" className="svg-anim" style={{ animation: "svgPulse 2.4s ease-in-out infinite", animationDelay: "0.3s" }}/>
      <circle cx="222" cy="73" r="2.5" fill={A} fillOpacity="0.48" className="svg-anim" style={{ animation: "svgPulse 2.8s ease-in-out infinite", animationDelay: "0.6s" }}/>

      {/* ── Corner brackets ── */}
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

export function IllustC03() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Media block (left) */}
      <rect x="28" y="88" width="112" height="124" rx="4" fill={C} fillOpacity="0.08" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
      <line x1="46" y1="114" x2="122" y2="114" stroke={C} strokeOpacity="0.3"  strokeWidth="2"/>
      <line x1="46" y1="132" x2="118" y2="132" stroke={A} strokeOpacity="0.42" strokeWidth="1.5"/>
      <line x1="46" y1="150" x2="122" y2="150" stroke={C} strokeOpacity="0.18" strokeWidth="1.5"/>
      <line x1="46" y1="168" x2="105" y2="168" stroke={C} strokeOpacity="0.14" strokeWidth="1.5"/>
      <circle cx="46" cy="102" r="5" fill={C} fillOpacity="0.5"/>
      <circle cx="60" cy="102" r="5" fill={A} fillOpacity="0.5"/>
      <circle cx="74" cy="102" r="5" fill={C} fillOpacity="0.28"/>
      {/* Client block (right) */}
      <rect x="260" y="88" width="112" height="124" rx="4" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.55" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3.5s ease-in-out infinite" }}/>
      <rect x="276" y="182" width="16" height="22" fill={A} fillOpacity="0.22" stroke={A} strokeOpacity="0.45" strokeWidth="1.5"/>
      <rect x="300" y="162" width="16" height="42" fill={A} fillOpacity="0.28" stroke={A} strokeOpacity="0.52" strokeWidth="1.5"/>
      <rect x="324" y="138" width="16" height="66" fill={A} fillOpacity="0.35" stroke={A} strokeOpacity="0.6"  strokeWidth="1.5"/>
      <polyline points="284,182 308,162 332,138" stroke={A} strokeOpacity="0.68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="326,127 340,127 333,140" fill={A}/>
      {/* Double-headed arrow bridge */}
      <line x1="140" y1="150" x2="260" y2="150" stroke={A} strokeOpacity="0.65" strokeWidth="3"/>
      <polygon points="140,138 140,162 120,150" fill={A}/>
      <polygon points="260,138 260,162 280,150" fill={A}/>
      {/* Center strategy node */}
      <circle cx="200" cy="150" r="28" fill={A} fillOpacity="0.18" stroke={A} strokeOpacity="0.7" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgCorePulse 2.5s ease-in-out infinite" }}/>
      <circle cx="200" cy="150" r="10" fill={A}/>
      {/* Marketing zigzag */}
      <polyline points="158,105 172,88 186,105 200,88 214,105 228,88 242,105" stroke={A} strokeOpacity="0.42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  "3": IllustC03,
  "4": IllustC04,
  "5": IllustC05,
};
