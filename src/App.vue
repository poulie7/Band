<script>
import NavigationComponent from '@/components/NavComponent.vue' 
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    NavigationComponent,
    FooterComponent
  },
  data() {
    return {
      showNav: false
    }
  },
  methods: {
    toggleNav() {
      if (this.$route.path === '/') 
      this.showNav = false;
      else {
      this.showNav = true;
    }
    } 
    }
}
</script>

<template>
  <main>
    <NavigationComponent  v-if="showNav"/>
      <router-view />
    <FooterComponent />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
