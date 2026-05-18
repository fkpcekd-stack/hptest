import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { getNewsList, getServicesList, getWorksList } from "@/lib/microcms";

const fallbackServices = [
  {
    id: "1",
    title: "デジタル広告事業",
    description:
      "リスティング広告・SNS広告・ディスプレイ広告など、成果につながるデジタル広告を一気通貫で運用します。",
  },
  {
    id: "2",
    title: "SEOメディア事業",
    description:
      "検索上位表示を実現するSEO対策と、集客力の高いオウンドメディアの構築・運営を支援します。",
  },
  {
    id: "3",
    title: "コンテンツ事業",
    description:
      "ブランドの価値を高める記事・動画・SNSコンテンツを企画・制作・配信します。",
  },
];

const fallbackWorks = [
  {
    id: "1",
    title: "EC企業 デジタル広告運用支援",
    category: "デジタル広告",
    description: "Google・Meta広告の統合運用により、ROAS180%改善。月間売上を3ヶ月で約2倍に拡大しました。",
    publishedAt: "2025-03-01",
  },
  {
    id: "2",
    title: "人材サービス企業 SEOメディア構築",
    category: "SEOメディア",
    description: "オウンドメディアをゼロから立ち上げ、6ヶ月で月間30万PVを達成。自然流入による問い合わせが急増しました。",
    publishedAt: "2025-02-01",
  },
  {
    id: "3",
    title: "美容サロン コンテンツ・SNS運用",
    category: "コンテンツ",
    description: "Instagram・TikTok運用代行により、フォロワーを6ヶ月で10倍に成長。SNS経由の予約数が月間200件を突破しました。",
    publishedAt: "2025-01-01",
  },
];

const fallbackNews = [
  {
    id: "1",
    title: "株式会社DKがAWS APNパートナーに認定されました",
    publishedAt: "2025-04-15",
    category: "お知らせ",
  },
  {
    id: "2",
    title: "DX推進支援サービスの提供を開始しました",
    publishedAt: "2025-03-01",
    category: "サービス",
  },
  {
    id: "3",
    title: "2025年度 新卒採用情報を公開しました",
    publishedAt: "2025-02-10",
    category: "採用",
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

export default async function HomePage() {
  const [servicesData, worksData, newsData] = await Promise.all([
    getServicesList(3),
    getWorksList(3),
    getNewsList(3),
  ]);

  const services =
    servicesData.contents.length > 0 ? servicesData.contents : fallbackServices;
  const works =
    worksData.contents.length > 0 ? worksData.contents : fallbackWorks;
  const news =
    newsData.contents.length > 0 ? newsData.contents : fallbackNews;

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              集客を、仕組みで<br />
              <span className="text-[#4AB8D8]">最大化する。</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              デジタル広告・SEOメディア・コンテンツ制作を通じて、
              企業の集客・ブランディング・売上拡大を支援します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1B2B5E] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                お問い合わせ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-semibold rounded-lg hover:border-white/80 hover:bg-white/10 transition-all text-sm"
              >
                サービスを見る
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-4">
              Services
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight">
                サービス
              </h2>
              <Link
                href="/services"
                className="flex items-center gap-2 text-sm font-medium text-[#4AB8D8] hover:gap-3 transition-all"
              >
                すべて見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="group p-10 border border-gray-100 hover:border-[#4AB8D8]/30 hover:bg-[#F8FAFC] transition-all duration-300"
              >
                <div className="text-xs font-mono text-gray-300 mb-8">0{i + 1}</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#1B2B5E]">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                <div className="mt-8 flex items-center gap-2 text-[#4AB8D8] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  詳しく見る
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-4">
              Works
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight">
                導入実績
              </h2>
              <Link
                href="/works"
                className="flex items-center gap-2 text-sm font-medium text-[#4AB8D8] hover:gap-3 transition-all"
              >
                すべて見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {works.map((work) => (
              <article
                key={work.id}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-52 bg-gradient-to-br from-[#1B2B5E] to-[#2563EB] overflow-hidden">
                  {"image" in work && (work as { image?: { url: string } }).image ? (
                    <Image
                      src={(work as { image: { url: string } }).image.url}
                      alt={work.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white/20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-7">
                  {work.category && (
                    <span className="inline-block text-xs font-medium text-[#4AB8D8] mb-3">
                      {work.category}
                    </span>
                  )}
                  <h3 className="font-bold text-[#0F172A] mb-3 leading-snug group-hover:text-[#1B2B5E] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-4">
              News
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight">
                お知らせ
              </h2>
              <Link
                href="/news"
                className="flex items-center gap-2 text-sm font-medium text-[#4AB8D8] hover:gap-3 transition-all"
              >
                すべて見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="flex items-start sm:items-center gap-6 py-7 group hover:pl-2 transition-all duration-200"
              >
                <time className="text-sm text-gray-400 font-mono shrink-0 w-24">
                  {formatDate(item.publishedAt)}
                </time>
                {item.category && (
                  <span className="shrink-0 text-xs font-medium text-[#4AB8D8] border border-[#4AB8D8]/30 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                )}
                <span className="font-medium text-gray-700 group-hover:text-[#0F172A] transition-colors flex-1">
                  {item.title}
                </span>
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-[#4AB8D8] transition-colors shrink-0 hidden sm:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
