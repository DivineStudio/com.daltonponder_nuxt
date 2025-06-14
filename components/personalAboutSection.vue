<template>
  <section>
    <HeaderBanner class="mb-10" border-color="border-primary">
      {{ $t("Home.PersonalAboutSection.SectionHeader") }}
    </HeaderBanner>
    <div class="card border-primary border-1 lg:card-side bg-base-200 shadow-lg/40">
      <div class="card-body max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-rows-none lg:grid-cols-4 gap-4 p-0">
        <div class="lg:col-span-3 px-6 py-6 lg:py-12">
          <h3 class="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-3">
            {{ $t("Home.PersonalAboutSection.Header1") }}
          </h3>
          <div class="lg:text-lg xl:text-xl mb-3 opacity-80" v-html="$t('Home.PersonalAboutSection.Paragraph1')"></div>
          <h3 class="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mt-10 mb-3">
            {{ $t("Home.PersonalAboutSection.Header2") }}
          </h3>
          <div class="lg:text-lg xl:text-xl mb-3 opacity-80" v-html="$t('Home.PersonalAboutSection.Paragraph2')"></div>
          <h3 class="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mt-10 mb-3">
            {{ $t("Home.PersonalAboutSection.Header3") }}
          </h3>
          <div class="lg:text-lg xl:text-xl mb-3 opacity-80" v-html="$t('Home.PersonalAboutSection.Paragraph3')"></div>
        </div>
        <picture>
          <source srcset="/graphics/BlurryLights_Desktop.webp" media="(min-width: 1024px)" />
          <img
            class="max-h-75 lg:max-h-none h-full w-full aspect-video lg:aspect-square object-cover object-center max-lg:rounded-t-2xl lg:rounded-r-2xl"
            src="/graphics/BlurryLights_Mobile.webp" :alt="$t('Image.BlurryLightsAlt')" />
        </picture>
      </div>
    </div>
  </section>
</template>