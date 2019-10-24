<!--  -->
<template>
  <div class="fenlei">
    <div class="fenlei-header">
      <input type="text" class="txt" placeholder="搜索商品" />
    </div>
    <div class="fenlei-box">
      <div class="fenlei-left">
        <!-- <div>所有分类</div> -->
        <ul class="fenlei-left-ul" v-for="(image, index) in list" :key="index">
          <li @click="cid(image.id)">{{image.name}}</li>
        </ul>
      </div>
      <!-- <div class="fenlei-right"> -->
      <div>
        <div>
          <van-swipe :autoplay="3000" class="one">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img :src="image.icon" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div>
          <ul v-for="(item,index) in lest" :key="index">
            <li>
              <img :src="item.icon" alt />
            </li>
          </ul>
        </div>
      </div>
      <!-- 111111111111111111 -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
import "../assets/scss/fenlei.min.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      images: [],
      list: [],
      lest: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    cid(n) {
      console.log(n);
      let a = this.images.filter(item => {
        return item.pid == n;
      });
      console.log(a);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    axios
      .post("https://api.it120.cc/small4/shop/goods/category/all")
      .then(res => {
        console.log(res.data.data);
        this.images = res.data.data;
        this.list = res.data.data.filter(item => {
          return item.pid == 0;
        });
        this.lest = res.data.data.filter(item => {
          return item.pid != 0;
        });
        // console.log(this.lest);
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