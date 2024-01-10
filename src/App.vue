<script>
import topComponent from '@/components/TopComponent.vue'
import secondComponent from '@/components/SecondComponent.vue'
export default {
  components: {
    topComponent,
    secondComponent
  }
}
</script>

<template>
  <main>
    <topComponent />
    <secondComponent />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
