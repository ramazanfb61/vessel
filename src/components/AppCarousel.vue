<script setup>
import { ref } from "vue";

const carouselIndex = ref(1);

function nextSlide(num, direction) {
  carouselIndex.value += num;
  if (carouselIndex.value === 4) {
    return (carouselIndex.value = 1);
  } else if (carouselIndex.value === 0) {
    return (carouselIndex.value = 3);
  }
}
</script>

<template>
  <div>
    <div class="">
      <div class="relative h-30 border border-blue-950">
        <Transition name="slide-up">
          <div v-if="carouselIndex === 1" id="page-1" class="">
            <img class="w-full object-contain" src="../img/slider-3.jpg" alt="" />
          </div>
          <div v-else-if="carouselIndex === 2" id="page-2" class="">
            <img class="w-full object-contain" src="../img/slider-4.jpg" alt="" />
          </div>
          <div v-else-if="carouselIndex === 3" id="page-2" class="">
            <img class="w-full object-contain" src="../img/slider-5.jpg" alt="" />
          </div>
        </Transition>
        <button
          class="text-white transition ease-linear bg-opacity-20 bg-black hover:bg-opacity-70 rounded-full w-8 h-8 absolute left-1"
          @click="nextSlide(-1)"
        >
        &#10094;
        </button>
        <button
          class="text-white transition ease-linear bg-opacity-20 bg-black hover:bg-opacity-70 rounded-full w-8 h-8 absolute right-1"
          @click="nextSlide(1)"
        >
        &#10095;
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-in;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
}
</style>
