<template>
  <div class="template">
    <div class="container-fluid header-main header-section">
      <div class="header-back"></div>
      <nav class="navbar navbar-default navbar-brands navbar-abouts">
        <div class="container">
          <div class="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed" type="button" @click="navbarCollapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-logo navbar-brand" :to="{name:'Home'}"></router-link>
          </div>
          <div class="navbar-collapse navbar-right collapse in" data-expanded="false" style="height:0px">
            <ul class="nav navbar-nav navbar-right">
              <li class="active">
                  <router-link :to="{name:'Home'}">首页</router-link>
              </li>
              <li class="">
                  <router-link :to="{name:'About'}">关于我们</router-link>
              </li>
              <li class="dropdown">
                  <router-link :to="{name:'Service'}">产品服务</router-link>
              </li>
              <li class="dropdown">
                  <router-link :to="{name:'Home'}">经典案例</router-link>
              </li>
              <li class="dropdown">
                  <router-link :to="{name:'Home'}">联系我们</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container container-zindex container-index">
        <img class="img-responsive" src="../assets/showcase-header.png">
        <h1>移动公关第一品牌</h1>
        <p>未来,我们一直在路上 移动互联网时代的创意革命 “北京前推”</p>
      </div>
    </div>
    <div class="container marketing">
      <div class="row">
        <div class="col-lg-3">
          <img width="140" height="140" alt="Generic placeholder image" src="../assets/Spread.png" class="">
          <h2>社会化媒体传播</h2>
          <p>以落地活动为主要传播信息，定期将文字、图片及视频短片传到官方微信、微博进行传播。</p>
        </div><!-- 社会化媒体传播 -->
        <div class="col-lg-3">
          <img width="140" height="140" alt="Generic placeholder image" src="../assets/mobile.png" class="">
          <h2>移动互联网搭建</h2>
          <p>根据客户的需求，市场状况，企业情况等进行搭建适合客户的微信。 </p>
        </div><!-- 移动互联网搭建 -->
        <div class="col-lg-3">
          <img width="140" height="140" alt="Generic placeholder image" src="../assets/weixin.png" class="">
          <h2>微信全案营销</h2>
          <p>为企业量身定制独立的全案营销方案，全方位的为客户提供有效的解决方案。</p>
        </div><!-- 微信全案营销 -->
        <div class="col-lg-3">
          <img width="140" height="140" alt="Generic placeholder image" src="../assets/web.png" class="">
          <h2>定制项目开发</h2>
          <p>丰富Web组件，可二次开发的面板，可快速构建界面出色、体验优秀的跨屏页面。</p>
        </div><!-- 定制项目开发 -->
      </div>
    </div>
    <div class="container marketing marketing-media">
      <div class="row featurette">
        <div class="col-md-5">
          <div data-ride="carousel" class="carousel slide" id="myCarousel">
            <div role="listbox" class="carousel-inner">
              <div class="item">
                <img alt="First slide" src="../assets/banner.png" class="first-slide">
              </div>
              <div class="item">
                <img alt="Second slide" src="../assets/banner.png" class="second-slide">
              </div>
              <div class="item">
                <img alt="Third slide" src="../assets/banner.png" class="third-slide">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <h2 class="featurette-heading">媒介资源 <span class="text-muted" style="font-size:22px;"> ...</span></h2>
          <p class="lead">微信订阅号<span>总账户数超70000+</span>，累计订阅量100亿，覆盖行业广泛，受众群体精准</p>
          <ul class="present-list"><li>资源可视化展示及操作</li><li>历史及实时监控图表</li><li>记录所有重要操作行为</li><li>工单系统，第一时间解决资源相关问题</li></ul>
          <p><a role="button" href="#" class="btn btn-lg btn-success">了解详情<span class="glyphicon glyphicon-menu-right"></span></a></p>
        </div>
      </div>
    </div>
    <div class="container-fluid container-fluid-back ">
      <div class="container">
        <div class="text-center text-header-title">
          <h1>我们拥有最全面的数据资源</h1>
          <p><span>拥有1200家媒体</span>，新闻稿在线媒体实时更新综合门户、地方门户、行业媒体细分。</p>
          <p>微信订阅号<span>总账户数超70000+</span>，累计订阅量100亿，覆盖行业广泛，受众群体精准。</p>
          <p>微信朋友圈<span>总账户数超22000+</span>，累计好友量1亿5千万，覆盖行业广泛，受众群体精准，均视频认证过确保真实。</p>
        </div>
      </div>
    </div>
    <div class="container" style="margin-bottom:40px; margin-top:40px;">
      <div class="container text-center text-center-h1">
          <h1>他们选择了我们</h1>
      </div>
      <div data-example-id="simple-thumbnails" class="bs-example">
        <div class="row thumbnail-clear">
          <div class="col-xs-6 col-md-3">
            <a class="thumbnail thumbnail-bottom" href="http://www.qunar.com/" target="_blank" title="去哪儿网">
              <img alt="100%x110" data-src="holder.js/100%x110" style="height: 110px; width: 100%; display: block;" src="../assets/h1.png" data-holder-rendered="true">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a class="thumbnail thumbnail-bottom" href="http://www.amazon.cn/" target="_blank" title="卓越亚马逊">
              <img alt="100%x180" data-src="holder.js/100%x180" style="height: 110px; width: 100%; display: block;" src="../assets/h2.png" data-holder-rendered="true">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a class="thumbnail thumbnail-bottom" href="http://www.cebbank.com/" target="_blank" title="光大银行">
              <img alt="100%x180" data-src="holder.js/100%x180" style="height: 110px; width: 100%; display: block;" src="../assets/h3.png" data-holder-rendered="true">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a class="thumbnail thumbnail-bottom" href="http://www.lexus.com.cn/" target="_blank" title="雷克萨斯">
              <img alt="100%x180" data-src="holder.js/100%x180" style="height: 110px; width: 100%; display: block;" src="../assets/h4.png" data-holder-rendered="true">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a class="thumbnail thumbnail-bottom" href="http://www.haval.cn/" target="_blank" title="哈佛网">
              <img alt="100%x180" data-src="holder.js/100%x180" style="height: 110px; width: 100%; display: block;" src="../assets/h5.png" data-holder-rendered="true">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a class="thumbnail thumbnail-bottom" href="http://www.yonyou.com/" target="_blank" title="用友yonyou">
              <img alt="100%x180" data-src="holder.js/100%x180" style="height: 110px; width: 100%; display: block;" src="../assets/h6.png" data-holder-rendered="true">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a class="thumbnail thumbnail-bottom" href="http://www.xiaoniu88.com/" target="_blank" title="小牛在线">
              <img alt="100%x180" data-src="holder.js/100%x180" style="height: 110px; width: 100%; display: block;" src="../assets/h7.png" data-holder-rendered="true">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a class="thumbnail thumbnail-bottom" href="http://www.hzkywy.com/" target="_blank" title="开元物业">
              <img alt="100%x180" data-src="holder.js/100%x180" style="height: 110px; width: 100%; display: block;" src="../assets/h8.png" data-holder-rendered="true">
            </a>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
//http://moban.dede58.com/20180129a/15/themes/img/code/chuan.png
import $ from 'jquery'
export default {
  methods:{
    navbarCollapse(){
      if(!$(".navbar-collapse").data("expanded")){
        $(".navbar-collapse").css("height", "215px");
        $(".navbar-collapse").data("expanded", true);
      }else{
        $(".navbar-collapse").css("height", "0px");
        $(".navbar-collapse").data("expanded", false);
      }
    }
  },
  mounted(){
    var width = document.getElementsByClassName("carousel-inner")[0].offsetWidth;
    $(".carousel-inner>.item>img").width(width);
    $(".carousel-inner").width(width*3);
    window.addEventListener("resize", function(){
      location.reload();
    })
    setInterval(function(){
      var item0 = document.getElementsByClassName("item")[0];
      $(".carousel-inner").animate({"marginLeft":-width+"px"},function(){
        $(item0).remove();
        $(".carousel-inner").append(item0);
        $(".carousel-inner").animate({"marginLeft":"0px"}, 0);
      })
    }, 3000);
  }
}
</script>

<style scoped>
.btn-group-vertical>.btn-group:after, .btn-group-vertical>.btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before{
  display: table;
  content: " ";
}
.btn-group-vertical>.btn-group:after, .btn-toolbar:after, .clearfix:after, .container-fluid:after, .container:after, .dl-horizontal dd:after, .form-horizontal .form-group:after, .modal-footer:after, .nav:after, .navbar-collapse:after, .navbar-header:after, .navbar:after, .pager:after, .panel-body:after, .row:after{
  clear: both;
}
.header-main{
  background-attachment: fixed;
  background-color: rgb(38, 38, 38);
  background-image: url("../assets/header-bj1.jpg");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: -6px 0 0 0 rgb(0, 0, 0);
  height: 70%;
  min-height: 690px;
  padding-bottom: 102px;
  position: relative;
  transform: rotate(0deg) scale(1) translate(0%, 0%);
  transition: all 2s ease 0s;
}
.header-section{
  padding-left: 0;
  padding-right: 0;
}
.header-back{
  background-color: transparent;
  background-image: url("../assets/body.png");
  height: 100%;
  min-height: 700px;
  position: absolute;
  width: 100%;
}
.navbar{
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}
.navbar-default{
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar{
  border: none;
}
.navbar-brands{
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0;
  z-index: 5;
  padding: 20px 30px;
}
.navbar-header{
  position: relative;
  z-index: 2;
  flex: 1;
}
.container-fluid>.navbar-collapse, .container-fluid>.navbar-header, .container>.navbar-collapse, .container>.navbar-header{
  margin-right: -15px;
  margin-left: -15px;
}
.navbar-toggle{
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-default .navbar-toggle{
  border-color: #ddd;
}
.sr-only{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
.navbar-toggle .icon-bar{
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}
.navbar-default .navbar-toggle .icon-bar{
  background-color: #888;
}
.navbar-toggle .icon-bar+.icon-bar{
  margin-top: 4px;
}
.navbar-logo{
  background-image: url("../assets/logo1.png");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
}
.navbar-brand{
  float: left;
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}
.navbar-default .navbar-brand{
  color: #777;
}
.navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover{
  background-color: #ddd;
}
.navbar-toggle:focus{
  outline: 0;
}
.collapse{
  display: none;
}
.navbar-collapse{
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
}
.navbar-collapse{
  border: none;
  box-shadow: none;
}
.collapse.in{
  display: block;
}
.navbar-collapse.in{
  overflow-y: auto;
}
.navbar-default .navbar-collapse, .navbar-default .navbar-form{
  border-color: #e7e7e7;
}
.nav{
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav{
  margin: 7.5px -15px;
}
.nav>li{
  position: relative;
  display: block;
}
.nav>li>a{
  position: relative;
  display: block;
  padding: 10px 15px;
}
.navbar-nav>li>a{
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
.navbar-default .navbar-nav>li>a{
  color: #777;
}
.navbar-default .navbar-nav > li > a{
  color: #fff;
}
.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover{
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover{
  background: rgba(255, 255, 255, 0.2) none repeat scroll 0 0;
  color: #fff;
}
.navbar-nav>li>a:link,.navbar-nav>li>a:visited,.navbar-nav>li>a:active{
  text-decoration: none;
}
.navbar-collapse{
  transition: all .3s;
}
.navbar-collapse::-webkit-scrollbar{
  width: 0px;
  height: 0px;
}
.container-zindex{
  z-index: 9999;
  position: relative;
}
.carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img{
  display: block;
  max-width: 100%;
  height: auto;
}
.img-responsive{
  display: block;
  height: auto;
  max-width: 100%;
  z-index: 999;
}
.container-zindex h1{
  color: #fff;
  font-weight: bold;
  margin: 0;
  font-size: 60px;
  letter-spacing: 3px;
}
.container-index h1{
  text-align: center;
  font-size: 50px;
}
.container-index p{
  text-align: center;
}
.container-zindex p{
  color: #fff;
  font-size: 18px;
  padding-top: 20px;
}
.marketing{
  margin-top: 40px;
  margin-bottom: 30px;
  padding-top: 20px;
}
img{
  vertical-align: middle;
}
.marketing .col-lg-3{
  text-align: center;
}
.marketing .row .col-lg-3 h2{
  font-size: 18px;
}
.marketing .row .col-lg-3 p{
  color: #888;
  font-size: 13px;
}
.marketing-media{
  margin-bottom: 100px;
  margin-top: 80px;
}
.carousel-inner>.item{
  display: block;
  float: left;
}
.carousel{
  overflow: hidden;
}
.marketing .featurette h2{
  padding-bottom: 10px;
}
.h1, .h2, .h3, h1, h2, h3{
  margin-top: 20px;
  margin-bottom: 10px;
}
.lead{
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}
.marketing .featurette p{
  font-size: 18px;
  line-height: 2em;
}
.present-list{
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  margin-left: 12px;
}
.present-list li{
  line-height: 1.8em;
}
.container-fluid-back{
  background: url("../assets/footer.jpg") no-repeat center bottom;
  height: 460px;
}
.text-header-title h1{
  color: #eee;
  padding-top: 30px;
  padding-bottom: 20px;
}
.h1, h1{
  font-size: 36px;
}
.text-header-title p{
  font-size: 18px;
  line-height: 1.5em;
  color: #eee;
}
.text-header-title span{
  color: #ffcc00;
  font-size: 19px;
}
.text-center-h1 h1{
  padding-bottom: 25px;
}
.thumbnail-clear div{
  padding-left: 0;
  padding-right: 0;
}
.thumbnail{
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: border .2s ease-in-out;
  -o-transition: border .2s ease-in-out;
  transition: border .2s ease-in-out;
}
.thumbnail{
  border-radius: 0;
  padding: 0;
  border: none;
  margin-bottom: 20px;
}
.thumbnail-bottom{
  padding: 5px;
  margin-bottom: 0;
}
.col-xs-6{
  width: 50%;
}
.widget{
  margin-bottom: 35px;
}
.main-footer .widget{
  padding: 0 30px;
}
.widget .recent-post .recent-single-post{
  margin-bottom: 14px;
  padding-bottom: 14px;
}
.main-footer .widget .recent-post .recent-single-post .date{
  color: #505050;
}
.main-footer .widget .recent-post .recent-single-post .post-title{
  color: #959595;
}
.content-about{
  margin-top: 60px;
}
.content-about div{
  margin-bottom: 10px;
}
a{
  color: #337ab7;
  text-decoration: none;
}
.btn{
  color: #fff;
}
</style>
