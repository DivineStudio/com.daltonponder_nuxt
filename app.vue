<template>
  <div>
    <header>

      <nav class="navbar fixed bg-primary text-primary-content shadow-sm z-9999">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content border border-accent bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NuxtLink class="text-lg text-(--color-base-content)" :to="$localePath('index')">{{
                  $t('Navigation.Home') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-lg text-(--color-base-content)" :to="$localePath('projects')">{{
                  $t('Navigation.Projects')
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <NuxtLink to="/" class="btn btn-ghost text-xl">Dalton Ponder</NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <NuxtLink class="text-lg" :to="$localePath('index')">{{ $t('Navigation.Home') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-lg" :to="$localePath('projects')">{{ $t('Navigation.Projects') }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="navbar-end me-4">
          <LanguageToggler class="me-5" />
          <ThemeToggler />
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
