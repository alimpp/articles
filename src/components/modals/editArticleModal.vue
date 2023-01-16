<template>
  <baseModal name="Edit Article" icon="pen" width="350px">
    <template #modalContent>
      <div class="d-flex flex-column px-2">
        <span class="primary_color size_very_medium py-2">Edit Article</span>
        <baseInput
          :hasError="titleError"
          :textError="titleTextError"
          placeholder="Title"
          class="mt-2"
          v-model="data.title"
        />
        <textarea
          class="form-control mt-2"
          placeholder="Body"
          cols="30"
          rows="10"
          v-model="data.body"
        ></textarea>
        <div class="d-flex mt-2">
          <baseButton
            :loading="loading"
            @click="editArticle"
            color="primary"
            name="Submit"
          />
        </div>
      </div>
    </template>
  </baseModal>
</template>

<script setup>
import { ref, computed , onMounted} from "vue";
import baseModal from "@/components/base/baseModal";
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";
import { applicationArticlesApi } from "@/stores/api/applicationArticlesApi";

const articlesApiModule = applicationArticlesApi();

const data = ref({
  id : props.id,
  title: props.title,
  body: props.body,
});

const loading = ref(false);
const titleError = ref(false);
const titleTextError = ref(
  "The title must not be empty and must be more than 5 characters"
);

const editArticle = async () => {
  let access = true;
  if (data.value.title.length < 5) {
    access = false;
    titleError.value = true;
  } else {
    access = true;
    titleError.value = false;
  }
  if (access) {
    loading.value = true;
    await articlesApiModule.editArticle(data.value, data.value.id);
    loading.value = false;
  }
};

const props = defineProps({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  id: {
    type: Number,
  },
});
</script>
