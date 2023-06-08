<!--
 * @Author: wangshiyang
 * @Date: 2023-06-07 14:50:33
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 13:58:03
 * @Description: 定义子组件
-->
<template>
  <div class="item" @click="getData">
      <img src="http://p1.music.126.net/W1Gmz4zxY7vkmal-6CSCww==/109951167921098817.jpg?param=140y140" alt="">
      <p>放到家里</p>
      <p>{{msg}}</p>
   </div>
</template>

<script>
export default {
  data(){
    return {
      count:0
    }
  },
  props:{
    msg:{
      type:String
    }
  },
  methods:{
    getData(){
      this.count++
      this.$emit('getData',this.count)
    }
  }
};
</script>

<style scoped>
.item{
    width:140px;
    margin-top: 50px;
    margin-right: 50px;
    border: 1px solid #333;
    cursor: pointer;
}
.item img{
    width:140px;
    height: 140px;
}
</style>
