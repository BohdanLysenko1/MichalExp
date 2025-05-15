import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Disclosure } from '@headlessui/react';
import { ChevronDown, ShowerHead, ChefHat, Landmark, Sofa } from 'lucide-react';

type Category = {
  name: string;
  images: string[];
};

type Props = {
  categories: Category[];
};

export default function PortfolioTeaser({ categories }: Props) {
  // Only one section open at a time
  const [openSection, setOpenSection] = useState<string | null>(null);
  // Track both open image src and its category name
  const [open, setOpen] = useState<{
    category: string;
    idx: number;
  } | null>(null);

  // Keyboard navigation
  React.useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setOpen(null);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, categories]);

  function nextImage() {
    if (!open) return;
    const cat = categories.find(c => c.name === open.category);
    if (!cat) return;
    setOpen({
      category: open.category,
      idx: (open.idx + 1) % cat.images.length
    });
  }
  function prevImage() {
    if (!open) return;
    const cat = categories.find(c => c.name === open.category);
    if (!cat) return;
    setOpen({
      category: open.category,
      idx: (open.idx - 1 + cat.images.length) % cat.images.length
    });
  }

  return (
    <section id="portfolio" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[color:var(--primary)]">Our Work</h2>
        <div className="w-full">
          {categories.map(({ name, images }) => (
            <Disclosure key={name} as="div" className="mb-4">
              {({ open }) => {
                // Only allow one open at a time
                const isOpen = openSection === name;
                return (
                  <>
                    <Disclosure.Button
  className={
    `flex w-full justify-between items-center text-2xl md:text-3xl font-semibold text-[color:var(--primary)] capitalize py-4 transition-all hover:underline focus:outline-none ${isOpen ? 'border-b' : ''}`
  }
  onClick={() => setOpenSection(isOpen ? null : name)}
>
  <span className="flex items-center gap-3">
    {/* Thumbnail preview */}
    {/* Category icon, unique per category */}
      {(() => {
        let Icon = Sofa;
        if (/bathroom/i.test(name)) Icon = ShowerHead;
        else if (/kitchen/i.test(name)) Icon = ChefHat;
        else if (/stairs?/i.test(name)) Icon = Landmark;
        else if (/other/i.test(name)) Icon = Sofa;
        return (
          <Icon
            className="w-12 h-12 rounded-lg shadow-sm border border-gray-200 p-2 bg-white transition-colors"
            aria-hidden="true"
            strokeWidth={1.5}
          />
        );
      })()}
    <span>{name}</span>
  </span>
  <ChevronDown className={`h-5 w-5 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
</Disclosure.Button>
                    <Disclosure.Panel static={isOpen} className="overflow-hidden transition-all">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {images.map((src, idx) => (
                          <motion.button
                            key={src}
                            type="button"
                            className="group focus:outline-none"
                            onClick={() => setOpen({ category: name, idx })}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            style={{ position: 'relative' }}
                          >
                            <motion.img
                              src={src}
                              alt={`${name} project photo ${idx + 1}`}
                              className="rounded-xl w-full aspect-[4/3] object-cover shadow-md transition-shadow duration-300 group-hover:shadow-2xl !filter-none"
                              loading="lazy"
                            />
                            {/* Overlay on hover */}
                            <span
                              className="absolute inset-0 rounded-xl bg-[color:var(--secondary)]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none"
                              aria-hidden="true"
                            >
                              <svg className="w-10 h-10 text-[color:var(--accent)] opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16m-6-6l-4.553 2.276a1 1 0 000 1.448L9 16"></path></svg>
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                );
              }}
            </Disclosure>
          ))}
        </div>
        <AnimatePresence>
          {open && (() => {
            const cat = categories.find(c => c.name === open.category);
            if (!cat) return null;
            const src = cat.images[open.idx];
            return (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--secondary)] opacity-70"
                onClick={() => setOpen(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Stop propagation to avoid closing when clicking on image or buttons */}
                <motion.div
                  className="relative"
                  onClick={e => e.stopPropagation()}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <div className="aspect-[4/3] max-w-3xl max-h-[80vh] w-[90vw] bg-[color:var(--secondary)] flex items-center justify-center rounded-2xl overflow-hidden">
                    <img
                      src={src}
                      alt="Enlarged project photo"
                      className="object-cover w-full h-full rounded-2xl shadow-2xl"
                    />
                  </div>
                  {/* Navigation Arrows */}
                  {cat.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg focus:outline-none"
                        style={{ transform: 'translate(-50%, -50%)' }}
                        aria-label="Previous image"
                      >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg focus:outline-none"
                        style={{ transform: 'translate(50%, -50%)' }}
                        aria-label="Next image"
                      >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </>
                  )}

                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
