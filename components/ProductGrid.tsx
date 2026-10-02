"use client";
import React from "react";
import ProductCard from "./ProductCard";

const SAMPLE_PRODUCTS = [
	{ id: 1, slug: "blue-holy-hoodie", title: "Blue Holy Hoodie", price: "$198", subtitle: "Royal Blue" },
];

export default function ProductGrid({ title = "Featured Drop" }: { title?: string }) {
	return (
		<section id="drops" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
			<div className="mb-8 flex items-center justify-between">
				<h2 className="text-2xl font-bold">{title}</h2>
				<a
					href="#"
					className="text-sm font-medium text-neutral-600 hover:underline"
				>
					See the full drop
				</a>
			</div>

			<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
				{SAMPLE_PRODUCTS.map((p) => (
					<ProductCard
						key={p.id}
						slug={p.slug}
						title={p.title}
						price={p.price}
						subtitle={p.subtitle}
					/>
				))}
			</div>
		</section>
	);
}
