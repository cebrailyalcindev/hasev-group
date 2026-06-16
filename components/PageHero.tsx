// PageHero.tsx — reusable banner for inner pages (About, Services, Contact)
// Same "dark image overlay" style as main hero but shorter

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundSeed?: number;
}

export default function PageHero({ title, subtitle, backgroundSeed = 99 }: PageHeroProps) {
  return (
    <section className="relative w-full h-64 md:h-80 flex items-end overflow-hidden bg-[#1a1a2e]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://picsum.photos/1600/600?grayscale&random=${backgroundSeed}')`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a1a2e]/75" />
      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a84c]" />

      {/* Text */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-base mt-2">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
