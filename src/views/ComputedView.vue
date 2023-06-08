<!--
 * @Author: wangshiyang
 * @Date: 2023-06-07 15:53:53
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 10:18:55
 * @Description: 计算属性示例
-->
<template>
  <div>
    <span>{{ double }}</span>
    <span style="marginLeft:20px">{{ handleCount() }}</span>
    <span style="marginLeft:20px">{{ num }}</span>
    <button style="width:70px;marginLeft:20px" @click="addNum">addNum</button>
    <button style="width:70px;marginLeft:20px" @click="addCount">addCount</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 1,
      num: 10,
    };
  },
  computed: {
    double() {
      console.log("计算");
      return this.count * 2;
    },
  },
  methods: {
    handleCount() {
      console.log("方法");
      return this.count * 2;
    },
    addNum() {
      this.num++;
    },
    addCount(){
        this.count++
    }
  },
};
</script>



<style scoped>

</style>
