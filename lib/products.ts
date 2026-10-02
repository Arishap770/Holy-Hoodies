export type Product = {
  slug: string;
  name: string;
  price: number;
  subtitle: string;
  description: string;
  details: string[];
  images: string[];
};

export const products: Product[] = [
  {
    slug: "blue-holy-hoodie",
    name: "Blue Holy Hoodie",
    price: 198,
    subtitle: "Royal Blue",
    description:
      "A premium heavyweight hoodie built for street rhythm and everyday ritual. Cut with a relaxed fit, brushed interior, and subtle tzitzis detailing that keeps the statement low-key and intentional.",
    details: [
      "Heavyweight fleece blend",
      "Relaxed fit with clean drop shoulder",
      "Tzitzis-inspired detailing",
      "Made for layering and all-day wear",
    ],
    images: [
      "/Images/MMS09261.jpg",
      "/Images/MMS07865-2.jpg",
      "/Images/MMS07769.jpg",
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
