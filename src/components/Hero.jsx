import React from "react";
import { Star, CheckCircle, Palette } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-100">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs text-amber-700">
              <Palette size={14} /> Professional Painting & Decorating
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
              Transforming spaces with impeccable finishes
            </h1>
            <p className="max-w-xl text-neutral-600">
              Interior and exterior painting, wallpapering, plaster repairs, and bespoke finishes. Clean, reliable, and fully insured.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
              >
                Request your free quote
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                View recent work
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-1 text-amber-600">
                <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
                <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
                <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
                <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
                <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
              </div>
              <p className="text-sm text-neutral-600">5.0 from happy homeowners and businesses</p>
            </div>
            <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-neutral-700 sm:grid-cols-2">
              {[
                "Dust-free sanding & meticulous prep",
                "Premium paints: Farrow & Ball, Dulux Trade",
                "Respectful, tidy, on-time",
                "Detailed, written quotations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1600&auto=format&fit=crop"
                alt="Painter rolling a freshly primed wall"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden w-40 rotate-3 overflow-hidden rounded-lg border bg-white p-3 shadow-sm md:block">
              <img
                src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop"
                alt="Color swatches and tools"
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
