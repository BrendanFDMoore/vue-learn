<template>
  <div class="post">
    <h3>Write A New Post</h3>
    <div>
      <input v-model="newTitle" placeholder="A title...">
      <br />
      <input v-model="newBody" placeholder="A Body...">
      <br />
      <button v-on:click="submitPost">Submit Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WritePost",
  data () {
    return {
      newTitle: '',
      newBody: '',
    }
  },
  methods: {
    submitPost (e) {
      console.log('I tried to submit!');
      this.$store.commit("addNewPost", { title: this.newTitle, body: this.newBody });
      this.newTitle = '';
      this.newBody = '';
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
