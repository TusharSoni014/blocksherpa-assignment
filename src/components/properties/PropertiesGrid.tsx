import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import type { Property } from "../../pages/PropertiesPage";
import { formatPrice } from "../../utils/formatPrice";

interface PropertiesGridProps {
  properties: Property[];
  viewMode?: "grid" | "list";
}

const fallbackImages = [
  "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?w=800",
  "https://images.unsplash.com/photo-1695067440629-b5e513976100?w=800",
  "https://images.unsplash.com/photo-1738168279272-c08d6dd22002?w=800",
  "https://images.unsplash.com/photo-1769428003672-296f923d19b2?w=800",
  "https://images.unsplash.com/photo-1761509386107-9baefe0073f2?w=800",
  "https://images.unsplash.com/photo-1762732793012-8bdab3af00b4?w=800",
];

const PropertiesGrid: React.FC<PropertiesGridProps> = ({
  properties,
  viewMode = "grid",
}) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 12 },
  };

  return (
    <div className="flex-1 p-8">
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-6 mb-12"
            : "flex flex-col gap-6 mb-12"
        }
      >
        <AnimatePresence mode="popLayout">
          {properties.map((property, index) => (
            <motion.div
              key={property._id}
              layout
              variants={item}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ duration: 0.25 }}
            >
              <PropertyCard
                id={property._id}
                image={
                  property.image?.[0] ||
                  fallbackImages[index % fallbackImages.length]
                }
                name={property.title}
                price={formatPrice(property.price)}
                location={property.location}
                beds={property.beds}
                baths={property.baths}
                sqm={property.sqm}
                badge={
                  property.availability === "sold"
                    ? "SOLD"
                    : property.availability === "rent"
                    ? "FOR RENT"
                    : property.availability === "sale"
                    ? "FOR SALE"
                    : property.availability?.toUpperCase()
                }
                tags={property.type ? [property.type] : []}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PropertiesGrid;
