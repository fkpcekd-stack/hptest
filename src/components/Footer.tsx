import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/servicesData";

const links: Record<string, { href: string; label: string }[]> = {
  サービス: SERVICES.map((s) => ({
    href: `/services#service-${s.id}`,
    label: s.title,
  })),
  会社情報: [
    { href: "/about", label: "会社概要" },
    { href: "/philosophy", label: "MVV" },
    { href: "/contact", label: "お問い合わせ" },
  ],
  法的情報: [
    { href: "/privacy", label: "プライバシーポリシー" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="dkInc."
              width={120}
              height={30}
              className="h-8 w-auto mb-6 brightness-0 invert"
            />
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-[#4AB8D8] transition-colors duration-200"
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
          <p className="text-xs text-white/30">
            &copy; 2026 株式会社DK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
