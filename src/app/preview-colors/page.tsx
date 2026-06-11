import { Metadata } from "next";

export const metadata: Metadata = {
  title: "カラー比較プレビュー",
  description: "サイト配色バリエーション比較",
  robots: { index: false, follow: false },
};

type Variant = {
  key: string;
  name: string;
  mood: string;
  bg: string;
  dark: string;
  cyan: string;
  muted: string;
  mutedStrong: string;
  border: string;
  footerBg?: string;
};

const variants: Variant[] = [
  {
    key: "current",
    name: "現状",
    mood: "モノクロ × シアン、シャープでクール",
    bg: "#FFFFFF",
    dark: "#0d0d0d",
    cyan: "#4AB8D8",
    muted: "rgba(13,13,13,0.45)",
    mutedStrong: "rgba(13,13,13,0.65)",
    border: "rgba(13,13,13,0.08)",
  },
  {
    key: "v1",
    name: "変更1: ネイビー × 深シアン",
    mood: "信頼感、企業らしさ。深めシアンで上品さと締まりを強調",
    bg: "#FFFFFF",
    dark: "#0E2238",
    cyan: "#2A8FB3",
    muted: "rgba(14,34,56,0.45)",
    mutedStrong: "rgba(14,34,56,0.65)",
    border: "rgba(14,34,56,0.08)",
  },
  {
    key: "v2",
    name: "変更2: ダーク × シアン",
    mood: "全面ダーク、シアンが最も強調されるテックモダン",
    bg: "#0d0d0d",
    dark: "#FFFFFF",
    cyan: "#4AB8D8",
    muted: "rgba(255,255,255,0.45)",
    mutedStrong: "rgba(255,255,255,0.70)",
    border: "rgba(255,255,255,0.10)",
    footerBg: "#000000",
  },
  {
    key: "v3",
    name: "変更3: ディープネイビー × シアン",
    mood: "ネイビー色合いのダーク。青の深みで上品さと信頼感をプラス",
    bg: "#0B1B30",
    dark: "#FFFFFF",
    cyan: "#4AB8D8",
    muted: "rgba(255,255,255,0.45)",
    mutedStrong: "rgba(255,255,255,0.70)",
    border: "rgba(255,255,255,0.10)",
    footerBg: "#06111F",
  },
];

function Mockup({ v }: { v: Variant }) {
  return (
    <div
      className="rounded-lg overflow-hidden border shadow-sm"
      style={{ borderColor: v.border, backgroundColor: v.bg }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: v.border, backgroundColor: v.bg }}
      >
        <div className="flex items-center gap-1.5">
          <div
            className="w-5 h-5 rounded-sm"
            style={{ backgroundColor: v.cyan }}
          />
          <span
            className="text-[10px] font-bold tracking-[0.2em]"
            style={{ color: v.dark }}
          >
            dkInc.
          </span>
        </div>
        <div className="flex gap-3 text-[9px]" style={{ color: v.mutedStrong }}>
          <span>サービス</span>
          <span>会社概要</span>
          <span>MVV</span>
          <span
            className="border px-2 py-0.5"
            style={{ borderColor: v.dark, color: v.dark }}
          >
            CONTACT
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="px-5 py-8" style={{ backgroundColor: v.bg }}>
        <p
          className="text-[9px] font-semibold tracking-[0.3em] mb-3"
          style={{ color: v.muted }}
        >
          DIGITAL MARKETING
        </p>
        <h1
          className="text-3xl font-bold leading-[1.05] tracking-tight mb-3"
          style={{ color: v.dark }}
        >
          成果を
          <br />
          設計する。
        </h1>
        <p
          className="text-[10px] leading-relaxed max-w-[200px]"
          style={{ color: v.mutedStrong }}
        >
          本質的な成果を、自らの手で設計する。私たちはあらゆるビジネスの現場に成果が生まれる構造をインストールする。
        </p>
      </div>

      {/* Section divider with cyan badge */}
      <div
        className="px-5 py-4 border-t border-b"
        style={{ borderColor: v.border, backgroundColor: v.bg }}
      >
        <p
          className="text-[9px] font-mono tracking-[0.3em] mb-1"
          style={{ color: v.cyan }}
        >
          SERVICE 01
        </p>
        <p className="text-sm font-bold" style={{ color: v.cyan }}>
          広告運用事業
        </p>
        <p className="text-[10px] mt-1" style={{ color: v.muted }}>
          成果から逆算したアカウント設計と、データに基づく改善で売上拡大を支援。
        </p>
      </div>

      {/* CTA */}
      <div
        className="px-5 py-6 text-center"
        style={{ backgroundColor: v.cyan }}
      >
        <p className="text-[9px] font-semibold tracking-[0.3em] mb-2 text-white/80">
          CONTACT
        </p>
        <p className="text-base font-bold text-white mb-3">
          まずはご相談ください
        </p>
        <span
          className="inline-block px-4 py-1.5 text-[10px] font-semibold"
          style={{ backgroundColor: v.bg, color: v.dark }}
        >
          お問い合わせ →
        </span>
      </div>

      {/* Footer */}
      <div
        className="px-5 py-5 text-[9px] border-t"
        style={{
          backgroundColor: v.footerBg ?? v.dark,
          color: "rgba(255,255,255,0.6)",
          borderColor: v.border,
        }}
      >
        <div className="flex justify-between mb-3">
          <span className="font-bold tracking-[0.15em] text-white/80">
            dkInc.
          </span>
          <div className="flex gap-3">
            <span>サービス</span>
            <span>会社情報</span>
            <span>法的情報</span>
          </div>
        </div>
        <p className="text-white/30">© 2026 株式会社DK</p>
      </div>

      {/* Palette swatches */}
      <div
        className="px-5 py-4 border-t"
        style={{ backgroundColor: v.bg, borderColor: v.border }}
      >
        <div className="grid grid-cols-3 gap-2">
          <Swatch label="背景" hex={v.bg} color={v.dark} />
          <Swatch label="テキスト" hex={v.dark} color={v.dark} />
          <Swatch label="アクセント" hex={v.cyan} color={v.dark} />
        </div>
      </div>
    </div>
  );
}

function Swatch({
  label,
  hex,
  color,
}: {
  label: string;
  hex: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-6 h-6 rounded border border-black/10 shrink-0"
        style={{ backgroundColor: hex }}
      />
      <div className="leading-tight">
        <p className="text-[8px] uppercase tracking-wider" style={{ color, opacity: 0.5 }}>
          {label}
        </p>
        <p className="text-[10px] font-mono" style={{ color }}>
          {hex}
        </p>
      </div>
    </div>
  );
}

export default function PreviewColorsPage() {
  return (
    <main className="bg-[#F4F4F5] min-h-screen pt-32 pb-24">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <header className="mb-12">
          <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Color Variations
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0d0d0d] mb-4 tracking-tight">
            カラー比較プレビュー
          </h1>
          <p className="text-black/55 text-sm leading-relaxed max-w-2xl">
            ベースカラーのシアン (#4AB8D8) は固定。ダーク色とベース背景の組合せを変えた配色案を並べて比較できます。各カードはヘッダー / ヒーロー / サービス / CTA / フッターを模したミニモックアップです。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {variants.map((v) => (
            <div key={v.key} className="flex flex-col gap-4">
              <div>
                <p className="text-[#4AB8D8] text-[10px] font-semibold uppercase tracking-[0.25em] mb-1">
                  {v.key === "current" ? "Current" : v.key.toUpperCase()}
                </p>
                <h2 className="text-lg font-bold text-[#0d0d0d] leading-tight">
                  {v.name}
                </h2>
                <p className="text-xs text-black/50 mt-1 leading-relaxed">
                  {v.mood}
                </p>
              </div>
              <Mockup v={v} />
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-white border border-black/8 rounded-lg">
          <h2 className="text-sm font-bold text-[#0d0d0d] mb-2 tracking-wide">
            選び方
          </h2>
          <ul className="text-xs text-black/55 leading-relaxed space-y-1.5">
            <li>• 気に入った案が決まったら「変更1で適用して」のように指示してください。</li>
            <li>• 「変更1の背景をもう少し白に寄せて」など微調整も可能です。</li>
            <li>• このプレビュー画面は <code className="bg-black/5 px-1.5 py-0.5 rounded font-mono">/preview-colors</code> で確認できます (本番ナビには載りません)。</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
