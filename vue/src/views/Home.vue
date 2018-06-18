<template>
  <div class="home">
    <div class="g-wrap">
      <AppNotebook />
      <AppNotebook />
      <AppNotebook />
      <AppNotebook />
      <AppNotebook />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNotebook from '@/components/AppNotebook.vue'

export default {
  name: 'notebook',
  components: {
    AppNotebook
  }
}
</script>

<style lang="scss" scoped>
  .g-wrap {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(450px, 1fr) );
    grid-gap: 15px;
  }
</style>
