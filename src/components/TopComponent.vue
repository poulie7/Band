<script>
import NavComponent from '@/components/NavComponent.vue'
export default {
  components: {
    NavComponent
  },
}
</script>

<template> 
  <main class="home">
    <NavComponent />
    <h1>HOME</h1>
  </main>
  
</template>

<style scoped>
.home {
  background-image: url('../assets/images/main_picture.jpg');
  background-repeat: no-repeat;
  background-size: cover; 
  background-size: 100% auto; 
  min-height: 100vh;
  border-radius: 50px 50px 0px 0px ;
}

</style>

<style scoped>
.home {
  background-image: url('../assets/images/main_picture.jpg');
  background-repeat: no-repeat;
  background-position: right top;
}

h1 {
  color: white;
  font-size: 100px;
  text-align: center;
  padding-top: 200px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  text-shadow: 2px 2px 4px #000000;
}
</style>