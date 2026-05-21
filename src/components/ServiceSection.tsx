"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const C = "#1a1a2e";
const A = "#4AB8D8";

const techIllustrations = [
  /* T01 広告運用 — アイソメトリック棒グラフ (animated) */
  <svg key="t1" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {[0,1,2,3,4].map(i=>(<line key={`tg1h-${i}`} x1={60+i*32} y1={252-i*18} x2={200+i*32} y2={252+i*18-36} stroke={C} strokeOpacity="0.15" strokeWidth="0.75"/>))}
    {[0,1,2,3,4].map(i=>(<line key={`tg1v-${i}`} x1={60+i*40} y1={252} x2={60+i*40+136} y2={252-18*4} stroke={C} strokeOpacity="0.12" strokeWidth="0.75"/>))}
    {/* Bars — static */}
    <polygon points="85,200 115,183 115,240 85,257" stroke={C} strokeOpacity="0.35" strokeWidth="1" fill={C} fillOpacity="0.06"/>
    <polygon points="115,183 145,200 145,257 115,240" stroke={C} strokeOpacity="0.25" strokeWidth="1" fill={C} fillOpacity="0.04"/>
    <polygon points="85,200 115,183 145,200 115,217" stroke={C} strokeOpacity="0.4" strokeWidth="1" fill={C} fillOpacity="0.1"/>
    <polygon points="145,170 175,153 175,240 145,257" stroke={C} strokeOpacity="0.4" strokeWidth="1" fill={C} fillOpacity="0.08"/>
    <polygon points="175,153 205,170 205,257 175,240" stroke={C} strokeOpacity="0.3" strokeWidth="1" fill={C} fillOpacity="0.05"/>
    <polygon points="145,170 175,153 205,170 175,187" stroke={C} strokeOpacity="0.45" strokeWidth="1" fill={C} fillOpacity="0.12"/>
    <polygon points="205,135 235,118 235,240 205,257" stroke={C} strokeOpacity="0.45" strokeWidth="1" fill={C} fillOpacity="0.1"/>
    <polygon points="235,118 265,135 265,257 235,240" stroke={C} strokeOpacity="0.35" strokeWidth="1" fill={C} fillOpacity="0.06"/>
    <polygon points="205,135 235,118 265,135 235,152" stroke={C} strokeOpacity="0.5" strokeWidth="1" fill={C} fillOpacity="0.14"/>
    {/* Accent bar 4 */}
    <polygon points="265,85 295,68 295,240 265,257" stroke={A} strokeOpacity="0.65" strokeWidth="1.5" fill={A} fillOpacity="0.1"/>
    <polygon points="295,68 325,85 325,257 295,240" stroke={A} strokeOpacity="0.5" strokeWidth="1.5" fill={A} fillOpacity="0.07"/>
    <polygon points="265,85 295,68 325,85 295,102" stroke={A} strokeOpacity="0.75" strokeWidth="1.5" fill={A} fillOpacity="0.2"/>
    {/* Glow on top (pulsing) */}
    <ellipse cx="295" cy="68" rx="20" ry="8" fill={A}>
      <animate attributeName="fill-opacity" values="0.18;0.4;0.18" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="rx" values="18;26;18" dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </ellipse>
    {/* Trend line (animated dash flow) */}
    <polyline points="100,200 160,170 220,135 295,85" stroke={A} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray="6,3" style={{ animation: "svgDash 1.5s linear infinite" }}/>
    {/* Nodes */}
    <circle cx="100" cy="200" r="4" fill={A} fillOpacity="0.7"/>
    <circle cx="160" cy="170" r="4" fill={A} fillOpacity="0.7"/>
    <circle cx="220" cy="135" r="4" fill={A} fillOpacity="0.7"/>
    {/* Apex node (pulsing) */}
    <circle cx="295" cy="85" r="6" fill={A} className="svg-anim" style={{ animation: "svgPulse 2s ease-in-out infinite" }}>
      <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </circle>
  </svg>,

  /* T02 SEO — 3Dグローブ (animated) */
  <svg key="t2" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <path id="t2-orbit" d="M 55,150 A 140,40 0 0 1 335,150 A 140,40 0 0 1 55,150"/>
    </defs>
    <circle cx="195" cy="150" r="100" stroke={C} strokeOpacity="0.2" strokeWidth="1" fill={C} fillOpacity="0.03"/>
    {/* Sphere dashes (animated) */}
    <circle cx="195" cy="150" r="100" stroke={A} strokeOpacity="0.15" strokeWidth="0.75" fill="none"
      strokeDasharray="4,4" style={{ animation: "svgDash 3s linear infinite" }}/>
    <ellipse cx="195" cy="130" rx="100" ry="28" stroke={C} strokeOpacity="0.2" strokeWidth="0.75" fill="none"/>
    {/* Equatorial ring (animated) */}
    <ellipse cx="195" cy="150" rx="100" ry="15" stroke={A} strokeOpacity="0.35" strokeWidth="1" fill="none"
      strokeDasharray="5,3" style={{ animation: "svgDashRev 2s linear infinite" }}/>
    <ellipse cx="195" cy="170" rx="100" ry="28" stroke={C} strokeOpacity="0.2" strokeWidth="0.75" fill="none"/>
    <ellipse cx="195" cy="150" rx="50" ry="100" stroke={C} strokeOpacity="0.18" strokeWidth="0.75" fill="none"/>
    <ellipse cx="195" cy="150" rx="20" ry="100" stroke={C} strokeOpacity="0.12" strokeWidth="0.75" fill="none"/>
    {/* Orbit ring (animated) */}
    <ellipse cx="195" cy="150" rx="140" ry="40" stroke={A} strokeOpacity="0.35" strokeWidth="1" fill="none"
      strokeDasharray="5,3" style={{ animation: "svgDash 2.5s linear infinite" }}/>
    {/* Orbiting nodes via animateMotion */}
    <circle r="8" stroke={A} strokeOpacity="0.7" strokeWidth="1.5" fill={A} fillOpacity="0.2">
      <animateMotion dur="10s" repeatCount="indefinite" begin="0s">
        <mpath href="#t2-orbit"/>
      </animateMotion>
    </circle>
    <circle r="8" stroke={A} strokeOpacity="0.7" strokeWidth="1.5" fill={A} fillOpacity="0.2">
      <animateMotion dur="10s" repeatCount="indefinite" begin="-5s">
        <mpath href="#t2-orbit"/>
      </animateMotion>
    </circle>
    {/* Static nodes with pulse */}
    <circle cx="148" cy="114" r="6" stroke={A} strokeOpacity="0.6" strokeWidth="1.5" fill={A} fillOpacity="0.15">
      <animate attributeName="r" values="5;8;5" dur="3s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </circle>
    <circle cx="242" cy="186" r="6" stroke={A} strokeOpacity="0.6" strokeWidth="1.5" fill={A} fillOpacity="0.15">
      <animate attributeName="r" values="5;8;5" dur="3s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </circle>
    {/* Core glow */}
    <circle cx="195" cy="150" r="18" fill={A}>
      <animate attributeName="r" values="15;24;15" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
      <animate attributeName="fill-opacity" values="0.08;0.2;0.08" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="195" cy="150" r="8" fill={A} fillOpacity="0.6"/>
    {/* Scan line (oscillating) */}
    <line x1="95" y1="150" x2="295" y2="150" stroke={A} strokeOpacity="0.5" strokeWidth="1.5"
      strokeDasharray="3,2" style={{ animation: "svgScan 4s ease-in-out infinite" }}/>
  </svg>,

  /* T03 代理事業 — 3D接続キューブ群 (animated) */
  <svg key="t3" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Center cube (floating) */}
    <g style={{ animation: "svgFloat 3s ease-in-out infinite" }}>
      <polygon points="200,108 234,127 234,168 200,149" stroke={A} strokeOpacity="0.7" strokeWidth="1.5" fill={A} fillOpacity="0.08"/>
      <polygon points="200,108 166,127 166,168 200,149" stroke={A} strokeOpacity="0.55" strokeWidth="1.5" fill={A} fillOpacity="0.05"/>
      <polygon points="166,127 200,108 234,127 200,146" stroke={A} strokeOpacity="0.8" strokeWidth="1.5" fill={A} fillOpacity="0.18"/>
      <ellipse cx="200" cy="108" rx="22" ry="8" fill={A}>
        <animate attributeName="fill-opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite"/>
      </ellipse>
    </g>
    {/* Side cube left (floating opposite phase) */}
    <g style={{ animation: "svgFloat 3.5s ease-in-out infinite", animationDelay: "-1.75s" }}>
      <polygon points="90,145 116,131 116,162 90,176" stroke={C} strokeOpacity="0.4" strokeWidth="1" fill={C} fillOpacity="0.06"/>
      <polygon points="90,145 64,131 64,162 90,176" stroke={C} strokeOpacity="0.3" strokeWidth="1" fill={C} fillOpacity="0.04"/>
      <polygon points="64,131 90,145 116,131 90,117" stroke={C} strokeOpacity="0.5" strokeWidth="1" fill={C} fillOpacity="0.1"/>
    </g>
    {/* Side cube right */}
    <g style={{ animation: "svgFloat 4s ease-in-out infinite", animationDelay: "-1s" }}>
      <polygon points="310,145 336,131 336,162 310,176" stroke={C} strokeOpacity="0.4" strokeWidth="1" fill={C} fillOpacity="0.06"/>
      <polygon points="310,145 284,131 284,162 310,176" stroke={C} strokeOpacity="0.3" strokeWidth="1" fill={C} fillOpacity="0.04"/>
      <polygon points="284,131 310,145 336,131 310,117" stroke={C} strokeOpacity="0.5" strokeWidth="1" fill={C} fillOpacity="0.1"/>
    </g>
    {/* Bottom cube */}
    <g style={{ animation: "svgFloat 3.8s ease-in-out infinite", animationDelay: "-2s" }}>
      <polygon points="200,225 226,211 226,242 200,256" stroke={C} strokeOpacity="0.4" strokeWidth="1" fill={C} fillOpacity="0.06"/>
      <polygon points="200,225 174,211 174,242 200,256" stroke={C} strokeOpacity="0.3" strokeWidth="1" fill={C} fillOpacity="0.04"/>
      <polygon points="174,211 200,225 226,211 200,197" stroke={C} strokeOpacity="0.5" strokeWidth="1" fill={C} fillOpacity="0.1"/>
    </g>
    {/* Connection beams (animated dash) */}
    <line x1="116" y1="147" x2="166" y2="138" stroke={A} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5,3" style={{ animation: "svgDash 1.2s linear infinite" }}/>
    <line x1="234" y1="138" x2="284" y2="147" stroke={A} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5,3" style={{ animation: "svgDashRev 1.2s linear infinite" }}/>
    <line x1="200" y1="149" x2="200" y2="197" stroke={A} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5,3" style={{ animation: "svgDash 1.5s linear infinite" }}/>
    {/* Midpoint nodes (pulsing) */}
    <circle cx="141" cy="142" r="4" fill={A}>
      <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="2s" begin="0s" repeatCount="indefinite"/>
      <animate attributeName="r" values="3;5.5;3" dur="2s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </circle>
    <circle cx="259" cy="142" r="4" fill={A}>
      <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="2s" begin="0.7s" repeatCount="indefinite"/>
      <animate attributeName="r" values="3;5.5;3" dur="2s" begin="0.7s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </circle>
    <circle cx="200" cy="173" r="4" fill={A}>
      <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="2s" begin="1.4s" repeatCount="indefinite"/>
      <animate attributeName="r" values="3;5.5;3" dur="2s" begin="1.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </circle>
  </svg>,

  /* T04 コンテンツ — ホログラフィックスクリーン (animated) */
  <svg key="t4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Back/mid screens (floating) */}
    <g style={{ animation: "svgFloat 5s ease-in-out infinite", animationDelay: "-1s" }}>
      <polygon points="50,60 210,60 210,175 50,175" stroke={C} strokeOpacity="0.2" strokeWidth="1" fill={C} fillOpacity="0.03"/>
      {[0,1,2,3,4].map(i=>(<line key={`t4h-${i}`} x1="60" y1={80+i*20} x2="200" y2={80+i*20} stroke={C} strokeOpacity="0.12" strokeWidth="0.75"/>))}
    </g>
    <g style={{ animation: "svgFloat 4s ease-in-out infinite", animationDelay: "-0.5s" }}>
      <polygon points="80,45 270,45 270,185 80,185" stroke={C} strokeOpacity="0.3" strokeWidth="1" fill={C} fillOpacity="0.04"/>
      {[0,1,2].map(i=>(<line key={`t4m-${i}`} x1="95" y1={70+i*30} x2="255" y2={70+i*30} stroke={C} strokeOpacity="0.2" strokeWidth="1"/>))}
      <line x1="95" y1="155" x2="255" y2="155" stroke={A} strokeOpacity="0.4" strokeWidth="1"/>
    </g>
    {/* Front screen (main, slight float) */}
    <g style={{ animation: "svgFloat 3.5s ease-in-out infinite" }}>
      <polygon points="110,80 330,80 330,230 110,230" stroke={A} strokeOpacity="0.6" strokeWidth="1.5" fill="white" fillOpacity="0.92"/>
      <rect x="128" y="100" width="184" height="40" rx="4" stroke={A} strokeOpacity="0.4" strokeWidth="1" fill={A} fillOpacity="0.08"/>
      <circle cx="148" cy="120" r="12" stroke={A} strokeOpacity="0.5" strokeWidth="1" fill={A} fillOpacity="0.12">
        <animate attributeName="fill-opacity" values="0.12;0.3;0.12" dur="2s" repeatCount="indefinite"/>
      </circle>
      <line x1="168" y1="112" x2="295" y2="112" stroke={C} strokeOpacity="0.3" strokeWidth="1"/>
      <line x1="168" y1="124" x2="265" y2="124" stroke={C} strokeOpacity="0.2" strokeWidth="1"/>
      <line x1="128" y1="158" x2="312" y2="158" stroke={C} strokeOpacity="0.18" strokeWidth="1"/>
      {/* Highlighted bar (animated) */}
      <line x1="128" y1="172" x2="290" y2="172" stroke={A} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="8,3" style={{ animation: "svgDash 2s linear infinite" }}/>
      <line x1="128" y1="186" x2="300" y2="186" stroke={C} strokeOpacity="0.18" strokeWidth="1"/>
      {/* Play button (pulsing) */}
      <circle cx="220" cy="210" r="14" stroke={A} strokeOpacity="0.6" strokeWidth="1.5" fill={A} fillOpacity="0.1">
        <animate attributeName="r" values="12;17;12" dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
        <animate attributeName="fill-opacity" values="0.1;0.25;0.1" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <polygon points="215,204 215,216 228,210" fill={A} fillOpacity="0.7"/>
    </g>
    {/* Glow under screen (pulsing) */}
    <ellipse cx="220" cy="80" rx="80" ry="12" fill={A}>
      <animate attributeName="fill-opacity" values="0.08;0.2;0.08" dur="3s" repeatCount="indefinite"/>
    </ellipse>
    {/* Waveform (animated) */}
    <polyline points="30,265 55,265 65,250 75,280 85,258 95,272 105,255 115,265 145,265 158,248 168,282 178,260 200,252 210,265 250,265 260,254 270,275 290,265" stroke={A} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="180,0" style={{ animation: "svgDash 3s linear infinite" }}/>
  </svg>,

  /* T05 有料職業紹介 — 3Dヒューマンマッチング (animated) */
  <svg key="t5" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Left figure */}
    <ellipse cx="110" cy="85" rx="28" ry="28" stroke={C} strokeOpacity="0.4" strokeWidth="1.5" fill={C} fillOpacity="0.06"/>
    <ellipse cx="110" cy="85" rx="16" ry="16" stroke={C} strokeOpacity="0.5" strokeWidth="1" fill={C} fillOpacity="0.1"/>
    <polygon points="82,113 110,99 138,113 138,170 110,184 82,170" stroke={C} strokeOpacity="0.4" strokeWidth="1.5" fill={C} fillOpacity="0.05"/>
    <line x1="110" y1="99" x2="110" y2="184" stroke={C} strokeOpacity="0.25" strokeWidth="0.75"/>
    <line x1="82" y1="113" x2="138" y2="113" stroke={C} strokeOpacity="0.2" strokeWidth="0.75"/>
    {/* Right figure (pulse glow) */}
    <ellipse cx="290" cy="85" rx="28" ry="28" stroke={A} strokeOpacity="0.55" strokeWidth="1.5" fill={A} fillOpacity="0.07">
      <animate attributeName="rx" values="26;32;26" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
      <animate attributeName="ry" values="26;32;26" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
    </ellipse>
    <ellipse cx="290" cy="85" rx="16" ry="16" stroke={A} strokeOpacity="0.65" strokeWidth="1" fill={A} fillOpacity="0.12"/>
    <polygon points="262,113 290,99 318,113 318,170 290,184 262,170" stroke={A} strokeOpacity="0.5" strokeWidth="1.5" fill={A} fillOpacity="0.06"/>
    <line x1="290" y1="99" x2="290" y2="184" stroke={A} strokeOpacity="0.3" strokeWidth="0.75"/>
    <line x1="262" y1="113" x2="318" y2="113" stroke={A} strokeOpacity="0.25" strokeWidth="0.75"/>
    {/* Helix paths (animated dash flow) */}
    <path d="M138,130 Q170,110 200,130 Q230,150 262,130" stroke={A} strokeOpacity="0.6" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="60,5" style={{ animation: "svgDash 2s linear infinite" }}/>
    <path d="M138,155 Q170,175 200,155 Q230,135 262,155" stroke={C} strokeOpacity="0.4" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="60,5" style={{ animation: "svgDashRev 2s linear infinite" }}/>
    {/* Helix nodes (staggered pulse) */}
    {([[155,118],[200,140],[245,118]] as [number,number][]).map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="5" fill={A}>
        <animate attributeName="r" values="4;7;4" dur="2s" begin={`${i*0.5}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
        <animate attributeName="fill-opacity" values="0.6;1;0.6" dur="2s" begin={`${i*0.5}s`} repeatCount="indefinite"/>
      </circle>
    ))}
    {([[155,163],[200,148],[245,163]] as [number,number][]).map(([x,y],i)=>(
      <circle key={i+3} cx={x} cy={y} r="4" fill={C}>
        <animate attributeName="fill-opacity" values="0.3;0.6;0.3" dur="2s" begin={`${i*0.5+0.25}s`} repeatCount="indefinite"/>
      </circle>
    ))}
    {/* Center connection glow */}
    <circle cx="200" cy="144" r="20" stroke={A} strokeOpacity="0.3" strokeWidth="1" fill={A}>
      <animate attributeName="r" values="16;26;16" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>
      <animate attributeName="fill-opacity" values="0.04;0.12;0.04" dur="3s" repeatCount="indefinite"/>
    </circle>
    <polygon points="62,220 200,195 338,220 200,245" stroke={C} strokeOpacity="0.2" strokeWidth="1" fill={C} fillOpacity="0.04"/>
    <line x1="110" y1="184" x2="110" y2="228" stroke={C} strokeOpacity="0.3" strokeWidth="1"/>
    <line x1="290" y1="184" x2="290" y2="228" stroke={C} strokeOpacity="0.3" strokeWidth="1"/>
  </svg>,
];

interface Service {
  id: string;
  title: string;
  description: string;
}

export default function ServiceSection({ services }: { services: Service[] }) {
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

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white">
      <div
        className="px-8 lg:px-16 pt-32 pb-8"
        style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
        ref={(el) => { if (el) itemRefs.current[services.length] = el; }}
        data-delay="0"
      >
        <div className="flex items-end justify-between border-b border-black/8 pb-8">
          <div>
            <p className="text-[#4AB8D8] text-xs tracking-[0.3em] uppercase mb-3">Services</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0d0d0d] tracking-tight">サービス</h2>
          </div>
          <Link href="/services" className="hidden sm:flex items-center gap-2 text-black/30 hover:text-[#0d0d0d] text-sm transition-colors duration-200 group">
            すべて見る
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                  SERVICE {String(i + 1).padStart(2, "00")}
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4AB8D8] mb-5 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-black/45 text-sm leading-relaxed max-w-md mb-8">{service.description}</p>
                <Link href="/services" className="inline-flex items-center gap-3 text-black/35 hover:text-[#0d0d0d] text-sm transition-colors duration-200 group w-fit">
                  詳しく見る
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className={`flex items-center justify-center bg-gray-50 p-12 lg:p-16 min-h-[280px] ${isEven ? "md:order-first" : ""}`}>
                <div className="w-full max-w-sm">{techIllustrations[i]}</div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="px-8 lg:px-16 py-12 border-t border-black/6 sm:hidden bg-white">
        <Link href="/services" className="flex items-center gap-2 text-black/35 hover:text-[#0d0d0d] text-sm transition-colors duration-200">
          すべて見る
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
