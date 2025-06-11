<template>
  <section class="hero relative hero-bg-image h-100 md:h-120 lg:h-160 2xl:h-dvh">
    <div class="container mx-auto px-4 pt-16 pb-6">
      <div class="hero-content flex flex-col items-start">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl mb-5 md:mb-7 lg:mb-10 text-white font-bold flex flex-col md:flex-row md:gap-x-4">
          <div>
            {{ $t('Home.Hero.Header') }}
          </div>
          <div class="text-[#5DA3A8] text-shadow-lg/80">Dalton Ponder</div>
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl text-white font-bold">
          {{ $t('Home.Hero.Skill1') }}
        </p>
        <p class="text-xl md:text-2xl lg:text-3xl text-white font-bold">
          {{ $t('Home.Hero.Skill2') }}
        </p>
        <p class="text-xl md:text-2xl lg:text-3xl text-white font-bold">
          {{ $t('Home.Hero.Skill3') }}
        </p>
      </div>
    </div>
    <div class="max-2xl:hidden">
      <button id="goToContent" class="btn btn-circle border-0 mdi--arrow-down-circle hover:scale-120 transition ease-in-out text-shadow-lg/40 absolute bottom-10 left-0 right-0 mx-auto">
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  const btn = document.querySelector('#goToContent');
  if (btn) {
    btn.addEventListener('click', () => {
      const heroSection = btn.closest('section');
      if (heroSection) {
        const bottom = heroSection.getBoundingClientRect().bottom + window.scrollY;
        window.scrollTo({ top: bottom, behavior: 'smooth' });
      }
    });
  }
});
</script>

<style scoped>
.hero-bg-image {
    background-image: url('/_nuxt/public/graphics/HeroBG.webp');
    background-size: cover;
    background-position: center;
}

.mdi--arrow-down-circle {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2340798C' d='M11 6v8l-3.5-3.5l-1.42 1.42L12 17.84l5.92-5.92l-1.42-1.42L13 14V6zm1 16A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10'/%3E%3C/svg%3E");
}
</style>