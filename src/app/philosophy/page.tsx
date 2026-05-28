import { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "ビジョン",
  description:
    "株式会社DKのビジョン。高水準・挑戦・躍進の三つの柱を軸に、企業の集客・ブランディング・売上拡大を支援します。",
};

const mvValues = [
  {
    label: "Highlevel",
    title: "高水準",
    text: "常に水準の高い業務とスピードを意識した仕事を遂行します。",
  },
  {
    label: "Challenge",
    title: "挑戦",
    text: "私たちは、常に挑戦し続けます。また、常に結果重視の姿勢を貫き通します。",
  },
  {
    label: "Progress",
    title: "躍進",
    text: "弊社は創業時より、常に躍進を続けてまいりました。一つの困難に直面したら、二つの壁を乗り越えるつもりで取り組む。これが私たちの信念です。",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-white hero-clip">
        <div className="px-8 lg:px-16">
          <p
            data-reveal="up"
            data-delay="0"
            className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-6"
          >
            Philosophy
          </p>
          <h1
            data-reveal="up"
            data-delay="80"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0d0d0d] mb-8 leading-none tracking-tight"
          >
            ビジョン
          </h1>
        </div>
      </section>

      {/* Philosophy Values */}
      <section className="py-24 bg-white">
        <div className="px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/6 border-t border-black/8">
            {mvValues.map((item, i) => (
              <div
                key={item.label}
                data-reveal="up"
                data-delay={String(i * 80)}
                className="py-10 sm:py-16 md:px-12 first:md:pl-0 last:md:pr-0"
              >
                <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                  {item.label}
                </p>
                <h2 className="text-2xl font-bold text-[#0d0d0d] mb-5">{item.title}</h2>
                <p className="text-black/45 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
