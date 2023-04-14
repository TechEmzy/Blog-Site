<template>
  <div class="home">
    <h1>Home</h1>
    <!-- this will check if there's an error and if there's not is going to be Null -->
    <div v-if="error"> {{ error }}</div>
    <!-- we data bind the posts we return and pass it in as a props inside the PostList -->
    <!-- <PostList v-if="showPosts" :posts="posts"/> -->
    
    <!-- this checks if our post has length and if it doesnt it will show Loading.. in the DOM (thats if there is likely to be error in the url) -->
    <div v-if="posts.length">
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
import { ref } from 'vue' 

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    
    return { posts, error }
    // return { posts, showPosts }
  }
}
</script>
