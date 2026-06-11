import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import RevealChars from "@/components/RevealChars";

export const metadata: Metadata = {
  title: "アクセス",
  description:
    "株式会社ディーケーへのアクセス情報。所在地・電話番号・FAX番号と地図をご案内します。",
};

const ADDRESS = "〒860-0833 熊本県熊本市南区平成2丁目5番11号 DKビル2F";
const TEL = "096-321-8377";
const FAX = "096-321-8370";
const MAP_QUERY = encodeURIComponent("熊本県熊本市南区平成2丁目5番11号 DKビル");
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export default function AccessPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-white hero-clip">
        <div className="px-6 lg:px-12">
          <p
            data-reveal="up"
            data-delay="0"
            className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-6"
          >
            Access
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0d0d0d] mb-8 leading-none tracking-tight">
            <RevealChars lines={["アクセス"]} delay={120} charDelay={60} />
          </h1>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-16">
        <div className="px-6 lg:px-12 max-w-5xl mx-auto">
          <div
            data-reveal="up"
            data-delay="0"
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

      {/* Contact Info */}
      <section className="bg-white pb-24">
        <div className="px-6 lg:px-12 max-w-3xl mx-auto">
          <dl data-reveal="up" data-delay="80">
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] border-t border-b border-black/6 py-6 gap-2 sm:gap-8">
              <dt className="text-xs font-semibold text-black/35 uppercase tracking-[0.15em] pt-0.5">
                住所
              </dt>
              <dd className="text-sm text-black/65 leading-relaxed">{ADDRESS}</dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] border-b border-black/6 py-6 gap-2 sm:gap-8">
              <dt className="text-xs font-semibold text-black/35 uppercase tracking-[0.15em] pt-0.5">
                TEL
              </dt>
              <dd className="text-sm text-black/65 leading-relaxed">
                <a href={`tel:${TEL}`} className="hover:text-[#0d0d0d] transition-colors duration-200">
                  {TEL}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] border-b border-black/6 py-6 gap-2 sm:gap-8">
              <dt className="text-xs font-semibold text-black/35 uppercase tracking-[0.15em] pt-0.5">
                FAX
              </dt>
              <dd className="text-sm text-black/65 leading-relaxed">{FAX}</dd>
            </div>
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
