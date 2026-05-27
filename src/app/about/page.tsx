import { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社DK（dkInc.）の会社概要。会社名・代表者・所在地・事業内容などの基本情報をご紹介します。",
};

const companyInfo = [
  { label: "設立", value: "令和5年7月3日" },
  { label: "住所", value: "〒860-0833 熊本県熊本市南区平成２丁目5番11号 DKビル2F" },
  { label: "TEL", value: "096-321-8377" },
  { label: "FAX", value: "096-321-8370" },
  { label: "従業員数", value: "15名" },
  { label: "資本金", value: "3,000,000円" },
  { label: "役員", value: "代表取締役　古賀大資" },
];

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

export default function AboutPage() {
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
            About Us
          </p>
          <h1
            data-reveal="up"
            data-delay="80"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0d0d0d] mb-8 leading-none tracking-tight"
          >
            会社概要
          </h1>
        </div>
      </section>

      {/* Company Info — main */}
      <section className="bg-white py-24">
        <div className="px-8 lg:px-16 max-w-3xl mx-auto">
          <div className="border-b border-black/8 pb-8 mb-0">
            <div data-reveal="up" data-delay="0">
              <p className="text-[#4AB8D8] text-xs tracking-[0.3em] uppercase mb-3">
                Company Info
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0d0d0d] tracking-tight">
                会社情報
              </h2>
            </div>
          </div>

          <dl data-reveal="up" data-delay="80">
            {companyInfo.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 sm:grid-cols-[200px_1fr] border-b border-black/6 py-6 gap-2 sm:gap-8"
              >
                <dt className="text-xs font-semibold text-black/35 uppercase tracking-[0.15em] pt-0.5">
                  {item.label}
                </dt>
                <dd className="text-sm text-black/65 leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-[#f7f8f9] border-t border-black/6">
        <div className="px-8 lg:px-16">
          <div data-reveal="up" data-delay="0" className="border-b border-black/8 pb-8 mb-0">
            <p className="text-[#4AB8D8] text-xs tracking-[0.3em] uppercase mb-3">
              Philosophy
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0d0d0d] tracking-tight">
              経営理念
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/6">
            {mvValues.map((item, i) => (
              <div
                key={item.label}
                data-reveal="up"
                data-delay={String(i * 80)}
                className="py-10 sm:py-12 md:px-12 first:md:pl-0 last:md:pr-0"
              >
                <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                  {item.label}
                </p>
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-5">{item.title}</h3>
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
