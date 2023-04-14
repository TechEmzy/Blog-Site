<template>
  <div Class="post-list">
    <!-- we circle through them with the v-for method -->
    <div v-for="post in posts" :key="post.id">
        <!-- we output the post title -->
        <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
    //accepting the data we passed from the Home component as a props
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        onMounted(() => console.log('Component mounted'))
        onUnmounted(() => console.log('Component unmounted'))
        onUpdated(() => console.log('Component updated'))
    }
}
</script>

<style>

</style>