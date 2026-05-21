"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "TOP" },
  { href: "/services", label: "サービス" },
  { href: "/works", label: "実績" },
  { href: "/news", label: "お知らせ" },
  { href: "/about", label: "会社概要" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isTop = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // ヒーローが白背景のため、ロゴは常にカラー表示
  // menuOpen時のみダークオーバーレイに合わせて白に切り替え
  const transparent = isTop && !scrolled && !menuOpen;
  const isDark = menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          menuOpen
            ? "bg-[#0d0d0d]"
            : scrolled
            ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="dkInc."
                width={160}
                height={40}
                className={`h-9 w-auto transition-all duration-500 ${
                  isDark ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </Link>

            <button
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "閉じる" : "メニューを開く"}
            >
              <span
                className={`text-xs font-medium tracking-[0.2em] transition-colors duration-500 ${
                  isDark ? "text-white" : "text-[#0d0d0d]"
                }`}
              >
                {menuOpen ? "CLOSE" : "MENU"}
              </span>
              <div className="flex flex-col gap-[5px] w-6">
                <span
                  className={`block h-px transition-all duration-300 origin-center ${
                    isDark ? "bg-white" : "bg-[#0d0d0d]"
                  } ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
                />
                <span
                  className={`block h-px transition-all duration-300 ${
                    isDark ? "bg-white" : "bg-[#0d0d0d]"
                  } ${menuOpen ? "opacity-0 w-0" : "w-full"}`}
                />
                <span
                  className={`block h-px transition-all duration-300 origin-center ${
                    isDark ? "bg-white" : "bg-[#0d0d0d]"
                  } ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col justify-center transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-8 lg:px-24 pt-20">
          {navLinks.map((link, i) => (
            <div key={link.href} className="border-b border-white/10 overflow-hidden">
              <Link
                href={link.href}
                className={`flex items-center justify-between py-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-white/30 hover:text-white transition-all duration-300 group ${
                  menuOpen ? "nav-item-enter" : ""
                }`}
                style={{ animationDelay: menuOpen ? `${i * 60 + 100}ms` : "0ms" }}
              >
                <span className="group-hover:translate-x-3 transition-transform duration-300">
                  {link.label}
                </span>
                <svg
                  className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </nav>
        <div className="px-8 lg:px-24 mt-12">
          <p className="text-white/20 text-xs tracking-widest">© 2024 株式会社DK</p>
        </div>
      </div>
    </>
  );
}
