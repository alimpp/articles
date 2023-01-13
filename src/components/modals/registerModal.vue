<template>
  <baseModal color="primary" name="Sign up" width="80%" btnSmallSize="true">
    <template #modalContent>
      <div
        class="w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="col-lg-8 px-3">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <span class="size_large primary_color py-2"
              >SIGN UP TO ARTICLES</span
            >
          </div>
          <baseInput
            :hasError="errors.username"
            :textError="textErrors.username"
            placeholder="Username"
            icon="user"
            class="mt-2"
          />
          <baseInput
            :hasError="errors.email"
            :textError="textErrors.email"
            placeholder="Email"
            icon="email"
            class="mt-2"
          />
          <baseInput
            :hasError="errors.password"
            :textError="textErrors.password"
            placeholder="Password"
            icon="password"
            class="mt-2"
          />
          <div class="d-flex">
            <baseButton class="mt-2 mb-4" color="primary" name="Sign up" />
          </div>
        </div>
      </div>
    </template>
  </baseModal>
</template>

<script setup>
import {ref} from 'vue'
import baseModal from "@/components/base/baseModal";
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";

const errors = ref({
  username: false,
  email: false,
  password: false,
});
const textErrors = ref({
  username: "The username must not be empty and must be more than 5 characters",
  email: "The email must not be empty and must be more than 8 characters",
  password: "The password must not be empty and must be more than 5 characters",
});
</script>

<style></style>
