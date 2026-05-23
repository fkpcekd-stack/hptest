import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ServiceSectionLoader from "@/components/ServiceSectionLoader";
import HeroIllustrationLoader from "@/components/HeroIllustrationLoader";
import { getServicesList, getWorksList } from "@/lib/microcms";

const fallbackServices = [
  {
    id: "1",
    title: "広告運用事業",
    description:
      "リスティング広告・SNS広告・ディスプレイ広告など、成果につながるデジタル広告を一気通貫で運用します。",
  },
  {
    id: "2",
    title: "SEO事業",
    description:
      "検索上位表示を実現するSEO対策と、集客力の高いオウンドメディアの構築・運営を支援します。",
  },
  {
    id: "3",
    title: "代理事業",
    description:
      "企業のマーケティング・広報活動を代行し、専門知識とリソースで効果的な施策を展開します。",
  },
  {
    id: "4",
    title: "コンテンツ事業",
    description:
      "ブランドの価値を高める記事・動画・SNSコンテンツを企画・制作・配信します。",
  },
  {
    id: "5",
    title: "有料職業紹介事業",
    description:
      "企業の採用課題を解決する人材紹介サービス。優秀な人材と企業をマッチングします。",
  },
];

const fallbackWorks = [
  {
    id: "1",
    title: "EC企業 デジタル広告運用支援",
    category: "デジタル広告",
    description:
      "Google・Meta広告の統合運用により、ROAS180%改善。月間売上を3ヶ月で約2倍に拡大しました。",
    publishedAt: "2025-03-01",
  },
  {
    id: "2",
    title: "人材サービス企業 SEOメディア構築",
    category: "SEOメディア",
    description:
      "オウンドメディアをゼロから立ち上げ、6ヶ月で月間30万PVを達成。自然流入による問い合わせが急増しました。",
    publishedAt: "2025-02-01",
  },
  {
    id: "3",
    title: "美容サロン コンテンツ・SNS運用",
    category: "コンテンツ",
    description:
      "Instagram・TikTok運用代行により、フォロワーを6ヶ月で10倍に成長。SNS経由の予約数が月間200件を突破しました。",
    publishedAt: "2025-01-01",
  },
];


export default async function HomePage() {
  const [servicesData, worksData] = await Promise.all([
    getServicesList(5),
    getWorksList(3),
  ]);

  const services =
    servicesData.contents.length > 0 ? servicesData.contents : fallbackServices;
  const works =
    worksData.contents.length > 0 ? worksData.contents : fallbackWorks;

  return (
    <>
      {/* HERO */}
      <section className="relative lg:min-h-screen bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-2 hero-clip">
        {/* Left: text */}
        <div className="relative z-10 flex flex-col justify-start lg:justify-end pt-28 pb-6 lg:pt-36 lg:pb-24 px-8 lg:px-16">
          <p className="hero-animate text-black/30 text-xs font-medium tracking-[0.3em] uppercase mb-8" style={{ animationDelay: "0ms" }}>
            Digital Marketing × Technology
          </p>
          <h1 className="hero-animate text-[clamp(2.8rem,6vw,6rem)] font-bold text-[#0d0d0d] leading-[1.05] tracking-tight mb-10" style={{ animationDelay: "120ms" }}>
            集客を、仕組みで
            <br />
            <span className="text-[#4AB8D8]">最大化する。</span>
          </h1>
          <p className="hero-animate text-black/45 text-sm leading-relaxed mb-12 max-w-sm" style={{ animationDelay: "240ms" }}>
            デジタル広告・SEOメディア・コンテンツ制作を通じて、
            企業の集客・ブランディング・売上拡大を支援します。
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
        <div className="hero-illus-animate flex items-center justify-center px-10 pt-0 pb-10 lg:p-16 lg:pt-24" style={{ animationDelay: "200ms" }}>
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

      {/* SERVICES */}
      <ServiceSectionLoader services={services} />


      {/* WORKS */}
      <section className="bg-white py-32 works-clip">
        <div className="px-8 lg:px-16">
          <div data-reveal="up" className="flex items-end justify-between mb-16 border-b border-black/10 pb-8">
            <div>
              <p className="text-[#4AB8D8] text-xs tracking-[0.3em] uppercase mb-3">Works</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0d0d0d] tracking-tight">
                導入実績
              </h2>
            </div>
            <Link
              href="/works"
              className="hidden sm:flex items-center gap-2 text-black/30 hover:text-black text-sm transition-colors duration-200 group"
            >
              すべて見る
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="divide-y divide-black/8">
            {works.map((work, wi) => (
              <article
                key={work.id}
                data-reveal="up"
                data-delay={String(wi * 100)}
                className="group grid grid-cols-1 md:grid-cols-[3rem_220px_1fr] lg:grid-cols-[3rem_280px_1fr] gap-6 lg:gap-12 py-10 items-start"
              >
                {/* 連番 */}
                <div className="hidden md:block pt-1">
                  <span className="text-xs font-mono text-black/20 tracking-widest">
                    {String(wi + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* サムネイル */}
                <div className="h-40 md:h-36 bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 overflow-hidden shrink-0">
                  {"image" in work && (work as { image?: { url: string } }).image ? (
                    <Image
                      src={(work as { image: { url: string } }).image.url}
                      alt={work.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-10 h-10 border border-black/10 rounded-full" />
                    </div>
                  )}
                </div>
                {/* テキスト */}
                <div className="flex flex-col justify-center">
                  {work.category && (
                    <span className="text-xs font-medium text-[#4AB8D8] tracking-wider uppercase mb-3 block">
                      {work.category}
                    </span>
                  )}
                  <h3 className="font-bold text-[#0d0d0d] mb-3 leading-snug text-lg">
                    {work.title}
                  </h3>
                  <p className="text-black/45 text-sm leading-relaxed line-clamp-3">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link
              href="/works"
              className="flex items-center gap-2 text-black/30 hover:text-black text-sm transition-colors duration-200"
            >
              すべて見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      <CTASection />
    </>
  );
}
