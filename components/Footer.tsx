"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="text-xl font-bold">Holy Hoodies</div>
            <p className="mt-2 text-sm text-neutral-600">Essentials with meaning.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <nav className="flex gap-6 text-sm">
              <a href="#drops" className="text-neutral-700 hover:underline font-bold">Shop</a>
              <a href="#story" className="text-neutral-700 hover:underline font-bold">Story</a>
              <a href="#collections" className="text-neutral-700 hover:underline font-bold">Collections</a>
            </nav>

            <div className="flex items-center gap-4">
              <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input aria-label="Email" placeholder="Email" className="px-3 py-2 border border-neutral-200 rounded-sm text-sm mr-2 bg-transparent" />
                <button className="px-4 py-2 text-sm bg-black text-white rounded-sm font-bold">Join</button>
              </form>
            </div>

            <div>
              <a href="https://instagram.com/holyhoodies" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border border-neutral-200 rounded-sm hover:bg-black/5 font-bold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-neutral-500 font-bold">© {new Date().getFullYear()} Holy Hoodies — All rights reserved.</div>
      </div>
    </footer>
  );
}
