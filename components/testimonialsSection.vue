<template>
  <section>
    <HeaderBanner class="mb-10">
      {{ $t("Home.TestimonialsSection.Header") }}
    </HeaderBanner>
    <div>
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-45 rounded-full">
            <img
              :alt="$t('Image.ProfessionalPortraitOfJustinBubelAlt')"
              src="public/ProfessionalPortraitOfJustinBubel.webp"
            />
          </div>
        </div>
        <div class="chat-header ms-1 mb-1">
          <span class="hover:scale-103 transition-transform duration-100 ease-in-out">
            <a :href="highlightedTestimonial.linkedInUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="link text-lg font-semibold underline-offset-3 decoration-accent hover:decoration-2">
              <span>{{ highlightedTestimonial.author }}</span>
              <span class="ms-1"><Icon name="fa6-brands:linkedin" size="0.85em" style="color:#0077B5" /></span>
            </a>
          </span>
          <span class="mx-1 text-lg opacity-50">&bull;</span>
          <span class="text-lg opacity-70 font-semibold">{{ highlightedTestimonial.position }}</span>
          <span class="text-lg opacity-70 mx-1">at</span>
          <span class="text-lg opacity-70 hover:scale-103 transition-transform duration-100 ease-in-out">
            <a :href="highlightedTestimonial.companyUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold link text-lg underline-offset-3 decoration-accent hover:decoration-2">
              {{ highlightedTestimonial.company }}
            </a>
            <span><Icon name="mdi:external-link" size="0.85em" class="ms-1" /></span>
          </span>
        </div>
        <div class="chat-bubble p-5 opacity-85" v-html="highlightedTestimonial.testimonial"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

interface Testimonial {
  author: string;
  company: string;
  companyUrl: string;
  position: string;
  linkedInUrl: string;
  testimonial: string;
}

const testimonialsFiles = import.meta.glob('~/assets/testimonialsSection/*.json', { eager: true });

const testimonialsData: Record<string, any> = {};
for (const path in testimonialsFiles) {
  // Extract the language code from the filename, e.g., TechStackAndSkills_en.json -> en
  const langMatch = path.match(/Testimonials_(\w+)\.json$/);
  if (langMatch) {
    testimonialsData[langMatch[1]] = (testimonialsFiles[path] as any).default;
  }
}

const currentLocale = useI18n().locale;
const testimonials = computed<Testimonial[]>(() => {
  return testimonialsData[currentLocale.value] || testimonialsData['en'] || [];
});
const highlightedTestimonial = computed(() => {
  return testimonials.value[0] || '';
});
const remainingTestimonials = computed(() => {
  return testimonials.value.slice(1) || [];
});


</script>