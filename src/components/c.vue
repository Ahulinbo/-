<!--  -->
<template>
  <div class="c">
    <router-link to="/" class="vs-header">
      <van-icon name="arrow-left" class="vs-i" />
    </router-link>
    <div class="lunbo">
      <van-swipe :autoplay="3000" class="one">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <a :href="image.linkUrl" target="blank">
            <img :src="image.pic" alt class="imga" />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <ul class="content-ul">
        <li v-html="this.first"></li>
      </ul>
    </div>
    <div class="footer-car" @click="add()" v-show="xiaoshi">加入购物车</div>
    <ul class="add-ul" v-show="shows">
      <!-- <li class="li1" v-for="(image, index) in images" :key="index">
        <img :src="images.pic" alt />
      </li>-->
      <li class="li1">
        <img :src="this.fourth" alt class="img1" />
        <div>
          <div class="zi">
            {{this.fifth}}
            <span class="span1" @click="del">×</span>
          </div>
          <div class="zi1">￥{{this.sixth}}</div>
        </div>
      </li>
      <li class="li2">{{this.seventh}}</li>
      <div class="a">
        <li class="li3" v-for="(item,index) in second" :key="index" @click="val(item)">
          <div>{{item.name}}</div>
        </li>
      </div>
      <li class="li4">
        <div class="sl">
          <span>购买数量</span>
          <span class="span5">
            <span class="span6">
              <button @click="reduce">-</button>
            </span>
            <span>
              <input type="text" class="inp1" v-model="num" />
            </span>
            <span>
              <button @click="plus">+</button>
            </span>
          </span>
        </div>
      </li>
      <li @click="car" class="var">加入购物车</li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
import "../assets/scss/c.min.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      images: [],
      first: [],
      second: [],
      shows: false,
      xiaoshi: true,
      name: "",
      fourth: "",
      fifth: "",
      sixth: "",
      seventh: "",
      num: 1,
      ss: "",
      dd: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    val(item) {
      console.log(item.name);
      this.name = item.name;
    },
    add() {
      this.shows = true;
      this.xiaoshi = false;
    },
    del() {
      this.shows = false;
      this.xiaoshi = true;
    },
    car() {
      let obj = {
        name: this.name,
        image: this.images,
        ss: this.fifth,
        dd: this.seventh
      };
      this.xiaoshi = false;
      if (obj.name == "" || obj.image == "") {
        return false;
      } else {
        this.$store.commit("name", obj);
      }
    },
    reduce() {
      this.num--;
      if (this.num == 0) {
        alert("不能减了");
      }
    },
    plus() {
      this.num++;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let c = this.$route.params.id;
    axios
      .post("https://api.it120.cc/small4/shop/goods/detail?id=" + c)
      .then(res => {
        // console.log(res.data.data.properties);
        this.images = res.data.data.pics;
        this.first = res.data.data.content;
        this.second = res.data.data.properties[0].childsCurGoods;
        this.fourth = res.data.data.basicInfo.pic;
        this.fifth = res.data.data.basicInfo.name;
        this.sixth = res.data.data.basicInfo.pingtuanPrice;
        this.seventh = res.data.data.properties[0].name;

        // console.log(this.fourth);
      });
    // console.log(c);
    // console.log(this.$route);
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