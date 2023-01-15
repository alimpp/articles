<template>
  <baseModal color="primary" name="Sign up" width="90%" btnSmallSize="true">
    <template #modalContent>
      <div class="register-container">
        <div class="image-container">
          <img src="@/assets/icons/app-logo.png" alt="app logo" />
        </div>
        <div class="form-container px-5">
          <span class="primary_color size_large py-2">SIGN UP TO ARTICLES</span>
          <baseInput
            :hasError="errors.fristname"
            :textError="textErrors.fristname"
            placeholder="Fristname"
            icon="user"
            class="mt-2"
            v-model="data.fristname"
          />
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
            <baseButton
              @click="registerUser"
              class="mt-2 mb-4"
              color="primary"
              name="Sign up"
            />
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

const errors = ref({
  username: false,
  fristname: false,
  password: false,
});

const data = ref({
  username: "",
  fristname: "",
  password: "",
});

const textErrors = ref({
  username: "The username must not be empty and must be more than 5 characters",
  fristname:
    "The fristname must not be empty and must be more than 5 characters",
  password: "The password must not be empty and must be more than 5 characters",
});

const registerUser = () => {
  let access = true;
  if (data.value.username.length < 5) {
    access = false;
    errors.value.username = true;
  } else {
    access = true;
    errors.value.username = false;
  }
  if (data.value.fristname.length < 5) {
    access = false;
    errors.value.fristname = true;
  } else {
    access = true;
    errors.value.fristname = false;
  }
  if (data.value.password.length < 5) {
    access = false;
    errors.value.password = true;
  } else {
    access = true;
    errors.value.password = false;
  }
  if (access) {
    authApi.registerUser(data.value);
  }
};
</script>

<style lang="scss" scoped>
.register-container {
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
  .register-container {
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
