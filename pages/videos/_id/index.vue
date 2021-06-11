<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title is-5">{{ video.title }}</h1>
        <div class="video"></div>
        <hr />
        <form @submit.prevent="onSubmit">
          <div class="field">
            <textarea class="textarea"></textarea>
          </div>
          <div class="field">
            <button class="button is-primary">送信</button>
          </div>
        </form>
        <hr>
        <div v-if="comments.length === 0">
          まだコメントがありません
        </div>
        <ul v-else>
          <li v-for="(c, index) of comments" :key="`c-${index}`">
            <div>{{ c.name }}</div>
            <div>{{ c.comment }}</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase"
const db = firebase.firestore()

export default {
  data() {
    return {
      id: this.$route.params.id,
      video: {
        title: "",
      },
      comments: [],
    }
  },
  async mounted() {
    await this.fetchData()
    await this.fetchComment()
  },
  methods: {
    async fetchData() {
      const videoRef = db.collection("videos").doc(this.id)
      const videoDoc = await videoRef.get()
      const video = videoDoc.data()
      this.video = video
    },
    async fetchComment() {
      const commentRef = db.collection("videos").doc(this.id).collection("comments")
      const snapshot = await commentRef.get()
      const comments = []
      snapshot.forEach(doc => {
        const data = doc.data()
        comments.push(data)
      })
      this.comments = comments
    },
    async onSubmit() {
      const commentRef = db.collection("videos").doc(this.id).collection("comments")
      commentRef.add({ name: "なまえ", comment: "コメント" })
      alert("コメントを送信しました")
    }
  }
}
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  height: 320px;
  background: #000;
}
</style>
