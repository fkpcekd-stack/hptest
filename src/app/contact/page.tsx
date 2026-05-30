"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import RevealChars from "@/components/RevealChars";

const contactSchema = z.object({
  company: z.string().min(1, "会社名を入力してください"),
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().optional(),
  message: z.string().min(10, "お問い合わせ内容は10文字以上入力してください"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "プライバシーポリシーへの同意が必要です",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { privacy: false },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "送信に失敗しました");
      }

      setSubmitStatus("success");
      reset();
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "予期しないエラーが発生しました"
      );
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#4AB8D8]/30 focus:border-[#4AB8D8]";
  const inputNormal = `${inputBase} border-gray-200 bg-white hover:border-gray-300`;
  const inputError = `${inputBase} border-red-300 bg-red-50 focus:ring-red-200 focus:border-red-400`;
  const inputClass = (hasError: boolean) => (hasError ? inputError : inputNormal);

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#4AB8D8] text-xs font-semibold uppercase tracking-widest mb-6">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl sm:text-6xl font-bold text-[#0F172A] mb-8 leading-tight tracking-tight">
            <RevealChars lines={["お問い合わせ"]} delay={120} charDelay={60} />
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div>
            {/* Form */}
            <div>
              {submitStatus === "success" ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                    お問い合わせありがとうございます
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-10 max-w-sm mx-auto">
                    内容を確認の上、2営業日以内にご連絡いたします。
                    しばらくお待ちいただけますようお願い申し上げます。
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="px-6 py-3 bg-[#1B2B5E] text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] transition-colors"
                  >
                    新しいお問い合わせ
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        会社名
                        <span className="ml-1.5 text-xs text-red-400 font-normal">必須</span>
                      </label>
                      <input
                        type="text"
                        {...register("company")}
                        placeholder="株式会社〇〇"
                        className={inputClass(!!errors.company)}
                      />
                      {errors.company && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.company.message}</p>
                      )}
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        お名前
                        <span className="ml-1.5 text-xs text-red-400 font-normal">必須</span>
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="山田 太郎"
                        className={inputClass(!!errors.name)}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        メールアドレス
                        <span className="ml-1.5 text-xs text-red-400 font-normal">必須</span>
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="example@company.com"
                        className={inputClass(!!errors.email)}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        電話番号
                        <span className="ml-1.5 text-xs text-gray-400 font-normal">任意</span>
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        placeholder="03-XXXX-XXXX"
                        className={inputClass(!!errors.phone)}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      お問い合わせ内容
                      <span className="ml-1.5 text-xs text-red-400 font-normal">必須</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      placeholder="お問い合わせ内容をご記入ください。"
                      className={`${inputClass(!!errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Privacy */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        {...register("privacy")}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#4AB8D8] focus:ring-[#4AB8D8] cursor-pointer"
                      />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        <Link
                          href="/privacy"
                          target="_blank"
                          className="text-[#4AB8D8] underline underline-offset-2 hover:text-[#0F172A]"
                        >
                          プライバシーポリシー
                        </Link>
                        に同意する
                        <span className="ml-1.5 text-xs text-red-400">必須</span>
                      </span>
                    </label>
                    {errors.privacy && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.privacy.message}</p>
                    )}
                  </div>

                  {/* Error */}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600">
                      <p className="font-medium mb-1">送信に失敗しました</p>
                      <p className="text-red-500">{errorMessage}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full py-4 bg-[#1B2B5E] text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <svg
                          className="w-5 h-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        送信中...
                      </>
                    ) : (
                      "送信する"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
