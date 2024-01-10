<script>
import topComponent from '@/components/TopComponent.vue'
import secondComponent from '@/components/SecondComponent.vue'
import thirdComponent from '@/components/ThirdComponent.vue'
import forthComponent from '@/components/ForthComponent.vue'

export default {
  components: {
    topComponent,
    secondComponent,
    thirdComponent,
    forthComponent,
  }
}
</script>

<template> 
  <main>
    
    <topComponent />
    <secondComponent />
    <thirdComponent />
    <forthComponent />
  </main>
</template>

<style scoped>
h1 {
  color: white;
}
</style>
