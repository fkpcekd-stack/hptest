import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { IllustC01, IllustC02, IllustC03, IllustC04, IllustC05 } from "@/components/BoldIllustrations";
import { SERVICES } from "@/lib/servicesData";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "株式会社DKのサービス一覧。デジタル広告・SEOメディア・コンテンツ制作・有料職業紹介など、企業の集客・ブランディング・売上拡大を支援するサービスをご提供します。",
};

const illustrations = [IllustC01, IllustC02, IllustC03, IllustC04, IllustC05];

export default function ServicesPage() {
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
            Services
          </p>
          <h1
            data-reveal="up"
            data-delay="80"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0d0d0d] mb-8 leading-none tracking-tight"
          >
            サービス
          </h1>
          <p
            data-reveal="up"
            data-delay="160"
            className="text-black/40 text-lg max-w-lg leading-relaxed"
          >
            企業の集客・ブランディング・採用を、テクノロジーと戦略で支援します。
          </p>
        </div>
      </section>

      {/* Services — alternating layout */}
      <section className="bg-white">
        {SERVICES.map((service, i) => {
          const Illust = illustrations[i];
          const isEven = i % 2 === 1;
          return (
            <div
              key={service.id}
              className={`border-b border-black/6 ${i === 0 ? "border-t" : ""}`}
            >
              <div
                className={`px-8 lg:px-16 py-12 sm:py-20 lg:py-28 flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 sm:gap-12 lg:gap-20 items-center max-w-screen-xl mx-auto`}
              >
                {/* Illustration */}
                <div
                  data-reveal={isEven ? "right" : "left"}
                  data-delay="0"
                  className="w-full lg:w-1/2 shrink-0"
                >
                  <div className="w-full aspect-[4/3] max-w-lg mx-auto">
                    <Illust />
                  </div>
                </div>

                {/* Text content */}
                <div className="w-full lg:w-1/2">
                  <p
                    data-reveal="up"
                    data-delay="60"
                    className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-4"
                  >
                    0{i + 1}
                  </p>
                  <h2
                    data-reveal="up"
                    data-delay="120"
                    className="text-3xl sm:text-4xl font-bold text-[#0d0d0d] mb-6 leading-tight tracking-tight"
                  >
                    {service.title}
                  </h2>
                  <p
                    data-reveal="up"
                    data-delay="180"
                    className="text-black/50 text-base leading-relaxed mb-4"
                  >
                    {service.description}
                  </p>
                  <p
                    data-reveal="up"
                    data-delay="200"
                    className="text-black/35 text-sm leading-relaxed mb-8"
                  >
                    {service.detail}
                  </p>

                  {/* Features */}
                  <ul
                    data-reveal="up"
                    data-delay="240"
                    className="grid grid-cols-2 gap-x-6 gap-y-2 mb-10"
                  >
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-black/55">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4AB8D8] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div data-reveal="up" data-delay="280">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-3 text-sm font-semibold text-[#0d0d0d] border border-[#0d0d0d]/20 px-6 py-3 hover:border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-all duration-300 group"
                    >
                      詳細を見る
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <CTASection />
    </>
  );
}
