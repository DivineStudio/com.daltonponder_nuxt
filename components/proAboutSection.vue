<template>
  <section>
    <div class="card border-primary border-1 lg:card-side bg-base-200 shadow-lg/40">
      <div class="card-body lg:grid lg:grid-rows-none lg:grid-cols-4 gap-4 p-0">
        <picture>
          <source srcset="/graphics/CodeRain_Desktop.webp" media="(min-width: 1024px)" />
          <img
            class="max-h-75 lg:max-h-none h-full w-full aspect-video lg:aspect-square object-cover object-center max-lg:rounded-t-2xl lg:rounded-l-2xl"
            src="/graphics/CodeRain_Mobile.webp" :alt="$t('Image.CodeRainAlt')" />
        </picture>
        <div class="lg:col-span-3 px-6 py-6 lg:py-12">
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-3">
            {{ $t("Home.ProAboutSection.Header1") }}
          </h2>
          <p class="lg:text-lg xl:text-xl mb-3 opacity-80">{{ $t("Home.ProAboutSection.Paragraph1") }}</p>
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mt-10 mb-3">
            {{ $t("Home.ProAboutSection.Header2") }}
          </h2>
          <p class="lg:text-lg xl:text-xl mb-3 opacity-80">{{ $t("Home.ProAboutSection.Paragraph2") }}</p>
          <div class="flex flex-col sm:flex-row gap-4 mt-10">
            <a class="btn lg:btn-lg bg-[#0967C2] text-white border-[#0059b3]" href="https://www.linkedin.com/in/dalton-ponder-99a96a131/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-32 0 512 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z"/></svg>
              {{ $t("Home.ProAboutSection.LinkedIn") }}
            </a>
            <a class="btn lg:btn-lg bg-black text-white border-black" href="https://github.com/DivineStudio/com.daltonponder_nuxt" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-8 0 512 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2"/></svg>
              {{ $t("Home.ProAboutSection.GitHub") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>