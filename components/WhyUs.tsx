interface WhyUsProps {
  dict?: Record<string, any>;
}

export default function WhyUs({ dict = {} }: WhyUsProps) {
  const hero = dict?.hero ?? {};

  const pillars = [
    hero.why_us_p1,
    hero.why_us_p2,
    hero.why_us_p3,
    hero.why_us_p4,
  ].filter(Boolean);

  if (!pillars.length) return null;

  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-14">
          <p className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            {hero.promise}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F6B] leading-tight">
            {hero.why_us ?? "Pourquoi choisir Hasev Group ?"}
          </h2>
          <div className="mt-5 w-12 h-[2px] bg-[#1A4FBF]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((text: string, i: number) => (
            <div key={i} className="group flex flex-col gap-4">
              <span className="text-[#1A4FBF] font-serif text-4xl font-bold leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-8 h-[2px] bg-[#1A4FBF] transition-all duration-300 group-hover:w-16" />
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
