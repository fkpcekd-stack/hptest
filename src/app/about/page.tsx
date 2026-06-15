import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社DK（dkInc.）の会社概要。会社名・代表者・所在地・事業内容などの基本情報をご紹介します。",
};

const companyInfo = [
  { label: "会社名", value: "株式会社ディーケー" },
  { label: "設立", value: "令和5年7月3日" },
  { label: "住所", value: "〒860-0833 熊本県熊本市南区平成２丁目5番11号 DKビル2F" },
  { label: "TEL", value: "096-321-8377" },
  { label: "FAX", value: "096-321-8370" },
  { label: "有料職業紹介許可番号", value: "43-ユ-300269" },
  { label: "資本金", value: "3,000,000円" },
  { label: "役員", value: "代表取締役　古賀大資" },
];

const MAP_QUERY = encodeURIComponent("熊本県熊本市南区平成2丁目5番11号 DKビル");
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;


export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 bg-white hero-clip">
        <div className="px-6 lg:px-12">
          <p
            data-reveal="up"
            data-delay="0"
            className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-6"
          >
            About Us
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0d0d0d] mb-8 leading-none tracking-tight">
            会社概要
          </h1>
        </div>
      </section>

      {/* Company Info — main */}
      <section className="about-page-content bg-white pb-24">
        <div className="px-6 lg:px-12 max-w-3xl mx-auto">
          <dl data-reveal="up" data-delay="0" className="border-t border-black/8">
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
                  {item.label === "TEL" && (
                    <p className="mt-2 text-xs text-black/45 leading-relaxed">
                      ※新規の営業に関するお電話は、一切お断りしております。
                      <br />
                      営業やご提案に関する御用件は、お問い合わせフォームよりご連絡ください。
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <SectionDivider />

      {/* Access — map */}
      <section className="about-page-content bg-white pb-24">
        <div className="px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="mb-10" data-reveal="up" data-delay="0">
            <p className="text-[#4AB8D8] text-xs tracking-[0.3em] uppercase mb-3">
              Access
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d] tracking-tight">
              アクセス
            </h2>
          </div>
          <div
            data-reveal="up"
            data-delay="80"
            className="relative w-full aspect-[16/9] overflow-hidden border border-black/8"
          >
            <iframe
              src={MAP_EMBED_SRC}
              title="株式会社ディーケー 地図"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="mt-4 text-right">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-black/45 hover:text-[#0d0d0d] transition-colors duration-200"
            >
              Google マップで開く
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
