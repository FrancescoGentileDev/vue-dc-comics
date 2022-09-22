<template>
  <div>
    <section>
      <band-component />
      <band-component />
      <band-component />
      <band-component />
    </section>
  </div>
</template>

<script>
import bandComponent from "./band-component.vue";
export default {
  components: { bandComponent },
};
</script>

<style lang="scss" scoped>
@import "../variable.sass";

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
