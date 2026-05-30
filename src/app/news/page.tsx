import { Metadata } from "next";
import Link from "next/link";
import { getNewsList } from "@/lib/microcms";
import RevealChars from "@/components/RevealChars";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "株式会社DKからのお知らせ・プレスリリース・ブログ記事の一覧です。",
};

const fallbackNews = [
  { id: "1", title: "株式会社DKがAWS APNパートナーに認定されました", publishedAt: "2025-04-15", category: "お知らせ" },
  { id: "2", title: "DX推進支援サービスの提供を開始しました", publishedAt: "2025-03-01", category: "サービス" },
  { id: "3", title: "2025年度 新卒採用情報を公開しました", publishedAt: "2025-02-10", category: "採用" },
  { id: "4", title: "セキュリティコンサルティングサービスを強化しました", publishedAt: "2025-01-20", category: "サービス" },
  { id: "5", title: "代表インタビュー：DXの現在地と未来", publishedAt: "2024-12-05", category: "メディア掲載" },
  { id: "6", title: "東京ビッグサイト ICT展示会に出展いたします", publishedAt: "2024-11-15", category: "イベント" },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

export default async function NewsPage() {
  const newsData = await getNewsList(50);
  const news = newsData.contents.length > 0 ? newsData.contents : fallbackNews;

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-6">
            News
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#0F172A] mb-8 leading-tight tracking-tight">
            <RevealChars lines={["お知らせ"]} delay={120} charDelay={60} />
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            株式会社DKからの最新情報をお届けします。
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {news.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p>現在お知らせはありません。</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {news.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="flex items-start sm:items-center gap-6 py-7 group hover:pl-2 transition-all duration-200"
                >
                  <time
                    className="text-sm text-gray-400 font-mono shrink-0 w-24"
                    dateTime={item.publishedAt}
                  >
                    {formatDate(item.publishedAt)}
                  </time>
                  {item.category && (
                    <span className="shrink-0 text-xs font-medium text-[#4AB8D8] border border-[#4AB8D8]/30 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  )}
                  <span className="font-medium text-gray-700 group-hover:text-[#0F172A] transition-colors flex-1 leading-snug">
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
          )}
        </div>
      </section>
    </>
  );
}
