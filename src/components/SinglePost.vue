<template>
    <div class="post">
        <router-link :to="{ name: 'Details', params: {id: post.id}}">
            <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ snippet }}</p>
        <!-- this will circle through the tags -->
        <span v-for="tag in post.tags" :key="tag">
            # {{ tag }}
        </span>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    //accepting the data we passed from the PostList component as a props
    props: ['post'],
    setup(props) {
        // we create a computed property, which is going to return the body of the post.
        const snippet = computed(() => {
            // return the data body in the post from the first 100 characters, the 4 dots is just to tell there is more chars to it.
            return props.post.body.substring(0,100) + '....'
        })

        return { snippet }
    }
}
</script>

<style>

</style>