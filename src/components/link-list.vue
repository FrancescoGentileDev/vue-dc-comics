<template>
  <div>
  <ul>

  <li class="title">ciao</li>
  <li>ciao</li>
  <li>ciao</li>
  <li>ciao</li>
  <li>ciao</li>
  <li>ciao</li>

  </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../variable.sass";
div {
    margin: 1rem
}

.title {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color:$background;
    margin-bottom: 0.5rem
}
ul {
    list-style: none;
}
li {
    color: rgba(255, 255, 255, 0.356);
}

</style>