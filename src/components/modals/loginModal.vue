<template>
  <baseModal color="danger" name="Sign in" width="90%" btnSmallSize="true">
    <template #modalContent>
      <div class="login-container">
        <div class="image-container">
          <img src="@/assets/icons/app-logo.png" alt="app logo" />
        </div>
        <div class="form-container px-5">
          <span class="primary_color size_large py-2">SIGN IN TO ARTICLES</span>
          <baseInput
            :hasError="errors.username"
            :textError="textErrors.username"
            placeholder="Username"
            icon="user"
            class="mt-2"
            v-model="data.username"
          />
          <baseInput
            :hasError="errors.password"
            :textError="textErrors.password"
            placeholder="Password"
            icon="password"
            class="mt-2"
            v-model="data.password"
          />
          <div class="d-flex">
            <baseButton @click="loginUser" class="mt-2 mb-4" color="primary" name="Sign in" />
          </div>
        </div>
      </div>
    </template>
  </baseModal>
</template>

<script setup>
import { ref } from "vue";
import baseModal from "@/components/base/baseModal";
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";
import { applicationAuthApi } from "@/stores/api/applicationAuthApi";

const authApi = applicationAuthApi();

const data = ref({
  username: "",
  password: "",
});

const errors = ref({
  username: false,
  password: false,
});

const textErrors = ref({
  username: "The username must not be empty and must be more than 5 characters",
  password: "The password must not be empty and must be more than 5 characters",
});

const loginUser = () => {
  let access = true;
  if (data.value.username.length < 5) {
    access = false;
    errors.value.username = true;
  } else {
    access = true;
    errors.value.username = false;
  }
  if (data.value.password.length < 5) {
    access = false;
    errors.value.password = true;
  } else {
    access = true;
    errors.value.password = false;
  }
  if (access) {
    authApi.loginUser(data.value);
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  display: flex;
  .image-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50%;
      height: 250px;
    }
  }
  .form-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 900px) {
  .login-container {
    flex-direction: column;
    .image-container {
      display: none;
    }
    .form-container {
      width: 100%;
    }
  }
}
</style>
