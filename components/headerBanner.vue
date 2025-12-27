<template>
  <section class="card border-4 w-full bg-base-200" :class="borderColor">
    <div class="card-body">
      <h2 class="text-2xl text-center md:text-3xl lg:text-4xl text-primary font-bold mb-3">
        <slot />
      </h2>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  borderColor: {
    type: String,
    default: 'border-accent'
  }
})
</script>