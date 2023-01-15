<template>
  <baseModal name="Edit Bio" icon="pen" width="350px">
    <template #modalContent>
      <div class="d-flex flex-column px-1">
        <span class="size_very_medium">New Bio</span>
        <baseInput v-model="newBio" class="mt-2" placeholder="New Bio" icon="pen" />
        <div class="d-flex">
          <baseButton @click="updateBio" class="mt-2" name="Submit" color="primary" />
        </div>
      </div>
    </template>
  </baseModal>
</template>

<script setup>
import {ref , computed } from 'vue'
import baseModal from "@/components/base/baseModal";
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";
import { applicationUserProfile } from "@/stores/applicationUserProfile";

const userProfile = applicationUserProfile()

const newBio = ref('')

const updateBio = () => {
  return userProfile.updateBio(newBio.value)
}
</script>

<style>
span {
  font-weight: 500;
}
</style>
  