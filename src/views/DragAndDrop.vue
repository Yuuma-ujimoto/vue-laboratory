<script lang="js">
import DropArea from "../component/DropArea.vue";
export default {
  components: {DropArea},
  data() {
    return {
      id: null
    }
  },
  methods: {
    drag: function (id) {
      console.log("ドラッグされました。")
      console.log(id)
      this.id = id
    }
  }
}
</script>

<template>
  <div class="bg">
    <div class="wrapper">
      <div class="box"
           @dragstart.self="drag(1)"
           @dragover.prevent
           @dragenter.prevent
           draggable="true">
        <p>A:1</p>
      </div>
      <div class="box"
           @dragstart.self="drag(2)"
           @dragover.prevent
           @dragenter.prevent
           draggable="true">
        <p>B:2</p>
      </div>
      <div class="box"
           @dragstart.self="drag(3)"
           @dragover.prevent
           @dragenter.prevent
           draggable="true">
        <p>C:3</p>
      </div>
      <div class="box"
           @dragstart.self="drag(4)"
           @dragover.prevent
           @dragenter.prevent
           draggable="true">
        <p>D:4</p>
      </div>
      <div class="box"
           @dragstart.self="drag(5)"
           @dragover.prevent
           @dragenter.prevent
           draggable="true">
        <p>E:5</p>
      </div>
    </div>
    <drop-area/>
  </div>
</template>

<style scoped>
.bg {
  width: 100%;
  height: 500px;
  background: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.wrapper {
  display: flex;
  gap: 20px;
}

.box {
  width: 100px;
  height: 100px;
  background: #f2f2f2;
}

.drop {
  margin-top: 20px;
  width: 800px;
  height: 400px;
  background: white;
  border: solid 1px red
}
</style>
