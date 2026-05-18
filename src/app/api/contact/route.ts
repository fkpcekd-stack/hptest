import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  company: z.string().min(1, "会社名は必須です"),
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("有効なメールアドレスが必要です"),
  phone: z.string().optional(),
  message: z.string().min(10, "お問い合わせ内容は10文字以上必要です"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "プライバシーポリシーへの同意が必要です",
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: "入力内容に問題があります", details: validated.error.flatten() },
        { status: 400 }
      );
    }

    const { company, name, email, phone, message } = validated.data;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailTo = process.env.CONTACT_EMAIL_TO || "info@dk311.jp";
    const emailFrom = process.env.CONTACT_EMAIL_FROM || "noreply@dk311.jp";

    // Email to company (notification)
    await transporter.sendMail({
      from: `"dkInc. お問い合わせフォーム" <${emailFrom}>`,
      to: emailTo,
      subject: `【お問い合わせ】${company} ${name}様より`,
      text: `
新しいお問い合わせが届きました。

■ 会社名
${company}

■ お名前
${name}

■ メールアドレス
${email}

■ 電話番号
${phone || "未記入"}

■ お問い合わせ内容
${message}

---
このメールは dkInc. お問い合わせフォームから自動送信されました。
      `.trim(),
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #1B2B5E; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
    <h1 style="margin: 0; font-size: 20px;">新しいお問い合わせ</h1>
  </div>
  <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <th style="text-align: left; padding: 10px; background: #fff; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #1B2B5E; width: 30%;">会社名</th>
        <td style="padding: 10px; background: #fff; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #374151;">${company}</td>
      </tr>
      <tr>
        <th style="text-align: left; padding: 10px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #1B2B5E;">お名前</th>
        <td style="padding: 10px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #374151;">${name}</td>
      </tr>
      <tr>
        <th style="text-align: left; padding: 10px; background: #fff; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #1B2B5E;">メールアドレス</th>
        <td style="padding: 10px; background: #fff; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #374151;"><a href="mailto:${email}">${email}</a></td>
      </tr>
      <tr>
        <th style="text-align: left; padding: 10px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #1B2B5E;">電話番号</th>
        <td style="padding: 10px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #374151;">${phone || "未記入"}</td>
      </tr>
      <tr>
        <th style="text-align: left; padding: 10px; background: #fff; font-size: 14px; color: #1B2B5E; vertical-align: top;">お問い合わせ内容</th>
        <td style="padding: 10px; background: #fff; font-size: 14px; color: #374151; white-space: pre-wrap;">${message}</td>
      </tr>
    </table>
  </div>
  <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 16px;">
    このメールは dkInc. お問い合わせフォームから自動送信されました。
  </p>
</div>
      `,
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"株式会社DK" <${emailFrom}>`,
      to: email,
      subject: "【株式会社DK】お問い合わせを受け付けました",
      text: `
${name} 様

この度はお問い合わせいただきありがとうございます。
株式会社DK（dkInc.）です。

以下の内容でお問い合わせを受け付けました。
2営業日以内に担当者よりご連絡いたします。

━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━

会社名：${company}
お名前：${name}
メールアドレス：${email}
電話番号：${phone || "未記入"}

お問い合わせ内容：
${message}

━━━━━━━━━━━━━━━━━━━━━━━

ご不明な点がございましたら、下記までご連絡ください。

株式会社DK（dkInc.）
〒150-0001 東京都渋谷区〇〇1-2-3
TEL: 03-XXXX-XXXX
Email: info@dk311.jp
URL: https://dk311.jp

※このメールは自動送信です。返信はできません。
      `.trim(),
    });

    return NextResponse.json({ success: true, message: "お問い合わせを受け付けました" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました。しばらく経ってから再度お試しください。" },
      { status: 500 }
    );
  }
}
