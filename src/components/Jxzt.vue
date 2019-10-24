<!--  -->
<template>
  <div class="Jxzt">
    <div class="Jxzt-header">
      <router-link to="/">
        <van-icon name="arrow-left" class="Jxzt-size" />
      </router-link>
      <div class="Jxzt-first">严选专栏</div>
    </div>
    <div class="Jxzt-content">
      <div class="Jxzt-content-one" v-for="(item,index) in hu" :key="index">
        <!-- <div class="Jxzt-image"> -->
        <img :src="item.pic" alt />
        <div class="aa">
          <div class="Jxzt-text" v-html="item.title"></div>
          <div v-html="item.descript"></div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "../assets/scss/Jxzt.min.css";
import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      hu: []
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
    axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
      console.log(res.data);
      this.hu = res.data.data;
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