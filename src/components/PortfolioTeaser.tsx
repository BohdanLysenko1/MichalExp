import React, { useState } from "react";

type Category = {
  name: string;
  images: string[];
};

type Props = {
  categories: Category[];
};

export default function PortfolioTeaser({ categories }: Props) {
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  return (
    <section id="portfolio" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Our Work</h2>
        {categories.map(({ name, images }) => (
          <div key={name} className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 capitalize">{name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  className="group focus:outline-none"
                  onClick={() => setOpenSrc(src)}
                >
                  <img
                    src={src}
                    alt={`${name} project photo ${idx + 1}`}
                    className="rounded-xl w-full aspect-[4/3] object-cover shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
        {openSrc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setOpenSrc(null)}
          >
            <img
              src={openSrc}
              alt="Enlarged project photo"
              className="rounded-2xl max-w-3xl max-h-[80vh] shadow-2xl border-4 border-white"
            />
          </div>
        )}
      </div>
    </section>
  );
}
