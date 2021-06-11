<template>
  <div class="g-nav">
    <div>
      <nuxt-link to="/"><i class="las la-home"></i></nuxt-link>
    </div>
    <div>マイクラカップ練習</div>
    <div>
      <nuxt-link to="/login"><i class="las la-user-lock"></i></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalNav"
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
  }
}
</style>
