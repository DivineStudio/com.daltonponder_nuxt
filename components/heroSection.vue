<template>
  <section class="hero hero-bg-image h-100 md:h-120 lg:h-160 2xl:h-dvh">
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
  </section>
</template>

<style scoped>
.hero-bg-image {
    background-image: url('/_nuxt/public/graphics/HeroBG.webp');
    background-size: cover;
    background-position: center;
}
</style>