<template>
  <header>
    <div class="header-container">
      <div class="img">
        <img src="../assets/img/dc-logo.png" alt="" srcset="" />
      </div>
      <nav>
        <a href="#">Pippo</a>
        <a href="#">Pippo</a>
        <a href="#">Pippo</a>
        <a href="#">Pippo</a>
        <a href="#">Pippo</a>
        <a href="#">Pippo</a>
        <a href="#">Pippo</a>
        <a href="#">Pippo</a>
        <a href="#">Pippo</a>
        <a href="#">Pippo</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-section",
  
};
</script>

<style lang="scss" scoped>
@import "../variable";

header {
  background-color: $background;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: $max-width;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1rem;

    nav {

      a {
        color: $footer-color;
        font-weight: bold;
        font-size: 1.2rem;
        text-decoration: none;
        padding: 0.6rem;
      }

    }
  }
}
</style>
