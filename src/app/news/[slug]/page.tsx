import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsDetail, getNewsList } from "@/lib/microcms";

type Props = {
  params: Promise<{ slug: string }>;
};

const fallbackNews: Record<
  string,
  {
    id: string;
    title: string;
    category: string;
    content: string;
    publishedAt: string;
  }
> = {
  "1": {
    id: "1",
    title: "株式会社DKがAWS APNパートナーに認定されました",
    category: "お知らせ",
    publishedAt: "2025-04-15",
    content: `<p>この度、株式会社DK（dkInc.）は、Amazon Web Services, Inc.（以下、AWS）のパートナーネットワーク（APN）において、正式なパートナーとして認定されましたことをお知らせいたします。</p>
<h2>APNパートナー認定について</h2>
<p>AWS APNは、AWSを活用してお客様にソリューションを提供するパートナー企業を認定するプログラムです。今回の認定により、株式会社DKはAWSの最新情報・技術サポート・マーケティング支援を受けながら、より高品質なクラウドソリューションをお客様にご提供できるようになりました。</p>
<h2>今後の展開</h2>
<p>この認定を機に、クラウドインテグレーション事業をさらに強化してまいります。AWS認定資格を持つエンジニアを中心に、お客様のクラウド移行・最適化を包括的にサポートしてまいります。</p>
<p>今後ともご支援・ご愛顧のほど、よろしくお願い申し上げます。</p>`,
  },
  "2": {
    id: "2",
    title: "DX推進支援サービスの提供を開始しました",
    category: "サービス",
    publishedAt: "2025-03-01",
    content: `<p>株式会社DKは、企業のデジタルトランスフォーメーション（DX）を包括的に支援する「DX推進支援サービス」の提供を開始いたしました。</p>
<h2>サービスの概要</h2>
<p>DX推進支援サービスでは、戦略立案から実行支援まで一貫してサポートします。経営層へのDX戦略提案から、現場担当者への教育・研修、システム導入支援まで幅広く対応します。</p>
<h2>特長</h2>
<ul>
<li>現状分析から始める課題特定</li>
<li>実現可能なロードマップの策定</li>
<li>段階的な変革推進</li>
<li>効果測定・継続改善サポート</li>
</ul>`,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const news = await getNewsDetail(slug);
    return { title: news.title, description: news.title };
  } catch {
    const fallback = fallbackNews[slug];
    if (!fallback) return { title: "記事が見つかりません" };
    return { title: fallback.title };
  }
}

export async function generateStaticParams() {
  try {
    const news = await getNewsList(100);
    return news.contents.map((item) => ({ slug: item.id }));
  } catch {
    return Object.keys(fallbackNews).map((id) => ({ slug: id }));
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  let news;
  let isFallback = false;

  try {
    news = await getNewsDetail(slug);
  } catch {
    const fallback = fallbackNews[slug];
    if (!fallback) notFound();
    news = fallback;
    isFallback = true;
  }

  return (
    <>
      {/* Article Header */}
      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0F172A] transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            お知らせ一覧へ戻る
          </Link>

          <div className="flex items-center gap-4 mb-6">
            {news.category && (
              <span className="text-xs font-medium text-[#4AB8D8] border border-[#4AB8D8]/30 px-3 py-1 rounded-full">
                {news.category}
              </span>
            )}
            <time className="text-sm text-gray-400 font-mono">
              {formatDate(news.publishedAt)}
            </time>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight tracking-tight">
            {news.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {"eyecatch" in news && (news as { eyecatch?: { url: string } }).eyecatch && (
            <div className="relative h-72 rounded-2xl overflow-hidden mb-12">
              <Image
                src={(news as { eyecatch: { url: string } }).eyecatch.url}
                alt={news.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="prose-content">
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </div>

          {isFallback && (
            <p className="text-xs text-gray-300 mt-8 text-center">
              ※ サンプルデータを表示しています
            </p>
          )}

          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#0F172A] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              お知らせ一覧へ戻る
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
