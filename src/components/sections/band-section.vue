<template>
  <div>
    <section>
      <imageAndText
        v-for="(item, index) in merchandise"
        :key="index"
        class="component"
        :img="item.img"
        :text="item.text"
        size="4rem"
      />
    </section>
  </div>
</template>

<script>
import { merchandise } from "@/Data/footerlinks";
import imageAndText from "../components/image-and-text.vue";
export default {
  components: { imageAndText },
  data() {
    return {
      merchandise: merchandise,
    };
  },
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
