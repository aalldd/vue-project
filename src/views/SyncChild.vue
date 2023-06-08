<!--
 * @Author: wangshiyang
 * @Date: 2023-06-08 14:33:36
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 14:39:33
 * @Description: 请填写简介
-->
<template>
  <div class="child">
      {{money}}
      <button @click='spendMoney'>花钱</button>
  </div>
</template>

<script>
export default {
    props:['money'],
    methods:{
        spendMoney(){
            this.$emit('update:money',this.money-100)
        }
    }
}
</script>

<style>

</style>