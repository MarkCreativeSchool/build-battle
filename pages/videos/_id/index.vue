<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="notification is-warning is-light">
          Wifi環境でご覧ください
        </div>
        <h1 class="title is-5">{{ video.title }}</h1>
        <div v-if="video.video">
          <video :src="video.video" controls class="player" />
        </div>
        <div v-else>
          <div class="video"></div>
        </div>
        <hr />
        <div v-if="name">
          <form @submit.prevent="onSubmit">
            <div class="field">
              <textarea v-model="comment" class="textarea"></textarea>
            </div>
            <div class="field">
              <button class="button is-primary">送信</button>
            </div>
          </form>
          <hr>
        </div>
        <div v-if="comments.length === 0">
          まだコメントがありません
        </div>
        <ul v-else class="comments">
          <li v-for="(c, index) of comments" :key="`c-${index}`">
            <div class="name">{{ c.name }}</div>
            <div class="comment">{{ c.comment }}</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import firebase from "~/plugins/firebase"
const db = firebase.firestore()

export default {
  data() {
    return {
      id: this.$route.params.id,
      video: {
        title: "",
        video: "",
      },
      comment: "",
      comments: [],
    }
  },
  computed: {
    ...mapGetters({
      name: "user/name",
    })
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
      console.log(video)
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
      commentRef.add({ name: this.name, comment: this.comment })
      this.comment = ""
      alert("コメントを送信しました")
      await this.fetchComment()
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  max-width: 640px;
  margin: 0 auto;
}
.video {
  width: 100%;
  height: 320px;
  background: #000;
}
.player {
  width: 100%;
  background: #000;
}
.comments {
  li {
    border-bottom: solid 1px #ddd;
    padding-bottom: 20px;
    margin-bottom: 20px;
    &:last-child {
      border-bottom: none;
    }
    .name {
      font-weight: bold;
    }
    .comment {
      white-space: pre-wrap;
    }
  }
}
</style>
