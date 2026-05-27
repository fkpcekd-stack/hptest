import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { getWorksList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "実績",
  description:
    "株式会社DKの導入実績・ポートフォリオ。製造業・流通業・IT企業など多様な業界のDX・システム開発実績をご紹介します。",
};

const fallbackWorks = [
  {
    id: "1",
    title: "EC企業 デジタル広告運用支援",
    category: "デジタル広告",
    description:
      "Google・Meta広告の統合運用により、広告費用対効果（ROAS）を従来比180%に改善。月間売上を3ヶ月で約2倍に拡大しました。",
    publishedAt: "2025-03-01",
    technologies: ["Google広告", "Meta広告", "GA4", "GTM"],
  },
  {
    id: "2",
    title: "人材サービス企業 SEOメディア構築",
    category: "SEOメディア",
    description:
      "オウンドメディアをゼロから立ち上げ、6ヶ月で月間30万PVを達成。主要キーワードで検索1位を複数獲得し、自然流入による問い合わせが急増しました。",
    publishedAt: "2025-02-01",
    technologies: ["SEO", "WordPress", "コンテンツ設計", "アクセス解析"],
  },
  {
    id: "3",
    title: "美容サロン コンテンツ・SNS運用",
    category: "コンテンツ",
    description:
      "Instagram・TikTokの運用代行と動画コンテンツ制作により、フォロワーを6ヶ月で10倍に成長。SNS経由の予約数が月間200件を突破しました。",
    publishedAt: "2025-01-01",
    technologies: ["Instagram", "TikTok", "動画制作", "LPO"],
  },
  {
    id: "4",
    title: "スタートアップ 採用支援",
    category: "有料職業紹介",
    description:
      "マーケティング・エンジニア領域を中心に、6ヶ月で10名の採用を実現。候補者のミスマッチ率を大幅に低減し、定着率95%を達成しました。",
    publishedAt: "2024-12-01",
    technologies: ["採用戦略", "スクリーニング", "面接支援", "定着支援"],
  },
  {
    id: "5",
    title: "不動産会社 リスティング広告改善",
    category: "デジタル広告",
    description:
      "キーワード・入札・クリエイティブを全面刷新し、問い合わせ単価を50%削減。同予算でのコンバージョン数を2倍以上に改善しました。",
    publishedAt: "2024-11-01",
    technologies: ["Google広告", "Yahoo!広告", "LPO", "GA4"],
  },
  {
    id: "6",
    title: "通販企業 SEO・コンテンツ一体支援",
    category: "SEOメディア",
    description:
      "SEO対策とコンテンツマーケティングを連動させ、1年間でオーガニック流入を300%増加。コンテンツ経由の売上比率が全体の40%まで向上しました。",
    publishedAt: "2024-10-01",
    technologies: ["SEO", "コンテンツSEO", "メルマガ", "CRM"],
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}

export default async function WorksPage() {
  const worksData = await getWorksList(20);
  const works = worksData.contents.length > 0 ? worksData.contents : fallbackWorks;

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-6">
            Works
          </p>
          <h1 className="text-4xl sm:text-5xl sm:text-6xl font-bold text-[#0F172A] mb-8 leading-tight tracking-tight">
            実績
          </h1>
        </div>
      </section>

      {/* Works Grid */}
      <section className="pb-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work) => (
              <Link
                key={work.id}
                href={`/works/${work.id}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {"image" in work && (work as { image?: { url: string } }).image ? (
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={(work as { image: { url: string } }).image.url}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-52 bg-gradient-to-br from-[#1B2B5E] to-[#2563EB] flex items-center justify-center">
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
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    {work.category && (
                      <span className="text-xs font-medium text-[#4AB8D8]">
                        {work.category}
                      </span>
                    )}
                    <time className="text-xs text-gray-400 ml-auto">
                      {formatDate(work.publishedAt)}
                    </time>
                  </div>
                  <h2 className="font-bold text-[#0F172A] mb-3 leading-snug group-hover:text-[#1B2B5E] transition-colors">
                    {work.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                    {work.description}
                  </p>
                  {"technologies" in work && Array.isArray(work.technologies) && (
                    <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-100">
                      {(work.technologies as string[]).slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
