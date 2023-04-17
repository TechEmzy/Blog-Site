<template>
  <div class="home">
    <!-- this will check if there's an error and if there's not is going to be Null -->
    <div v-if="error"> {{ error }}</div>
    <!-- we data bind the posts we return and pass it in as a props inside the PostList -->
    <!-- <PostList v-if="showPosts" :posts="posts"/> -->
    
    <!-- this checks if our post has length and if it doesnt it will show Loading.. in the DOM (thats if there is likely to be error in the url) -->
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Loading.....</div>
    
    <!-- toggle button to SHOW and HIDE the post -->
    <!-- <button @click="showPosts = !showPosts">toggle posts</button> -->
    
    <!-- delete a post button -->
    <!-- <button @click="posts.pop()">delete posts</button> -->
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    //then we call the getPosts function from the composables folder
    const { posts, error, load } = getPosts ()

    //this will run the data
    load()
    
    return { posts, error }
    // return { posts, showPosts }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
