type Props = { src: string; alt: string; className?: string };

export default function PhoneFrame({ src, alt, className = "" }: Props) {
  return (
    <div className={className}>
      <div className="relative aspect-[1170/2532] w-full rounded-[2.4rem] bg-ink p-[7px] shadow-[0_2px_0_rgba(255,255,255,0.08)_inset,0_40px_70px_-30px_rgba(15,26,19,0.55)]">
        <div className="relative h-full w-full overflow-hidden rounded-[1.95rem] bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
        </div>
        <div className="absolute left-1/2 top-[14px] h-[18px] w-[76px] -translate-x-1/2 rounded-full bg-ink" />
      </div>
    </div>
  );
}
