<template>
  <div class="overflow-x-hidden">
    <Header />
    <HeroImage />
    <SectionTransition />
    <LogoAboutSection />
    <SectionTransition />
    <StorySection />
    <SectionTransition />
    <CatalogButton />
    <SectionTransition />
    <FeaturesSection />
    <SectionTransition />
    <TestimonialsSection />
    <Footer />
    <FloatingWhatsApp />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import HeroImage from '~/components/HeroImage.vue'
import SectionTransition from '~/components/SectionTransition.vue'
import CatalogButton from '~/components/CatalogButton.vue'
import LogoAboutSection from '~/components/LogoAboutSection.vue'
import StorySection from '~/components/StorySection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import Footer from '~/components/Footer.vue'
import FloatingWhatsApp from '~/components/FloatingWhatsApp.vue'
</script>
