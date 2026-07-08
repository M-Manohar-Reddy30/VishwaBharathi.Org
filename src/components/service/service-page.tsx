import ServiceHero from "./service-hero";
import ServiceOverview from "./service-overview";
import ServiceFeatures from "./service-features";
import ServiceGallery from "./service-gallery";
import ServiceCTA from "./service-cta";

import { ServicePageData } from "@/types/service";
import ServiceRelated from "./service-related";

interface ServicePageProps {
  service: ServicePageData;
}

export default function ServicePage({
  service,
}: ServicePageProps) {
  return (
    <>
        <ServiceHero
            title={service.hero.title}
            tagline={service.hero.tagline}
            description={service.hero.description}
            image={service.hero.image}
        />

        <ServiceOverview
            title={service.overview.title}
            description={service.overview.description}
            image={service.overview.image}
            highlights={service.overview.highlights}
        />

        <ServiceFeatures
            heading={service.features.heading}
            description={service.features.description}
            features={service.features.items}
        />

        <ServiceGallery
            category={service.gallery.category}
        />

        <ServiceRelated
            current={service.slug}
        />

        <ServiceCTA
            title={service.cta.title}
            description={service.cta.description}
        />
    </>
  );
}