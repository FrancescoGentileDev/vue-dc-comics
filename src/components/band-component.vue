<template>
  <div>
    <img :src='require(`../assets/img/${img}`)' alt="" srcset="" />
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
    props: {
        text: String,
        img: String
    }
};
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        align-items: center; 
        column-gap: 1rem;
        img {
            max-width: 3rem
        }

        p {
            color: white;
            text-transform: uppercase;
        }

    }


</style>
