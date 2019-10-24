<!--  -->
<template>
  <div class="vs">
    <router-link to="/" class="vs-header">
      <van-icon name="arrow-left" class="vs-i" />
    </router-link>
    <van-swipe :autoplay="3000" class="one">
      <van-swipe-item v-for="(image, index) in second" :key="index">
        <img :src="image.pic" alt class="imga" />
        <!-- {{image.icon}} -->
      </van-swipe-item>
    </van-swipe>
    <div class="nav">
      <p v-html="this.third.name"></p>
      <p v-html="this.third.characteristic"></p>
      <p>
        <span class="span1">底价</span>
        <span class="span2">￥{{this.third.commissionType}}.00</span>
        <span class="span3">原价{{this.third.originalPrice}}</span>
        <span class="span4">库存{{this.third.kanjiaPrice}}</span>
      </p>
    </div>
    <div class="content-box">
      <!-- <div class="content-left">商品介绍</div>
      <ul>
        <li v-html="this.third.content"></li>
      </ul>
      <div class="content-right">商品评价</div>-->
      <div v-html="this.fourth" class="content-fourth"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "../assets/scss/a.min.css";
import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      second: [],
      third: [],
      fourth: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // console.log(this.$route.params.id);
    let a = this.$route.params.id;
    axios
      .post("https://api.it120.cc/small4/shop/goods/detail?id=" + a)
      .then(res => {
        this.second = res.data.data.pics;
        this.third = res.data.data.basicInfo;
        this.fourth = res.data.data.content;

        // console.log(res.data.data.content);
        // console.log(this.third);
      });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>