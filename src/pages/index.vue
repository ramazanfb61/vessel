<script setup>
import { AutoPlay } from "@egjs/flicking-plugins";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

import { ref } from "vue";

const plugins = ref([
  new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false }),
  new Arrow(),
  new Pagination({type:"bullet"})
]);
</script>

<template>
  <div class="block border border-blue-500 w-full h-full  md:absolute ">
    <Flicking
      :options="{ align: 'prev', circular: true, panelsPerView: 1 }"
      :plugins="plugins"
    >
      <div class="panel">
        <img class="object-fit" src="../img/slider-3.jpg" alt="">
      </div>
      <div class="panel">
        <img class="object-fit" src="../img/slider-4.jpg" alt="">
      </div>
      <div class="panel">
        <img class="object-fit" src="../img/slider-5.jpg" alt="">
      </div>
      <template #viewport>
        <span class="flicking-arrow-prev text-white"></span>
        <span class="flicking-arrow-next"></span>
        <div class="flicking-pagination"></div>
      </template>
    </Flicking>
  </div>
</template>