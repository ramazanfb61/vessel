<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppCarousel from '../components/AppCarousel.vue';
</script>

<template>
  <div class="">
    <AppHeader />
    <AppCarousel/>
    <div class="px-2">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>

</style>