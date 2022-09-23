<template>
  <ul :class="{orizzontal: orizzontal}">
    <li class="title">{{ title }}</li>
    <li v-for="(item, index) in option" :key="index" :href="item.link">
    <font-awesome-icon v-if="icon" :icon="item.text"/>
    <div v-else>{{item.text}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      
    }
  },
  props: {
    title: String,
    orizzontal: Boolean,
    icon: Boolean,
    color: {
      type: String,
      default: "white"
    },
    option: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/variable.scss";

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #{v-bind(color)};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  cursor: default;
}
ul {
  list-style: none;
  margin: 1rem;
}

 .orizzontal {
    display: flex;
    align-items: center;
    li {
        margin: 1rem;
        font-size: 1.5rem;
    }
  }

li {
  color: rgba(255, 255, 255, 0.356);
  text-transform: capitalize;
  
}
</style>
