<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile">
        <div v-for="(v, index) of videos" :key="`v-${index}`">
          <nuxt-link :to="`/videos/${v.id}`">
            {{ v.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "~/plugins/firebase"
export default {
  data() {
    return {
      videos: [],
    }
  },
  async mounted() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      const videosRef = firebase.firestore().collection("videos")
      const snapshot = await videosRef.get()
      const videos = []
      snapshot.forEach(doc => {
        const data = doc.data()
        data.id = doc.id
        videos.push(data)
      })
      console.log(videos)
      this.videos = videos
    },
  },
}
</script>
