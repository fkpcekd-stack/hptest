import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { getServicesList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "株式会社DKのサービス一覧。デジタル広告・SEOメディア・コンテンツ制作・有料職業紹介など、企業の集客・ブランディング・売上拡大を支援するサービスをご提供します。",
};

const fallbackServices = [
  {
    id: "1",
    title: "デジタル広告事業",
    description: "リスティング広告・SNS広告・ディスプレイ広告など、成果につながるデジタル広告を一気通貫で運用します。",
    detail:
      "Google広告・Meta広告・LINE広告など各種媒体の戦略立案から運用・改善まで対応。データに基づいたPDCAサイクルで、費用対効果を最大化します。",
    features: ["広告戦略立案", "Google / Meta / LINE広告", "クリエイティブ制作", "運用・改善", "レポーティング", "LPO支援"],
  },
  {
    id: "2",
    title: "SEOメディア事業",
    description: "検索上位表示を実現するSEO対策と、集客力の高いオウンドメディアの構築・運営を支援します。",
    detail:
      "キーワード調査・競合分析・コンテンツ設計・内部施策・被リンク獲得まで、SEOに必要な施策を体系的に実施。メディアの立ち上げから収益化まで伴走します。",
    features: ["SEO戦略立案", "キーワード調査・分析", "コンテンツSEO", "内部施策・技術SEO", "メディア運営支援", "アクセス解析"],
  },
  {
    id: "3",
    title: "コンテンツ事業",
    description: "ブランドの価値を高める記事・動画・SNSコンテンツを企画・制作・配信します。",
    detail:
      "ターゲット設定からコンテンツ企画・ライティング・デザイン・動画制作まで、ブランドの世界観を一貫して表現。SNS運用や配信まで一括でサポートします。",
    features: ["コンテンツ企画", "記事ライティング", "動画制作・編集", "SNS運用支援", "メルマガ・LP制作", "ブランディング"],
  },
  {
    id: "4",
    title: "有料職業紹介事業",
    description: "許可番号 43-ユ-300269のもと、企業と求職者を結ぶ有料職業紹介サービスを提供します。",
    detail:
      "デジタル・マーケティング・メディア領域を中心に、企業のニーズと求職者のスキル・キャリアを丁寧にマッチング。採用から定着まで伴走型でサポートします。",
    features: ["求人票作成支援", "候補者スクリーニング", "面接調整・サポート", "入社後フォロー", "採用戦略コンサル", "キャリア相談"],
  },
];

const serviceIcons: Record<string, React.ReactNode> = {
  "1": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  ),
  "2": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  "3": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  "4": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default async function ServicesPage() {
  const servicesData = await getServicesList(20);
  const services =
    servicesData.contents.length > 0 ? servicesData.contents : fallbackServices;

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-6">
            Services
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#0F172A] mb-8 leading-tight tracking-tight">
            サービス
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            企業のデジタル変革を支援する、幅広いサービスラインナップをご提供します。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {services.map((service, i) => (
              <article
                key={service.id}
                className="bg-white p-10 hover:bg-[#F8FAFC] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-xl flex items-center justify-center text-[#1B2B5E] mb-8 group-hover:bg-[#4AB8D8]/10 group-hover:text-[#4AB8D8] transition-colors">
                  {serviceIcons[service.id] || (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <div className="text-xs font-mono text-gray-300 mb-4">0{i + 1}</div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#1B2B5E]">
                  {service.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

                {"detail" in service && service.detail && (
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 border-t border-gray-100 pt-4">
                    {service.detail as string}
                  </p>
                )}

                {"features" in service && Array.isArray(service.features) && (
                  <ul className="space-y-2 border-t border-gray-100 pt-6">
                    {(service.features as string[]).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-3.5 h-3.5 text-[#4AB8D8] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-4">
              Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight">
              プロジェクトの進め方
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "01", title: "ヒアリング", desc: "課題・目標・要件を丁寧にヒアリングし、現状を把握します。" },
              { step: "02", title: "提案・設計", desc: "最適なソリューションを提案し、具体的な設計を行います。" },
              { step: "03", title: "開発・実装", desc: "アジャイル手法を取り入れながら、高品質な開発を進めます。" },
              { step: "04", title: "納品・運用", desc: "品質確認後に納品し、安定運用をサポートします。" },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-5xl font-bold text-gray-100 mb-4 font-mono">{item.step}</div>
                <h3 className="font-bold text-[#0F172A] mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
