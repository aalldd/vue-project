<!--
 * @Author: wangshiyang
 * @Date: 2023-06-07 15:53:53
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 09:30:23
 * @Description: 设置style
-->
<template>
  <div>
    <div class="part">
      <!-- 字符串设置class -->
      <div :class="current ? 'active' : ''">hello world</div>
      <button @click="changeActive">改变激活状态</button>
      <!-- 对象设置class -->
      <p :class="{ active: false }">good</p>
      <!-- 数组设置class -->
      <p :class="['font', 'bg']">hello vue</p>
      <div :style="{ opacity: opacity }" class="nav">nav</div>
      <el-input-number :value="opacity" :step="0.1" :max="1" :min="0" @change="onchange"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      opacity: 0.5,
      current: true,
    };
  },
  methods: {
    changeActive() {
      this.current = !this.current;
    },
    onchange(value){
        console.log(value);
        this.opacity=value
    }
  },
};
</script>



<style scoped>
.nav{
    background-color: orange;
}

.part {
  margin: 10px 0;
}
.part > span {
  margin-right: 10px;
}
.part > button {
  max-width: 100px;
}
.active {
  color: red;
}
.font {
  font-size: 18px;
}
.bg {
  background: yellow;
}
</style>
