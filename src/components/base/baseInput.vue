<template>
  <div class="base-input-container">
    <i
      class="bi"
      :class="{
        'bi-person': username,
        'bi-eye-slash': password,
        'bi-person-lines-fill': name,
        'bi-gender-ambiguous': gender,
        'bi-envelope-at': email,
      }"
    ></i>
    <input
      ref="input"
      class="form-control px-4"
      :class="{ error: hasError }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="hasError" class="text-error">{{ textError }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
const username = computed(() => {
  if (props.icon === "user") {
    return true;
  }
});
const password = computed(() => {
  if (props.icon === "password") {
    return true;
  }
});
const name = computed(() => {
  if (props.icon === "bi-person-lines-fill") {
    return true;
  }
});
const gender = computed(() => {
  if(props.icon === "bi-gender-ambiguous"){
    return true
  }
})
const email = computed(() => {
  if(props.icon === "email"){
    return true
  }
})
const props = defineProps({
  type: {
    type: String,
    default: "",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: true,
  },
  hasError: {
    type: Boolean,
    default: false,
    required: true,
  },
  textError: {
    type: String,
    default: "",
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.base-input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  i {
    position: absolute;
    z-index: 1;
    margin: 7px 6px;
  }
  .error {
    border: 1px solid #ff4d4f;
  }
  .text-error {
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 21px;
    color: #ff4d4f;
  }
}
</style>
