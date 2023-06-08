<!--
 * @Author: wangshiyang
 * @Date: 2023-06-07 14:50:33
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 13:59:11
 * @Description: 定义父组件
-->
<template>
  <div>
    <ComponentsItem :msg="msg" @getData="getData"></ComponentsItem>
    <components-item :msg="msg" @getData="getData"></components-item>
  </div>
</template>

<script>
import ComponentsItem from './ComponentsItem.vue';
export default {
    data(){
        return {
            msg:'hello world'
        }
    },
    components:{
        ComponentsItem
    },
    methods:{
        getData(data){
            console.log(data);
            return data
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
}
.item img{
    width:140px;
    height: 140px;
}
</style>
