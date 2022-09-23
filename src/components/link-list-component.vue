<template>
  <div>
  <ul>

  <li class="title">{{title}}</li>
  <li v-for="(item, index) in option" :key="index" :href="item.link">{{item.text}}</li>
  </ul>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        option: [{
            text: String,
            link: String,
            
        }]
    }

}
</script>

<style lang="scss" scoped>
@import "../variable.scss";

div {
    margin: 1rem
}

.title {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color:$background !important;
    margin-bottom: 0.5rem;
    cursor: default;
}
ul {
    list-style: none;
}
li {
    color: rgba(255, 255, 255, 0.356);
    text-transform: capitalize;
}

</style>