<template>
  <div class="post">
    <h3>{{ title }}</h3>
    <span>
      {{ body }}
    </span>
    <button v-on:click="hidePost">Hide Post</button>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: String,
    body: String,
    id: Number,
  },
  methods: {
    hidePost (e) {
      console.log('I tried to hide!');
      this.$store.commit("hidePost", { id: this.id });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 10px 0 0;
}
</style>
