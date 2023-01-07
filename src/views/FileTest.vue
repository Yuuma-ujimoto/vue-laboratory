<template>

  <button @click="onClick">Add</button>
</template>

<script>
import {addData, getData} from "../component/Data";

export default {
name: "FileTest",
  methods:{
  onClick(){
    addData()
    console.log(getData())
  }
  }
}
</script>

<style scoped>

</style>