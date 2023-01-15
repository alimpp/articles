<template>
  <baseModal
    color="danger"
    :name="username"
    width="350px"
    btnSmallSize="true"
    icon="profile"
  >
    <template #modalContent>
      <div class="d-flex">
        <div class="px-2">
          <img src="@/assets/icons/smile.png" alt="image profile" />
        </div>
        <div class="d-flex flex-column">
          <span class="size_small">Username</span>
          <p class="gray_color size_very_small">{{ username }}</p>
          <span class="size_small">Bio</span>
          <p class="gray_color size_very_small">{{ bio }}</p>
          <div class="d-flex">
            <editBioModal class="mt-1 mx-2" />
            <baseButton @click="logout" name="Logout" color="danger" />
          </div>
        </div>
      </div>
    </template>
  </baseModal>
</template>

<script setup>
import { computed } from "vue";
import baseModal from "@/components/base/baseModal";
import baseButton from "@/components/base/baseButton";
import editBioModal from "@/components/modals/editBioModal";
import { applicationAuthApi } from "@/stores/api/applicationAuthApi";
import { applicationUserProfile } from "@/stores/applicationUserProfile";

const authApi = applicationAuthApi();
const userProfile = applicationUserProfile();

const logout = () => {
  return authApi.logoutUser();
};

const username = computed(() => {
  const username = userProfile.username;
  return JSON.parse(username);
});

const bio = computed(() => {
  const bio = userProfile.bio;
  return JSON.parse(bio);
});
</script>

<style>
img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
</style>
