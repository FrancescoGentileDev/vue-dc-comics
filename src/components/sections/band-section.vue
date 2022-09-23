<template>
  <div>
    <section>
      <band-component img="buy-comics-digital-comics.png" text="Digital Comics"/>
      <band-component img="buy-comics-merchandise.png" text="DC Merchandise"/>
      <band-component img="buy-comics-shop-locator.png" text="Subscription"/>
      <band-component img="buy-comics-subscriptions.png" text="comic shop locator"/>
      <band-component img="buy-dc-power-visa.svg" text="dc power visa"/>
    </section>
  </div>
</template>

<script>
import bandComponent from "../components/band-component.vue";
export default {
  components: { bandComponent },
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
  }
}
</style>
