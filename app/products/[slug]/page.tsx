"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getProductBySlug } from "../../../lib/products";

const sizeOptions = ["Small", "Medium", "Large"];

export default function ProductPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const product = getProductBySlug(slug ?? "blue-holy-hoodie");
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>("Medium");

  if (!product) {
    return <div className="p-10 text-center text-lg text-white">Product not found.</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="w-full bg-black px-6 py-6">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Holy Hoodies
          </Link>

          <nav className="hidden items-center gap-3 text-sm md:flex">
            <Link href="/" className="px-4 py-2 font-bold text-white">
              Home
            </Link>
          </nav>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white text-sm font-bold text-black">
            N
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] bg-black px-4 pb-10 pt-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[110px_minmax(0,1fr)_430px] lg:items-start">
          <div className="order-2 flex flex-col gap-3 lg:order-1 lg:pt-8">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`View image ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className={`relative h-[88px] w-[88px] overflow-hidden border transition-all ${
                  selectedImage === index
                    ? "border-white bg-white"
                    : "border-white/10 bg-black hover:border-white/50"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="88px"
                />
              </button>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[760px] w-full overflow-hidden bg-black">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className="order-3 lg:pt-8">
            <div className="space-y-5">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/60">
                New Drop
              </p>

              <div>
                <h1 className="text-[3.2rem] font-black leading-[0.88] tracking-[-0.08em] text-white md:text-[4.5rem]">
                  Blue Holy Hoodie
                </h1>
                <p className="mt-3 text-[1.9rem] font-medium text-white/90">Royal Blue</p>
              </div>

              <p className="text-[2.4rem] font-black tracking-[-0.06em] text-white">$198</p>

              <p className="max-w-lg text-base leading-7 text-white/70">
                A premium heavyweight hoodie built for street rhythm and everyday ritual.
                Cut with a relaxed fit, brushed interior, and subtle tzitzis detailing that
                keeps the statement low-key and intentional.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Select Size</h2>
                <button className="flex items-center gap-2 text-base font-medium text-white/80 underline-offset-4 hover:underline">
                  <span className="text-lg">↔</span>
                  <span>Size Guide</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                {sizeOptions.map((size) => {
                  const isSelected = selectedSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`flex min-h-[42px] items-center justify-center border text-sm font-medium transition ${
                        isSelected
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-[#111111] text-white hover:border-white/50"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 text-center text-[1.05rem] leading-7 text-white/80">
              From $14/month, or 4 payments at 0% interest with
              <span className="font-semibold underline underline-offset-4">Klarna</span>
            </div>

            <div className="mt-8">
              <button className="w-full rounded-full border border-white bg-white px-6 py-4 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
