"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const C  = "#1a1a2e";
const A  = "#4AB8D8";
const BG = "#0d1b2a";
const ND = "#ffffff";
const NP = "#c084fc";

/* ══════════════════════════════════════
   A: 有機的データアート
══════════════════════════════════════ */
const illustrationsA = [
  /* A01 広告運用 — リーチが有機的に広がるネットワーク */
  <svg key="a1" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="200" cy="150" r="90"  fill={A} fillOpacity="0.04"/>
    <circle cx="200" cy="150" r="55"  fill={A} fillOpacity="0.07"/>
    <circle cx="200" cy="150" r="25"  fill={A} fillOpacity="0.14"/>
    <circle cx="200" cy="150" r="9"   fill={A} className="svg-anim" style={{ animation: "svgPulse 2.5s ease-in-out infinite" }}/>
    <path d="M200,150 C175,125 155,108 138,95"  stroke={A} strokeOpacity="0.4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="5,4" style={{ animation: "svgDash 2.5s linear infinite" }}/>
    <path d="M200,150 C228,122 250,106 268,92"  stroke={A} strokeOpacity="0.35" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="5,4" style={{ animation: "svgDashRev 2.5s linear infinite" }}/>
    <path d="M200,150 C162,158 135,166 112,175"  stroke={C} strokeOpacity="0.25" strokeWidth="1"   fill="none" strokeLinecap="round" strokeDasharray="4,5" style={{ animation: "svgDash 3s linear infinite" }}/>
    <path d="M200,150 C240,162 268,173 292,183"  stroke={A} strokeOpacity="0.3"  strokeWidth="1"   fill="none" strokeLinecap="round" strokeDasharray="4,5" style={{ animation: "svgDashRev 3s linear infinite" }}/>
    <path d="M200,150 C188,188 178,215 170,240"  stroke={C} strokeOpacity="0.2"  strokeWidth="1"   fill="none" strokeLinecap="round" strokeDasharray="4,5" style={{ animation: "svgDash 3.5s linear infinite" }}/>
    <path d="M200,150 C218,190 232,220 242,248"  stroke={A} strokeOpacity="0.25" strokeWidth="1"   fill="none" strokeLinecap="round" strokeDasharray="4,5" style={{ animation: "svgDashRev 3.5s linear infinite" }}/>
    {([
      [138,95,16,A,0.18,0], [268,92,18,A,0.16,0.5],
      [112,175,13,C,0.15,1], [292,183,15,A,0.17,1.5],
      [170,240,11,C,0.14,2], [242,248,12,A,0.15,2.5],
    ] as [number,number,number,string,number,number][]).map(([x,y,r,col,fo,d]) => (
      <g key={`a1-${x}`}>
        <circle cx={x} cy={y} r={r*1.9} fill={col} fillOpacity={fo*0.4}/>
        <circle cx={x} cy={y} r={r}     fill={col} fillOpacity={fo} stroke={col} strokeOpacity="0.5" strokeWidth="1" className="svg-anim" style={{ animation: `svgPulse 3s ease-in-out infinite`, animationDelay: `${d}s` }}/>
        <circle cx={x} cy={y} r={r*0.35} fill={col} fillOpacity="0.9"/>
      </g>
    ))}
    {([[60,68,8,C],[340,75,9,A],[55,238,8,A],[345,230,9,C],[130,268,6,A],[275,265,6,C]] as [number,number,number,string][]).map(([x,y,r,col]) => (
      <circle key={`a1s-${x}`} cx={x} cy={y} r={r} fill={col} fillOpacity="0.12" stroke={col} strokeOpacity="0.3" strokeWidth="0.75"/>
    ))}
  </svg>,

  /* A02 SEO — 検索の波紋（同心有機リング） */
  <svg key="a2" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="200" cy="150" r="120" fill={A} fillOpacity="0.03" stroke={A} strokeOpacity="0.12" strokeWidth="1"/>
    <circle cx="200" cy="150" r="90"  fill={A} fillOpacity="0.04" stroke={A} strokeOpacity="0.18" strokeWidth="1" strokeDasharray="6,4" style={{ animation: "svgDash 4s linear infinite" }}/>
    <circle cx="200" cy="150" r="62"  fill={A} fillOpacity="0.06" stroke={A} strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="5,3" style={{ animation: "svgDashRev 3s linear infinite" }}/>
    <circle cx="200" cy="150" r="36"  fill={A} fillOpacity="0.1"  stroke={A} strokeOpacity="0.45" strokeWidth="1.5"/>
    <circle cx="200" cy="150" r="14"  fill={A} fillOpacity="0.5"  stroke={A} strokeOpacity="0.7" strokeWidth="1" className="svg-anim" style={{ animation: "svgPulse 2.5s ease-in-out infinite" }}/>
    <circle cx="200" cy="150" r="5"   fill={A}/>
    {/* Nodes on rings */}
    {([
      [200,60,6], [282,102,7], [308,198,6], [230,244,5], [115,210,6], [88,115,5],
    ] as [number,number,number][]).map(([x,y,r],i) => (
      <circle key={i} cx={x} cy={y} r={r} fill={A} fillOpacity="0.6" className="svg-anim" style={{ animation: `svgPulse 3s ease-in-out infinite`, animationDelay: `${i*0.4}s` }}/>
    ))}
    {/* Micro texture */}
    {([[142,75,A],[258,68,C],[320,152,A],[272,255,C],[128,248,A],[70,170,C]] as [number,number,string][]).map(([x,y,col],i) => (
      <circle key={`t${i}`} cx={x} cy={y} r="3" fill={col} fillOpacity="0.18"/>
    ))}
  </svg>,

  /* A03 代理事業 — 2つの有機クラスターが繋がる */
  <svg key="a3" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Left cluster */}
    <circle cx="105" cy="148" r="65" fill={C} fillOpacity="0.04"/>
    <circle cx="105" cy="148" r="40" fill={C} fillOpacity="0.07"/>
    <circle cx="105" cy="148" r="18" fill={C} fillOpacity="0.14"/>
    <circle cx="105" cy="148" r="7"  fill={C} fillOpacity="0.7" className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite" }}/>
    {([
      [62,92,11,C,0.15,0], [148,80,13,C,0.16,0.5],
      [52,188,10,C,0.14,1], [152,208,12,C,0.15,1.5],
    ] as [number,number,number,string,number,number][]).map(([x,y,r,col,fo,d]) => (
      <g key={`lc-${x}`}>
        <circle cx={x} cy={y} r={r*1.8} fill={col} fillOpacity={fo*0.4}/>
        <circle cx={x} cy={y} r={r}     fill={col} fillOpacity={fo} stroke={col} strokeOpacity="0.4" strokeWidth="1" className="svg-anim" style={{ animation: `svgPulse 3.5s ease-in-out infinite`, animationDelay: `${d}s` }}/>
      </g>
    ))}
    {/* Right cluster */}
    <circle cx="295" cy="148" r="65" fill={A} fillOpacity="0.04"/>
    <circle cx="295" cy="148" r="40" fill={A} fillOpacity="0.07"/>
    <circle cx="295" cy="148" r="18" fill={A} fillOpacity="0.14"/>
    <circle cx="295" cy="148" r="7"  fill={A} className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite", animationDelay: "0.5s" }}/>
    {([
      [252,90,13,A,0.15,0.3], [340,82,11,A,0.16,0.8],
      [248,208,11,A,0.14,1.3], [348,192,12,A,0.15,1.8],
    ] as [number,number,number,string,number,number][]).map(([x,y,r,col,fo,d]) => (
      <g key={`rc-${x}`}>
        <circle cx={x} cy={y} r={r*1.8} fill={col} fillOpacity={fo*0.4}/>
        <circle cx={x} cy={y} r={r}     fill={col} fillOpacity={fo} stroke={col} strokeOpacity="0.4" strokeWidth="1" className="svg-anim" style={{ animation: `svgPulse 3.5s ease-in-out infinite`, animationDelay: `${d}s` }}/>
      </g>
    ))}
    {/* Connection paths in center */}
    <path d="M143,128 C168,130 188,138 200,148 C212,158 232,166 258,168" stroke={A} strokeOpacity="0.5" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6,4" style={{ animation: "svgDash 2s linear infinite" }}/>
    <path d="M143,168 C168,162 188,158 200,148 C212,138 232,132 258,128" stroke={C} strokeOpacity="0.3" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="5,5" style={{ animation: "svgDashRev 2s linear infinite" }}/>
    <circle cx="200" cy="148" r="10" fill={A} fillOpacity="0.4" stroke={A} strokeOpacity="0.6" strokeWidth="1" className="svg-anim" style={{ animation: "svgPulse 2s ease-in-out infinite" }}/>
    <circle cx="200" cy="148" r="4"  fill={A}/>
  </svg>,

  /* A04 コンテンツ事業 — 有機的ブルーム（コンテンツが咲き広がる） */
  <svg key="a4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="200" cy="148" r="30" fill={A} fillOpacity="0.12"/>
    <circle cx="200" cy="148" r="14" fill={A} fillOpacity="0.5" className="svg-anim" style={{ animation: "svgPulse 2.5s ease-in-out infinite" }}/>
    <circle cx="200" cy="148" r="6"  fill={A}/>
    {/* Bloom petals — 6 directions */}
    {([0,60,120,180,240,300]).map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const ex = 200 + Math.cos(rad) * 85;
      const ey = 148 + Math.sin(rad) * 75;
      const cx1 = 200 + Math.cos(rad - 0.4) * 55;
      const cy1 = 148 + Math.sin(rad - 0.4) * 48;
      return (
        <g key={i}>
          <path d={`M200,148 C${cx1},${cy1} ${ex-Math.cos(rad)*10},${ey-Math.sin(rad)*10} ${ex},${ey}`}
            stroke={i%2===0?A:C} strokeOpacity={i%2===0?"0.45":"0.3"} strokeWidth="1.5" fill="none" strokeLinecap="round"
            strokeDasharray="5,4" style={{ animation: `${i%2===0?"svgDash":"svgDashRev"} ${2+i*0.15}s linear infinite` }}/>
          <circle cx={ex} cy={ey} r={10+i%3*3} fill={i%2===0?A:C} fillOpacity="0.2" stroke={i%2===0?A:C} strokeOpacity="0.45" strokeWidth="1"
            className="svg-anim" style={{ animation: `svgPulse ${2.5+i*0.3}s ease-in-out infinite`, animationDelay: `${i*0.3}s` }}/>
          <circle cx={ex} cy={ey} r={4} fill={i%2===0?A:C} fillOpacity="0.8"/>
          {/* Secondary buds */}
          <circle cx={200+Math.cos(rad)*130} cy={148+Math.sin(rad)*115} r="6" fill={i%2===0?A:C} fillOpacity="0.15" stroke={i%2===0?A:C} strokeOpacity="0.3" strokeWidth="0.75"/>
        </g>
      );
    })}
  </svg>,

  /* A05 有料職業紹介 — 有機ブリッジ（2つの生命体が繋がる） */
  <svg key="a5" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Left form */}
    <circle cx="95"  cy="148" r="72"  fill={C} fillOpacity="0.04"/>
    <circle cx="95"  cy="148" r="48"  fill={C} fillOpacity="0.06"/>
    <circle cx="95"  cy="148" r="26"  fill={C} fillOpacity="0.12"/>
    <circle cx="95"  cy="148" r="10"  fill={C} fillOpacity="0.5" className="svg-anim" style={{ animation: "svgPulse 3.2s ease-in-out infinite" }}/>
    {([[55,90,9,C],[135,85,11,C],[48,195,10,C],[138,200,9,C],[30,148,8,C]] as [number,number,number,string][]).map(([x,y,r,col],i) => (
      <g key={`lf-${i}`}>
        <circle cx={x} cy={y} r={r*1.6} fill={col} fillOpacity="0.08"/>
        <circle cx={x} cy={y} r={r}     fill={col} fillOpacity="0.15" stroke={col} strokeOpacity="0.35" strokeWidth="0.75"/>
      </g>
    ))}
    {/* Right form */}
    <circle cx="305" cy="148" r="72"  fill={A} fillOpacity="0.04"/>
    <circle cx="305" cy="148" r="48"  fill={A} fillOpacity="0.06"/>
    <circle cx="305" cy="148" r="26"  fill={A} fillOpacity="0.12"/>
    <circle cx="305" cy="148" r="10"  fill={A} className="svg-anim" style={{ animation: "svgPulse 3.2s ease-in-out infinite", animationDelay: "0.6s" }}/>
    {([[265,88,11,A],[345,90,9,A],[262,202,9,A],[352,198,10,A],[370,148,8,A]] as [number,number,number,string][]).map(([x,y,r,col],i) => (
      <g key={`rf-${i}`}>
        <circle cx={x} cy={y} r={r*1.6} fill={col} fillOpacity="0.08"/>
        <circle cx={x} cy={y} r={r}     fill={col} fillOpacity="0.15" stroke={col} strokeOpacity="0.35" strokeWidth="0.75"/>
      </g>
    ))}
    {/* Organic bridge */}
    <path d="M121,130 C148,115 175,110 200,110 C225,110 252,115 279,130" stroke={A} strokeOpacity="0.5" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6,4" style={{ animation: "svgDash 2.5s linear infinite" }}/>
    <path d="M121,166 C148,181 175,186 200,186 C225,186 252,181 279,166" stroke={C} strokeOpacity="0.3" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="5,4" style={{ animation: "svgDashRev 2.5s linear infinite" }}/>
    <circle cx="200" cy="148" r="22" fill={A} fillOpacity="0.12"/>
    <circle cx="200" cy="148" r="12" fill={A} fillOpacity="0.4" stroke={A} strokeOpacity="0.65" strokeWidth="1.5" className="svg-anim" style={{ animation: "svgPulse 2s ease-in-out infinite" }}/>
    <circle cx="200" cy="148" r="5"  fill={A}/>
  </svg>,
];

/* ══════════════════════════════════════
   B: ミニマル編集イラスト
══════════════════════════════════════ */
const illustrationsB = [
  /* B01 広告運用 — 精密チャート */
  <svg key="b1" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <line x1="60" y1="250" x2="340" y2="250" stroke={C} strokeOpacity="0.25" strokeWidth="0.75"/>
    <line x1="60" y1="250" x2="60"  y2="60"  stroke={C} strokeOpacity="0.18" strokeWidth="0.75"/>
    {[210,170,130,90].map((y,i) => (
      <line key={i} x1="55" y1={y} x2="340" y2={y} stroke={C} strokeOpacity="0.08" strokeWidth="0.5"/>
    ))}
    {/* Bars (thin, editorial) */}
    <rect x="82"  y="195" width="30" height="55" stroke={C} strokeOpacity="0.3" strokeWidth="0.75" fill="none"/>
    <rect x="132" y="165" width="30" height="85" stroke={C} strokeOpacity="0.32" strokeWidth="0.75" fill="none"/>
    <rect x="182" y="128" width="30" height="122" stroke={C} strokeOpacity="0.35" strokeWidth="0.75" fill="none"/>
    <rect x="232" y="88"  width="30" height="162" stroke={A} strokeOpacity="0.6"  strokeWidth="0.75" fill="none" style={{ animation: "svgBlink 3s ease-in-out infinite" }}/>
    {/* Trend line */}
    <polyline points="97,195 147,165 197,128 247,88" stroke={A} strokeOpacity="0.7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4,3" style={{ animation: "svgDash 2s linear infinite" }}/>
    <circle cx="97"  cy="195" r="3.5" stroke={A} strokeOpacity="0.7" strokeWidth="0.75" fill="none"/>
    <circle cx="147" cy="165" r="3.5" stroke={A} strokeOpacity="0.7" strokeWidth="0.75" fill="none"/>
    <circle cx="197" cy="128" r="3.5" stroke={A} strokeOpacity="0.7" strokeWidth="0.75" fill="none"/>
    <circle cx="247" cy="88"  r="5"   fill={A} fillOpacity="0.8"/>
    {/* Targeting circle */}
    <circle cx="315" cy="112" r="38" stroke={A} strokeOpacity="0.4" strokeWidth="0.75"/>
    <circle cx="315" cy="112" r="24" stroke={C} strokeOpacity="0.2" strokeWidth="0.5"/>
    <circle cx="315" cy="112" r="4"  fill={A}   fillOpacity="0.7"/>
    <line x1="315" y1="68"  x2="315" y2="82"  stroke={A} strokeOpacity="0.3" strokeWidth="0.75"/>
    <line x1="315" y1="142" x2="315" y2="156" stroke={A} strokeOpacity="0.3" strokeWidth="0.75"/>
    <line x1="271" y1="112" x2="285" y2="112" stroke={A} strokeOpacity="0.3" strokeWidth="0.75"/>
    <line x1="345" y1="112" x2="359" y2="112" stroke={A} strokeOpacity="0.3" strokeWidth="0.75"/>
    {/* Corner marks */}
    <line x1="28" y1="28" x2="44" y2="28" stroke={C} strokeOpacity="0.25" strokeWidth="0.75"/>
    <line x1="28" y1="28" x2="28" y2="44" stroke={C} strokeOpacity="0.25" strokeWidth="0.75"/>
    <line x1="372" y1="272" x2="356" y2="272" stroke={A} strokeOpacity="0.35" strokeWidth="0.75"/>
    <line x1="372" y1="272" x2="372" y2="256" stroke={A} strokeOpacity="0.35" strokeWidth="0.75"/>
  </svg>,

  /* B02 SEO — ドキュメント＋レンズ */
  <svg key="b2" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Document */}
    <rect x="55" y="45" width="180" height="220" rx="4" stroke={C} strokeOpacity="0.3" strokeWidth="0.75"/>
    <line x1="75" y1="75"  x2="215" y2="75"  stroke={C} strokeOpacity="0.2"  strokeWidth="0.75"/>
    {[100,118,136,154,172,190,208,226].map((y,i) => (
      <line key={i} x1="75" y1={y} x2={i%3===0?215:i%3===1?195:205} y2={y} stroke={i===3?A:C} strokeOpacity={i===3?0.5:0.1} strokeWidth={i===3?"0.75":"0.5"}/>
    ))}
    {/* Highlighted line (SEO result) */}
    <rect x="70" y="155" width="155" height="20" stroke={A} strokeOpacity="0.3" strokeWidth="0.5" fill={A} fillOpacity="0.04"/>
    <line x1="28" y1="28" x2="44" y2="28" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    <line x1="28" y1="28" x2="28" y2="44" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    {/* Magnifying glass */}
    <circle cx="288" cy="148" r="72" stroke={A} strokeOpacity="0.45" strokeWidth="0.75" style={{ animation: "svgBlink 4s ease-in-out infinite" }}/>
    <circle cx="288" cy="148" r="50" stroke={C} strokeOpacity="0.2"  strokeWidth="0.5"/>
    <circle cx="288" cy="148" r="28" stroke={A} strokeOpacity="0.3"  strokeWidth="0.5"/>
    <circle cx="288" cy="148" r="5"  fill={A}   fillOpacity="0.7"/>
    <line x1="321" y1="181" x2="348" y2="208" stroke={A} strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round"/>
    {/* Doc fold corner */}
    <path d="M215,45 L235,65 L215,65 Z" stroke={C} strokeOpacity="0.2" strokeWidth="0.5" fill="none"/>
    <line x1="372" y1="272" x2="356" y2="272" stroke={A} strokeOpacity="0.35" strokeWidth="0.75"/>
    <line x1="372" y1="272" x2="372" y2="256" stroke={A} strokeOpacity="0.35" strokeWidth="0.75"/>
  </svg>,

  /* B03 代理事業 — 2人の人物 */
  <svg key="b3" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Left figure */}
    <circle cx="108" cy="88"  r="22" stroke={C} strokeOpacity="0.35" strokeWidth="0.75" fill="none"/>
    <rect   x="92"  y="110"  width="32" height="75" rx="4" stroke={C} strokeOpacity="0.28" strokeWidth="0.75" fill="none"/>
    <line x1="92"  y1="128" x2="65"  y2="148" stroke={C} strokeOpacity="0.25" strokeWidth="0.75"/>
    <line x1="124" y1="128" x2="150" y2="152" stroke={A} strokeOpacity="0.4"  strokeWidth="0.75"/>
    <line x1="100" y1="185" x2="88"  y2="248" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    <line x1="116" y1="185" x2="128" y2="248" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    {/* Right figure */}
    <circle cx="292" cy="88"  r="22" stroke={A} strokeOpacity="0.45" strokeWidth="0.75" fill="none" style={{ animation: "svgBlink 3.5s ease-in-out infinite" }}/>
    <rect   x="276" y="110"  width="32" height="75" rx="4" stroke={A} strokeOpacity="0.38" strokeWidth="0.75" fill="none"/>
    <line x1="308" y1="128" x2="335" y2="148" stroke={A} strokeOpacity="0.3"  strokeWidth="0.75"/>
    <line x1="276" y1="128" x2="250" y2="152" stroke={A} strokeOpacity="0.4"  strokeWidth="0.75"/>
    <line x1="284" y1="185" x2="272" y2="248" stroke={A} strokeOpacity="0.28" strokeWidth="0.75"/>
    <line x1="300" y1="185" x2="312" y2="248" stroke={A} strokeOpacity="0.28" strokeWidth="0.75"/>
    {/* Connection arc */}
    <path d="M150,152 Q200,120 250,152" stroke={A} strokeOpacity="0.55" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="5,4" style={{ animation: "svgDash 2.5s linear infinite" }}/>
    <circle cx="200" cy="128" r="7" stroke={A} strokeOpacity="0.6" strokeWidth="0.75" fill="none" style={{ animation: "svgBlink 2s ease-in-out infinite" }}/>
    <circle cx="200" cy="128" r="3" fill={A} fillOpacity="0.7"/>
    <line x1="28" y1="28" x2="44" y2="28" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    <line x1="28" y1="28" x2="28" y2="44" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    <line x1="372" y1="272" x2="356" y2="272" stroke={A} strokeOpacity="0.35" strokeWidth="0.75"/>
    <line x1="372" y1="272" x2="372" y2="256" stroke={A} strokeOpacity="0.35" strokeWidth="0.75"/>
  </svg>,

  /* B04 コンテンツ事業 — スタジオ */
  <svg key="b4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Camera body */}
    <rect x="80" y="88" width="172" height="120" rx="8" stroke={C} strokeOpacity="0.32" strokeWidth="0.75" fill="none"/>
    <rect x="155" y="68" width="60" height="24" rx="4" stroke={C} strokeOpacity="0.25" strokeWidth="0.75" fill="none"/>
    {/* Lens */}
    <circle cx="166" cy="150" r="42" stroke={C} strokeOpacity="0.28" strokeWidth="0.75" fill="none"/>
    <circle cx="166" cy="150" r="30" stroke={A} strokeOpacity="0.4"  strokeWidth="0.75" fill="none" style={{ animation: "svgBlink 3s ease-in-out infinite" }}/>
    <circle cx="166" cy="150" r="18" stroke={C} strokeOpacity="0.2"  strokeWidth="0.5" fill="none"/>
    <circle cx="166" cy="150" r="7"  fill={A}   fillOpacity="0.7"/>
    {/* Record light */}
    <circle cx="100" cy="102" r="7"  stroke="rgba(255,80,80,0.5)" strokeWidth="0.75" fill="rgba(255,80,80,0.08)"/>
    <circle cx="100" cy="102" r="3"  fill="rgba(255,80,80,0.6)"/>
    {/* Viewfinder */}
    <rect x="248" y="105" width="28" height="20" rx="2" stroke={C} strokeOpacity="0.22" strokeWidth="0.75" fill="none"/>
    {/* Content cards (right) */}
    <rect x="290" y="72"  width="88" height="60" rx="3" stroke={C} strokeOpacity="0.22" strokeWidth="0.75" fill="none"/>
    <line x1="302" y1="90"  x2="366" y2="90"  stroke={A} strokeOpacity="0.4" strokeWidth="0.75"/>
    <line x1="302" y1="102" x2="356" y2="102" stroke={C} strokeOpacity="0.12" strokeWidth="0.5"/>
    <line x1="302" y1="114" x2="360" y2="114" stroke={C} strokeOpacity="0.12" strokeWidth="0.5"/>
    <rect x="290" y="148" width="88" height="60" rx="3" stroke={A} strokeOpacity="0.3" strokeWidth="0.75" fill="none" style={{ animation: "svgBlink 3.5s ease-in-out infinite" }}/>
    <line x1="302" y1="166" x2="366" y2="166" stroke={A} strokeOpacity="0.45" strokeWidth="0.75"/>
    <line x1="302" y1="178" x2="352" y2="178" stroke={C} strokeOpacity="0.12" strokeWidth="0.5"/>
    <line x1="302" y1="190" x2="358" y2="190" stroke={C} strokeOpacity="0.12" strokeWidth="0.5"/>
    {/* Waveform */}
    <polyline points="50,245 70,245 80,232 90,258 100,240 110,252 120,238 130,245 155,245 165,230 175,262 185,242 200,235 210,245 235,245"
      stroke={A} strokeOpacity="0.45" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="180,0" style={{ animation: "svgDash 3s linear infinite" }}/>
    <line x1="28" y1="28" x2="44" y2="28" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    <line x1="28" y1="28" x2="28" y2="44" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
  </svg>,

  /* B05 有料職業紹介 — プロフィール接続 */
  <svg key="b5" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Left profile */}
    <circle cx="110" cy="95"  r="28" stroke={C} strokeOpacity="0.32" strokeWidth="0.75" fill="none"/>
    <rect   x="65"  y="128"  width="90" height="65" rx="20" stroke={C} strokeOpacity="0.25" strokeWidth="0.75" fill="none"/>
    {/* Right profile */}
    <circle cx="290" cy="95"  r="28" stroke={A} strokeOpacity="0.5" strokeWidth="0.75" fill="none" style={{ animation: "svgBlink 3s ease-in-out infinite" }}/>
    <rect   x="245" y="128"  width="90" height="65" rx="20" stroke={A} strokeOpacity="0.38" strokeWidth="0.75" fill="none"/>
    {/* Match document center */}
    <rect x="155" y="95" width="90" height="110" rx="4" stroke={A} strokeOpacity="0.42" strokeWidth="0.75" fill="none" style={{ animation: "svgBlink 2.5s ease-in-out infinite" }}/>
    <line x1="168" y1="116" x2="232" y2="116" stroke={A} strokeOpacity="0.4" strokeWidth="0.75"/>
    <line x1="168" y1="130" x2="225" y2="130" stroke={C} strokeOpacity="0.12" strokeWidth="0.5"/>
    <line x1="168" y1="144" x2="228" y2="144" stroke={C} strokeOpacity="0.12" strokeWidth="0.5"/>
    <line x1="168" y1="158" x2="232" y2="158" stroke={A} strokeOpacity="0.35" strokeWidth="0.75"/>
    <line x1="168" y1="172" x2="220" y2="172" stroke={C} strokeOpacity="0.1"  strokeWidth="0.5"/>
    {/* Connecting dashes */}
    <path d="M155,125 C138,120 128,115 110,113" stroke={A} strokeOpacity="0.3" strokeWidth="0.5" fill="none" strokeDasharray="3,3"/>
    <path d="M245,125 C262,120 272,115 290,113" stroke={A} strokeOpacity="0.3" strokeWidth="0.5" fill="none" strokeDasharray="3,3"/>
    {/* Connection arc top */}
    <path d="M110,67 Q200,30 290,67" stroke={A} strokeOpacity="0.4" strokeWidth="0.75" fill="none" strokeLinecap="round" strokeDasharray="5,4" style={{ animation: "svgDash 3s linear infinite" }}/>
    <circle cx="200" cy="42" r="6" stroke={A} strokeOpacity="0.55" strokeWidth="0.75" fill="none"/>
    <circle cx="200" cy="42" r="2.5" fill={A} fillOpacity="0.8"/>
    <line x1="28" y1="28" x2="44" y2="28" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    <line x1="28" y1="28" x2="28" y2="44" stroke={C} strokeOpacity="0.22" strokeWidth="0.75"/>
    <line x1="372" y1="272" x2="356" y2="272" stroke={A} strokeOpacity="0.35" strokeWidth="0.75"/>
    <line x1="372" y1="272" x2="372" y2="256" stroke={A} strokeOpacity="0.35" strokeWidth="0.75"/>
  </svg>,
];

/* ══════════════════════════════════════
   C: ボールドグラフィック（刷新版）
══════════════════════════════════════ */
const illustrationsC = [
  /* C01 広告運用 — 動画・静止画でクライアントの利益に貢献 */
  <svg key="c1" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
  </svg>,

  /* C02 SEO — 検索結果にメディア記事が上位表示されるイメージ */
  <svg key="c2" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* ── Search bar ── */}
    <rect x="30" y="18" width="340" height="34" rx="17" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.72" strokeWidth="2.5"/>
    <circle cx="50" cy="35" r="7" fill={A} fillOpacity="0.55"/>
    <line x1="65" y1="31" x2="198" y2="31" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
    <line x1="65" y1="40" x2="148" y2="40" stroke={C} strokeOpacity="0.22" strokeWidth="1.5"/>
    <circle cx="345" cy="35" r="9" stroke={A} strokeOpacity="0.82" strokeWidth="2.5" fill="none"/>
    <line x1="351" y1="41" x2="360" y2="50" stroke={A} strokeOpacity="0.82" strokeWidth="2.5" strokeLinecap="round"/>
    {/* ── Rising indicator: up arrow above #1 ── */}
    <line x1="45" y1="62" x2="45" y2="52" stroke={A} strokeOpacity="0.75" strokeWidth="2.5"/>
    <polygon points="39,56 51,56 45,46" fill={A} fillOpacity="0.85"/>
    {/* ── Rank #1 badge ── */}
    <circle cx="45" cy="87" r="16" fill={A} fillOpacity="0.85" className="svg-anim" style={{ animation: "svgCorePulse 2.5s ease-in-out infinite" }}/>
    <line x1="45" y1="79" x2="45" y2="95" stroke={ND} strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="41" y1="82" x2="45" y2="79" stroke={ND} strokeWidth="3.5" strokeLinecap="round"/>
    {/* ── Article Card 1 (featured, #1) ── */}
    <rect x="68" y="62" width="304" height="60" rx="5" fill={A} fillOpacity="0.13" stroke={A} strokeOpacity="0.7" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite" }}/>
    {/* Thumbnail */}
    <rect x="78" y="70" width="54" height="44" rx="3" fill={C} fillOpacity="0.15" stroke={C} strokeOpacity="0.32" strokeWidth="1.5"/>
    <polyline points="78,101 93,89 106,97 120,83 132,97" stroke={A} strokeOpacity="0.45" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <circle cx="92" cy="79" r="6" fill={A} fillOpacity="0.45"/>
    {/* Source favicon + name */}
    <circle cx="146" cy="76" r="5" fill={A} fillOpacity="0.75"/>
    <line x1="156" y1="76" x2="240" y2="76" stroke={A} strokeOpacity="0.58" strokeWidth="2"/>
    {/* Headline */}
    <line x1="146" y1="92" x2="362" y2="92" stroke={C} strokeOpacity="0.65" strokeWidth="3"/>
    {/* Subheadline */}
    <line x1="146" y1="106" x2="330" y2="106" stroke={C} strokeOpacity="0.35" strokeWidth="2"/>
    {/* Date */}
    <line x1="146" y1="116" x2="200" y2="116" stroke={C} strokeOpacity="0.2" strokeWidth="1.5"/>
    {/* ── Rank #2 badge ── */}
    <circle cx="45" cy="157" r="14" stroke={C} strokeOpacity="0.42" strokeWidth="2" fill={C} fillOpacity="0.05"/>
    <circle cx="45" cy="157" r="4"  fill={C} fillOpacity="0.4"/>
    {/* ── Article Card 2 ── */}
    <rect x="68" y="134" width="304" height="50" rx="5" fill={C} fillOpacity="0.05" stroke={C} strokeOpacity="0.32" strokeWidth="2"/>
    <rect x="78" y="142" width="42" height="34" rx="2" fill={C} fillOpacity="0.1" stroke={C} strokeOpacity="0.25" strokeWidth="1.5"/>
    <circle cx="133" cy="149" r="4" fill={C} fillOpacity="0.5"/>
    <line x1="141" y1="149" x2="215" y2="149" stroke={C} strokeOpacity="0.38" strokeWidth="1.5"/>
    <line x1="133" y1="162" x2="356" y2="162" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
    <line x1="133" y1="175" x2="300" y2="175" stroke={C} strokeOpacity="0.22" strokeWidth="1.5"/>
    {/* ── Rank #3 badge ── */}
    <circle cx="45" cy="222" r="12" stroke={C} strokeOpacity="0.25" strokeWidth="1.5" fill="none"/>
    {/* ── Article Card 3 ── */}
    <rect x="68" y="202" width="304" height="46" rx="5" fill={C} fillOpacity="0.03" stroke={C} strokeOpacity="0.2" strokeWidth="1.5"/>
    <rect x="78" y="210" width="38" height="30" rx="2" fill={C} fillOpacity="0.07" stroke={C} strokeOpacity="0.18" strokeWidth="1.5"/>
    <circle cx="129" cy="216" r="4" fill={C} fillOpacity="0.35"/>
    <line x1="137" y1="216" x2="205" y2="216" stroke={C} strokeOpacity="0.28" strokeWidth="1.5"/>
    <line x1="129" y1="228" x2="352" y2="228" stroke={C} strokeOpacity="0.32" strokeWidth="2"/>
    <line x1="129" y1="240" x2="288" y2="240" stroke={C} strokeOpacity="0.18" strokeWidth="1.5"/>
    {/* ── Corner brackets ── */}
    <line x1="28" y1="28" x2="62" y2="28" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
    <line x1="28" y1="28" x2="28" y2="62" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
    <line x1="372" y1="272" x2="338" y2="272" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
    <line x1="372" y1="272" x2="372" y2="238" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
  </svg>,

  /* C03 代理事業 — メディアとクライアントをつなぎマーケティング施策を打つ */
  <svg key="c3" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Media block (left) */}
    <rect x="28" y="88" width="112" height="124" rx="4" fill={C} fillOpacity="0.08" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
    {/* Media screen lines */}
    <line x1="46" y1="114" x2="122" y2="114" stroke={C} strokeOpacity="0.3"  strokeWidth="2"/>
    <line x1="46" y1="132" x2="118" y2="132" stroke={A} strokeOpacity="0.42" strokeWidth="1.5"/>
    <line x1="46" y1="150" x2="122" y2="150" stroke={C} strokeOpacity="0.18" strokeWidth="1.5"/>
    <line x1="46" y1="168" x2="105" y2="168" stroke={C} strokeOpacity="0.14" strokeWidth="1.5"/>
    {/* Media header dots */}
    <circle cx="46" cy="102" r="5" fill={C} fillOpacity="0.5"/>
    <circle cx="60" cy="102" r="5" fill={A} fillOpacity="0.5"/>
    <circle cx="74" cy="102" r="5" fill={C} fillOpacity="0.28"/>
    {/* Client block (right) */}
    <rect x="260" y="88" width="112" height="124" rx="4" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.55" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3.5s ease-in-out infinite" }}/>
    {/* Client profit bars */}
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
    {/* Marketing zigzag above bridge */}
    <polyline points="158,105 172,88 186,105 200,88 214,105 228,88 242,105" stroke={A} strokeOpacity="0.42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Corner brackets */}
    <line x1="28" y1="28" x2="62" y2="28" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
    <line x1="28" y1="28" x2="28" y2="62" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
    <line x1="372" y1="272" x2="338" y2="272" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
    <line x1="372" y1="272" x2="372" y2="238" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
  </svg>,

  /* C04 コンテンツ事業 — キャラクターIPとコンテンツカード */
  <svg key="c4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Animal ears — outer */}
    <circle cx="168" cy="108" r="22" fill={C} fillOpacity="0.14" stroke={C} strokeOpacity="0.42" strokeWidth="2"/>
    <circle cx="232" cy="108" r="22" fill={C} fillOpacity="0.14" stroke={C} strokeOpacity="0.42" strokeWidth="2"/>
    {/* Animal ears — inner */}
    <circle cx="168" cy="108" r="10" fill={A} fillOpacity="0.28" stroke={A} strokeOpacity="0.45" strokeWidth="1.5"/>
    <circle cx="232" cy="108" r="10" fill={A} fillOpacity="0.28" stroke={A} strokeOpacity="0.45" strokeWidth="1.5"/>
    {/* Head */}
    <circle cx="200" cy="155" r="56" fill={A} fillOpacity="0.12" stroke={A} strokeOpacity="0.62" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3s ease-in-out infinite" }}/>
    {/* Eyes */}
    <circle cx="182" cy="148" r="7.5" fill={C} fillOpacity="0.78"/>
    <circle cx="218" cy="148" r="7.5" fill={C} fillOpacity="0.78"/>
    <circle cx="185" cy="145" r="3" fill={A} fillOpacity="0.92"/>
    <circle cx="221" cy="145" r="3" fill={A} fillOpacity="0.92"/>
    {/* Smile */}
    <path d="M184,168 Q200,181 216,168" stroke={C} strokeOpacity="0.6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    {/* Card 1: Video (top-left) */}
    <rect x="38" y="38" width="90" height="62" rx="5" fill={C} fillOpacity="0.08" stroke={C} strokeOpacity="0.45" strokeWidth="2.5"/>
    <polygon points="66,55 66,83 94,69" fill={A} fillOpacity="0.85"/>
    <circle cx="116" cy="48" r="6" fill={C} fillOpacity="0.55"/>
    {/* Card 2: Article (top-right) */}
    <rect x="272" y="38" width="90" height="62" rx="5" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.55" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 3.5s ease-in-out infinite" }}/>
    <line x1="284" y1="56" x2="350" y2="56" stroke={A} strokeOpacity="0.65" strokeWidth="2.5"/>
    <line x1="284" y1="68" x2="344" y2="68" stroke={C} strokeOpacity="0.3" strokeWidth="1.5"/>
    <line x1="284" y1="78" x2="348" y2="78" stroke={C} strokeOpacity="0.2" strokeWidth="1.5"/>
    <line x1="284" y1="88" x2="336" y2="88" stroke={C} strokeOpacity="0.15" strokeWidth="1.5"/>
    {/* Card 3: Heart / SNS (bottom-left) */}
    <rect x="38" y="200" width="90" height="62" rx="5" fill={A} fillOpacity="0.1" stroke={A} strokeOpacity="0.5" strokeWidth="2.5" className="svg-anim" style={{ animation: "svgPulse 4s ease-in-out infinite", animationDelay: "0.5s" }}/>
    <path d="M83,252 C83,252 52,236 52,220 C52,209 60,204 70,208 C76,211 82,218 83,224 C84,218 90,211 96,208 C106,204 114,209 114,220 C114,236 83,252 83,252Z" fill={A} fillOpacity="0.75"/>
    {/* Card 4: Stars (bottom-right) */}
    <rect x="272" y="200" width="90" height="62" rx="5" fill={C} fillOpacity="0.07" stroke={C} strokeOpacity="0.42" strokeWidth="2.5"/>
    <polygon points="305,217 308,225 317,226 310,232 313,241 305,236 297,241 300,232 293,226 302,225" fill={A} fillOpacity="0.85" className="svg-anim" style={{ animation: "svgPulse 2.5s ease-in-out infinite" }}/>
    <polygon points="330,222 333,228 340,228 334,233 337,241 330,236 323,241 326,233 320,228 327,228" fill={A} fillOpacity="0.52"/>
    <polygon points="350,226 352,231 357,231 353,235 355,240 350,237 345,240 347,235 343,231 348,231" fill={A} fillOpacity="0.28"/>
    {/* Connection lines */}
    <line x1="155" y1="122" x2="128" y2="100" stroke={A} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5,4" style={{ animation: "svgDash 2s linear infinite" }}/>
    <line x1="245" y1="122" x2="272" y2="100" stroke={A} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5,4" style={{ animation: "svgDash 2.2s linear infinite" }}/>
    <line x1="153" y1="188" x2="128" y2="200" stroke={A} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5,4" style={{ animation: "svgDash 2.4s linear infinite" }}/>
    <line x1="247" y1="188" x2="272" y2="200" stroke={A} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5,4" style={{ animation: "svgDash 2.6s linear infinite" }}/>
    {/* Sparkles */}
    <circle cx="200" cy="82" r="4" fill={A} fillOpacity="0.72" className="svg-anim" style={{ animation: "svgPulse 2s ease-in-out infinite" }}/>
    <circle cx="178" cy="73" r="2.5" fill={A} fillOpacity="0.48" className="svg-anim" style={{ animation: "svgPulse 2.4s ease-in-out infinite", animationDelay: "0.3s" }}/>
    <circle cx="222" cy="73" r="2.5" fill={A} fillOpacity="0.48" className="svg-anim" style={{ animation: "svgPulse 2.8s ease-in-out infinite", animationDelay: "0.6s" }}/>
    {/* Corner brackets */}
    <line x1="28" y1="28" x2="62" y2="28" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
    <line x1="28" y1="28" x2="28" y2="62" stroke={C} strokeOpacity="0.3" strokeWidth="2.5"/>
    <line x1="372" y1="272" x2="338" y2="272" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
    <line x1="372" y1="272" x2="372" y2="238" stroke={A} strokeOpacity="0.5" strokeWidth="2.5"/>
  </svg>,

  /* C05 有料職業紹介 — 優秀な人材と企業をマッチング */
  <svg key="c5" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
  </svg>,
];

/* ══════════════════════════════════════
   D: Neural Poly
   Brain mesh shared constants
══════════════════════════════════════ */
// 12-vertex brain silhouette (dual-lobe top)
const BPTS: [number,number][] = [
  [152, 55],[200, 72],[248, 55],   // i0 LEFT PEAK, i1 top-dip, i2 RIGHT PEAK
  [312, 98],[340,148],[318,202],   // i3-i5 right side
  [268,238],[200,252],[132,238],   // i6-i8 bottom
  [ 82,202],[ 60,148],[ 88, 98],  // i9-i11 left side
];
const BCX = 200, BCY = 148; // brain center

const illustrationsD = [
  /* D01 広告運用 — Neural Broadcast（脳が全方位に信号を発信） */
  <svg key="d1" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Brain mesh: fan triangulation */}
    {BPTS.map(([x,y],i) => { const [nx,ny]=BPTS[(i+1)%12]; return (
      <polygon key={i} points={`${x},${y} ${nx},${ny} ${BCX},${BCY}`}
        fill={A} fillOpacity={i%2===0?0.055:0.03} stroke={A} strokeOpacity={i%2===0?0.26:0.16} strokeWidth="0.75"/>
    );})}
    {/* Signals: broadcast from center to 3 directions */}
    <line x1={BCX} y1={BCY} x2="340" y2="148" stroke={A} strokeOpacity="0.8" strokeWidth="1.5" strokeDasharray="8,6" style={{ animation: "svgDash 1.8s linear infinite" }}/>
    <line x1={BCX} y1={BCY} x2="200" y2="72"  stroke={NP} strokeOpacity="0.75" strokeWidth="1.2" strokeDasharray="7,5" style={{ animation: "svgDash 2.2s linear infinite", animationDelay: "0.4s" }}/>
    <line x1={BCX} y1={BCY} x2="60"  y2="148" stroke={A} strokeOpacity="0.65" strokeWidth="1"   strokeDasharray="6,5" style={{ animation: "svgDash 2.6s linear infinite", animationDelay: "0.8s" }}/>
    {/* Center node (pink = transmitter) */}
    <circle cx={BCX} cy={BCY} r="18" fill={NP} fillOpacity="0.09"/>
    <circle cx={BCX} cy={BCY} r="9"  fill={NP} fillOpacity="0.2"/>
    <circle cx={BCX} cy={BCY} r="4.5" fill={NP} className="svg-anim" style={{ animation: "svgCorePulse 2s ease-in-out infinite" }}/>
    {/* Boundary nodes */}
    {BPTS.map(([x,y],i) => { const acc=i===0||i===2; const col=acc?NP:A; return (
      <g key={i}>
        <circle cx={x} cy={y} r={acc?13:9} fill={col} fillOpacity="0.09"/>
        <circle cx={x} cy={y} r={acc?6.5:4.5} fill={col} fillOpacity="0.22"/>
        <circle cx={x} cy={y} r={acc?3:2.5} fill={col} className="svg-anim"
          style={{ animation:`${acc?"svgNeuralFire":"svgPulse"} ${2.6+i*0.12}s ease-in-out infinite`, animationDelay:`${(i*0.18)%2}s` }}/>
      </g>
    );})}
  </svg>,

  /* D02 SEOメディア — Neural Ascent（脳内で検索ランキングが上昇するパス） */
  <svg key="d2" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Brain mesh */}
    {BPTS.map(([x,y],i) => { const [nx,ny]=BPTS[(i+1)%12]; return (
      <polygon key={i} points={`${x},${y} ${nx},${ny} ${BCX},${BCY}`}
        fill={A} fillOpacity={i%2===0?0.055:0.03} stroke={A} strokeOpacity={i%2===0?0.26:0.16} strokeWidth="0.75"/>
    );})}
    {/* Ascending signal: bottom → center → top-right peak */}
    <path d="M200,252 L200,148 L200,72 L248,55" stroke={A} strokeOpacity="0.82" strokeWidth="1.5"
      strokeLinecap="round" strokeDasharray="10,8" style={{ animation: "svgDash 2s linear infinite" }}/>
    {/* Right-peak glow signal */}
    <path d="M200,148 L248,55" stroke={NP} strokeOpacity="0.7" strokeWidth="1.2"
      strokeLinecap="round" strokeDasharray="7,5" style={{ animation: "svgDash 2.5s linear infinite", animationDelay: "0.5s" }}/>
    {/* Center node (cyan) */}
    <circle cx={BCX} cy={BCY} r="14" fill={A} fillOpacity="0.1"/>
    <circle cx={BCX} cy={BCY} r="7"  fill={A} fillOpacity="0.22"/>
    <circle cx={BCX} cy={BCY} r="3.5" fill={A} className="svg-anim" style={{ animation: "svgCorePulse 2.2s ease-in-out infinite" }}/>
    {/* Boundary nodes — right-peak (i=2) is pink = top result */}
    {BPTS.map(([x,y],i) => { const acc=i===2; const col=acc?NP:A; return (
      <g key={i}>
        <circle cx={x} cy={y} r={acc?14:9} fill={col} fillOpacity="0.09"/>
        <circle cx={x} cy={y} r={acc?7:4.5} fill={col} fillOpacity="0.22"/>
        <circle cx={x} cy={y} r={acc?3.5:2.5} fill={col} className="svg-anim"
          style={{ animation:`${acc?"svgNeuralFire":"svgPulse"} ${2.6+i*0.12}s ease-in-out infinite`, animationDelay:`${(i*0.18)%2}s` }}/>
      </g>
    );})}
  </svg>,

  /* D03 代理事業 — Neural Synapse（左右の脳葉が中心で繋がる） */
  <svg key="d3" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Brain mesh */}
    {BPTS.map(([x,y],i) => { const [nx,ny]=BPTS[(i+1)%12]; return (
      <polygon key={i} points={`${x},${y} ${nx},${ny} ${BCX},${BCY}`}
        fill={A} fillOpacity={i%2===0?0.055:0.03} stroke={A} strokeOpacity={i%2===0?0.26:0.16} strokeWidth="0.75"/>
    );})}
    {/* Horizontal bridge signal: left-lobe → center → right-lobe */}
    <path d="M152,55 L200,72 L248,55" stroke={NP} strokeOpacity="0.75" strokeWidth="1.5"
      strokeLinecap="round" strokeDasharray="9,7" style={{ animation: "svgDash 2.2s linear infinite" }}/>
    <line x1="60" y1="148" x2="340" y2="148" stroke={A} strokeOpacity="0.55" strokeWidth="1"
      strokeDasharray="6,5" style={{ animation: "svgDash 3s linear infinite", animationDelay: "0.5s" }}/>
    {/* Center (corpus callosum node, pink) */}
    <circle cx={BCX} cy={BCY} r="18" fill={NP} fillOpacity="0.09"/>
    <circle cx={BCX} cy={BCY} r="9"  fill={NP} fillOpacity="0.22"/>
    <circle cx={BCX} cy={BCY} r="4.5" fill={NP} className="svg-anim" style={{ animation: "svgCorePulse 2s ease-in-out infinite" }}/>
    {/* Boundary nodes — both peaks (i=0,i=2) pink = two parties */}
    {BPTS.map(([x,y],i) => { const acc=i===0||i===2; const col=acc?NP:A; return (
      <g key={i}>
        <circle cx={x} cy={y} r={acc?13:9} fill={col} fillOpacity="0.09"/>
        <circle cx={x} cy={y} r={acc?6.5:4.5} fill={col} fillOpacity="0.22"/>
        <circle cx={x} cy={y} r={acc?3:2.5} fill={col} className="svg-anim"
          style={{ animation:`${acc?"svgNeuralFire":"svgPulse"} ${2.6+i*0.12}s ease-in-out infinite`, animationDelay:`${(i*0.18)%2}s` }}/>
      </g>
    );})}
  </svg>,

  /* D04 コンテンツ事業 — Neural Bloom（脳から4方向にコンテンツが爆発的に発信） */
  <svg key="d4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Brain mesh */}
    {BPTS.map(([x,y],i) => { const [nx,ny]=BPTS[(i+1)%12]; return (
      <polygon key={i} points={`${x},${y} ${nx},${ny} ${BCX},${BCY}`}
        fill={A} fillOpacity={i%2===0?0.055:0.03} stroke={A} strokeOpacity={i%2===0?0.26:0.16} strokeWidth="0.75"/>
    );})}
    {/* 4-way radial signals: creative burst from center */}
    <line x1={BCX} y1={BCY} x2="200" y2="55"  stroke={NP} strokeOpacity="0.82" strokeWidth="1.5" strokeDasharray="8,6" style={{ animation: "svgDash 1.8s linear infinite" }}/>
    <line x1={BCX} y1={BCY} x2="340" y2="148" stroke={A}  strokeOpacity="0.78" strokeWidth="1.4" strokeDasharray="8,6" style={{ animation: "svgDash 2s linear infinite",   animationDelay: "0.25s" }}/>
    <line x1={BCX} y1={BCY} x2="200" y2="252" stroke={NP} strokeOpacity="0.68" strokeWidth="1.2" strokeDasharray="7,5" style={{ animation: "svgDash 2.2s linear infinite", animationDelay: "0.5s" }}/>
    <line x1={BCX} y1={BCY} x2="60"  y2="148" stroke={A}  strokeOpacity="0.68" strokeWidth="1.2" strokeDasharray="7,5" style={{ animation: "svgDash 2.4s linear infinite", animationDelay: "0.75s" }}/>
    {/* Center (creative core, pink) */}
    <circle cx={BCX} cy={BCY} r="20" fill={NP} fillOpacity="0.09"/>
    <circle cx={BCX} cy={BCY} r="10" fill={NP} fillOpacity="0.22"/>
    <circle cx={BCX} cy={BCY} r="5"  fill={NP} className="svg-anim" style={{ animation: "svgCorePulse 1.8s ease-in-out infinite" }}/>
    {/* Boundary nodes — top cluster (i=0,1,2) = creative sparks */}
    {BPTS.map(([x,y],i) => { const acc=i===0||i===1||i===2; const col=acc?NP:A; return (
      <g key={i}>
        <circle cx={x} cy={y} r={acc?13:9} fill={col} fillOpacity="0.09"/>
        <circle cx={x} cy={y} r={acc?6.5:4.5} fill={col} fillOpacity="0.22"/>
        <circle cx={x} cy={y} r={acc?3:2.5} fill={col} className="svg-anim"
          style={{ animation:`${acc?"svgNeuralFire":"svgPulse"} ${2.6+i*0.12}s ease-in-out infinite`, animationDelay:`${(i*0.18)%2}s` }}/>
      </g>
    );})}
  </svg>,

  /* D05 有料職業紹介 — Neural Match（脳が2人の人材をマッチング） */
  <svg key="d5" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Brain mesh */}
    {BPTS.map(([x,y],i) => { const [nx,ny]=BPTS[(i+1)%12]; return (
      <polygon key={i} points={`${x},${y} ${nx},${ny} ${BCX},${BCY}`}
        fill={A} fillOpacity={i%2===0?0.055:0.03} stroke={A} strokeOpacity={i%2===0?0.26:0.16} strokeWidth="0.75"/>
    );})}
    {/* Person nodes (above brain, representing candidates & companies) */}
    {/* Left person */}
    <line x1="110" y1="22" x2="152" y2="55" stroke={A} strokeOpacity="0.5" strokeWidth="0.75" strokeDasharray="4,3"/>
    <line x1="152" y1="55" x2={BCX} y2={BCY} stroke={NP} strokeOpacity="0.72" strokeWidth="1.3" strokeDasharray="8,6" style={{ animation: "svgDash 2.2s linear infinite" }}/>
    {/* Right person */}
    <line x1="290" y1="22" x2="248" y2="55" stroke={A} strokeOpacity="0.5" strokeWidth="0.75" strokeDasharray="4,3"/>
    <line x1="248" y1="55" x2={BCX} y2={BCY} stroke={NP} strokeOpacity="0.72" strokeWidth="1.3" strokeDasharray="8,6" style={{ animation: "svgDash 2.2s linear infinite", animationDelay: "0.6s" }}/>
    {/* Center match node (pink) */}
    <circle cx={BCX} cy={BCY} r="20" fill={NP} fillOpacity="0.09"/>
    <circle cx={BCX} cy={BCY} r="10" fill={NP} fillOpacity="0.22"/>
    <circle cx={BCX} cy={BCY} r="5"  fill={NP} className="svg-anim" style={{ animation: "svgCorePulse 2s ease-in-out infinite" }}/>
    {/* Person nodes (left & right, outside brain) */}
    {([[110,22,NP,0],[290,22,NP,0.4]] as [number,number,string,number][]).map(([x,y,col,d],i) => (
      <g key={`p${i}`}>
        <circle cx={x} cy={y} r="14" fill={col} fillOpacity="0.1"/>
        <circle cx={x} cy={y} r="7"  fill={col} fillOpacity="0.22"/>
        <circle cx={x} cy={y} r="3.5" fill={col} className="svg-anim"
          style={{ animation: `svgNeuralFire ${2.4+i*0.2}s ease-in-out infinite`, animationDelay: `${d}s` }}/>
      </g>
    ))}
    {/* Boundary nodes — peaks (i=0,i=2) pink */}
    {BPTS.map(([x,y],i) => { const acc=i===0||i===2; const col=acc?NP:A; return (
      <g key={i}>
        <circle cx={x} cy={y} r={acc?13:9} fill={col} fillOpacity="0.09"/>
        <circle cx={x} cy={y} r={acc?6.5:4.5} fill={col} fillOpacity="0.22"/>
        <circle cx={x} cy={y} r={acc?3:2.5} fill={col} className="svg-anim"
          style={{ animation:`${acc?"svgNeuralFire":"svgPulse"} ${2.6+i*0.12}s ease-in-out infinite`, animationDelay:`${(i*0.18)%2}s` }}/>
      </g>
    );})}
  </svg>,
];

/* ══════════════════════════════════════
   E: Low-Poly Human
══════════════════════════════════════ */
// Facet helper: shimmer animation per polygon
const EF = (key: string, pts: string, fill: string, dur: number, delay: number) => (
  <polygon key={key} points={pts} fill={fill} style={{ opacity:0.85, animation:`svgFacet ${dur}s ease-in-out infinite`, animationDelay:`${delay}s` }}/>
);

const illustrationsE = [
  /* E01 広告運用 — 両腕を広げてブロードキャスト */
  <svg key="e1" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g className="svg-anim" style={{ animation:"svgFloat 5s ease-in-out infinite" }}>
      {EF("a","200,22 178,40 200,65",        "#2C7A7B",3.2,0.0)}
      {EF("b","200,22 200,65 222,40",        "#1E3A5F",2.8,0.3)}
      {EF("c","178,40 192,75 200,65",        "#1D4ED8",3.5,0.6)}
      {EF("d","222,40 200,65 208,75",        "#0F766E",3.0,0.9)}
      {EF("e","192,75 208,75 205,87 195,87", "#374151",4.0,0.2)}
      {/* Left shoulder & arm spread wide */}
      {EF("f","195,87 168,100 65,118 108,135",  "#DC2626",3.8,0.5)}
      {EF("g","65,118 50,145 95,145 108,135",    "#EA580C",3.2,0.8)}
      {EF("h","108,135 95,145 100,165 130,155",  "#CA8A04",3.5,1.1)}
      {/* Right shoulder & arm spread wide */}
      {EF("i","205,87 232,100 335,118 292,135",  "#1D4ED8",3.8,0.6)}
      {EF("j","335,118 350,145 305,145 292,135", "#0F766E",3.2,0.9)}
      {EF("k","292,135 305,145 300,165 270,155", "#2C7A7B",3.5,1.2)}
      {/* Chest / torso */}
      {EF("l","168,100 205,87 200,145 168,148",  "#CA8A04",4.5,0.7)}
      {EF("m","195,87 205,87 200,145",            "#1D4ED8",3.8,1.0)}
      {EF("n","205,87 232,100 232,148 200,145",   "#DC2626",4.2,1.3)}
      {EF("o","168,148 200,145 192,210",           "#EA580C",3.5,1.4)}
      {EF("p","200,145 232,148 208,210",           "#0F766E",4.0,0.5)}
      {/* Lower body */}
      {EF("q","192,210 208,210 205,265 195,265",  "#1E3A5F",3.6,1.7)}
      {EF("r","195,265 175,300 205,300 205,265",  "#DC2626",4.0,1.0)}
      {EF("s","205,265 205,300 225,300 215,265",  "#0F766E",3.5,0.2)}
    </g>
  </svg>,

  /* E02 SEOメディア — 右腕を高く上げて順位上昇 */
  <svg key="e2" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g className="svg-anim" style={{ animation:"svgFloat 5.5s ease-in-out infinite", animationDelay:"0.5s" }}>
      {EF("a","200,20 178,38 200,63",        "#2C7A7B",3.2,0.0)}
      {EF("b","200,20 200,63 222,38",        "#1E3A5F",2.8,0.3)}
      {EF("c","178,38 190,73 200,63",        "#1D4ED8",3.5,0.6)}
      {EF("d","222,38 200,63 210,73",        "#0F766E",3.0,0.9)}
      {EF("e","190,73 210,73 207,85 193,85", "#374151",4.0,0.2)}
      {/* Left arm hanging down */}
      {EF("f","155,100 193,85 182,140 148,140","#DC2626",3.8,0.5)}
      {EF("g","148,140 182,140 175,195 142,195","#B91C1C",3.2,0.8)}
      {EF("h","142,195 175,195 172,232",       "#CA8A04",3.5,1.1)}
      {/* Right arm raised UP */}
      {EF("i","207,85 245,100 258,50 240,22",  "#0F766E",3.8,0.6)}
      {EF("j","245,100 265,118 275,68 258,50", "#2C7A7B",3.2,0.9)}
      {EF("k","265,118 268,155 280,110 275,68","#1D4ED8",3.5,1.2)}
      {/* Chest */}
      {EF("l","155,100 193,85 190,145 155,148","#CA8A04",4.5,0.7)}
      {EF("m","193,85 207,85 202,145 190,145", "#1D4ED8",3.8,1.0)}
      {EF("n","207,85 245,100 248,148 202,145","#DC2626",4.2,1.3)}
      {/* Torso */}
      {EF("o","155,148 190,145 182,215",        "#EA580C",3.5,1.4)}
      {EF("p","190,145 248,148 215,215",        "#0F766E",4.0,0.5)}
      {/* Lower body */}
      {EF("q","182,215 215,215 210,268 188,268","#1E3A5F",3.6,1.7)}
      {EF("r","188,268 170,300 200,300 210,268","#DC2626",4.0,1.0)}
      {EF("s","210,268 200,300 228,300 222,268","#0F766E",3.5,0.2)}
    </g>
  </svg>,

  /* E03 代理事業 — 2人の人物が向き合う */
  <svg key="e3" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g>
      {/* Left figure */}
      {EF("la","105,18 88,32 105,52",        "#2C7A7B",3.2,0.0)}
      {EF("lb","105,18 105,52 122,32",       "#1E3A5F",2.8,0.3)}
      {EF("lc","88,32 98,60 105,52",         "#1D4ED8",3.5,0.6)}
      {EF("ld","122,32 105,52 112,60",       "#0F766E",3.0,0.9)}
      {EF("le","98,60 112,60 110,70 100,70", "#374151",4.0,0.2)}
      {EF("lf","62,80 100,70 98,115 62,118", "#DC2626",3.8,0.5)}
      {EF("lg","100,70 138,80 142,118 98,115","#EA580C",3.2,0.8)}
      {/* arm reaching right */}
      {EF("lh","138,80 168,88 175,118 142,118","#CA8A04",3.5,1.1)}
      {EF("li","168,88 190,100 195,128 175,118","#0F766E",3.2,1.4)}
      {EF("lj","98,115 142,118 135,170 92,172","#1D4ED8",4.2,0.7)}
      {EF("lk","92,172 135,170 128,215 85,218","#DC2626",3.8,1.0)}
      {EF("ll","85,218 102,260 118,258 98,215","#0F766E",3.5,1.3)}
      {/* Right figure (mirror) */}
      {EF("ra","295,18 278,32 295,52",        "#0F766E",3.2,0.4)}
      {EF("rb","295,18 295,52 312,32",        "#1D4ED8",2.8,0.7)}
      {EF("rc","278,32 288,60 295,52",        "#DC2626",3.5,1.0)}
      {EF("rd","312,32 295,52 302,60",        "#2C7A7B",3.0,1.3)}
      {EF("re","288,60 302,60 300,70 290,70", "#374151",4.0,0.6)}
      {EF("rf","262,80 290,70 258,118 222,118","#CA8A04",3.8,0.9)}
      {EF("rg","290,70 338,80 338,118 298,115","#1E3A5F",3.2,1.2)}
      {/* arm reaching left */}
      {EF("rh","262,80 232,88 225,118 258,118","#DC2626",3.5,1.5)}
      {EF("ri","232,88 210,100 205,128 225,118","#EA580C",3.2,1.8)}
      {EF("rj","258,118 298,115 305,170 265,172","#0F766E",4.2,1.1)}
      {EF("rk","265,172 305,170 312,215 272,215","#1D4ED8",3.8,1.4)}
      {EF("rl","272,215 298,260 315,258 302,215","#CA8A04",3.5,1.7)}
      {/* Connection glow between hands */}
      <circle cx="200" cy="114" r="10" fill="#4AB8D8" fillOpacity="0.25" className="svg-anim" style={{ animation:"svgCorePulse 2s ease-in-out infinite" }}/>
      <circle cx="200" cy="114" r="5"  fill="#4AB8D8" fillOpacity="0.75" className="svg-anim" style={{ animation:"svgCorePulse 2s ease-in-out infinite" }}/>
    </g>
  </svg>,

  /* E04 コンテンツ事業 — 創造的な動きのポーズ */
  <svg key="e4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g className="svg-anim" style={{ animation:"svgFloat 4.5s ease-in-out infinite", animationDelay:"1s" }}>
      {EF("a","200,15 178,35 200,60",        "#CA8A04",3.2,0.0)}
      {EF("b","200,15 200,60 222,35",        "#DC2626",2.8,0.3)}
      {EF("c","178,35 190,68 200,60",        "#EA580C",3.5,0.6)}
      {EF("d","222,35 200,60 210,68",        "#B91C1C",3.0,0.9)}
      {EF("e","190,68 210,68 207,80 193,80", "#374151",4.0,0.2)}
      {/* Left arm raised diagonally up-left */}
      {EF("f","155,92 193,80 178,128 145,120","#0F766E",3.8,0.5)}
      {EF("g","145,120 178,128 165,175 130,162","#2C7A7B",3.2,0.8)}
      {EF("h","130,162 165,175 158,215 122,205","#1D4ED8",3.5,1.1)}
      {/* Right arm reaching forward-down */}
      {EF("i","207,80 248,92 262,138 225,142","#DC2626",3.8,0.6)}
      {EF("j","225,142 262,138 268,192 230,188","#EA580C",3.2,0.9)}
      {EF("k","230,188 268,192 272,232 235,228","#CA8A04",3.5,1.2)}
      {/* Chest — tilted pose */}
      {EF("l","155,92 193,80 185,140 155,142","#CA8A04",4.5,0.7)}
      {EF("m","193,80 207,80 200,140 185,140","#1D4ED8",3.8,1.0)}
      {EF("n","207,80 248,92 248,142 200,140","#B91C1C",4.2,1.3)}
      {/* Torso + lower */}
      {EF("o","155,142 185,140 178,205",      "#0F766E",3.5,1.4)}
      {EF("p","185,140 248,142 215,205",      "#DC2626",4.0,0.5)}
      {EF("q","178,205 215,205 210,258 185,258","#1E3A5F",3.6,1.7)}
      {EF("r","185,258 168,295 202,295 210,258","#EA580C",4.0,1.0)}
      {EF("s","210,258 202,295 228,295 222,258","#0F766E",3.5,0.2)}
    </g>
  </svg>,

  /* E05 有料職業紹介 — 握手するマッチングシーン */
  <svg key="e5" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g>
      {/* Left figure */}
      {EF("la","100,18 82,34 100,56",       "#2C7A7B",3.2,0.0)}
      {EF("lb","100,18 100,56 118,34",      "#1E3A5F",2.8,0.3)}
      {EF("lc","82,34 94,62 100,56",        "#DC2626",3.5,0.6)}
      {EF("ld","118,34 100,56 106,62",      "#0F766E",3.0,0.9)}
      {EF("le","94,62 106,62 104,72 96,72", "#374151",4.0,0.2)}
      {/* Left figure body */}
      {EF("lf","58,82 96,72 92,118 56,120", "#DC2626",3.8,0.5)}
      {EF("lg","96,72 136,82 138,118 92,118","#CA8A04",3.2,0.8)}
      {/* Left arm extending right (for handshake) */}
      {EF("lh","136,82 168,92 175,125 138,118","#EA580C",3.5,1.1)}
      {EF("li","168,92 195,108 195,138 175,125","#0F766E",3.2,1.4)}
      {EF("lj","92,118 138,118 130,175 86,175","#1D4ED8",4.2,0.7)}
      {EF("lk","86,175 130,175 125,225 80,228","#B91C1C",3.8,1.0)}
      {/* Right figure (mirror) */}
      {EF("ra","300,18 282,34 300,56",      "#0F766E",3.2,0.4)}
      {EF("rb","300,18 300,56 318,34",      "#1D4ED8",2.8,0.7)}
      {EF("rc","282,34 294,62 300,56",      "#CA8A04",3.5,1.0)}
      {EF("rd","318,34 300,56 306,62",      "#2C7A7B",3.0,1.3)}
      {EF("re","294,62 306,62 304,72 296,72","#374151",4.0,0.6)}
      {EF("rf","264,82 296,72 262,118 222,118","#0F766E",3.8,0.9)}
      {EF("rg","296,72 342,82 344,120 308,118","#1E3A5F",3.2,1.2)}
      {/* Right arm extending left (for handshake) */}
      {EF("rh","264,82 232,92 225,125 262,118","#1D4ED8",3.5,1.5)}
      {EF("ri","232,92 205,108 205,138 225,125","#DC2626",3.2,1.8)}
      {EF("rj","262,118 308,118 310,175 264,175","#EA580C",4.2,1.1)}
      {EF("rk","264,175 310,175 315,225 268,228","#0F766E",3.8,1.4)}
      {/* Handshake glow */}
      <circle cx="200" cy="123" r="14" fill="#4AB8D8" fillOpacity="0.18" className="svg-anim" style={{ animation:"svgCorePulse 2.2s ease-in-out infinite" }}/>
      <circle cx="200" cy="123" r="7"  fill="#4AB8D8" fillOpacity="0.7"  className="svg-anim" style={{ animation:"svgCorePulse 2.2s ease-in-out infinite" }}/>
    </g>
  </svg>,
];

const SETS: Record<string, React.ReactElement[]> = {
  A: illustrationsA,
  B: illustrationsB,
  C: illustrationsC,
  D: illustrationsD,
  E: illustrationsE,
};

interface Service { id: string; title: string; description: string; }

export default function ServiceSection({ services }: { services: Service[] }) {
  const illustrations = illustrationsC;
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0");
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "none";
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white services-clip">
      <div
        ref={(el) => { itemRefs.current[services.length] = el; }}
        data-delay="0"
        className="px-8 lg:px-16 pt-32 pb-8"
        style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
      >
        <div className="flex items-end justify-between border-b border-black/8 pb-8">
          <div>
            <p className="text-[#4AB8D8] text-xs tracking-[0.3em] uppercase mb-3">Services</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0d0d0d] tracking-tight">サービス</h2>
          </div>
          <Link href="/services" className="hidden sm:flex items-center gap-2 text-black/30 hover:text-[#0d0d0d] text-sm transition-colors duration-200 group">
            すべて見る
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </div>

      {services.map((service, i) => {
        const isEven = i % 2 === 1;
        return (
          <div
            key={service.id}
            ref={(el) => { itemRefs.current[i] = el; }}
            data-delay={String(i * 80)}
            className="border-t border-black/6"
            style={{ opacity: 0, transform: "translateY(30px)", transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)` }}
          >
            <div className={`grid grid-cols-1 md:grid-cols-2 min-h-[400px] ${isEven ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="flex flex-col justify-center px-8 lg:px-16 py-16 bg-white">
                <p className="text-[#4AB8D8] text-xs tracking-[0.3em] font-mono mb-6">
                  SERVICE {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4AB8D8] mb-5 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-black/45 text-sm leading-relaxed max-w-md mb-8">{service.description}</p>
                <Link href={`/services/${service.id}`} className="inline-flex items-center gap-3 text-black/35 hover:text-[#0d0d0d] text-sm transition-colors duration-200 group w-fit">
                  詳しく見る
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
              <div className={`flex items-center justify-center bg-gray-50 p-12 lg:p-16 min-h-[280px] ${isEven ? "md:order-first" : ""}`}>
                <div className="w-full max-w-sm">{illustrations[i]}</div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="px-8 lg:px-16 py-12 border-t border-black/6 sm:hidden bg-white">
        <Link href="/services" className="flex items-center gap-2 text-black/35 hover:text-[#0d0d0d] text-sm transition-colors duration-200">
          すべて見る
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
