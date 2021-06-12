<template>
  <div>
    <section class="section">
      <form @submit.prevent="login">
        <div class="field">
          <p class="control">
            <input v-model="userId" class="input" type="text" placeholder="ユーザーID">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <input v-model="password" class="input" type="password" placeholder="パスワード">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">
              ログイン
            </button>
          </p>
        </div>
        <div v-if="isLoginFail" style="color: red">ログイン失敗！</div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoginFail: false,
      userId: "",
      password: "",
      users: [
        { name: "ゆーき", id: "yuki.s", pass: "1234" },
        { name: "かいと", id: "kaito.k", pass: "1234" },
        { name: "そうすけ", id: "sosuke.s", pass: "1234" },
        { name: "ゆうき", id: "yuki.n", pass: "1234" },
        { name: "たくや", id: "takuya.e", pass: "1234" },
        { name: "ゆうしん", id: "yushin.m", pass: "1234" },
        { name: "まさひろ", id: "masahiro.s", pass: "1234" },
        { name: "けいご", id: "keigo.s", pass: "1234" },
        { name: "あると", id: "aruto.m", pass: "1234" },
      ]
    }
  },
  methods: {
    login() {
      this.isLoginFail = false
      for (const u of this.users) {
        if (u.id === this.userId && u.pass === this.password) {
          this.$cookies.set("name", u.name, {
            maxAge: 86400,
          })
          this.$store.commit("user/setName", u.name)
          alert("ログインしました")
          this.$router.push(`/`)
          return
        }
      }
      this.isLoginFail = true
    }
  },
}
</script>

<style scoped></style>
