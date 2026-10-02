"use client";
import React from "react";

const slides = [
	{
		title: "Royal Blue",
		subtitle: "Holy Hoodie / Now Available",
		image: "https://placehold.net/8.png",
	},
	{
		title: "Ritual Ready",
		subtitle: "Cut for comfort",
		image: "https://placehold.net/8.png",
	},
	{
		title: "Tzitzis Integrated",
		subtitle: "Seamless design",
		image: "https://placehold.net/8.png",
	},
];

export default function Hero() {
	return (
		<section className="w-full overflow-hidden bg-[#050505] text-white">
			<div className="mx-auto max-w-[1800px] px-6 pb-8 pt-10 md:px-8 lg:px-10">
				<p className="eyebrow">New Drop</p>
				<div className="mt-4 flex flex-col items-center text-center">
					<h1 className="max-w-[1500px] text-[4.2rem] font-bold leading-[0.82] tracking-[-0.06em] md:text-[6.5rem] lg:text-[9rem]">
						Holy Hoodies
					</h1>
					<h1 className="mt-8 max-w-[1500px] text-[4.2rem] font-bold leading-[0.82] tracking-[-0.06em] md:text-[6.5rem] lg:text-[9rem]">
						ritual-ready fits
					</h1>
				</div>
				<p className="mt-6 max-w-3xl text-lg text-white md:text-2xl">
					Hoodies married to tzitzis — clean cuts, subtle cues. Street-ready,
					low-key sacred.
				</p>
			</div>

			<div className="mt-8 overflow-x-auto pb-3 pl-6 md:pl-8 lg:pl-10">
				<div className="flex min-w-max gap-5 snap-x snap-mandatory">
					{slides.map((slide) => (
						<div
							key={slide.title}
							className="group relative h-[28rem] w-[82vw] shrink-0 snap-start overflow-hidden rounded-sm border border-white/10 bg-[#111] sm:w-[78vw] md:h-[32rem] md:w-[48vw] lg:h-[34rem] lg:w-[44vw]"
						>
							<img
								src={slide.image}
								alt={slide.title}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
							<div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
								<p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/80">
									{slide.subtitle}
								</p>
								<h2 className="mt-2 text-3xl font-bold leading-none md:text-4xl">
									{slide.title}
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
