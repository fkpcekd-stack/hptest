import Link from "next/link";
import CTASection from "@/components/CTASection";
import ServiceSectionLoader from "@/components/ServiceSectionLoader";
import HeroIllustrationLoader from "@/components/HeroIllustrationLoader";
import { getServicesList } from "@/lib/microcms";

const fallbackServices = [
  {
    id: "1",
    title: "広告運用事業",
    description:
      "Meta広告、TikTok広告など、成果につながるデジタル広告を一気通貫で運用します。",
  },
  {
    id: "2",
    title: "SEO事業",
    description:
      "SEO対策による検索流入の最大化と、質の高いユーザー送客を支援します。",
  },
  {
    id: "3",
    title: "代理事業",
    description:
      "広告主とメディアの架け橋となり、集客・認知拡大・成果獲得まで、目的に合わせた広告運用を支援します。",
  },
  {
    id: "4",
    title: "コンテンツ事業",
    description:
      "キャラクターやイラストを活用し、親しみやすく伝わるコンテンツ制作を行います。",
  },
  {
    id: "5",
    title: "有料職業紹介事業",
    description:
      "企業の採用課題を解決する人材紹介サービス。優秀な人材と企業をマッチングします。",
  },
];

export default async function HomePage() {
  const servicesData = await getServicesList(5);

  const services =
    servicesData.contents.length > 0 ? servicesData.contents : fallbackServices;

  return (
    <>
      {/* HERO */}
      <section className="relative lg:min-h-screen bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-2 hero-clip">
        {/* Left: text */}
        <div className="relative z-10 flex flex-col justify-start lg:justify-end pt-24 sm:pt-28 pb-4 sm:pb-6 lg:pt-36 lg:pb-24 px-6 lg:px-12">
          <p className="hero-animate text-black/30 text-xs font-medium tracking-[0.3em] uppercase mb-4 sm:mb-8" style={{ animationDelay: "0ms" }}>
            Digital Marketing × Technology
          </p>
          <h1 className="text-[clamp(3rem,13vw,6rem)] lg:text-[clamp(3rem,7.5vw,8.5rem)] font-bold text-[#0d0d0d] leading-[1.02] tracking-tight mb-6 sm:mb-10">
            <span className="block overflow-hidden pb-[0.05em]">
              <span className="hero-mask-line" style={{ animationDelay: "180ms" }}>
                成果を
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.05em]">
              <span className="hero-mask-line text-[#4AB8D8]" style={{ animationDelay: "380ms" }}>
                設計する。
              </span>
            </span>
          </h1>
          <p className="hero-animate text-black/55 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-md" style={{ animationDelay: "240ms" }}>
            あらゆるビジネスの現場に、
            <br />
            「成果が生まれる構造」をインストールする。
          </p>
          <Link
            href="/contact"
            className="hero-animate inline-flex items-center gap-3 text-[#0d0d0d] text-sm font-medium tracking-wider group w-fit"
            style={{ animationDelay: "360ms" }}
          >
            <span>お問い合わせ</span>
            <span className="flex items-center justify-center w-10 h-10 border border-black/20 rounded-full group-hover:border-[#0d0d0d] group-hover:bg-[#0d0d0d] group-hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Right: SVG illustration */}
        <div className="hero-illus-animate flex items-center justify-center px-6 sm:px-10 pt-2 pb-6 sm:pb-10 lg:p-16 lg:pt-24" style={{ animationDelay: "200ms" }}>
          <HeroIllustrationLoader />
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute bottom-8 left-8 lg:left-16 flex-col items-center gap-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-black/15 to-transparent" />
          <span className="text-black/20 text-[10px] tracking-[0.3em]" style={{ writingMode: "vertical-lr" }}>
            SCROLL
          </span>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-[#4AB8D8] text-white py-24 sm:py-32 lg:py-40 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        <div className="relative px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p
                data-reveal="up"
                data-delay="0"
                className="text-white/70 text-xs font-semibold uppercase tracking-[0.3em] mb-8"
              >
                Vision
              </p>
              <h2
                data-reveal="up"
                data-delay="80"
                className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.05] tracking-tight"
              >
                成果を
                <br />
                すべての判断基準に。
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                data-reveal="up"
                data-delay="160"
                className="text-white/85 text-base sm:text-lg leading-loose mb-10"
              >
                立場ではなく、成果で語る。
                <br />
                感覚ではなく、判断で進む。
                <br />
                慣習ではなく、変化を選ぶ。
              </p>
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-3 text-white text-sm font-medium tracking-wider group w-fit"
                data-reveal="up"
                data-delay="240"
              >
                <span>行動指針を見る</span>
                <span className="flex items-center justify-center w-10 h-10 border border-white/40 rounded-full group-hover:border-white group-hover:bg-white group-hover:text-[#4AB8D8] transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServiceSectionLoader services={services} />


      <CTASection />
    </>
  );
}
