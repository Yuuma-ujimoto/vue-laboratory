<template>
  <div id="drop" class="drop"
       @drop.stop="drop"
       @dragover.prevent
       @dragenter.prevent
  >
    <p>Drop</p>

  </div>
</template>

<script>
export default {
name: "DropArea",
  methods: {
    drop: function () {
      console.log("ドロップされました。")
      //console.log(this.id)
    }
  }
}
</script>

<style scoped>

</style>