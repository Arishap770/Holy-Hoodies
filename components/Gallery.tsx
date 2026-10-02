"use client";
import Image from "next/image";
import React from "react";

const galleryImages = [
	{ src: "/Images/MMS07736.jpg", alt: "Holy Hoodie detail shot" },
	{ src: "/Images/MMS07741.jpg", alt: "Holy Hoodie styled look" },
	{ src: "/Images/MMS07755.jpg", alt: "Holy Hoodie close-up" },
	{ src: "/Images/MMS07810.jpg", alt: "Holy Hoodie lifestyle" },
	{ src: "/Images/MMS07825.jpg", alt: "Holy Hoodie detail" },
	{ src: "/Images/MMS07852.jpg", alt: "Holy Hoodie full look" },
	{ src: "/Images/MMS07857-2.jpg", alt: "Holy Hoodie profile" },
	{ src: "/Images/MMS07912.jpg", alt: "Holy Hoodie close-up detail" },
	{ src: "/Images/MMS08019.jpg", alt: "Holy Hoodie texture shot" },
	{ src: "/Images/MMS08029-2.jpg", alt: "Holy Hoodie overhead shot" },
	{ src: "/Images/MMS08043-2.jpg", alt: "Holy Hoodie studio shot" },
	{ src: "/Images/MMS08047.jpg", alt: "Holy Hoodie editorial look" },
	{ src: "/Images/MMS08048.jpg", alt: "Holy Hoodie detail image" },
	{ src: "/Images/MMS09214.jpg", alt: "Holy Hoodie front view" },
	{ src: "/Images/MMS09219.jpg", alt: "Holy Hoodie back view" },
	{ src: "/Images/MMS09223.jpg", alt: "Holy Hoodie macro detail" },
	{ src: "/Images/MMS09235.jpg", alt: "Holy Hoodie texture close-up" },
	{ src: "/Images/MMS09267.jpg", alt: "Holy Hoodie full-body image" },
	{ src: "/Images/MMS09336.jpg", alt: "Holy Hoodie portrait shot" },
	{ src: "/Images/MMS09456.jpg", alt: "Holy Hoodie lifestyle image" },
	{ src: "/Images/MMS09457.jpg", alt: "Holy Hoodie detail image" },
	{ src: "/Images/MMS09458.jpg", alt: "Holy Hoodie close-up angle" },
	{ src: "/Images/MMS09474.jpg", alt: "Holy Hoodie soft portrait" },
	{ src: "/Images/MMS09482.jpg", alt: "Holy Hoodie fabric detail" },
	{ src: "/Images/MMS09488.jpg", alt: "Holy Hoodie final look" },
];

export default function Gallery() {
	return (
		<section className="w-full bg-[#050505] py-20 md:py-24">
			<div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
				<h2 className="mb-12 text-2xl font-bold text-white">Holy Hoodie Collection</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
					{galleryImages.map((image, index) => (
						<div
							key={index}
							className="group relative aspect-square overflow-hidden rounded-sm bg-[#111]"
						>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-105"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
