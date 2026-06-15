import { Fragment } from "react";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { IllustC01, IllustC02, IllustC03, IllustC04, IllustC05 } from "@/components/BoldIllustrations";
import { SERVICES } from "@/lib/servicesData";
import SectionDivider from "@/components/SectionDivider";

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
        <div className="px-6 lg:px-12">
          <p
            data-reveal="up"
            data-delay="0"
            className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-6"
          >
            Services
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0d0d0d] mb-8 leading-none tracking-tight">
            サービス
          </h1>
        </div>
      </section>

      {/* Services — alternating layout */}
      <section className="services-page-list bg-white">
        {SERVICES.map((service, i) => {
          const Illust = illustrations[i];
          const isEven = i % 2 === 1;
          return (
            <Fragment key={service.id}>
              {i > 0 && <SectionDivider size="compact" index={i - 1} />}
            <div
              id={`service-${service.id}`}
              className="scroll-mt-24"
            >
              <div
                className={`px-6 lg:px-12 py-12 sm:py-20 lg:py-28 flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 sm:gap-12 lg:gap-20 items-center max-w-screen-xl mx-auto overflow-hidden`}
              >
                {/* Illustration */}
                <div
                  data-reveal={isEven ? "right" : "left"}
                  data-delay="180"
                  data-distance="80"
                  data-duration="1s"
                  className="w-full lg:w-1/2 shrink-0"
                >
                  <div className="services-page-illust w-full aspect-[4/3] max-w-lg mx-auto">
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
                    SERVICE 0{i + 1}
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

                </div>
              </div>
            </div>
            </Fragment>
          );
        })}
        <SectionDivider size="compact" index={SERVICES.length - 1} />
      </section>

      <CTASection />
    </>
  );
}
