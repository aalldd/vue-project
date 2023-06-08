<!--
 * @Author: wangshiyang
 * @Date: 2023-06-08 14:29:31
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 14:34:41
 * @Description: sync语法糖
-->
<template>
  <div id="app">
    爸爸现在有{{total}}
    <hr>
    <Child :money.sync='total'/>
  </div>
</template>

<script>
import Child from './SyncChild.vue'
export default {
    data(){
        return {
            total:10000
        }
    },
    components:{
        Child
    }
}
</script>

<style>

</style>

