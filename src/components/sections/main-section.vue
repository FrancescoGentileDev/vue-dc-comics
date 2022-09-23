<template>
  <div>
    <div class="jumbotron"></div>
    <section class="cards-section">
      <div class="badge">Current Series</div>
      <div class="grid">
        <image-and-text
          class="component"
          v-for="(item, index) in items"
          :key="index"
          :img="item.thumb"
          :localImg="false"
          :text="item.series"
          :square="true"
          size="200px"
        />
      </div>
    </section>
  </div>
</template>

<script>
import dcComics from "@/Data/dc-comics";
import imageAndText from "../components/image-and-text.vue";
export default {
  components: { imageAndText },

  data: () => {
    return {
      items: dcComics,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/variable.scss";

.jumbotron {
  height: 450px;
  background-image: url(@/assets/img/jumbotron.jpg);
  background-attachment: fixed
}

section {
  position: relative;
  @include container;
  color: white;
}
.badge {
  position: absolute;
  padding: 0.5rem 2rem;
  top: 0;
  transform: translateY(-50%);
  background-color: $brand-color;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2rem;
}

.grid {
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  align-items: start;
}
.component {
  text-transform: uppercase;
}
</style>
