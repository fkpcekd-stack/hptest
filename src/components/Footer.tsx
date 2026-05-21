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
    <footer className="bg-white border-t border-black/6">
      <div className="px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-black/6">
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="dkInc."
              width={120}
              height={30}
              className="h-8 w-auto mb-6"
            />
            <p className="text-sm text-black/40 leading-relaxed mb-6">
              ビジネスの課題を、
              <br />テクノロジーで解決する。
            </p>
            <p className="text-xs text-black/30 leading-relaxed">
              〒150-0001 東京都渋谷区〇〇1-2-3
              <br />
              info@dk311.jp
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-medium text-black/30 uppercase tracking-[0.2em] mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-black/45 hover:text-[#0d0d0d] transition-colors duration-200"
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
          <p className="text-xs text-black/30">
            &copy; 2024 株式会社DK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
