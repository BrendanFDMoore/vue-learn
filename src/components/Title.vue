<template>
  <div class="title">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
