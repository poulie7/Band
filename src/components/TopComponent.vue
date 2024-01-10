<script>
import navigation from '@/components/NavComponent.vue'
export default {
  components: {
    navigation
  }
}
</script>

<template> 
  <main class="home">
    <navigation />
  </main>
</template>

<style scoped>
.home {
  background-image: url('../assets/images/main_picture.jpg');
  background-repeat: no-repeat;
  background-size: cover; 
  background-size: 100% auto; 
  min-height: 100vh;

}

</style>

<style scoped>
.home {
  background-image: url('../assets/images/main_picture.jpg');
  background-repeat: no-repeat;
  background-position: right top;
}
</style>