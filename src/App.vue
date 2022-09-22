<template>
  <div id="app">
      <header-section/>
      <main-section/>
      <band-section/>
      <footer-section/>
  </div>
</template>




<script>
import BandSection from './components/band-section.vue'
import FooterSection from './components/footer-section.vue'
import HeaderSection from './components/header-section.vue'
import MainSection from './components/main-section.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    MainSection,
    BandSection,
    FooterSection
  }
}
</script>





<style lang="scss">
@import "variable.scss";  
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {

  background-color: $text-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

a:hover,li:hover {
  color: $brand-color !important;
  cursor: pointer;
}
</style>
