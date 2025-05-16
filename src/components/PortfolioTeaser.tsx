import React, { useState, useCallback, memo } from "react";
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

// Memoized image component to prevent unnecessary re-renders
const ProjectImage = memo(({ src, alt, onClick, idx }: { 
  src: string; 
  alt: string; 
  onClick: () => void;
  idx: number;
}) => {
  return (
    <motion.button
      type="button"
      className="group focus:outline-none"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      style={{ position: 'relative' }}
      layout
    >
      <img
        src={src}
        alt={alt}
        className="w-full aspect-[4/3] rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] object-cover"
        loading="lazy"
        decoding="async"
      />
      {/* Overlay on hover */}
      <span
        className="absolute inset-0 rounded-xl bg-[color:var(--accent)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg className="w-10 h-10 text-white opacity-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16m-6-6l-4.553 2.276a1 1 0 000 1.448L9 16"></path></svg>
      </span>
    </motion.button>
  );
});

ProjectImage.displayName = 'ProjectImage';

// Memoized category button
const CategoryButton = memo(({ 
  name, 
  isOpen, 
  onClick 
}: { 
  name: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  let Icon = Sofa;
  if (/bathroom/i.test(name)) Icon = ShowerHead;
  else if (/kitchen/i.test(name)) Icon = ChefHat;
  else if (/stairs?/i.test(name)) Icon = Landmark;
  else if (/other/i.test(name)) Icon = Sofa;

  return (
    <Disclosure.Button
      className={
        `flex w-full justify-between items-center text-xl md:text-2xl font-semibold text-[color:var(--primary)] capitalize py-5 px-6 transition-all duration-200 focus:outline-none bg-white/80 hover:bg-white rounded-xl shadow-md hover:shadow-lg ${isOpen ? 'border-b-2 border-[color:var(--accent)]' : ''}`
      }
      onClick={onClick}
    >
      <span className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-lg shadow bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/20 p-3">
          <Icon
            className="w-full h-full text-[color:var(--accent)]"
            aria-hidden="true"
            strokeWidth={1.5}
          />
        </div>
        <span className="text-black font-bold">{name}</span>
      </span>
      <div className="w-8 h-8 rounded-full bg-[color:var(--accent)]/10 flex items-center justify-center">
        <ChevronDown className={`h-5 w-5 text-[color:var(--accent)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
    </Disclosure.Button>
  );
});

CategoryButton.displayName = 'CategoryButton';

export default function PortfolioTeaser({ categories }: Props) {
  // Only one section open at a time
  const [openSection, setOpenSection] = useState<string | null>(null);
  // Track both open image src and its category name
  const [open, setOpen] = useState<{
    category: string;
    idx: number;
  } | null>(null);

  // Keyboard navigation - memoized to prevent recreating on every render
  const keyboardNavigation = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setOpen(null);
  }, [open, categories]);

  // Setup keyboard events only when modal is open
  React.useEffect(() => {
    if (!open) return;
    window.addEventListener('keydown', keyboardNavigation);
    return () => window.removeEventListener('keydown', keyboardNavigation);
  }, [open, keyboardNavigation]);

  // Memoized navigation functions
  const nextImage = useCallback(() => {
    if (!open) return;
    const cat = categories.find(c => c.name === open.category);
    if (!cat) return;
    setOpen({
      category: open.category,
      idx: (open.idx + 1) % cat.images.length
    });
  }, [open, categories]);

  const prevImage = useCallback(() => {
    if (!open) return;
    const cat = categories.find(c => c.name === open.category);
    if (!cat) return;
    setOpen({
      category: open.category,
      idx: (open.idx - 1 + cat.images.length) % cat.images.length
    });
  }, [open, categories]);

  // Toggle section handler - memoized
  const toggleSection = useCallback((name: string) => {
    setOpenSection(current => current === name ? null : name);
  }, []);

  return (
    <section id="portfolio" className="w-full py-16 bg-[color:var(--secondary)]">
      <div className="container mx-auto px-4 min-h-[300px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">Our Work</h2>
        <div className="w-full max-w-3xl mx-auto">
          {categories.map(({ name, images }) => {
            const isOpen = openSection === name;
            
            return (
              <Disclosure key={name} as="div" className="mb-6">
                {() => (
                  <>
                    <CategoryButton 
                      name={name} 
                      isOpen={isOpen}
                      onClick={() => toggleSection(name)}
                    />
                    
                    {isOpen && (
                      <Disclosure.Panel static className="overflow-hidden mt-4 bg-white/50 p-6 rounded-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                          {images.map((src, idx) => (
                            <ProjectImage
                              key={src}
                              src={src}
                              alt={`${name} project photo ${idx + 1}`}
                              idx={idx}
                              onClick={() => setOpen({ category: name, idx })}
                            />
                          ))}
                        </div>
                      </Disclosure.Panel>
                    )}
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
        
        <AnimatePresence>
          {open && (() => {
            const cat = categories.find(c => c.name === open.category);
            if (!cat) return null;
            const src = cat.images[open.idx];
            
            return (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                onClick={() => setOpen(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
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
                  <div className="aspect-[4/3] max-w-5xl max-h-[90vh] w-[95vw] bg-[color:var(--secondary)] flex items-center justify-center rounded-2xl overflow-hidden">
                    <img
                      src={src}
                      alt="Enlarged project photo"
                      className="object-cover w-full h-full rounded-2xl shadow-2xl"
                      loading="eager"
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
