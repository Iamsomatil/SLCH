import React from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  slug?: string;
  features?: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  slug,
  features,
}) => {
  return (
    <article className="group flex h-full flex-col border-b border-r border-gray-200 bg-white p-6 transition-colors duration-200 hover:bg-gray-50 md:p-7">
      <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-bold leading-snug text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>

      {features && features.length > 0 && (
        <ul className="mt-5 space-y-2 border-t border-gray-200 pt-4">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2 text-sm leading-5 text-gray-600">
              <span className="mt-2 h-1 w-1 flex-none bg-gold" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link
        to={slug ? `/services/${slug}` : "/contact"}
        aria-label={slug ? `Learn more about ${title}` : `Contact SunLife about ${title}`}
        className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-navy underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
      >
        {slug ? "Learn more" : "Contact SunLife"}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
};

export default ServiceCard;
