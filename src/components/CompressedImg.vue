<template>
  <div id="myFile">
    <h1>压缩图片</h1>
    <button @click="start">点击选择文件</button>
    <input type="file" ref="myFileDom" @change="myFile" style="display: none">
    <div id="myImg">
      <h4>原始图片 - 文件大小：{{ oldSize }}KB</h4>
    </div>
    <div id="compressedImg">
      <h4>压缩后图片 - 文件大小：{{ newSize }}KB</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, toRefs, onMounted } from 'vue'
  import { oldSize, newSize, myFile, compressed } from './Hook/CompressedImg'

  interface User {
    userName: string,
    age: number,
    setUsername(userName:string):void
  }

  // 接口的第一种写法
  // let user:User = reactive({
  //   userName: '李磊',
  //   age: 18,
  //   setUsername(username:string):void {
  //     this.userName = username
  //   }
  // })

  // 接口的第二种写法
  // let user = reactive<User>({
  //   userName: '李磊',
  //   age: 18,
  //   setUsername(username:string):void {
  //     this.userName = username
  //   }
  // })

  // 接口的第三种写法
  let user = reactive({
    userName: '李磊',
    age: 18,
    setUsername(username:string):void {
      this.userName = username
    }
  }) as User

  // 使用ref定义变量时，需使用泛型来约束类型
  // let count:string = ref('11111')  // 错误写法
  let count = ref<number>(30)

  const myFileDom = ref<HTMLElement | null>(null)
  
  const setage = () => {
    user.age ++
  }
  const start = () => {
    (myFileDom.value as HTMLElement).click()
  }
  
  onMounted(() => {
    user.setUsername('赵四')
  }) 
</script>



<style scoped>
#myFile {
  text-align: center;
}
button {
  border: none;
  border-radius: 5px;
  background: red;
  color: aliceblue;
  padding: 10px 15px;
  cursor: pointer;
}
</style>
