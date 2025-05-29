<template>
  <section>
    <HeaderBanner class="mb-10" border-color="border-primary">
      {{ $t("Home.SkillsSection.Header") }}
    </HeaderBanner>
    <div class="flex max-lg:flex-col-reverse lg:flex-row lg:gap-10">
      <div id="skills" class="join join-vertical h-fit flex-1/2 bg-base-200 shadow-lg/40 border-1 border-primary rounded-lg">
        <div v-for="(skill, index1) in Object.entries(skills)" :key="index1+'indexSkillsObj'" class="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="techStackAndSkills" />
          <div class="collapse-title font-semibold opacity-80">
            {{ skill[0] }}
          </div>
          <div class="collapse-content">
            <ul class="flex flex-wrap gap-2">
              <li v-for="(item, index2) in skill[1]" :key="index2+'indexSkillsArr'">
                <div class="badge badge-soft badge-primary">{{ item }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex-1/2">
        <picture>
          <source srcset="/_nuxt/public/graphics/PCB_Desktop.webp" media="(min-width: 1024px)" />
          <!-- lg:max-h-none h-full w-full aspect-video lg:aspect-square object-cover object-center -->
          <img
            id="skillsImg"
            class="lg:mask lg:mask-heart lg:mask-half-2 w-full max-lg:max-h-50 max-lg:aspect-video max-lg:border max-lg:border-primary shadow-lg/40 object-cover object-center rounded-lg"
            src="/_nuxt/public/graphics/PCB_Mobile.webp" :alt="$t('Image.PCBAlt')" />
        </picture>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const skillsFiles = import.meta.glob('~/assets/skillsSection/*.json', { eager: true });

const skillsData: Record<string, any> = {};
for (const path in skillsFiles) {
  // Extract the language code from the filename, e.g., TechStackAndSkills_en.json -> en
  const langMatch = path.match(/TechStackAndSkills_(\w+)\.json$/);
  if (langMatch) {
    skillsData[langMatch[1]] = (skillsFiles[path] as any).default;
  }
}

const currentLocale = useI18n().locale;
const skills = computed<Record<string, string[]>>(() => {
  return skillsData[currentLocale.value] || skillsData['en'] || [];
});

onMounted(() => {
  const skillsSection = document.querySelector<HTMLElement>("#skills");
  const skillsImage = document.querySelector<HTMLImageElement>("#skillsImg");

  if (skillsSection && skillsImage) {
    skillsImage.style.height = `${skillsSection.clientHeight}px`;
  }
});
</script>

<style scoped>

[data-theme="dark"] {
  #skills .badge {
    color: var(--color-secondary) !important;
  }
}

@media (max-width: 1023.98px) {
  #skills {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    
    .collapse:first-of-type {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }
  }

  #skillsImg {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
}
</style>