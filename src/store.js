import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nextId: 5,
    posts: [
      {
        id: 1,
        title: "First Post Title",
        body: "First Post Body",
        visible: true
      },
      {
        id: 2,
        title: "Second Post Title",
        body: "Second Post Body",
        visible: true
      },
      {
        id: 3,
        title: "Third Post Title",
        body: "Third Post Body",
        visible: false
      },
      {
        id: 4,
        title: "Fourth Post Title",
        body: "Fourth Post Body",
        visible: true
      }
    ]
  },
  getters: {
    getVisiblePosts: state => {
      return state.posts.filter(post => post.visible);
    }
  },
  mutations: {
    addNewPost(state, { title, body }) {
      const newPost = {
        title,
        body,
        id: state.posts.length + 1,
        visible: true
      };
      state.posts.push(newPost);
    },
    hidePost(state, { id }) {
      state.posts = state.posts.map(
        p => (p.id === id ? { ...p, visible: false } : p)
      );
    },
  },
  actions: {}
});
