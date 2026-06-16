import Link from "next/link";

interface ServicesSectionProps {
  locale: string;
  dict?: Record<string, any>;
}

export default function ServicesSection({ locale, dict = {} }: ServicesSectionProps) {
  const s  = dict?.services      ?? {};
  const sl = dict?.services_list ?? {};

  const items = [
    { num: "01", img: "/s1.png", title: sl.s1 ?? "", desc: sl.s1_content ?? "" },
    { num: "02", img: "/s2.jpeg", title: sl.s2 ?? "", desc: sl.s2_content ?? "" },
    { num: "03", img: "/s3.png", title: sl.s3 ?? "", desc: sl.s3_content ?? "" },
  ];

  return (
    <section className="bg-white">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-24 pb-16">
        <p className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-3">Services</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A1F6B] leading-tight max-w-lg">
            {s.title ?? "Nos services"}
          </h2>
          {s.subtitle && (
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">{s.subtitle}</p>
          )}
        </div>
        <div className="mt-7 w-12 h-[2px] bg-[#1A4FBF]" />
      </div>

      {/* Alternating rows */}
      {items.map((item, i) => (
        <div
          key={item.num}
          className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} border-t border-gray-100`}
        >
          {/* Parallax image panel */}
          <div className="md:w-1/2 relative overflow-hidden min-h-[380px] md:min-h-[480px]">
            <div
              className="absolute inset-[-30%] bg-cover bg-center"
              style={{
                backgroundImage: `url('${item.img}')`,
                backgroundAttachment: "fixed",
              }}
            />
            <div className="absolute inset-0 bg-[#0A1F6B]/20" />
          </div>

          {/* Text panel */}
          <div className="md:w-1/2 flex flex-col justify-center px-10 py-16 md:px-16 md:py-20">
            <span className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-4">{item.num}</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F6B] leading-tight mb-5">{item.title}</h3>
            <div className="w-10 h-[2px] bg-[#1A4FBF] mb-6" />
            <p className="text-gray-500 leading-relaxed mb-10">{item.desc}</p>
            <Link
              href={`/${locale}/contact`}
              className="self-start inline-flex items-center gap-2 text-xs font-bold text-[#0A1F6B] tracking-[0.2em] uppercase border-b-2 border-[#1A4FBF] pb-0.5 hover:text-[#1A4FBF] transition-colors"
            >
              {s.learn_more}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
