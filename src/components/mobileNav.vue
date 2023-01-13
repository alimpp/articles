<template>
  <div class="cart-sidebar-container">
    <i class="bi bi-cart4 application_pointer" @click="openSideBar"></i>
    <div class="cart-sidebar" v-if="isOpen">
      <div
        class="sidebar"
        :class="{
          dark: watchTheme === 'dark',
          light: watchTheme === 'light',
        }"
      >
        <i
          class="bi bi-x-lg application_animation application_pointer"
          @click="openSideBar"
        ></i>
        <baseLoading v-if="loading" class="mt-5" />
        <div class="d-flex flex-column application_animation" v-else>
          <div
            class="empty-container d-flex flex-column justify-content-center align-items-center mt-5"
            v-if="emptyCart == 0"
          >
            <i class="bi bi-cart4"></i>
            <span>Your cart is empty</span>
          </div>
          <div v-else>
            <cartsCard
              v-for="data in dataSource"
              :key="data.id"
              :img="data.coverFileName"
              :title="data.title"
              :price="data.price"
              :quantity="data.quantity"
              :id="data.bookId"
            />
            <hr />
            <div class="d-flex w-100">
              <div class="d-flex justify-content-start w-50">
                <span class="pt-1">{{ totalPrice }}/00 $</span>
              </div>
              <div class="d-flex justify-content-end w-50">
                <baseButton name="Checkout" color="btn-primary" />
              </div>
            </div>
            <hr />
            <baseButton @click="clearCart" name="Clear Cart" icon="delete" color="btn-danger" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { applicationTheme } from "@/stores/applicationTheme";
import baseLoading from "@/components/base/baseLoading";
import { applicationCart } from "@/stores/applicationCart";
import cartsCard from "@/components/cards/cartsCard";
import baseButton from "@/components/base/baseButton";
const theme = applicationTheme();
const carts = applicationCart();
const loading = ref(false);
const isOpen = ref(false);
const openSideBar = () => {
  isOpen.value = !isOpen.value;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
const watchTheme = computed(() => {
  return theme.themeStatus;
});
const dataSource = computed(() => {
  return carts.cartsInformation;
});
const emptyCart = computed(() => {
  return carts.cartsCount;
});
const totalPrice = computed(() => {
  return carts.totalPrice;
});
const clearCart = () => {
  return carts.clearCart()
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables/font-size.scss";
.cart-sidebar-container {
  i {
    font-size: $--size-xl;
  }
  .cart-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: end;
    background: rgba(6, 6, 6, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(6px);
    transition: 1s;
  }
  .sidebar {
    width: 280px;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    animation: 0.2s opanSidebar;
    overflow-y: scroll;
    overflow-x: none;
    .empty-container {
      height: 75vh;
    }
  }
}
.light {
  background: var(--light-color);
}
.dark {
  background: var(--cart-sidebar-in-dark-mode);
}
@keyframes opanSidebar {
  0% {
    width: 0;
  }
  100% {
    width: 280px;
  }
}
</style>