<!--
 * @Author: wangshiyang
 * @Date: 2023-06-07 15:53:53
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 10:01:24
 * @Description: 指令
-->
<template>
  <div>
    <div class="item" v-for="(item, index) of lists" :key="index">
      <img :src="item.coverImage" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    fetch("http://39.103.151.139:8000/book")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.lists = data;
      });
  }
};
</script>



<style scoped>
.part {
  margin: 10px 0;
}
.part > span {
  margin-right: 10px;
}
.part > button {
  max-width: 100px;
}
.part2 > img {
  width: 100px;
  height: 100px;
}
.part3 {
  display: flex;
  flex-direction: column;
}

.item {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}
.item > img {
  width: 200px;
  height: 100px;
}
</style>
