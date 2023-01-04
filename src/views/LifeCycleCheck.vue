<template>
  <button @click="Flag=!Flag">BTN</button>
  <div v-if="Flag">
    <Check/>
  </div>
</template>

<script>
import Check from "../component/Check.vue";
export default {
name: "LifeCycleCheck",
  components: {Check},
  data(){
  return{
    Flag :false
  }
  }
}
</script>

<style scoped>

</style>