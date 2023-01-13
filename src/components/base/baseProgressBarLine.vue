<template>
  <div class="base-progress-bar-line">
    <span class="size_small">{{ lable }}</span>
    <div class="progress">
      <div
        class="progress-bar"
        :class="{
          primary_color_bg: primary,
          danger_color_bg: danger,
          green_color_bg: green,
        }"
        role="progressbar"
        :style="{'width': width}"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ number }}%
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const primary = computed(() => {
  if (props.color === "primary") {
    return true;
  }
});

const danger = computed(() => {
  if (props.color === "danger") {
    return true;
  }
});

const green = computed(() => {
  if (props.color === "green") {
    return true;
  }
});

const props = defineProps({
  number: {
    type: String,
    default: "",
    required: true,
  },
  lable: {
    type: String,
    default: "",
    required: true,
  },
  width: {
    type: String,
    default: "",
    required: true,
  },
  color: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style></style>
