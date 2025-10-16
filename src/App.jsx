import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Brilliance Paint & Decor. All rights reserved.</p>
          <p>
            Serving: Greater City Area, suburbs, and surrounding towns.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
