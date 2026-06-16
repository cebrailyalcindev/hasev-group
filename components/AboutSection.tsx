interface AboutSectionProps {
  dict?: Record<string, any>;
}

export default function AboutSection({ dict = {} }: AboutSectionProps) {
  const a = dict?.about ?? {};
  const commitments = [a.opt1, a.opt2, a.opt3, a.opt4].filter(Boolean);

  return (
    <>
      {/* Parallax banner */}
      <div className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <div
          className="absolute inset-[-20%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/truck_home.jpeg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center 60%",
          }}
        />
        <div className="absolute inset-0 bg-[#0A1F6B]/75" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1A4FBF]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[#3A7FE8] text-xs font-bold tracking-[0.35em] uppercase mb-4">{a.about}</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            {a.title ?? "Qui sommes-nous ?"}
          </h2>
        </div>
      </div>

      {/* Text content */}
      <section className="bg-[#f4f6fb] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-4">{a.our_story}</p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F6B] mb-5 leading-tight">{a.title}</h3>
            <div className="w-10 h-[2px] bg-[#1A4FBF] mb-7" />
            {a.p1 && <p className="text-gray-600 leading-relaxed mb-5 whitespace-pre-line">{a.p1}</p>}
            {a.p2 && (
              <p className="text-gray-500 leading-relaxed italic border-l-4 border-[#1A4FBF] pl-5">{a.p2}</p>
            )}
          </div>

          {/* Right */}
          <div>
            {(a.title_2 || a.p3) && (
              <div className="mb-10">
                <p className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-4">{a.vision}</p>
                <h3 className="font-serif text-2xl font-bold text-[#0A1F6B] mb-4 leading-tight">{a.title_2}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{a.p3}</p>
                {a.p4 && <p className="text-gray-500 leading-relaxed">{a.p4}</p>}
              </div>
            )}
            {commitments.length > 0 && (
              <div>
                <p className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-5">
                  {a.title_3 ?? "Nos engagements"}
                </p>
                <ul className="space-y-4">
                  {commitments.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 shrink-0 flex items-center justify-center bg-[#1A4FBF]">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
