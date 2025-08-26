import React from "react";

type Badge = { src: string; alt: string };

// Defaults use provided .avif assets placed in /public
const defaultBadges: Badge[] = [
  { src: "/army.avif", alt: "U.S. Army" },
  { src: "/coast.avif", alt: "U.S. Coast Guard" },
  { src: "/dod.avif", alt: "U.S. Department of Defense" },
  { src: "/justice.avif", alt: "U.S. Department of Justice" },
  { src: "/navy.avif", alt: "U.S. Navy" },
  { src: "/army.avif", alt: "U.S. Army (Additional)" },
];

const DepartmentBadges: React.FC<{ items?: Badge[] }> = ({ items }) => {
  const badges = items && items.length ? items : defaultBadges;
  return (
    <div aria-label="Government departments worked with" className="w-full">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
        {badges.map((b) => (
          <div key={b.alt} className="flex items-center justify-center">
            <img
              src={b.src}
              alt={b.alt}
              className="h-12 md:h-14 w-auto object-contain mix-blend-multiply"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentBadges;
