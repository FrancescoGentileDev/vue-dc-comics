<template>
  <section>
    <footer class="upper-footer">
      <div class="container">
        <div class="link-section">
          <link-list
            v-for="(item, index) in footLink"
            :key="index"
            :title="item.title"
            :option="item.links"
          />
        </div>

        <div class="footer-jumbo"></div>
      </div>
    </footer>

    <footer class="down-footer">
      <button>Sign up now!</button>
      <div class="social">
        <link-list :title="social.title" :option="social.links" :orizzontal="true" :icon="true" color="#0282f9"/>
      </div>
    </footer>
  </section>
</template>

<script>
import linkList from "../components/link-list-component.vue";
import { footerlinks, socialLinks } from "@/Data/footerlinks";

export default {
  components: { linkList },
  data: function () {
    return {
      footLink: footerlinks,
      social: socialLinks,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/variable.scss";

section {
  background-color: $footer-color;

  z-index: 10;

  .upper-footer {
    position: relative;
    background-image: url("@/assets/img/footer-bg.jpg");
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
        background-image: url("@/assets/img/dc-logo-bg.png");
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
}

button {
  padding: 0.8rem 1.5rem;
  font-size: 1.5rem;
  background-color: transparent;
  color: white;
  border: 2px solid $brand-color;
}
</style>
