<!--
 * @Author: wangshiyang
 * @Date: 2023-06-07 14:50:33
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 13:32:31
 * @Description: 路由的使用
-->
<template>
  <div id="app">
    <div class="menu">
      <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item v-for="(item,index) in menus" :key='index' :index='item.value'>{{item.title}}</el-menu-item>
    </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menus from './menuInfo'
export default {
  data(){
    return {
      menus,
      activeIndex:''
    }
  },
  methods:{
    handleSelect(value){
      console.log(value);
      this.$router.push(`/${value}`)
    }
  }
}

</script>



<style scoped>
#app{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.content{
  width: 100%;
  flex:1;
}
.menu{
  height: 10vh;
  width: 100%;
}

</style>
