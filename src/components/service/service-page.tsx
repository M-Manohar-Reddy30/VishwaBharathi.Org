import { ServicePageData } from "@/types/service";

import ServiceHero from "./service-hero";

import ServiceAbout from "./about/service-about";

import AcademicPrograms from "./academics/academic-programs";

import TherapyServices from "./therapy/therapy-services";

import VocationalTraining from "./vocational/vocational-training";

import SportsDevelopment from "./sports/sports-development";

import CulturalActivities from "./cultural/cultural-activities";

import ResidentialFacilities from "./residential/residential-facilities";

import EducationalTours from "./tours/educational-tours";

import ServiceGallery from "./service-gallery";

import ServiceCTA from "./service-cta";

interface ServicePageProps {
  service: ServicePageData;
}

export default function ServicePage({
  service,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}

      <ServiceHero
        title={service.hero.title}
        tagline={service.hero.tagline}
        description={service.hero.description}
        image={service.hero.image}
      />

      {/* About */}

      <ServiceAbout />

      {/* Academic Programs */}

      <AcademicPrograms />

      {/* Therapy */}

      <TherapyServices />

      {/* Vocational */}

      <VocationalTraining />

      {/* Sports */}

      <SportsDevelopment />

      {/* Arts & Cultural */}

      <CulturalActivities />

      {/* Residential */}

      <ResidentialFacilities />

      {/* Educational Tours */}

      <EducationalTours />

      {/* Gallery */}

      <ServiceGallery
        category={service.gallery.category}
      />

      {/* Call To Action */}

      <ServiceCTA
        title={service.cta.title}
        description={service.cta.description}
      />
    </>
  );
}