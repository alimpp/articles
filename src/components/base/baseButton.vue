<template>
  <div class="base-button-container d-flex flex-column">
    <button
      class="btn-sm btn white_color"
      :class="{
        'primary_color_bg': primaryColor,
        'danger_color_bg': dangerColor,
        'warning_color_bg': warningColor,
      }"
    >
      <div
        class="spinner-border spinner-border-sm text-light"
        role="status"
        v-if="loading"
      ></div>
      <i
        class="bi"
        :class="{
          'bi-trash': deleted,
          'bi-heart': heart,
          'bi-bag-plus-fill': cart,
          'bi-arrow-bar-left': back,
        }"
      ></i>
      {{ name }}
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
const primaryColor = computed(() => {
  if (props.color === "primary") {
    return true;
  }
});
const dangerColor = computed(() => {
  if (props.color === "danger") {
    return true;
  }
});
const warningColor = computed(() => {
  if (props.color === "warning") {
    return true;
  }
});
const deleted = computed(() => {
  if (props.icon === "delete") {
    return true;
  }
});
const heart = computed(() => {
  if (props.icon === "heart") {
    return true;
  }
});
const back = computed(() => {
  if(props.icon === "back"){
    return true
  }
})
const cart = computed(() => {
  if (props.icon === "cart") {
    return true;
  }
});
const props = defineProps({
  color: {
    type: String,
    default: "",
    required: true,
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
    required: false,
  },
  icon: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style></style>
