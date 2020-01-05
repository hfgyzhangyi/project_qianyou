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
                    <li class="">
                        <router-link :to="{name:'Home'}">首页</router-link>
                    </li>
                    <li class="">
                        <router-link :to="{name:'About'}">关于我们</router-link>
                    </li>
                    <li class="dropdown">
                        <router-link :to="{name:'Service'}">产品服务</router-link>
                    </li>
                    <li class="dropdown">
                        <router-link :to="{name:'Demo'}">经典案例</router-link>
                    </li>
                    <li class="dropdown active">
                        <router-link :to="{name:'Contact'}">联系我们</router-link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            <div class="container container-zindex container-index">
                <h1>
                    <span>联系我们</span><br>海内存知己，天涯若比邻
                </h1>
                <p>欢迎朋友们来公司坐坐，探讨关于团队协同的一切问题。</p>
            </div>
        </div>
        <div class="container Client-list">
            <div class="row featurette">
                <div class="col-md-12 contact-icon">
                    <div>
                        <h2 class="featurette-heading">北京前友推广信息科技有限公司</h2>
                        <p>地址：北京市海淀区北三环西路42号中航科技</p>
                        <p>邮编：100086</p>
                        <p>电话：010-88889461</p>
                        <p>Email: <a href="javascript:;">azenui@sina.com</a> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container company-img "><img src="../assets/company-getstarted.png"></div>
        <my-footer></my-footer>
    </div>
</template>

<script>
export default {
    methods:{
        navbarCollapse(){
            if(!$(".header-main .navbar-collapse").data("expanded")){
                $(".header-main .navbar-collapse").css("height", "215px");
                $(".header-main .navbar-collapse").data("expanded", true);
            }else{
                $(".header-main .navbar-collapse").css("height", "0px");
                $(".header-main .navbar-collapse").data("expanded", false);
            }
        }
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
  background-image: url("../assets/contact-bg.jpg");
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
.container-zindex span{
    display: block;
    font-size: 40px;
    font-weight: normal;
}
.company-img{
    text-align: center;
}
.company-img img{
    width: 70%;
    vertical-align: middle;
    margin-top: 35px;
}
.Client-list{
    margin-top: 30px;
    margin-bottom: 20px;
}
a{
    color: #337ab7;
    text-decoration: none;
}
.contact-icon{
    text-align: center;
}
</style>