"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "サービス" },
  { href: "/works", label: "実績" },
  { href: "/news", label: "お知らせ" },
  { href: "/about", label: "会社概要" },
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

  const transparent = isTop && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="dkInc."
              width={320}
              height={80}
              className={`h-[80px] w-auto object-contain transition-all duration-300 ${
                transparent ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  transparent
                    ? "text-white/80 hover:text-white"
                    : pathname === link.href
                    ? "text-[#1B2B5E]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                transparent
                  ? "border border-white/50 text-white hover:bg-white hover:text-[#1B2B5E]"
                  : "bg-[#1B2B5E] text-white hover:bg-[#2563EB]"
              }`}
            >
              お問い合わせ
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  transparent ? "bg-white" : "bg-gray-700"
                } ${i === 0 && menuOpen ? "rotate-45 translate-y-2" : ""} ${
                  i === 1 && menuOpen ? "opacity-0" : ""
                } ${i === 2 && menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            ))}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#1B2B5E] hover:bg-gray-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-3 bg-[#1B2B5E] text-white text-sm font-semibold rounded-lg text-center"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
