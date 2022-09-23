<template>
  <div>
    <img v-if="localImg" :src="require(`@/assets/img/${img}`)" alt="" srcset="" :class="{square: square}" />
    <img v-else :src="img" alt="" srcset="" :class="{square: square}"/>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "imageAndText",
  props: {
    text: String,
    img: String,
    localImg: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "unset",
    },
    square: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: v-bind(size);
}

.square {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
