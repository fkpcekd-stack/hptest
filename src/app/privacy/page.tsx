import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社DKのプライバシーポリシー・個人情報保護方針です。",
};

const sections = [
  {
    number: "第1条",
    title: "個人情報の定義",
    content: `本ポリシーにおいて「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」）に定める「個人情報」を指し、氏名、住所、電話番号、メールアドレス、その他の記述等により特定の個人を識別できる情報（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）を意味します。`,
  },
  {
    number: "第2条",
    title: "個人情報の収集",
    content: `当社は、以下の方法により個人情報を収集することがあります。

・お問い合わせフォームへの入力
・サービスのお申し込み・登録
・メール・電話・対面によるご連絡
・名刺交換
・Cookieその他の技術的手段

収集する個人情報は、目的の達成に必要な範囲に限定します。`,
  },
  {
    number: "第3条",
    title: "個人情報の利用目的",
    content: `当社は、収集した個人情報を以下の目的のために利用します。

・サービスの提供・運営
・お問い合わせへの対応
・契約の履行および管理
・請求書・見積書等の送付
・新サービスや各種情報のご案内
・マーケティングおよびサービス改善
・法令に基づく対応

上記の目的以外に個人情報を利用する場合は、事前にご本人の同意を得るものとします。`,
  },
  {
    number: "第4条",
    title: "個人情報の第三者提供",
    content: `当社は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供しません。

・法令に基づく場合
・人の生命・身体・財産の保護のために必要な場合
・公衆衛生の向上・児童の健全育成のために特に必要な場合
・国の機関・地方公共団体等が法令の定める事務を遂行するために協力する必要がある場合
・業務委託先に業務を委託する場合（この場合、委託先に対して適切な管理・監督を行います）`,
  },
  {
    number: "第5条",
    title: "個人情報の安全管理",
    content: `当社は、個人情報の紛失、破壊、改ざん、漏洩等を防ぐため、適切なセキュリティ対策を実施します。また、個人情報を取り扱う従業員に対して、個人情報保護に関する適切な教育・監督を行います。`,
  },
  {
    number: "第6条",
    title: "個人情報の開示・訂正・削除",
    content: `ご本人から個人情報の開示・訂正・削除等のご請求をいただいた場合、合理的な期間内に対応いたします。ご請求の際は、本人確認を行うため、所定の手続きをお願いする場合があります。

お問い合わせ先：info@dk311.jp`,
  },
  {
    number: "第7条",
    title: "Cookieの使用",
    content: `当社のウェブサイトでは、利便性向上・アクセス解析のためにCookieを使用することがあります。ブラウザの設定によりCookieを無効にすることが可能ですが、一部のサービスが正常にご利用いただけなくなる場合があります。

当社では、Google Analytics等のアクセス解析ツールを使用することがあります。これらのツールは、Cookieを使用してデータを収集しますが、個人を特定する情報は含まれません。`,
  },
  {
    number: "第8条",
    title: "プライバシーポリシーの変更",
    content: `当社は、法令の改正や事業内容の変更に伴い、本ポリシーを変更することがあります。変更した場合は、当ウェブサイト上で公表します。重要な変更を行う場合には、適切な方法でお知らせします。`,
  },
  {
    number: "第9条",
    title: "お問い合わせ",
    content: `個人情報の取扱いに関するご質問・ご要望・苦情等は、下記窓口にてお受けします。

株式会社DK 個人情報保護担当
〒150-0001 東京都渋谷区〇〇1-2-3
メールアドレス：privacy@dk311.jp
受付時間：平日 9:00〜18:00`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-6">
            Privacy Policy
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#0F172A] mb-8 leading-tight tracking-tight">
            プライバシーポリシー
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            個人情報保護方針
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-gray-500 leading-relaxed mb-16 text-sm">
            株式会社DK（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、
            以下の方針に基づいて個人情報の取扱いを行います。
          </p>

          <div className="space-y-14">
            {sections.map((section) => (
              <div key={section.number}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-[#4AB8D8] font-mono">
                    {section.number}
                  </span>
                  <h2 className="text-lg font-bold text-[#0F172A]">{section.title}</h2>
                </div>
                <p className="text-gray-500 leading-relaxed whitespace-pre-line text-sm pl-12">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-8 border-t border-gray-100 text-right">
            <p className="text-xs text-gray-400 leading-relaxed">
              制定日：2015年4月1日<br />
              最終改定日：2025年4月1日<br />
              株式会社DK（dkInc.）
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
