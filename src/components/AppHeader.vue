<script setup>
import { onMounted, ref } from "vue";
import { mdiViewHeadline, mdiPhone, mdiEmail, mdiHandshake } from "@mdi/js";

const toggleNav = ref(null);
</script>

<template>
  <header
    class="absolute z-10 w-full md:h-40 md:bg-transparent bg-gradient-to-b md:from-white from-10%"
  >
    <div
      aria-label="contact"
      class="block md:flex justify-end space-x-20 md:mr-28"
    >
      <div class="flex justify-center py-1 mt-1 md:items-center">
        <a href="tel:+905392835514" class="mr-1 underline underline-offset-2"
          >+90 5362835514</a
        >
        <div class="rounded-tl-lg bg-red-500 text-white p-1">
          <svg-icon class="" type="mdi" :path="mdiPhone"></svg-icon>
        </div>
      </div>
      <div class="md:flex items-center hidden">
        <a href="mailto:" class="underline mr-1 underline-offset-2"
          >deneme.gmail.com</a
        >
        <div class="rounded-tl-lg bg-red-500 text-white p-1">
          <svg-icon class="" type="mdi" :path="mdiEmail"></svg-icon>
        </div>
      </div>
      <button
        class="hidden items-center px-3 md:flex border h-16 rounded-tr-full bg-red-500 text-white hover:bg-white hover:text-red-500 transition-colors ease-in"
      >
        <p class="font-medium">Teklif Alın</p>
        <div class=" mx-2">
          <svg-icon class="h-6 w-6" type="mdi" :path="mdiHandshake"></svg-icon>
        </div>
      </button>
    </div>

    <div class="md:flex">
      <div
        class="md:flex block border-green-500 border text-white md:w-1/2 justify-between"
      >
        <div
          class="bg-red-500 md:w-3/5 text-center text-5xl py-4 md:rounded-tr-full"
        >
          ARMA
        </div>
        <button
          @click="
            toggleNav === null ? (toggleNav = true) : (toggleNav = !toggleNav)
          "
          class="border hidden"
        >
          <svg-icon type="mdi" :path="mdiViewHeadline"></svg-icon>
        </button>
      </div>
      <nav
        :class="{
          navBarIn: toggleNav === true,
          'navBarOut hidden': toggleNav === false,
          hidden: toggleNav === null,
        }"
        class="md:flex w-full bg-red-300 md:bg-white md:w-1/2 md:rounded-tl-full"
      >
        <ul
          class="md:grid md:justify-items-center md:space-x-10 grid-cols-4 divide-x-2 mx-auto h-screen md:h-3/5 font-semibold text-black"
        >
          <li class="p-2 md:py-7">Ana sayfa</li>
          <li class="p-2 md:py-7">Ana sayfa</li>
          <li class="p-2 md:py-7">Ana sayfa</li>
          <li class="p-2 md:py-7">Ana sayfa</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
.navBarIn {
  animation-duration: 0.5s;
  animation-name: navSlideIn;
}

.navBarOut {
  animation-duration: 0.5s;
  animation-name: navSlideOut;
}

@keyframes navSlideIn {
  from {
    opacity: 0;
    margin-top: 50%;
  }

  to {
    opacity: 1;
    margin-top: 0%;
  }
}
@keyframes navSlideOut {
  from {
    opacity: 1;
    display: block;
    margin-top: 0%;
  }
  to {
    opacity: 0;
    display: none;
    margin-top: 50%;
  }
}
</style>
