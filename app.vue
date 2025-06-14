<template>
  <div>
    <header>

      <nav class="navbar fixed bg-primary text-primary-content shadow-sm z-9999">
        <div class="container px-8 mx-auto flex">
          <div class="navbar-start">
            <NuxtLink to="/" class="btn btn-ghost text-xl">Dalton Ponder</NuxtLink>
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
    </main>
    <footer>

    </footer>
  </div>
</template>

<script setup lang="ts">

</script>
