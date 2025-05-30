<template>
  <section>
    <HeaderBanner class="mb-10">
      {{ $t("Home.TestimonialsSection.Header") }}
    </HeaderBanner>
    <div>
      <div class="chat chat-start max-lg:flex max-lg:flex-col">
        <div class="chat-image avatar max-lg:mx-auto max-lg:mb-3">
          <div class="w-45 rounded-full">
            <img
              :alt="$t('Image.ProfessionalPortraitOfJustinBubelAlt')"
              src="public/ProfessionalPortraitOfJustinBubel.webp"
            />
          </div>
        </div>
        <div class="chat-header lg:ms-1 mb-3 lg:mb-1 max-lg:mx-auto max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-0">
          <span class="hover:scale-103 transition-transform duration-100 ease-in-out">
            <a :href="highlightedTestimonial.linkedInUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="fa6-brands--linkedin link text-lg font-semibold underline-offset-3 decoration-accent hover:decoration-2">
              <span>{{ highlightedTestimonial.author }}</span>
              <!-- <span class="ms-1"><Icon name="fa6-brands:linkedin" size="0.85em" style="color:#0077B5" /></span> -->
            </a>
          </span>
          <span class="lg:ms-6 lg:me-2 text-lg opacity-50">&bull;</span>
          <span class="text-lg opacity-70 font-semibold">{{ highlightedTestimonial.position }}</span>
          <span class="text-lg opacity-70 mx-2">at</span>
          <span class="text-lg opacity-70 hover:scale-103 transition-transform duration-100 ease-in-out">
            <a :href="highlightedTestimonial.companyUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="mdi--external-link font-semibold link text-lg underline-offset-3 decoration-accent hover:decoration-2">
              {{ highlightedTestimonial.company }}
            </a>
            <!-- <span><Icon name="mdi:external-link" size="0.85em" class="ms-1" /></span> -->
          </span>
        </div>
        <div class="chat-bubble max-lg:max-w-full p-5 opacity-85" v-html="highlightedTestimonial.testimonial"></div>
      </div>
    </div>
    <div>

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

<style scoped>

@media screen and (max-width: 1024px) {
  .chat-bubble {
    border-bottom-left-radius: 0.5rem;
  }

  .chat-bubble::before {
    display: none;
    content: '';
  }
}

.fa6-brands--linkedin {
  position: relative;
}

.fa6-brands--linkedin::after {
  display: inline-block;
  position: absolute;
  width: 0.8em;
  height: 0.8em;
  margin-left: 0.25rem;
  padding-top: 0.05rem;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-32 0 512 512'%3E%3Cpath fill='%230077B5' d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z'/%3E%3C/svg%3E");
}

.mdi--external-link {
  position: relative;
}

.mdi--external-link::after {
  display: inline-block;
  position: absolute;
  width: 0.8em;
  height: 0.8em;
  margin-left: 0.25rem;
  padding-top: 0.05rem;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z'/%3E%3C/svg%3E");
}

[data-theme="dark"] .mdi--external-link::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z'/%3E%3C/svg%3E");
}

</style>