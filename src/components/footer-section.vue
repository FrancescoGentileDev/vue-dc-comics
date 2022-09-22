<template>
  <section>

  
    <footer class="upper-footer">
      <div class="container">
        <div class="link-section">
            <div class="col">
            <link-list class="link-list" />
          <link-list class="link-list" />
            </div>
          
          <link-list class="link-list" />
          <link-list class="link-list" />
        </div>

        <div class="footer-jumbo"></div>
      </div>
    </footer>


    <footer class="down-footer">
      <button>Sign up now!</button>
      <div class="social">
        <p>FOLLOW US</p>
        <a href="#">F</a>
        <a href="#">F</a>
        <a href="#">F</a>
        <a href="#">F</a>
        <a href="#">F</a>
      </div>
    </footer>
  </section>
</template>

<script>
import linkList from "./link-list-component.vue";
export default {
  components: { linkList },
};
</script>

<style lang="scss" scoped>
@import "../variable.scss";

section {
  background-color: $footer-color;

  z-index: 10;

  .upper-footer {
    position: relative;
    background-image: url("../assets/img/footer-bg.jpg");
    background-size: cover;
    height: 400px;

    .container {
        height: 100%;
        @include container;
        @include flex-center;
      .link-section {
        display: flex;
        flex-direction: row;

      }
      .footer-jumbo {
        align-self: flex-end;
        background-image: url("../assets/img/dc-logo-bg.png");
        background-repeat: no-repeat;
        background-color: transparent;
        background-position-y: -50px;
        width: 50%;
        height: 100%;
      }
    }
  }

  .down-footer {
    background-color: $footer-color;
    padding: 2rem;
    @include container;
    @include flex-center;
  }
}


.social {
  @include flex-center;
  font-weight: bold;
  color: $brand-color;

  a {
    padding: 1.5rem;
    color: white;
    text-decoration: none;
  }
}

button {
  padding: 0.8rem 1.5rem;
  font-size: 1.5rem;
  background-color: transparent;
  color: white;
  border: 2px solid $brand-color;
}
</style>
