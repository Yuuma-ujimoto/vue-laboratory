<template>
  <form @submit.prevent="submit" >
    <dl>
      <dd>
        <input v-model="form.text" type="text" name="test">
      </dd>
      <dd>
        <button type="submit">送信</button>
      </dd>
    </dl>
  </form>
</template>

<script>
export default {
  // form にv-modelは使えない
  // エラー文：Internal server error: v-model can only be used on <input>, <textarea> and <select> elements.
  // 意訳：input,textarea,select以外でv-model使うな

  // object型のDataを扱う際はkeyが予め登録された値じゃないとv-modelは適応できない

  name: "FormTest",
  data(){
  return{
    form:{
      text:""
    }
  }
  },
  methods:{
  submit(){
    // formタグ使う際はButtonのonClickイベントの発火でメソッドを呼び出すのではなくformのonSubmit.preventを呼び出したほうがいい
    // preventを使うと本来発生するイベントの挙動を無視してmethodを呼び出す(onSubmitではactionの指定Pathにリダイレクトする等)
    console.log(this.form)
  }
  }
}
</script>

<style scoped>

</style>