import { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社DK（dkInc.）の会社概要。会社名・代表者・所在地・事業内容などの基本情報をご紹介します。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社DK（dkInc.）" },
  { label: "代表取締役", value: "山田 太郎" },
  { label: "設立", value: "2015年4月" },
  { label: "所在地", value: "〒150-0001 東京都渋谷区〇〇1-2-3 DKビル5階" },
  { label: "電話番号", value: "03-XXXX-XXXX" },
  { label: "メールアドレス", value: "info@dk311.jp" },
  {
    label: "事業内容",
    value: "デジタル広告事業、SEOメディア事業、コンテンツ事業、有料職業紹介事業",
  },
  { label: "有料職業紹介許可番号", value: "43-ユ-300269" },
  { label: "資本金", value: "3,000万円" },
  { label: "従業員数", value: "45名（2025年4月現在）" },
  {
    label: "主要取引先",
    value: "大手製造業・流通業・金融機関・IT企業等（守秘義務により非公開）",
  },
  {
    label: "認定・資格",
    value: "AWS APNパートナー、Microsoft Partner、情報処理安全確保支援士（登録セキスペ）在籍",
  },
];

const mvValues = [
  {
    label: "Mission",
    title: "ミッション",
    text: "テクノロジーの力で、すべてのビジネスを前進させる。",
  },
  {
    label: "Vision",
    title: "ビジョン",
    text: "デジタル変革のリーディングカンパニーとして、産業と社会の発展に貢献する。",
  },
  {
    label: "Values",
    title: "バリュー",
    text: "誠実・革新・共創。お客様と共に考え、共に成長し続けます。",
  },
];

const history = [
  { year: "2015年4月", event: "株式会社DK設立。Webシステム開発事業を開始。" },
  { year: "2016年9月", event: "クラウドインテグレーション事業を開始。AWS認定パートナーを取得。" },
  { year: "2018年3月", event: "DXコンサルティング事業を拡大。大手製造業との長期契約を締結。" },
  { year: "2020年1月", event: "東京都渋谷区に本社移転。従業員数20名体制へ拡大。" },
  { year: "2022年6月", event: "データ分析・AI活用部門を新設。機械学習エンジニアを積極採用。" },
  { year: "2023年11月", event: "セキュリティコンサルティング事業を開始。" },
  { year: "2025年4月", event: "AWS APNパートナー認定取得。従業員数45名体制へ成長。" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-6">
            About Us
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#0F172A] mb-8 leading-tight tracking-tight">
            会社概要
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            株式会社DKは、テクノロジーを通じてビジネスの課題を解決し、
            お客様の成長を支援することをミッションとしています。
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-4">
              Philosophy
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight">
              経営理念
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {mvValues.map((item, i) => (
              <div
                key={item.label}
                className="bg-white p-10 border border-gray-100"
              >
                <div className="text-xs font-mono text-gray-300 mb-6">0{i + 1}</div>
                <p className="text-xs font-semibold text-[#4AB8D8] uppercase tracking-widest mb-3">
                  {item.label}
                </p>
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Table + History */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Company Table */}
            <div>
              <div className="mb-12">
                <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-4">
                  Company Info
                </p>
                <h2 className="text-4xl font-bold text-[#0F172A] leading-tight">
                  会社情報
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {companyInfo.map((item) => (
                  <div key={item.label} className="py-5 grid grid-cols-3 gap-4">
                    <dt className="text-sm font-semibold text-[#0F172A] col-span-1">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-gray-500 col-span-2 leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            {/* History */}
            <div>
              <div className="mb-12">
                <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-4">
                  History
                </p>
                <h2 className="text-4xl font-bold text-[#0F172A] leading-tight">
                  沿革
                </h2>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-100" />
                <div className="space-y-10 pl-8">
                  {history.map((item) => (
                    <div key={item.year} className="relative">
                      <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-[#4AB8D8] ring-4 ring-white" />
                      <time className="text-xs font-semibold text-[#4AB8D8] mb-2 block font-mono">
                        {item.year}
                      </time>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
