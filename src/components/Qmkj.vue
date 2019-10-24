<!--  -->
<template>
  <div class="Qmkj">
    <div class="Qmkj-header">
      <router-link to="/">
        <van-icon name="arrow-left" class="Qmkj-one" />
      </router-link>
      <div class="kj">砍价列表</div>
    </div>
    <router-link to="/" tag="div" class="smallbox">
      <div v-for="(item,index) in kj" :key="index" class="smallbox-one">
        <div class="smallbox-left">
          <img :src="item.pic" alt />
        </div>
        <div class="right">
          <div class="smallbox-right" v-html="item.name"></div>
          <div class="smallbox-right-one">{{item.characteristic}}</div>
          <div class="smallbox-right-two">
            <div class="size">
              <div class="size1">￥{{item.minPrice}}.00</div>
              <div class="size2">原价</div>
            </div>
            <div class="size">
              <div class="size3">￥{{item.originalPrice}}.00</div>
              <div class="size4">底价</div>
            </div>
            <div class="size">
              <div class="size3">{{item.stores}}</div>
              <div class="size4">件</div>
              <div class="size4">限量</div>
            </div>
            <!-- <div>22</div>
            <div>33</div>-->
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
import "../assets/scss/Qmkj.min.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      kj: []
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
    axios
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
        console.log(res.data.data);
        this.kj = res.data.data.goodsMap;
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