<template>
  <div>
    <section>
      <imageAndText class="component" img="buy-comics-digital-comics.png" text="Digital Comics" size="4rem"/>
      <imageAndText class="component" img="buy-comics-merchandise.png" text="DC Merchandise" size="4rem" />
      <imageAndText class="component" img="buy-comics-shop-locator.png" text="Subscription" size="4rem" />
      <imageAndText
        class="component"
        img="buy-comics-subscriptions.png"
        text="comic shop locator" size="4rem"
      />
      <imageAndText class="component" img="buy-dc-power-visa.svg" text="dc power visa"  size="4rem"/>
    </section>
  </div>
</template>

<script>
import imageAndText from "../components/image-and-text.vue";
export default {
  components: { imageAndText },
};
</script>

<style lang="scss" scoped>
@import "@/variable.scss";

div {
  background-color: $brand-color;
  section {
    @include container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem;

    .component {
      color: white;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }
  }
}
</style>
