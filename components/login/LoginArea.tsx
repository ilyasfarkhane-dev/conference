// Gallery.tsx
import React from "react";
import g1 from "../../public/assets/img/galery/g1.jpg";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/img/galery/1.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/img/galery/2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/img/galery/6.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/img/galery/4.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/img/galery/5.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/img/galery/6.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/img/galery/1.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/img/galery/2.jpg",
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-20">
            Explore Our Gallery
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Explorez notre galerie d'hommage dédiée aux professeurs émérites de
            TIM'22, célébrant leurs contributions exceptionnelles et leur
            engagement inébranlable envers l'excellence académique et la
            recherche innovante
          </p>
        </div>
        <div className="gallery-grid">
          {products.map((product) => (
            <div key={product.id} className="gallery-item">
              <div className="">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="galery-im"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
