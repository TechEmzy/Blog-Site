<template>
    <!-- we check if there is an error -->
  <div v-if="error"> {{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from '../composables/getPost';

export default {
    props: ['id'],
    setup(props){
        //then we call the getPost function from the composables folder and pass in our ID with a props.
        const { post, error, load } = getPost(props.id)

        //this will run the data
        load()

        return { post, error }
    }
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  /* button.delete {
    margin: 10px auto;
  } */
</style>