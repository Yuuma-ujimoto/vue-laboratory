<template>
  <p>V-ifで表示を切り替えてもmountは発火する。</p>
</template>

<script>
export default {
name: "Check",
  beforeMount() {
    console.log("bm")
  },
  mounted() {
    console.log("m")
  }
}
</script>

<style scoped>

</style>