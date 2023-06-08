<!--
 * @Author: wangshiyang
 * @Date: 2023-06-07 14:50:33
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-07 15:52:55
 * @Description: click事件演示
-->
<template>
  <div id="app">
    <div class="part">
      <span>点击事件：</span>
      <button @click="handleClick" style="width: 100px; marginright: 10px">
        click
      </button>
      <span>{{ msg }}:{{ countNum }}</span>
    </div>
    <hr />
    <div class="part part2">
      <span>三元表达式：</span>
      <button @click="handleToggle" style="width: 100px; marginright: 10px">
        {{ isPlay ? "播放" : "暂停" }}
      </button>
      <img
        @click="handleToggle"
        :src="isPlay ? '/src/assets/play.jpg' : '/src/assets/pause.jpg'"
        alt=""
      />
    </div>
    <hr />
    <div class="part">
      <span>动态属性：</span>
      <p :title="title">{{ attr }}</p>
    </div>
    <hr />
    <div class="part part3">
      <span>vfor列表：</span>
      <div v-for="(item, index) of lists" :key="index" class="item">
        <!-- 属性要使用data中的变量  :src -->
        <img :src="item.url" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
    <hr />
    <div class="part">
      <span>双向数据绑定</span>
      <input type="text" v-model="dataBind">
      <h4>{{ dataBind }}</h4>
    </div>
    <hr />
    <div class="part">
      <span>vmodel和keyup实现todolist</span>
      <input type="text" v-model="message" @keyup="handleEnter">
      <h4>列表</h4>
      <h5 v-for="item of arr" :key="item">{{item}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "点击次数",
      countNum: 0,
      isPlay: false,
      lists: [
        {
          title: "vue",
          url: "https://p1.music.126.net/S607Z3GzyOrtGELZh377Mw==/109951166575494657.jpg?imageView&quality=89",
        },
        {
          title: "react",
          url: "https://p1.music.126.net/wrs0csPtv86AXooTem3aPw==/109951166575508031.jpg?imageView&quality=89",
        },
        {
          title: "angular",
          url: "https://p1.music.126.net/Lp7cNHJo8urAGw-aZ_TqFA==/109951166575499997.jpg?imageView&quality=89",
        },
      ],
      attr: "中地数码",
      title: "地质大学",
      dataBind:'hello vue',
      arr:[],
      message:'message'
    };
  },

  methods: {
    handleClick() {
      this.countNum++;
    },
    handleToggle() {
      this.isPlay = !this.isPlay;
    },
    handleEnter(e){
      if(e.keyCode==13){
        console.log(this.message)
        this.arr.push(this.message);
        this.message= ""
      }
    }
  },
};
</script>



<style scoped>
.part {
  margin: 10px 0;
}
.part > span {
  margin-right: 10px;
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
