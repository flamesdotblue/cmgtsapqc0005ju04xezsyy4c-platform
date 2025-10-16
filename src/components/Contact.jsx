import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Request a Free Quote</h2>
            <p className="mt-2 max-w-xl text-neutral-600">
              Tell us about your project and preferred start date. We typically respond within one business day.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <a href="tel:+11234567890" className="flex items-center gap-3 text-neutral-800 hover:text-neutral-900">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm border">
                  <Phone size={18} />
                </span>
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:hello@brilliancepaintdecor.com" className="flex items-center gap-3 text-neutral-800 hover:text-neutral-900">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm border">
                  <Mail size={18} />
                </span>
                <span>hello@brilliancepaintdecor.com</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-700">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm border">
                  <MapPin size={18} />
                </span>
                <span>123 Artisan Way, Suite 5, Your City</span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-white text-neutral-700 hover:bg-neutral-50" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-white text-neutral-700 hover:bg-neutral-50" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-neutral-900">10+ yrs</p>
                <p className="mt-1 text-xs text-neutral-600">Experience</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-neutral-900">100%</p>
                <p className="mt-1 text-xs text-neutral-600">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Name</label>
                  <input type="text" required placeholder="Jane Doe" className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Email</label>
                  <input type="email" required placeholder="jane@example.com" className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Phone</label>
                  <input type="tel" placeholder="(555) 000-0000" className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Service</label>
                  <select className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900">
                    <option>Interior painting</option>
                    <option>Exterior painting</option>
                    <option>Wallpapering</option>
                    <option>Prep & repairs</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-neutral-800">Project details</label>
                  <textarea rows={5} placeholder="Rooms, colors, timeframe..." className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900" />
                </div>
              </div>
              <div className="mt-4 flex items-start gap-2">
                <input id="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900" />
                <label htmlFor="consent" className="text-xs text-neutral-600">
                  You agree to be contacted about your enquiry. Your information is kept private and never shared.
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Send request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
