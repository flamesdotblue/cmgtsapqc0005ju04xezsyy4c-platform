import React from "react";
import { Brush, Wallpaper, Building2, RollerCoaster } from "lucide-react";

const services = [
  {
    title: "Interior Painting",
    description:
      "Walls, ceilings, woodwork, cabinetry, and feature walls with durable, low-VOC finishes.",
    icon: Brush,
  },
  {
    title: "Wallpapering",
    description:
      "Pattern matching, lining paper, murals, and removal—flawless seams and smooth walls.",
    icon: Wallpaper,
  },
  {
    title: "Exterior Painting",
    description:
      "Weather-resistant coatings for homes, fences, render, brick, and wood restoration.",
    icon: Building2,
  },
  {
    title: "Prep & Repairs",
    description:
      "Plaster repairs, caulking, sanding, stain blocking, and surface priming for perfect finishes.",
    icon: RollerCoaster,
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1400&auto=format&fit=crop",
    alt: "Neutral living room repaint with crisp edges",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
    alt: "Feature wall in deep blue with framed art",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
    alt: "Kitchen cabinet repaint in satin white",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Our Services</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">
              From careful preparation to the final coat, we deliver exceptional finishes designed to last.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 md:inline-block"
          >
            Get a free estimate
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg border bg-neutral-50 p-2 text-neutral-700 group-hover:border-neutral-300">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{description}</p>
            </div>
          ))}
        </div>

        <div id="gallery" className="mt-14">
          <h3 className="text-xl font-semibold text-neutral-900">Recent Work</h3>
          <p className="mt-1 text-sm text-neutral-600">A glimpse of projects we recently completed.</p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img) => (
              <div key={img.alt} className="overflow-hidden rounded-xl border bg-white shadow-sm">
                <img src={img.src} alt={img.alt} className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
