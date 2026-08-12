import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CalendarDays,
  Cog,
  Hammer,
  MapPin,
  Shield,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export type ServiceCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
  slug?: string;
  features?: string[];
};

export const serviceCapabilities: ServiceCapability[] = [
  {
    title: "Asbestos, Mold, and Lead Remediation",
    description:
      "Remediation support organized around documented site conditions and project requirements.",
    icon: Shield,
    slug: "remediation",
    features: [
      "Asbestos abatement",
      "Mold remediation",
      "Lead-safe practices",
      "Project documentation",
    ],
  },
  {
    title: "Preventative Maintenance Services",
    description:
      "Planned maintenance programs to minimize downtime and extend asset life.",
    icon: Wrench,
    slug: "preventative-maintenance",
    features: [
      "Scheduled inspections",
      "Predictive upkeep",
      "Work order management",
      "Maintenance coordination",
    ],
  },
  {
    title: "Pavement Maintenance and Services",
    description:
      "Repair and maintain roads, lots, and walkways for safety and longevity.",
    icon: MapPin,
    slug: "pavement-services",
    features: ["Crack sealing", "Sealcoating", "Striping & marking", "ADA compliance"],
  },
  {
    title: "Elevator Maintenance and Services",
    description:
      "Reliable elevator upkeep and modernization for safe, efficient transport.",
    icon: Cog,
    slug: "elevator-services",
    features: ["Routine maintenance", "Repairs", "Modernization", "Compliance checks"],
  },
  {
    title: "Facility Support and Specialty Services",
    description:
      "Special projects and support operations tailored to mission needs.",
    icon: Wrench,
    slug: "facility-support",
    features: [
      "Specialty cleaning",
      "Minor renovations",
      "Event/mission support",
      "Vendor coordination",
    ],
  },
  {
    title: "Roofing",
    description:
      "Roofing support for facility repair, replacement, and maintenance projects.",
    icon: Hammer,
    slug: "roofing",
    features: [
      "Roof condition review",
      "Repair and replacement",
      "Maintenance coordination",
    ],
  },
  {
    title: "Protective Services",
    description:
      "Unarmed protective services structured around site-specific access, observation, and reporting needs.",
    icon: ShieldCheck,
    slug: "protective-services",
    features: [
      "Unarmed site presence",
      "Access support",
      "Observation and reporting",
    ],
  },
  {
    title: "Leasing Office Services",
    description:
      "Leasing-office support organized around property-specific administrative and coordination requirements.",
    icon: Building2,
    features: [
      "Leasing coordination",
      "Office administration",
      "Property-specific support",
    ],
  },
  {
    title: "Short-Term Leasing",
    description:
      "Short-term leasing support organized around documented occupancy needs and agreed lease requirements.",
    icon: CalendarDays,
    features: [
      "Short-term lease coordination",
      "Occupancy requirement review",
      "Leasing documentation support",
    ],
  },
];
