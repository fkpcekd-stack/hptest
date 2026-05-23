import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { ILLUST_MAP } from "@/components/BoldIllustrations";
import { SERVICES } from "@/lib/servicesData";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);
  if (!service) notFound();

  const Illust = ILLUST_MAP[id];
  const idx = SERVICES.findIndex((s) => s.id === id);
  const prev = SERVICES[idx - 1];
  const next = SERVICES[idx + 1];

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-0 bg-white">
        <div className="px-8 lg:px-16 mb-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs text-black/35 hover:text-[#0d0d0d] transition-colors mb-10 group"
          >
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            サービス一覧へ
          </Link>

          <p
            data-reveal="up"
            data-delay="0"
            className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-5"
          >
            0{idx + 1} — Services
          </p>
          <h1
            data-reveal="up"
            data-delay="80"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0d0d0d] leading-tight tracking-tight mb-6"
          >
            {service.title}
          </h1>
          <p
            data-reveal="up"
            data-delay="160"
            className="text-black/45 text-lg max-w-2xl leading-relaxed"
          >
            {service.description}
          </p>
        </div>

        {/* Illustration panel */}
        <div
          data-reveal="fade"
          data-delay="200"
          className="w-full bg-[#f7f8f9] border-t border-black/6 px-8 lg:px-16 py-16"
        >
          <div className="max-w-2xl mx-auto aspect-[4/3]">
            {Illust && <Illust />}
          </div>
        </div>
      </section>

      {/* Detail content */}
      <section className="py-20 bg-white">
        <div className="px-8 lg:px-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: detail description */}
            <div>
              <h2
                data-reveal="up"
                data-delay="0"
                className="text-xs font-semibold text-black/30 uppercase tracking-[0.25em] mb-6"
              >
                Detail
              </h2>
              <p
                data-reveal="up"
                data-delay="60"
                className="text-black/60 text-base leading-[1.9] mb-10"
              >
                {service.detail}
              </p>

              {/* CTA button */}
              <div data-reveal="up" data-delay="120">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#0d0d0d] text-white text-sm font-semibold px-8 py-4 hover:bg-[#4AB8D8] transition-colors duration-300 group"
                >
                  このサービスについて相談する
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

            {/* Right: features */}
            <div>
              <h2
                data-reveal="up"
                data-delay="0"
                className="text-xs font-semibold text-black/30 uppercase tracking-[0.25em] mb-6"
              >
                Features
              </h2>
              <ul
                data-reveal="up"
                data-delay="60"
                className="space-y-0 border-t border-black/8"
              >
                {service.features.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-center gap-4 py-4 border-b border-black/8 group"
                  >
                    <span className="text-xs font-mono text-[#4AB8D8]/70 shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-[#0d0d0d]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <section className="border-t border-black/6 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black/6">
            {prev ? (
              <Link
                href={`/services/${prev.id}`}
                className="px-8 lg:px-16 py-10 flex items-center gap-4 hover:bg-[#f7f8f9] transition-colors group"
              >
                <svg className="w-5 h-5 text-black/25 group-hover:-translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <div>
                  <p className="text-xs text-black/30 mb-1">前のサービス</p>
                  <p className="text-sm font-semibold text-[#0d0d0d]">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/services/${next.id}`}
                className="px-8 lg:px-16 py-10 flex items-center justify-end gap-4 hover:bg-[#f7f8f9] transition-colors group"
              >
                <div className="text-right">
                  <p className="text-xs text-black/30 mb-1">次のサービス</p>
                  <p className="text-sm font-semibold text-[#0d0d0d]">{next.title}</p>
                </div>
                <svg className="w-5 h-5 text-black/25 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
