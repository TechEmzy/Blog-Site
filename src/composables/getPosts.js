// composables or composition is what house all of those functions for reusable
const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    // const showPosts = ref(true)

    const load = async () => {
      try {
        // lets get the data
        let data = await fetch('http://localhost:3000/posts')
        // console.log(data)
        
        // if the data is not ok, throw an error
        if(!data.ok) {
          throw Error ('data not available')
        }
        posts.value = await data.json()
      }
      // when we throw an error in the TRY block, this CATCH block will catch that error
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

}