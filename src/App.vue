<template>
  <div id="app">
      <header-section/>
      <main-section/>
      <band-section/>
      <footer-section/>
  </div>
</template>




<script>
import BandSection from './components/sections/band-section.vue'
import FooterSection from './components/sections/footer-section.vue'
import HeaderSection from './components/sections/header-section.vue'
import MainSection from './components/sections/main-section.vue'

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
@import "@/variable.scss";


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: GretaSens;
  src: url('./assets/fonts/GretaSansStd-Medium.woff2');
  font-weight: normal;
}
@font-face {
  font-family: GretaSens;
  src: url('./assets/fonts/GretaSansCondensedStd-Bold.woff2');
  font-weight: bold;
}
@font-face {
  font-family: GretaSens;
  src: url('./assets/fonts/GretaSansCondensedStd-SemiBold.woff2');
  font-weight: 500;
}

body {

  background-color: $text-color;
}
#app {
  font-family: GretaSens, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

a:hover,li:hover {
  color: $brand-color !important;
  cursor: pointer;
}
</style>
