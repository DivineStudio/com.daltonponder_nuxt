<template>
  <div>
    <header>

      <nav class="navbar fixed bg-secondary text-secondary-content border-b-1 border-b-(--color-primary) shadow-sm z-9999">
        <div class="container px-8 mx-auto flex">
          <div class="navbar-start">
            <NuxtLink to="/" class="btn btn-ghost text-xl">
              <img class="max-h-12"
                   src="/logos/DP_FullLogo_250x84.webp"
                   :alt="$t('Image.DaltonPonderLogoAlt')" />
            </NuxtLink>
          </div>
          <div class="navbar-center hidden lg:flex">
          </div>
          <div class="navbar-end me-4">
            <LanguageToggler class="me-5" />
            <ThemeToggler />
          </div>
        </div>
      </nav>

    </header>
    <main>
      <NuxtPage />
      <button class="btn btn-circle fixed right-5 bottom-5 border-black bg-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              id="back-to-top"
              ref="back-to-top"
              type="button"
              aria-label="Back to top"
              title="Back to top"
              @click="scrollToTop">
        <!-- Rounded "up" arrow icon (24×24) - stroke inherits currentColor -->
        <svg fill="none" aria-labelledby="title-up-arrow-rounded" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <path d="m6.5 11.5c1.8-2.1 3.7-3.9 5.5-5 1.8 1.1 3.7 2.9 5.5 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
      </button>
    </main>
    <footer>

    </footer>
  </div>
</template>

<style>
#back-to-top {
  transition: opacity 0.25s ease, transform 0.25s ease;
  opacity: 0;
  transform: scale(0);
  pointer-events: none; /* don't allow clicks when hidden */
  z-index: 9999;
}

#back-to-top.visible {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue'

/**
 * Back to Top Button (Vue 3 Composition API + TypeScript)
 * ------------------------------------------------------
 * - Appears after scrolling past a threshold.
 * - Smooth-scrolls to top.
 * - Respects reduced motion preference.
 * - Uses throttled scroll handler for performance.
 */

const SHOW_AT = 300 // show after 300px scrolled
const THROTTLE_MS = 150
const backToTopButton = useTemplateRef("back-to-top");

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// --- Utility: Throttle function ---
function throttle<T extends (...args: any[]) => void>(fn: T, wait = THROTTLE_MS): T {
  let last = 0
  let timer: number | undefined
  return function (this: any, ...args: any[]) {
    const now = Date.now()
    const remaining = wait - (now - last)
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = undefined
      }
      last = now
      fn.apply(this, args)
    } else if (!timer) {
      timer = window.setTimeout(() => {
        last = Date.now()
        timer = undefined
        fn.apply(this, args)
      }, remaining)
    }
  } as T
}

function updateVisibility(): void {
  if (backToTopButton?.value) {
    if (window.scrollY > SHOW_AT) {
      backToTopButton.value.classList.add('visible')
    } else {
      backToTopButton.value.classList.remove('visible')
    }
  }
}

const throttledUpdate = throttle(updateVisibility, THROTTLE_MS)

onMounted(() => {
  window.addEventListener('scroll', throttledUpdate, { passive: true })
  window.addEventListener('resize', throttledUpdate, { passive: true })
  updateVisibility() // initialize
})

onUnmounted(() => {
  window.removeEventListener('scroll', throttledUpdate)
  window.removeEventListener('resize', throttledUpdate)
})
</script>
