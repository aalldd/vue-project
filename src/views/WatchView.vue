<!--
 * @Author: wangshiyang
 * @Date: 2023-06-07 14:50:33
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 13:35:16
 * @Description: watch使用
-->
<template>
  <input type="text" v-model="msg" >
</template>

<script>
export default {
    data(){
        return {
            msg:'hello world'
        }
    },
    watch:{
        msg(){
            console.log("监听msg值的变化"+this.msg);
        }
    }
};
</script>

<style scoped>

</style>
