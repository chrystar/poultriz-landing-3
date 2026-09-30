"use client";

import { useEffect, useState } from "react";
import PhoneFrame from "../components/PhoneFrame";

// TODO: paste your Android download link here (APK or Play Store URL).
const ANDROID_URL = "https://www.mediafire.com/file/2sh5itq4fs8lhh2/poultriz.apk/file";

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}

function DownloadButtons({ onIos, dark = false }: { onIos: () => void; dark?: boolean }) {
  const primary = dark
    ? "bg-lime text-forest hover:bg-limeDeep"
    : "bg-forest text-lime hover:bg-forestSoft";
  const secondary = dark
    ? "border border-white/30 text-white hover:bg-white/10"
    : "border border-ink/20 text-ink hover:bg-ink/5";
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
            <a
        href={ANDROID_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-[0.95rem] font-semibold transition-colors ${primary}`}
      >
        <DownloadIcon />
        Download for Android
      </a>
      <button
        type="button"
        onClick={onIos}
        className={`inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-[0.95rem] font-semibold transition-colors ${secondary}`}
      >
        <DownloadIcon />
        Download for iOS
      </button>
    </div>
  );
}

function ComingSoonDialog({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ios-title"
        className="w-full max-w-sm rounded-2xl bg-white p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="ios-title" className="font-display text-2xl font-extrabold">
          iOS is coming soon
        </h2>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
          We are finishing the iPhone release. The Android version is ready to
          download now.
        </p>
        <button
          type="button"
          autoFocus
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-forest px-5 py-3 text-[0.95rem] font-semibold text-lime transition-colors hover:bg-forestSoft"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="8" fill="#B9E37D" />
      <path
        d="M14 22V8M14 13l-4.5-3.2M14 13l4.5-3.2M14 18l-4.5-3.2M14 18l4.5-3.2"
        stroke="#0F2A1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const features = [
  {
    title: "Batches, from plan to sold",
    body: "Plan a batch before the chicks arrive, correct the count and cost the day they land, then move it from active to completed. Closing a batch never deletes its history.",
    img: "/screens/crop-batch-card.jpg",
    alt: "A batch card showing breed, source, bird count, days and cost",
  },
  {
    title: "Expenses and sales, kept per batch",
    body: "Feed, medicine and sales are logged against the batch they belong to, so one batch's numbers never bleed into another's.",
    img: "/screens/crop-expense-card.jpg",
    alt: "An expenses card showing a batch total and entry count",
  },
  {
    title: "Profit you can check",
    body: "Revenue, expenses and what you paid for the chicks sit side by side on each batch, with the profit worked out as you log.",
    img: "/screens/crop-financials.jpg",
    alt: "The financials card showing revenue, expenses and profit for a batch",
  },
  {
    title: "A short read on the whole farm",
    body: "The dashboard gives you a sentence, not a spreadsheet: profit so far, how mortality is tracking, what is planned.",
    img: "/screens/crop-insight.jpg",
    alt: "A dashboard insight saying the farm is profitable",
  },
];

export default function Home() {
  const [iosOpen, setIosOpen] = useState(false);

  return (
    <main className="bg-paper text-ink">
      {/* Top bar */}
      <header className="mx-auto flex max-w-content items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Mark />
          <span className="font-display text-lg font-extrabold">Poultriz</span>
        </a>
        <a
          href="#download"
          className="rounded-lg bg-forest px-4 py-2.5 text-sm font-semibold text-lime transition-colors hover:bg-forestSoft"
        >
          Download
        </a>
      </header>

      {/* Hero */}
      <section id="top" className="grain overflow-hidden">
        <div className="mx-auto grid max-w-content gap-14 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-10 md:pb-28 md:pt-16">
          <div className="animate-rise opacity-0" style={{ animationDelay: "60ms" }}>
            <h1 className="font-display text-[2.9rem] font-extrabold leading-[1.02] sm:text-6xl md:text-[4.4rem]">
              Every batch,
              <br />
              <span className="swash">accounted for.</span>
            </h1>

            <p className="mt-7 max-w-md text-[1.075rem] leading-[1.65] text-muted">
              Poultriz keeps the feed, medicine, sales and mortality for each
              batch in one place, and works out what it actually made you, while
              you are still on the farm.
            </p>

            <div className="mt-9">
              <DownloadButtons onIos={() => setIosOpen(true)} />
            </div>
          </div>

          <div
            className="animate-rise relative mx-auto w-[236px] opacity-0 sm:w-[264px] md:w-[290px]"
            style={{ animationDelay: "200ms" }}
          >
            <PhoneFrame
              src="/screens/home.jpg"
              alt="The Poultriz dashboard showing active batches, live birds and a profit insight"
              className="rotate-[3deg]"
            />
            <div className="absolute -left-6 bottom-16 -rotate-[4deg] rounded-xl bg-forest px-4 py-3 shadow-[0_18px_30px_-12px_rgba(15,26,19,0.5)] sm:-left-12">
              <p className="text-xs text-lime/80">Profit so far</p>
              <p className="font-display text-xl font-extrabold text-white">₦1,247,050</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers band */}
      <section className="grain grain-dark bg-forest text-white">
        <div className="mx-auto grid max-w-content gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-end md:py-28">
          <div>
            <p className="text-sm text-white/60">Four completed broiler batches, as they appear in the app</p>
            <p className="mt-4 font-display text-[3.6rem] font-extrabold leading-none text-lime sm:text-7xl md:text-[5.5rem]">
              ₦758,901
            </p>
            <p className="mt-4 max-w-xs text-lg leading-snug text-white/85">
              net profit. All four batches came out ahead.
            </p>
          </div>

          <dl className="text-[0.95rem]">
            {[
              ["Revenue", "₦3,394,701"],
              ["Expenses", "₦2,061,800"],
              ["Chick cost", "₦574,000"],
              ["Cost per bird", "₦1,878"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between border-t border-white/15 py-4">
                <dt className="text-white/65">{k}</dt>
                <dd className="font-display text-xl font-bold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-content px-5 py-20 sm:px-8 md:py-28">
        <h2 className="max-w-xl font-display text-3xl font-extrabold leading-[1.1] sm:text-[2.6rem]">
          What Poultriz keeps track of, so you do not have to.
        </h2>

        <div className="mt-14">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="grid gap-8 border-t border-line py-10 md:grid-cols-2 md:items-center md:gap-16 md:py-14"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="font-display text-2xl font-bold leading-tight">{f.title}</h3>
                <p className="mt-3 max-w-md text-[1.02rem] leading-[1.7] text-muted">{f.body}</p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.img}
                  alt={f.alt}
                  loading="lazy"
                  className="w-full rounded-2xl border border-line bg-white shadow-[0_24px_40px_-28px_rgba(15,26,19,0.5)]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compare batches */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-content gap-14 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20 md:py-28">
          <div className="mx-auto w-[236px] sm:w-[264px] md:w-full md:max-w-[290px]">
            <PhoneFrame
              src="/screens/batch-profit.jpg"
              alt="The batch profit screen ranking every batch by profit"
              className="-rotate-[2.5deg]"
            />
          </div>

          <div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] sm:text-[2.6rem]">
              Line every batch up against the others.
            </h2>
            <p className="mt-5 max-w-lg text-[1.02rem] leading-[1.7] text-muted">
              After a few cycles you stop guessing which breed, source or timing
              worked. Batch Profit ranks them and shows why.
            </p>

            <dl className="mt-10 max-w-lg">
              {[
                ["Net profit", "Revenue, minus expenses, minus what you paid for the chicks."],
                ["Per bird", "What each bird cost you to raise, across every batch."],
                ["Strongest cycle", "The batch that earned the most, named for you on the screen."],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 border-t border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="font-display font-bold">{k}</dt>
                  <dd className="text-[0.97rem] leading-relaxed text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="grain grain-dark bg-forest text-white">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
                Put your next batch on the record.
              </h2>
              <p className="mt-5 max-w-sm text-[1.02rem] leading-relaxed text-white/70">
                Download Poultriz and start logging feed, medicine, sales and
                mortality from your very next batch.
              </p>
            </div>
            <DownloadButtons dark onIos={() => setIosOpen(true)} />
          </div>
        </div>
      </section>

      <footer className="bg-forest text-white/60">
        <div className="mx-auto flex max-w-content flex-col gap-3 border-t border-white/10 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="flex items-center gap-2.5 text-white">
            <Mark />
            <span className="font-display font-bold">Poultriz</span>
          </span>
          <span>Built for farms, not spreadsheets.</span>
        </div>
      </footer>
      {iosOpen && <ComingSoonDialog onClose={() => setIosOpen(false)} />}
    </main>
  );
}
