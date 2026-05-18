import Link from "next/link";
import Image from "next/image";

const links: Record<string, { href: string; label: string }[]> = {
  サービス: [
    { href: "/services", label: "サービス一覧" },
    { href: "/works", label: "導入実績" },
  ],
  会社情報: [
    { href: "/about", label: "会社概要" },
    { href: "/news", label: "お知らせ" },
    { href: "/contact", label: "お問い合わせ" },
  ],
  法的情報: [
    { href: "/privacy", label: "プライバシーポリシー" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="dkInc."
              width={100}
              height={32}
              className="h-8 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              ビジネスの課題を、<br />テクノロジーで解決する。
            </p>
            <p className="text-xs text-gray-500 mt-4">
              〒150-0001 東京都渋谷区〇〇1-2-3<br />
              info@dk311.jp
            </p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2024 株式会社DK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
