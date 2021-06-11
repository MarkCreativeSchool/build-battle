<template>
  <div>
    <GlobalNav />
    <nuxt />
  </div>
</template>

<script>
import GlobalNav from "~/components/GlobalNav";
export default {
  components: { GlobalNav },
  mounted() {
    this.$store.dispatch("user/init")
  }
}
</script>
