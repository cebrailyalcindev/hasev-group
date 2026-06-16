"use client";

interface ContactSectionProps {
  dict: {
    contact: {
      title?: string;
      subtitle?: string;
      contact?: string;
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      send?: string;
      address?: string;
    };
  };
}

export default function ContactSection({ dict }: ContactSectionProps) {
  const c = dict.contact;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              {c.contact}
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a1a2e] mb-4 leading-tight">
              {c.title || "Contactez-nous"}
            </h2>
            <div className="w-12 h-0.5 bg-[#c9a84c] mb-8" />
            {c.subtitle && (
              <p className="text-gray-500 leading-relaxed mb-10">{c.subtitle}</p>
            )}

            <div className="space-y-6">
              {c.address && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#1a1a2e] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.address}</p>
                </div>
              )}
              {c.phone && (
                <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 bg-[#1a1a2e] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-gray-600 text-sm hover:text-[#c9a84c] transition-colors">
                    {c.phone}
                  </a>
                </div>
              )}
              {c.email && (
                <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 bg-[#1a1a2e] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <a href={`mailto:${c.email}`} className="text-gray-600 text-sm hover:text-[#c9a84c] transition-colors">
                    {c.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-[#f8f7f4] p-10">
            <form
              action={`mailto:${c.email || "contact@hasev-group.com"}`}
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-[#1a1a2e] mb-2">
                    {c.name || "Nom"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-[#1a1a2e] mb-2">
                    {c.email ? "Email" : "Email"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
              </div>
              {c.phone && (
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-[#1a1a2e] mb-2">
                    {c.phone || "Téléphone"}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#1a1a2e] mb-2">
                  {c.message || "Message"}
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#1a1a2e] text-white text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#c9a84c] hover:text-[#1a1a2e] transition-colors duration-200"
              >
                {c.send || "Envoyer"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
