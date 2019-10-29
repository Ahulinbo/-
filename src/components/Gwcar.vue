<!--  -->
<template>
  <div class="Gwcar">
    <div class="Gwcar-header">
      <span class="span1">编辑</span>
      <span class="span2">购物车</span>
    </div>
    <div class="Gwcar-content">
      <div v-for="(item,index) in name" :key="index" class="a">
        <div class="b">
          <input type="checkbox" v-model="item.check" class="inpu1" />
        </div>
        <div class="box">
          <div>
            <img :src="item.image[0].pic" alt class="img1" />
          </div>
          <div class="box-one">
            <div class="box-one-1">{{item.ss}}</div>
            <div class="box-one-2">{{item.dd}}</div>
            <div>{{item.name}}</div>

            <div>{{item.num}}</div>
            <div>{{item.qian}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="Gwcar-ul" v-show="qx">
      <li>
        <input type="checkbox" v-model="che" @change="dian" />
        <span>全选</span>
      </li>
      <li>合计:</li>
      <li>下单</li>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "../assets/scss/Gwcar.min.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      qx: false,
      che: false
    };
  },

  //监听属性 类似于data概念
  computed: {
    name() {
      return this.$store.state.name;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    dian() {
      //   console.log(this.che);
      //   this.name.map(item => {
      //     console.log(item);
      //     item.check = this.che;
      //   });
      this.$store.commit("ming", this.che);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if (this.name.length == 0) {
      this.qx = false;
    } else {
      this.qx = true;
    }
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