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
      <button class="btn btn-circle mdi--arrow-up-circle fixed right-5 bottom-5 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              id="back-to-top"
              ref="back-to-top"
              type="button"
              aria-label="Back to top"
              title="Back to top"
              @click="scrollToTop">
      </button>
    </main>
    <footer>

    </footer>
  </div>
</template>

<style scoped>
#back-to-top {
  /* transition: opacity 0.25s ease, transform 0.25s ease; */
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

.mdi--arrow-up-circle {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: solid 2px black;
  color: black;
  background-color: white;
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221em%22%20height%3D%221em%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M13%2020h-2V8l-5.5%205.5l-1.42-1.42L12%204.16l7.92%207.92l-1.42%201.42L13%208z%22%2F%3E%3C%2Fsvg%3E");
}

[data-theme="dark"] .mdi--arrow-up-circle {
  border-color: white;
  color: white;
  background-color: #1d232a;
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221em%22%20height%3D%221em%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13%2020h-2V8l-5.5%205.5l-1.42-1.42L12%204.16l7.92%207.92l-1.42%201.42L13%208z%22%2F%3E%3C%2Fsvg%3E");
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
