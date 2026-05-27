import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { getWorkDetail, getWorksList } from "@/lib/microcms";

type Props = {
  params: Promise<{ slug: string }>;
};

const fallbackWorks: Record<
  string,
  {
    id: string;
    title: string;
    category: string;
    description: string;
    content: string;
    publishedAt: string;
    technologies: string[];
  }
> = {
  "1": {
    id: "1",
    title: "大手製造業 基幹システム刷新",
    category: "Webシステム開発",
    description:
      "老朽化した基幹システムをクラウドネイティブなWebシステムへ移行。マイクロサービスアーキテクチャを採用し、業務効率30%改善を実現しました。",
    content: `<h2>プロジェクト概要</h2>
<p>製造業大手のお客様では、20年以上運用してきたレガシーな基幹システムの老朽化が深刻な経営課題となっていました。保守コストの増大、拡張性の限界、セキュリティリスクなど、複数の課題を抱えておられました。</p>
<h2>課題</h2>
<p>システムの老朽化に伴い、以下の課題が発生していました：</p>
<ul>
<li>保守・運用コストが年々増加し、IT予算の60%を占有</li>
<li>新機能追加に3〜6ヶ月を要し、ビジネス機会の損失</li>
<li>セキュリティパッチの適用が困難なため、リスクが拡大</li>
<li>データ連携が困難で、経営判断に必要な情報収集が滞る</li>
</ul>
<h2>解決策</h2>
<p>株式会社DKでは、段階的なクラウド移行戦略を提案。マイクロサービスアーキテクチャを採用し、機能単位での段階的な移行を実現しました。新システムはNext.js・Goを採用したモダンな技術スタックで構築し、AWSクラウド上で運用しています。</p>
<h2>成果</h2>
<ul>
<li>業務処理速度が平均30%向上</li>
<li>インフラコストを年間40%削減</li>
<li>新機能リリースサイクルが3ヶ月から2週間へ短縮</li>
<li>システム可用性99.9%を達成</li>
</ul>`,
    publishedAt: "2025-03-01",
    technologies: ["Next.js", "Go", "PostgreSQL", "AWS", "Kubernetes", "Terraform"],
  },
  "2": {
    id: "2",
    title: "流通業DX推進支援",
    category: "DXコンサルティング",
    description:
      "在庫管理・発注業務のデジタル化により、人的ミス削減とリードタイム短縮を達成。",
    content: `<h2>プロジェクト概要</h2>
<p>流通業のお客様において、アナログ中心の業務プロセスのデジタル化を支援しました。在庫管理・発注業務のDXにより、業務効率の大幅な改善を実現しました。</p>
<h2>課題</h2>
<p>紙・Excelベースの業務が主流で、以下の問題が発生していました：</p>
<ul>
<li>手作業による入力ミスが月10〜15件発生</li>
<li>在庫状況の把握に1日以上かかる</li>
<li>発注タイミングの最適化が困難</li>
</ul>
<h2>成果</h2>
<ul>
<li>人的ミスを95%削減</li>
<li>在庫状況のリアルタイム把握を実現</li>
<li>年間500万円のコスト削減</li>
</ul>`,
    publishedAt: "2025-02-01",
    technologies: ["React", "Python", "Azure", "Power BI"],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const work = await getWorkDetail(slug);
    return { title: work.title, description: work.description };
  } catch {
    const fallback = fallbackWorks[slug];
    if (!fallback) return { title: "実績が見つかりません" };
    return { title: fallback.title, description: fallback.description };
  }
}

export async function generateStaticParams() {
  try {
    const works = await getWorksList(100);
    return works.contents.map((work) => ({ slug: work.id }));
  } catch {
    return Object.keys(fallbackWorks).map((id) => ({ slug: id }));
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;

  let work;
  let isFallback = false;

  try {
    work = await getWorkDetail(slug);
  } catch {
    const fallback = fallbackWorks[slug];
    if (!fallback) notFound();
    work = fallback;
    isFallback = true;
  }

  return (
    <>
      {/* Article Header */}
      <section className="pt-36 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0F172A] transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            実績一覧へ戻る
          </Link>

          <div className="flex items-center gap-4 mb-6">
            {work.category && (
              <span className="text-xs font-medium text-[#4AB8D8] border border-[#4AB8D8]/30 px-3 py-1 rounded-full">
                {work.category}
              </span>
            )}
            <time className="text-sm text-gray-400 font-mono">
              {formatDate(work.publishedAt)}
            </time>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight tracking-tight mb-4">
            {work.title}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            {work.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              {"image" in work && (work as { image?: { url: string } }).image && (
                <div className="relative h-64 rounded-2xl overflow-hidden mb-10">
                  <Image
                    src={(work as { image: { url: string } }).image.url}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="prose-content">
                <div dangerouslySetInnerHTML={{ __html: work.content }} />
              </div>

              {isFallback && (
                <p className="text-xs text-gray-300 mt-8 text-center">
                  ※ サンプルデータを表示しています
                </p>
              )}

              <div className="mt-16 pt-8 border-t border-gray-100">
                <Link
                  href="/works"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#0F172A] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  実績一覧へ戻る
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {"technologies" in work &&
                Array.isArray(work.technologies) &&
                (work.technologies as string[]).length > 0 && (
                  <div className="bg-[#F8FAFC] rounded-2xl p-7">
                    <h3 className="text-sm font-semibold text-[#0F172A] mb-5">使用技術</h3>
                    <div className="flex flex-wrap gap-2">
                      {(work.technologies as string[]).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-[#1B2B5E] bg-white border border-gray-200 px-3 py-1.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              <div className="bg-[#0F172A] rounded-2xl p-7 text-white">
                <h3 className="font-semibold mb-3 text-sm">同様のご相談はこちら</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  類似のプロジェクトやご不明点がございましたら、お気軽にご相談ください。
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#4AB8D8] hover:text-white transition-colors"
                >
                  お問い合わせ
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
