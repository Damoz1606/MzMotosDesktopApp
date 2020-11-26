<template>
  <div class="home">
    <div class="banner"></div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100vh;
}
.banner{
  width: 100%;
  height: 100%;
  background-image: url('../assets/Banner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
