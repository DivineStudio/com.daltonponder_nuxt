<template>
  <div>
    <a href="#" class="btn btn-ghost lg:text-lg" @click.prevent.stop="swapLang('en')">{{ $t('Navbar.Language') }}</a>
  </div>
</template>

<script setup>
const { setLocale, setLocaleCookie, getLocaleCookie } = useI18n();

const lang = ref(getLocaleCookie() || 'en');

const swapLang = () => {
  if (lang.value === 'en') {
    lang.value = 'es';
  } else {
    lang.value = 'en';
  }

  setLocale(lang.value);
  setLocaleCookie(lang.value);
}
</script>