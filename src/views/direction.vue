<!--
 * @Author: wangshiyang
 * @Date: 2023-06-07 15:53:53
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-08 10:06:33
 * @Description: 指令
-->
<template>
  <div>
    <div class="part">
      <span>vif:</span>
      <!-- 实现元素隐藏或者显示v-if为false JavaScript相当于执行了remove -->
      <p v-if="isShow">hell world</p>
      <button @click="toggle">切换</button>
    </div>
    <hr />
    <div class="part">
      <span>vifelse:</span>
      <p v-if="value == 2">满分</p>
      <p v-else-if="value == 1">半分</p>
      <p v-else-if="value == 0">零分</p>
      <p v-else>value不为0，1,2</p>
      <button @click="toggle2">切换</button>
    </div>
    <hr />
    <div class="part">
      <span>vshow:</span>
      <!--
             v-if是将元素直接从DOM移除了 v-show只是display:none
             v-show适合元素频繁切换的场景
         -->
      <p v-show="isShow">{{ msg }}</p>
    </div>
    <hr />
    <div class="part">
      <span>$event</span>
      <!-- 给item绑定事件,在对应方法中输出值 -->
      <h2
        v-for="(item, index) of arr"
        :key="index"
        @click="handleItem(item, $event)"
      >
        {{ item }}
      </h2>
      <!-- <h3 v-for="(item,index) of arr" :key="index" @click="handleItem2(item,$event)" >{{item}}</h3> -->
    </div>
    <hr />
    <div class="part">
      <span>$event实现vmodel</span>
      <!-- 给item绑定事件,在对应方法中输出值 -->
      <input type="text" @input="handleChange($event)" :value="msg" />
      <p>{{ msg }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      isShow: false,
      msg: "hello world",
      arr: ["吃饭", "睡觉", "灌水"],
    };
  },
  beforeCreate() {
    console.log("组件创建之前");
  },
  created() {
    console.log("组件创建");
  },
  mounted() {
    console.log("组件挂载");
  },
  updated() {
    console.log("组件更新");
  },
  destroyed() {
    console.log("组件销毁");
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    toggle2() {
      if (this.value <= 2) {
        this.value++;
      } else {
        this.value = 0;
      }
    },
    handleItem(item, event) {
      console.log(item);
      console.log(event);
    },
    handleChange(event) {
      this.msg = event.target.value;
    },
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
