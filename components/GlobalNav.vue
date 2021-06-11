<template>
  <div class="g-nav">
    <div>
      <nuxt-link to="/"><i class="las la-home"></i></nuxt-link>
    </div>
    <div>マイクラカップ練習</div>
    <div>
      <span v-if="name" @click="logout"><i class="las la-sign-in-alt"></i></span>
      <nuxt-link v-else to="/login"><i class="las la-user-lock"></i></nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "GlobalNav",
  computed: {
    ...mapGetters({
      name: "user/name",
    })
  },
  methods: {
    logout() {
      if (window.confirm("ログアウトしますか？")) {
        this.$cookies.removeAll()
        this.$store.commit("user/setName", "")
        alert("ログアウトしました")
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.g-nav {
  background: #5caeb5;
  color: #fff;
  height: 50px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  a {
    color: #fff;
  }
  i {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
