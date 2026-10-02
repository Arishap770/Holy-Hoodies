"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Slide {
	eyebrow: string;
	headline?: string;
	subtext?: string;
	image: string;
}

const slides: Slide[] = [
	{
		eyebrow: "NEW DROP",
		headline: "Navy Blue Holy Hoodie",
		image: "/Images/MMS09283.jpg",
	},
	{
		eyebrow: "MITZVOS HAVE NEVER LOOKED THIS GOOD",
		subtext: "Spirituality in style",
		image: "/Images/MMS08011.jpg",
	},
	{
		eyebrow: "BUILT TO LAST",
		subtext: "Made with the highest quality fabrics",
		image: "/Images/MMS09243.jpg",
	},
];

export default function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		if (isHovering) return;

		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5500);

		return () => clearInterval(interval);
	}, [isHovering]);

	const goToSlide = (index: number) => setCurrentSlide(index);
	const goToPrevious = () =>
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	const goToNext = () =>
		setCurrentSlide((prev) => (prev + 1) % slides.length);

	return (
		<section className="w-full overflow-hidden bg-[#050505]">
			<div
				className="relative h-screen w-full"
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
			>
				{/* Slides */}
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					>
						{/* Background Image */}
						<div className="absolute inset-0">
							<Image
								src={slide.image}
								alt={slide.eyebrow}
								fill
								priority={index === 0}
								className="object-cover"
								sizes="100vw"
							/>
						</div>

						{/* Dark Overlay */}
						<div className="absolute inset-0 bg-black/45" />

						{/* Content */}
						<div className="absolute inset-0 flex flex-col justify-end px-6 py-20 md:px-8 lg:px-10">
							<div>
								<p className="eyebrow text-white">{slide.eyebrow}</p>
								{slide.headline && (
									<h1 className="mt-2 max-w-3xl text-[2.8rem] font-bold leading-[0.9] tracking-[-0.06em] text-white md:text-[5rem] lg:text-[5.75rem]">
										{slide.headline}
									</h1>
								)}
								{slide.subtext && (
									<p className="mt-6 max-w-3xl text-lg text-white md:text-2xl">
										{slide.subtext}
									</p>
								)}
							</div>
						</div>
					</div>
				))}

				{/* Dot Indicators */}
				<div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-10">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`h-2 w-2 rounded-full transition-all duration-300 ${
								index === currentSlide
									? "scale-125 bg-white"
									: "bg-white/50 hover:bg-white/75"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>

				{/* Left Arrow */}
				<button
					onClick={goToPrevious}
					className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/40 md:left-8"
					aria-label="Previous slide"
				>
					<svg
						className="h-6 w-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				{/* Right Arrow */}
				<button
					onClick={goToNext}
					className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/40 md:right-8"
					aria-label="Next slide"
				>
					<svg
						className="h-6 w-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}
