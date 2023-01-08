<template>
  <form action="" >
    <dl>
      <dd>
        <input v-model="Form.text" type="text" name="test">
      </dd>
      <dd>
        <button @click="submit">送信</button>
      </dd>
    </dl>
  </form>
</template>

<script>
export default {
  // form にv-modelは使えない
  // エラー文：Internal server error: v-model can only be used on <input>, <textarea> and <select> elements.
  // 意訳：input,textarea,select以外でv-model使うな
  name: "FormTest",
  data(){
  return{
    form:null
  }
  },
  methods:{
  submit(){
    console.log(this.form)
  }
  }
}
</script>

<style scoped>

</style>