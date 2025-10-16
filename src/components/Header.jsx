import React from "react";
import { Paintbrush, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-amber-500 to-rose-500 text-white">
              <Paintbrush size={18} />
            </span>
            <span className="text-base md:text-lg">Brilliance Paint & Decor</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#gallery" className="hover:text-neutral-900">Gallery</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="tel:+11234567890"
              className="hidden md:inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              <Phone size={16} /> (123) 456-7890
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              <Mail size={16} /> Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
