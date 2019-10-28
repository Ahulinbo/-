<!--  -->
<template>
  <div class="denglu">
    <div class="denglu-content">
      <div class="size">新用户注册</div>
      <div class="size1">很高兴您将成为商城的会员 (注册只需要一步)</div>
      <div>
        <el-input class="txt12" placeholder="手机号码" v-model="input"></el-input>
        <el-input class="txt21" placeholder="请输入密码" v-model="input1" show-password></el-input>
        <el-input class="txt21" placeholder="请输入密码" v-model="input2" show-password></el-input>

        <!-- <input type="text" class="txt1" placeholder="手机号码" /> -->
        <!-- <input type="text" class="txt2" placeholder="密码" /> -->
        <!-- <input type="text" class="txt2" placeholder="确认密码" />
        <input type="text" class="txt2" placeholder="用户名" />
        <input type="text" class="txt2" placeholder="图形验证码" />
        <input type="text" class="txt2" placeholder="密码" />
        <input type="text" class="txt2" placeholder="密码" />-->
      </div>
      <div>
        <button class="btn">登录</button>
        <router-link to="/denglu" tag="div" class="btn-size">已有账号？立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "../assets/scss/Zhuce.min.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      input: "",
      input1: "",
      input2: ""
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