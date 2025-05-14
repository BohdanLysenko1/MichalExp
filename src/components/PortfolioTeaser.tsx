import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

type Category = {
  name: string;
  images: string[];
};

type Props = {
  categories: Category[];
};

export default function PortfolioTeaser({ categories }: Props) {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Our Work</h2>
        <Accordion type="multiple" className="w-full">
          {categories.map(({ name, images }) => (
            <AccordionItem key={name} value={name} className="mb-4">
              <AccordionTrigger className="text-2xl md:text-3xl font-semibold text-gray-900 capitalize">
                {name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {images.map((src, idx) => (
                    <motion.button
                      key={src}
                      type="button"
                      className="group focus:outline-none"
                      onClick={() => setOpen({ category: name, idx })} // open modal with category and index
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      style={{ position: 'relative' }}
                    >
                      <motion.img
                        src={src}
                        alt={`${name} project photo ${idx + 1}`}
                        className="rounded-xl w-full aspect-[4/3] object-cover shadow-md transition-shadow duration-300 group-hover:shadow-2xl"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <span
                        className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <svg className="w-10 h-10 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16m-6-6l-4.553 2.276a1 1 0 000 1.448L9 16"></path></svg>
                      </span>
                    </motion.button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <AnimatePresence>
          {open && (() => {
            const cat = categories.find(c => c.name === open.category);
            if (!cat) return null;
            const src = cat.images[open.idx];
            return (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
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
                  <img
                    src={src}
                    alt="Enlarged project photo"
                    className="rounded-2xl max-w-3xl max-h-[80vh] shadow-2xl"
                  />
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
