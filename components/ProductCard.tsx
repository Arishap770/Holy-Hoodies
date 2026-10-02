"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  price: string;
  subtitle?: string;
  slug: string;
};

const images = [
  "/Images/MMS09261.jpg",
  "/Images/MMS07865-2.jpg",
  "/Images/MMS07769.jpg",
];

export default function ProductCard({ title, price, subtitle, slug }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link href={`/products/${slug}`} className="group block w-full">
      <article className="w-full">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-100">
          {images.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`${title} product view ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-baseline justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-tight">{title}</h3>
            {subtitle ? <p className="mt-1 text-xs text-neutral-500">{subtitle}</p> : null}
          </div>
          <div className="text-sm font-medium">{price}</div>
        </div>
      </article>
    </Link>
  );
}
