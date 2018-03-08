<template>
  <div class="blog">
    <Title text="My Not-so-Cool Blog" />
    <WritePost />
    <Title text="Current Posts:" />
    <div v-for="post in visiblePosts" v-bind:key="post.id">
      <Post v-bind:title="post.title" v-bind:body="post.body" v-bind:id="post.id"/>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Post from "@/components/Post.vue";
import WritePost from "@/components/WritePost.vue";
import store from "@/store";
import { mapGetters } from 'vuex'

export default {
  name: "blog",
  components: {
    Title,
    Post,
    WritePost
  },
  computed: {
    // visiblePosts: this.$store.getters.getVisiblePosts
    // getVisiblePosts: () => this.$store.getters.getVisiblePosts
    visiblePosts () {
      return store.getters.getVisiblePosts;
    },
    // allPosts: () => store.state.posts
    allPosts() { return this.$store.state.posts; }
    // ...mapGetters(['getVisiblePosts'])
  }
};
</script>
