<!--  -->
<template>
  <div class="denglu">
    <div class="denglu-content">
      <div class="size">账号登录</div>
      <div class="size1">胡麟博-严选商城欢迎您</div>
      <div>
        <!-- <input type="text" class="txt1" placeholder="手机号码" /> -->
        <!-- <input type="text" placeholder="密码" /> -->
        <el-input class="txt12" placeholder="手机号码" v-model="input1"></el-input>
        <el-input class="txt21" placeholder="请输入密码" v-model="input" show-password></el-input>
      </div>
      <div>
        <button class="btn">登录</button>
        <div class="btn-size">忘记密码</div>
        <router-link to="/Zhuce" tag="div" class="btn1-size">还没有注册? 立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "../assets/scss/Denglu.min.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      input: "",
      input1: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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