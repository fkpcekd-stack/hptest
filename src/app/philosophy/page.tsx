import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import RevealChars from "@/components/RevealChars";
import ParallaxNumber from "@/components/ParallaxNumber";

export const metadata: Metadata = {
  title: "Mission Vision Value",
  description:
    "株式会社DKの行動指針。成果を設計し、すべての判断基準に置く。あらゆるビジネスの現場に「成果が生まれる構造」をインストールします。",
};

const values = [
  {
    label: "Value 01",
    title: "判断を磨け",
    text: "感覚で判断しない。成果は正しい判断による副産物だ。",
  },
  {
    label: "Value 02",
    title: "構造を見ろ",
    text: "表面の数字で判断しない。成果の裏側にある構造を捉えろ。",
  },
  {
    label: "Value 03",
    title: "公平であれ",
    text: "平等など無い。成果を基準に判断せよ。",
  },
  {
    label: "Value 04",
    title: "変化を恐れるな",
    text: "変化は目的ではない。成果に近づくための手段である。",
  },
  {
    label: "Value 05",
    title: "没頭しろ",
    text: "成果など気にならなくなる。そんな没頭を見つけろ。",
  },
];

export default function PhilosophyPage() {
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
            Mission Vision Value
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0d0d0d] mb-8 leading-none tracking-tight">
            <RevealChars lines={["行動指針"]} delay={120} charDelay={60} />
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 sm:py-32 bg-white border-t border-black/8">
        <div className="px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p
                data-reveal="up"
                data-delay="0"
                className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-6"
              >
                Mission
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0d0d0d] leading-[1.15] tracking-tight">
                <RevealChars lines={["成果を", "設計する。"]} delay={80} charDelay={50} />
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-black/60 text-base sm:text-lg leading-loose">
              <p data-reveal="up" data-delay="120">
                私たちの仕事は、偶然のラッキーを待つことではない。本質的な「成果」を、自らの手で、設計することだ。
              </p>
              <p data-reveal="up" data-delay="180">
                迷ったときは、常に問いを立てよう。「成果につながる判断か？」と。
              </p>
              <p data-reveal="up" data-delay="240">
                感覚だけで語るな。表面の数字で一喜一憂するな。変化を恐れず、物事の裏側にある構造を捉えにいこう。
              </p>
              <p data-reveal="up" data-delay="300" className="text-[#0d0d0d] font-medium">
                私たちは、あらゆるビジネスの現場に「成果が生まれる構造」をインストールする。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 sm:py-32 bg-[#0d0d0d] text-white">
        <div className="px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p
                data-reveal="up"
                data-delay="0"
                className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-6"
              >
                Vision
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-[1.15] tracking-tight">
                <RevealChars lines={["成果を", "すべての判断基準に。"]} delay={80} charDelay={50} />
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-white/60 text-base sm:text-lg leading-loose">
              <p data-reveal="up" data-delay="120">
                平等など無い。磨き上げた正しい判断と、その先にある結果が、私たちの信頼の拠り所だ。
              </p>
              <p data-reveal="up" data-delay="180">
                しかし、私たちの本質は冷徹さではない。成果という明確な基準のもとで、互いのプロフェッショナリズムをぶつけ合うこと。
              </p>
              <ul data-reveal="up" data-delay="240" className="space-y-2 text-white/80">
                <li>立場ではなく、成果で語る。</li>
                <li>感覚ではなく、判断で進む。</li>
                <li>慣習ではなく、変化を選ぶ。</li>
              </ul>
              <p data-reveal="up" data-delay="300">
                その先に、成果を追うことすら忘れるほどの没頭がある。
              </p>
              <p data-reveal="up" data-delay="360" className="text-white font-medium">
                私たちは、成果を基準に、誰もが本気で仕事に向き合える場所をつくる。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="px-6 lg:px-12">
          <p
            data-reveal="up"
            data-delay="0"
            className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-6"
          >
            Value
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0d0d0d] mb-16 leading-[1.15] tracking-tight">
            <RevealChars lines={["私たちの行動指針"]} delay={80} charDelay={50} />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black/8">
            {values.map((item, i) => {
              const isLast = i === values.length - 1;
              if (isLast) {
                return (
                  <div
                    key={item.label}
                    data-reveal="up"
                    data-delay={String(i * 80)}
                    className="md:col-span-2 border-b border-black/8 bg-[#fafafa] py-20 sm:py-28 px-6 sm:px-10 text-center"
                  >
                    <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
                      {item.label}
                    </p>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0d0d0d] mb-8 leading-[1.15] tracking-tight">
                      <RevealChars lines={[item.title]} delay={120} charDelay={90} />
                    </h3>
                    <p className="text-black/55 text-base sm:text-lg leading-loose max-w-xl mx-auto">
                      {item.text}
                    </p>
                  </div>
                );
              }
              return (
                <div
                  key={item.label}
                  data-reveal="up"
                  data-delay={String(i * 80)}
                  className="relative overflow-hidden py-12 sm:py-16 px-6 sm:px-10 border-b border-black/8 md:[&:nth-child(odd)]:border-r border-black/8"
                >
                  <ParallaxNumber className="absolute -right-6 -bottom-12 text-[12rem] sm:text-[15rem] font-black text-black/[0.05] leading-none select-none">
                    0{i + 1}
                  </ParallaxNumber>
                  <div className="relative">
                    <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                      {item.label}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0d0d0d] mb-5">
                      {item.title}
                    </h3>
                    <p className="text-black/45 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
