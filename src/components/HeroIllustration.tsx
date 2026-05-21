"use client";

const C = "#1a1a2e";
const A = "#4AB8D8";

export default function HeroIllustration() {
  return (
    <div className="w-full max-w-xs lg:max-w-lg">
      <svg viewBox="0 0 480 580" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          {/* Orbit path around equatorial ellipse: center(285,255) rx=190 ry=60 */}
          <path id="hero-orbit"
            d="M 95,255 A 190,60 0 0 1 475,255 A 190,60 0 0 1 95,255" />
          {/* Inner orbit path: rx=90 ry=28 */}
          <path id="hero-orbit-inner"
            d="M 195,255 A 90,28 0 0 1 375,255 A 90,28 0 0 1 195,255" />
        </defs>

        {/* Background grid */}
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <line key={`h-${i}`} x1={0} y1={60+i*55} x2={480} y2={60+i*55}
            stroke={C} strokeOpacity="0.06" strokeWidth="0.75"/>
        ))}
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <line key={`v-${i}`} x1={i*55} y1={0} x2={i*55} y2={580}
            stroke={C} strokeOpacity="0.06" strokeWidth="0.75"/>
        ))}

        {/* ── Outer orbit ring (animated dash flow) ── */}
        <ellipse cx="285" cy="255" rx="190" ry="60"
          stroke={A} strokeOpacity="0.2" strokeWidth="1" fill="none"
          strokeDasharray="6,4"
          style={{ animation: "svgDash 3s linear infinite" }}
        />

        {/* ── Sphere ── */}
        <circle cx="285" cy="255" r="145"
          stroke={C} strokeOpacity="0.12" strokeWidth="1" fill={C} fillOpacity="0.03"/>

        {/* Latitude rings */}
        <ellipse cx="285" cy="215" rx="145" ry="42"
          stroke={C} strokeOpacity="0.18" strokeWidth="1" fill="none"/>
        {/* Equatorial ring (animated) */}
        <ellipse cx="285" cy="255" rx="145" ry="20"
          stroke={A} strokeOpacity="0.4" strokeWidth="1.5" fill="none"
          strokeDasharray="5,3"
          style={{ animation: "svgDashRev 4s linear infinite" }}
        />
        <ellipse cx="285" cy="295" rx="145" ry="42"
          stroke={C} strokeOpacity="0.18" strokeWidth="1" fill="none"/>

        {/* Longitude rings */}
        <ellipse cx="285" cy="255" rx="68" ry="145"
          stroke={C} strokeOpacity="0.15" strokeWidth="1" fill="none"/>
        <ellipse cx="285" cy="255" rx="24" ry="145"
          stroke={C} strokeOpacity="0.1" strokeWidth="0.75" fill="none"/>

        {/* ── Inner orbit ring (animated) ── */}
        <ellipse cx="285" cy="255" rx="90" ry="28"
          stroke={A} strokeOpacity="0.35" strokeWidth="1" fill="none"
          strokeDasharray="4,3"
          style={{ animation: "svgDash 2s linear infinite" }}
        />

        {/* ── Core glow (pulsing) ── */}
        <circle cx="285" cy="255" r="40"
          fill={A}
          className="svg-anim"
          style={{ animation: "svgGlow 3.5s ease-in-out infinite" }}>
          <animate attributeName="r" values="38;50;38" dur="3.5s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
        </circle>
        <circle cx="285" cy="255" r="22" fill={A} fillOpacity="0.12"/>

        {/* Core dot (pulsing) */}
        <circle cx="285" cy="255" r="10" fill={A} fillOpacity="0.5"
          className="svg-anim"
          style={{ animation: "svgCorePulse 2.5s ease-in-out infinite" }}/>
        <circle cx="285" cy="255" r="5" fill={A}/>

        {/* ── Orbiting nodes (animateMotion on ellipse path) ── */}
        {/* Node 1 - leading */}
        <circle r="12" stroke={A} strokeOpacity="0.75" strokeWidth="1.5" fill={A} fillOpacity="0.18">
          <animateMotion dur="14s" repeatCount="indefinite" begin="0s">
            <mpath href="#hero-orbit"/>
          </animateMotion>
        </circle>
        {/* Node 2 - opposite phase */}
        <circle r="12" stroke={A} strokeOpacity="0.75" strokeWidth="1.5" fill={A} fillOpacity="0.18">
          <animateMotion dur="14s" repeatCount="indefinite" begin="-7s">
            <mpath href="#hero-orbit"/>
          </animateMotion>
        </circle>
        {/* Small inner nodes */}
        <circle r="6" stroke={A} strokeOpacity="0.55" strokeWidth="1.5" fill={A} fillOpacity="0.12">
          <animateMotion dur="9s" repeatCount="indefinite" begin="0s">
            <mpath href="#hero-orbit-inner"/>
          </animateMotion>
        </circle>
        <circle r="6" stroke={A} strokeOpacity="0.55" strokeWidth="1.5" fill={A} fillOpacity="0.12">
          <animateMotion dur="9s" repeatCount="indefinite" begin="-4.5s">
            <mpath href="#hero-orbit-inner"/>
          </animateMotion>
        </circle>

        {/* Static accent nodes (with pulse) */}
        <circle cx="358" cy="205" r="6" stroke={C} strokeOpacity="0.4" strokeWidth="1" fill={C} fillOpacity="0.1">
          <animate attributeName="r" values="5;8;5" dur="4s" begin="1s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
          <animate attributeName="fill-opacity" values="0.1;0.25;0.1" dur="4s" begin="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="212" cy="308" r="6" stroke={C} strokeOpacity="0.4" strokeWidth="1" fill={C} fillOpacity="0.1">
          <animate attributeName="r" values="5;8;5" dur="4s" begin="2.5s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
          <animate attributeName="fill-opacity" values="0.1;0.25;0.1" dur="4s" begin="2.5s" repeatCount="indefinite"/>
        </circle>

        {/* ── Data streams (dash flow) ── */}
        <line x1="285" y1="255" x2="140" y2="255"
          stroke={A} strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,4"
          style={{ animation: "svgDash 1.8s linear infinite" }}/>
        <line x1="285" y1="255" x2="430" y2="255"
          stroke={A} strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,4"
          style={{ animation: "svgDashRev 1.8s linear infinite" }}/>
        <line x1="285" y1="255" x2="220" y2="200"
          stroke={A} strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3,4"
          style={{ animation: "svgDash 2.2s linear infinite" }}/>
        <line x1="285" y1="255" x2="350" y2="310"
          stroke={A} strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3,4"
          style={{ animation: "svgDashRev 2.2s linear infinite" }}/>

        {/* ── Scan line (oscillating) ── */}
        <line x1="95" y1="255" x2="475" y2="255"
          stroke={A} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3,2"
          style={{ animation: "svgScan 5s ease-in-out infinite" }}/>

        {/* ── Floating cube 1 (top-left) ── */}
        <g style={{ animation: "svgFloat 4s ease-in-out infinite", animationDelay: "0s" }}>
          <polygon points="62,95 88,82 88,115 62,128" stroke={C} strokeOpacity="0.35" strokeWidth="1" fill={C} fillOpacity="0.05"/>
          <polygon points="62,95 36,82 36,115 62,128" stroke={C} strokeOpacity="0.25" strokeWidth="1" fill={C} fillOpacity="0.03"/>
          <polygon points="36,82 62,95 88,82 62,69" stroke={C} strokeOpacity="0.45" strokeWidth="1" fill={C} fillOpacity="0.1"/>
        </g>

        {/* ── Floating cube 2 (bottom-right, cyan accent) ── */}
        <g style={{ animation: "svgFloat 5s ease-in-out infinite", animationDelay: "-2.5s" }}>
          <polygon points="400,450 426,437 426,470 400,483" stroke={A} strokeOpacity="0.5" strokeWidth="1" fill={A} fillOpacity="0.06"/>
          <polygon points="400,450 374,437 374,470 400,483" stroke={A} strokeOpacity="0.35" strokeWidth="1" fill={A} fillOpacity="0.04"/>
          <polygon points="374,437 400,450 426,437 400,424" stroke={A} strokeOpacity="0.6" strokeWidth="1" fill={A} fillOpacity="0.14"/>
        </g>

        {/* ── Floating cube 3 (top-right, small) ── */}
        <g style={{ animation: "svgFloat 3.5s ease-in-out infinite", animationDelay: "-1.2s" }}>
          <polygon points="415,130 432,121 432,144 415,153" stroke={C} strokeOpacity="0.3" strokeWidth="1" fill={C} fillOpacity="0.04"/>
          <polygon points="415,130 398,121 398,144 415,153" stroke={C} strokeOpacity="0.22" strokeWidth="1" fill={C} fillOpacity="0.03"/>
          <polygon points="398,121 415,130 432,121 415,112" stroke={C} strokeOpacity="0.38" strokeWidth="1" fill={C} fillOpacity="0.08"/>
        </g>

        {/* ── Particles (staggered float) ── */}
        {([[55,190],[460,330],[100,380],[440,145],[165,460],[420,400]] as [number,number][]).map(([x,y],i) => (
          <circle key={`p-${i}`} cx={x} cy={y} r="2.5"
            fill={A} fillOpacity={i%2===0?0.4:0.25}
            className="svg-anim"
            style={{
              animation: `svgParticle${i%3} ${2.8+i*0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}/>
        ))}

        {/* ── Corner brackets ── */}
        <g style={{ animation: "svgBlink 4s ease-in-out infinite" }}>
          <line x1="22" y1="22" x2="42" y2="22" stroke={C} strokeOpacity="0.4" strokeWidth="1.5"/>
          <line x1="22" y1="22" x2="22" y2="42" stroke={C} strokeOpacity="0.4" strokeWidth="1.5"/>
        </g>
        <g style={{ animation: "svgBlink 4s ease-in-out infinite", animationDelay: "-2s" }}>
          <line x1="458" y1="558" x2="438" y2="558" stroke={A} strokeOpacity="0.5" strokeWidth="1.5"/>
          <line x1="458" y1="558" x2="458" y2="538" stroke={A} strokeOpacity="0.5" strokeWidth="1.5"/>
          <line x1="458" y1="22" x2="438" y2="22" stroke={C} strokeOpacity="0.35" strokeWidth="1.5"/>
          <line x1="458" y1="22" x2="458" y2="42" stroke={C} strokeOpacity="0.35" strokeWidth="1.5"/>
          <line x1="22" y1="558" x2="42" y2="558" stroke={A} strokeOpacity="0.4" strokeWidth="1.5"/>
          <line x1="22" y1="558" x2="22" y2="538" stroke={A} strokeOpacity="0.4" strokeWidth="1.5"/>
        </g>
      </svg>
    </div>
  );
}
