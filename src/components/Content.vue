<!--  -->
<template>
  <div class="content">
    <!-- header -->
    <div class="content-header" v-show="show1">
      <img src="../assets/img/5.jpg" alt />
    </div>
    <!-- 轮播开始 -->
    <van-swipe :autoplay="3000" class="one">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <a :href="image.linkUrl" target="blank">
          <img :src="image.picUrl" alt class="imga" />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播结束 -->
    <!-- 轮播下边小导航 -->
    <div class="content-one">
      <ul class="content-one-ul">
        <router-link to="/Qdao" tag="li">
          <img src="../assets/img/1.jpg" alt />
          <div>签到</div>
        </router-link>
        <router-link to="/Ljuan" tag="li">
          <img src="../assets/img/2.jpg" alt />
          <div>礼券</div>
        </router-link>
        <router-link to="/Qmkj" tag="li">
          <img src="../assets/img/3.jpg" alt />
          <div>砍价</div>
        </router-link>
        <router-link to="/Zlan" tag="li">
          <img src="../assets/img/4.jpg" alt />
          <div>专栏</div>
        </router-link>
      </ul>
    </div>
    <!-- 轮播下边小导航结束 -->
    <!-- 全民砍价下边三个 -->
    <router-link to="/Qmkj" tag="div" class="content-two">
      全民砍价
      <van-icon name="play-circle-o" />
    </router-link>
    <router-link
      :to="'/a/'+item.id"
      tag="div"
      class="content-three"
      v-for="(item,index) in list"
      :key="index"
      v-if="item.stores==100"
    >
      <div>
        <img :src="item.pic" alt />
      </div>
      <div>
        <p v-html="item.name" class="p1"></p>
        <div class="size">{{item.characteristic}}</div>
        <div class="bottom">
          <div class="bottom-left">
            <div class="size1">
              <div class="size1-left">￥{{item.minPrice}}</div>
              <div class="size1-right">底价</div>
            </div>
          </div>
          <div class="bottom-one">
            <div class="bottom-two">
              <div>￥{{item.originalPrice}}</div>
              <div>原价</div>
            </div>
          </div>
          <div class="bottom-one">
            <div class="bottom-two">
              <div>{{item.kanjiaPrice}}</div>
              <div>限量</div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <!-- 全民砍价下边三个结束 -->
    <!-- 精选专题下边三个横拉 -->
    <router-link to="/Jxzt" tag="div" class="content-first">
      精选专题
      <van-icon name="play-circle-o" />
    </router-link>
    <div class="dis">
      <router-link
        :to="'/b/'+item.id"
        tag="div"
        class="content-second"
        v-for="(item,index) in first"
        :key="index"
        v-if="item.id == 9845 || item.id == 9846 || item.id == 9850 "
      >
        <img :src="item.pic" alt />
        <div v-html="item.title" class="item1"></div>
        <div class="item" v-html="item.descript"></div>
      </router-link>
    </div>
    <!-- 精选专题下边三个横拉结束 -->
    <!-- 人气推荐下边四个开始 -->
    <div class="content-first">
      人气推荐
      <van-icon name="play-circle-o" />
    </div>
    <div class="v-for">
      <router-link
        :to="'/c/'+item.id"
        tag="div"
        class="v-item"
        v-for="(item,index) in second1"
        :key="index"
      >
        <img :src="item.pic" alt />
        <div class="font">￥{{item.pingtuanPrice}}</div>
      </router-link>
    </div>

    <!-- 人气推荐下边四个结束 -->
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
import "../assets/scss/Content/Content.min.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      images: [],
      //轮播数组
      list: [],
      //全民砍价下边三个
      first: [],
      //精选专题下边三个横拉
      second: [],
      second1: [],
      //人气推荐下边四个
      show1: false,
      num: 0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scroll() {
      this.num = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.num >= 100) {
        this.show1 = true;
      } else {
        this.show1 = false;
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  //轮播接口
  created() {
    axios.get("https://api.it120.cc/small4/banner/list").then(res => {
      //   console.log(res.data);
      this.images = res.data.data;
    });
    //全民砍价下边三个  接口
    axios
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
        this.list = res.data.data.goodsMap;
        // console.log(this.list);
        // this.list = res.data.data.filter(item => {
        //   return (
        //     item.list == true &&
        //     item.recommendStatusStr == "推荐" &&
        //     item.stores == 100
        //   );
        //   console.log(this.list);
        // });
      });
    //精选专题下边三个横拉  接口
    axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
      //   console.log(res.data);
      this.first = res.data.data;
    });
    //人气推荐下边四个  接口
    axios.get("https://api.it120.cc/small4/shop/goods/list").then(res => {
      //   console.log(res.data);
      this.second = res.data.data;
      this.second1 = this.second.filter(item => {
        return item.recommendStatusStr == "推荐";
      });
      this.second1 = this.second1.slice(0, 4);
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
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