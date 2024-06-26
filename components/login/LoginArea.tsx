// Gallery.tsx
import React from "react";
import g1 from "../../public/assets/img/galery/g1.jpg";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "../../public/assets/img/galery/g1.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function Gallery() {
  return (
    <div className="gallery-container ">
      <div className="gallery-inner">
        <div className="space-y-4 text-center pt-90 pb-90">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our Gallery
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Discover a curated collection of stunning images that capture the
            beauty and diversity of our world.
          </p>
        </div>
        <div className="gallery-grid">
          {products.map((product) => (
            <div key={product.id} className="gallery-item">
              <div className="image-container">
                <a href={product.href}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="product-image"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
