import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[#4AB8D8] py-20 sm:py-32 cta-clip">
      <div className="px-8 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-6">Contact</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
            まずはお気軽に
            <br />
            ご相談ください。
          </h2>
<div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0d0d0d] font-semibold text-sm hover:bg-[#0d0d0d] hover:text-white transition-colors duration-300 group"
            >
              お問い合わせはこちら
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white font-semibold text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              サービスを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
