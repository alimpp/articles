<template>
  <baseCard>
    <template #cardContent>
      <div class="d-flex flex-column px-2 py-2">
        <span class="size_small">Title</span>
        <p class="size_very_small gray_color">{{ title }}</p>
        <span class="size_small">Body</span>
        <p class="size_very_small gray_color">{{ body }}</p>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import baseCard from "@/components/base/baseCard";
const props = defineProps({
  id: {
    type: Number,
    default: "",
    required: true,
  },
  title: {
    type: String,
    default: "",
    required: true,
  },
  body: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style></style>
