<template>
  <div class="app-header">

      <span class="white_color size_2xl">Articles Ready Now ...!</span>
      <p class="white_color size_very_small px-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        dolores nam voluptatibus! Omnis suscipit ducimus est, deserunt
        reprehenderit...!
      </p>
      <div class="d-flex">
        <i class="bi bi-instagram white_color px-2"></i>
        <i class="bi bi-twitter white_color px-2"></i>
        <i class="bi bi-linkedin white_color px-2"></i>
        <i class="bi bi-facebook white_color px-2"></i>
      </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-header {
    position: static;
  width: 100%;
  height: 300px;
  background: url("@/assets/icons/header-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  .glass {
    width: 100%;
    height: 400px;
    background: rgba(2, 2, 2, 0.85);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
 
  }
}
</style>
