import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Children playing at school" },
  { src: g2, alt: "Volunteers painting a school" },
  { src: g3, alt: "Student reading under a tree" },
  { src: g4, alt: "Children raising hands in class" },
  { src: g5, alt: "Distributing school bags" },
  { src: g6, alt: "Children with new textbooks" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Gallery</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Moments of Impact</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-xl overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
