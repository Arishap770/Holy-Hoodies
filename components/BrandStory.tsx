"use client";
import React from "react";

export default function BrandStory() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 text-3xl font-bold">Tradition, stitched into the hoodie</h2>
          <p className="mt-6 fun-font readable-strong max-w-prose">
            Tzitzis are more than a fringe — they’re a reminder, an anchor. We design garments that let those cues live in modern life.
            The ties are integrated discreetly so you can move through the city, synagogue, or studio without sacrificing either.
          </p>
          <p className="mt-4 text-neutral-700 max-w-prose">
            Built from premium mills, cut for layering, finished for longevity. This is streetwear with a spine.
          </p>
        </div>

        <div className="rounded-sm overflow-hidden placeholder-bg">
          <img src="https://placehold.net/8.png" alt="Editorial image" className="w-full h-80 md:h-96 object-cover" />
        </div>
      </div>
    </section>
  );
}
