<template>
  <section>
    <div class="card border-primary border-1 lg:card-side bg-base-200 shadow-lg/40">
      <div class="card-body lg:grid lg:grid-rows-none lg:grid-cols-4 gap-4 p-0">
        <picture>
          <source srcset="/_nuxt/public/graphics/CodeRain_Desktop.webp" media="(min-width: 1024px)" />
          <img
            class="max-h-75 lg:max-h-none h-full w-full aspect-video lg:aspect-square object-cover object-center max-lg:rounded-t-2xl lg:rounded-l-2xl"
            src="/_nuxt/public/graphics/CodeRain_Mobile.webp" :alt="$t('Image.CodeRainAlt')" />
        </picture>
        <div class="lg:col-span-3 px-6 py-6 lg:py-12">
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-3">
            {{ $t("Home.ProAboutSection.Header1") }}
          </h2>
          <p class="text-md lg:text-lg xl:text-xl mb-3">{{ $t("Home.ProAboutSection.Paragraph1") }}</p>
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mt-10 mb-3">
            {{ $t("Home.ProAboutSection.Header2") }}
          </h2>
          <p class="text-md lg:text-lg xl:text-xl mb-3">{{ $t("Home.ProAboutSection.Paragraph2") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>