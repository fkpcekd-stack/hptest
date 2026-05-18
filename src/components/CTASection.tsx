import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#4AB8D8] text-sm font-semibold uppercase tracking-widest mb-6">
          Contact
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          まずはお気軽に<br />ご相談ください。
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          プロジェクトのご相談から、技術的なご質問まで、<br className="hidden sm:block" />
          2営業日以内にご返答いたします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4AB8D8] text-white font-semibold rounded-lg hover:bg-[#3aa5c4] transition-colors text-sm"
          >
            お問い合わせはこちら
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:border-white/50 transition-colors text-sm"
          >
            サービスを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
