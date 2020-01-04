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
                    <li class="active">
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
                <h1>
                    <span>关于我们</span><br>我们是自由与创造的先行者
                </h1>
                <p>北京前友推广信息科技有限公司于立足中国市场，追求永续经营，我们清楚了解客户的产业竞争局势，也对于如何能让客户茁壮备感关切，<br>我们坚守并且彻底执行[客户成功至上]的理念。</p>
            </div>
        </div>
        <div id="home" class="container carousel Clear-margins" style="margin-top:30px">
            <div style="position: relative; top: 0px; z-index: 9999" class="navbar-wrapper stuckMenu">
                <div class="container">
                    <div class="navwrapper">
                        <div class="navbar navbar-inverse navbar-static-top">
                            <div class="container">
                                <div class="navbar-collapse">
                                    <ul class="nav navbar-nav Redefine-total">
                                        <li @click="menuItemClick($event)" class="menuItem active"><div @click="counter($event)">公司简介</div></li>
                                        <li @click="menuItemClick($event)" class="menuItem"><div @click="counter($event)">企业理念</div></li>
                                        <li @click="menuItemClick($event)" class="menuItem"><div @click="counter($event)">服务体系</div></li>
                                        <li @click="menuItemClick($event)" class="menuItem"><div @click="counter($event)">服务理念</div></li>
                                        <li @click="menuItemClick($event)" class="menuItem"><div @click="counter($event)">企业文化</div></li>
                                        <li @click="menuItemClick($event)" class="menuItem"><div @click="counter($event)">团队文化</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container" style="margin-top: 50px;">
                <div class="jumbotron" id="features">
                    <div class="row featurette">
                        <div class="container"><h3>公司简介</h3></div>
                        <div class="col-md-5">
                            <img alt="500x500" class="featurette-image img-responsive center-block" src="../assets/logo.png" data-holder-rendered="true">
                        </div>
                        <div class="col-md-7">
                            <p style="text-indent:2em;">北京前友推广信息科技有限公司于2014年在北京正式成立，由在投资领域经验丰富的北京前友推广信息科技有限公司于。在成立之初，开始服务于国内知名高新技术企业，北京前友推广信息科技有限公司于，服务于众多品牌企业，知名媒体，及地方金融机构。在新媒体领域，如同公司的名字，在不断的追求共赢，创造企业与客户的无缝沟通，创造商业机会和提升企业形象。北京前友推广信息科技有限公司于服务范围包括新闻发布、定向分发、微信运营整体解决方案和移动互联网定制服务。以技术为基础，以强悍营销实力为手段，加强客户卓有成效的网络品牌建设及助力企业内部更大范围的网络互动沟通。期望为客户的品牌提供更强，更有力的支持，通过北京前友推广信息科技有限公司于的互联网及移动互联网互动沟通策略，提供给客户完善整合的新媒体网络服务。</p>
                        </div>
                    </div>
                </div>
                <div class="jumbotron" id="updates">
                    <div class="">
                        <h3>企业理念</h3>
                        <div class="text-center"><img class="featurette-image img-responsive center-block" src="../assets/sixiang.png"></div>
                    </div>
                </div>
                <div class="jumbotron" id="installation">
                    <div class="">
                        <div class=" Customize">
                            <h3>服务体系</h3>
                            <div class="col-lg-3 Blue">
                            <div class="text-center"> <img src="../assets/shehui.png"></div>
                                <h3>社会化媒体传播</h3>
                                <p>以落地活动为主要传播信息、图片及视频短片传到官方微信、微博进行传播。</p>
                            </div>
                            <div class="col-lg-3 Green">
                                <div class="text-center"> <img src="../assets/shouji.png"></div>
                                <h3>移动互联网搭建</h3>
                                <p>根据客户的需求，市场状况，企业情况等进行搭建适合客户的微信网站。  </p>
                            </div>
                            <div class="col-lg-3 cyan">
                                <div class="text-center"><img src="../assets/xinwei.png"></div>
                                <h3>微信全案营销</h3>
                                <p>为企业量身定制独立的全案营销方案，全方位的为客户提供有效的解决方案。</p>
                            </div>
                            <div class="col-lg-3 yellow">
                                <div class="text-center"><img src="../assets/ewb.png"></div>
                                <h3>定制项目开发</h3>
                                <p>丰富Web组件，可二次开发，可快速构建界面出色、体验优秀的跨屏页面。</p>
                            </div>
                            <div style="clear: both; padding:0;"></div>
                        </div>
                    </div>
                </div>
                <div class="jumbotron" id="one-pager">
                    <div class="row featurette">
                    <h3>服务理念</h3>
                        <div class="col-md-5">
                            <img data-holder-rendered="true" src="../assets/huabi.png" class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="500x500">
                        </div>
                        <div class="col-md-7" style="padding-top:30px;">
                            <p style="padding-bottom:20px;">1.专业、时尚、精准、稳定</p>
                            <p style="padding-bottom:20px;">2.客户利益至上，永续经营；员工快乐成长，服务社会；</p>
                            <p>3. 注重专业，始终如一；利益至上，永续经营；不断完善，日臻完美</p>
                        </div>
                    </div>
                </div>
                <div class="jumbotron" id="extras">
                    <h3>企业文化</h3>
                    <p>诚信、创新、协作、分享</p>
                    <p>诚信，立业之本，是一种承诺，更是一种是责任；<br>创新，争创一流、自我超越，工作追求高标准、为客户提供高品质的服务；<br>协作，团队合作，共同发展，创造价值；<br>分享，学习新知识、接受新事物，提高效率，创新的工作方式。<br>这种服务理念已经深深融入人的血液中！ </p>
                    <p>尊重和关爱员工，把员工的成长、发展与公司的成长、发展结合起来，是公司一以贯之的文化；公司视员工为组织事业与个人职业和谐发展的合作伙伴，期望个人价值观与公司事业理念契合、个人发展需求与公司提供的发展机会吻合、满怀创业激情，只有斗志没有壁垒，快速发展潜力无限，我们创造了最棒的事业完成融资即将起航，你——要上船吗？</p>
                </div>
                <div class="jumbotron" id="wordpress">
                    <h3>团队文化</h3>
                    <p>专业：即企业和员工要走专业道路。保持自身专业特色，从而，发挥自身所具有的特色，在市场中立于不败之地。</p>
                    <p>素质：素质是一切业绩的基础。是组织意识、市场意识、和技能养成的总和。</p>
                    <p>灵活：是具有适应性强、协调性好的特点。不仅体现在企业对客户的服务上，也体现员工自身的适应性和协调性。</p>
                    <p>力度：企业对客户的执行力和员工自身的执行力。</p>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
            h:0
        }
    },
    methods:{
        navbarCollapse(){
            if(!$(".header-main .navbar-collapse").data("expanded")){
                $(".header-main .navbar-collapse").css("height", "215px");
                $(".header-main .navbar-collapse").data("expanded", true);
            }else{
                $(".header-main .navbar-collapse").css("height", "0px");
                $(".header-main .navbar-collapse").data("expanded", false);
            }
        },
        menuItemClick(e){
            $(".menuItem.active").removeClass("active");
            $(e.currentTarget).addClass("active");
        },
        counter(e){
            $(window).off("scroll",this.dealScroll);
            var index = $(e.currentTarget).parent().index();
            if(index===0){
                document.querySelector("#features").scrollIntoView(true);
            }else if(index===1){
                document.querySelector("#updates").scrollIntoView(true);
            }else if(index===2){
                document.querySelector("#installation").scrollIntoView(true);
            }else if(index===3){
                document.querySelector("#one-pager").scrollIntoView(true);
            }else if(index===4){
                document.querySelector("#extras").scrollIntoView(true);
            }else{
                document.querySelector("#wordpress").scrollIntoView(true);
            }
            setTimeout(() => {
                $(window).on("scroll",this.dealScroll);
            }, 100);
        },
        dealScroll(){
            var h1 = $("#features").offset().top+$("#features").height();
            var h2 = $("#updates").offset().top+$("#updates").height();
            var h3 = $("#installation").offset().top+$("#installation").height();
            var h4 = $("#one-pager").offset().top+$("#one-pager").height();
            var h5 = $("#extras").offset().top+$("#extras").height();
            var h6 = $("#wordpress").offset().top+$("#wordpress").height();
            var scrollTop = $(window).scrollTop();
            if(scrollTop>this.h){
                $(".stuckMenu").css("position","fixed")
            }else{
                $(".stuckMenu").css("position","relative")
            }
            if($(".stuckMenu").css("position")==="fixed"){
                if(scrollTop<h1){
                    $(".menuItem.active").removeClass("active");
                    $(".menuItem:eq(0)").addClass("active");
                }else if(scrollTop>=h1&&scrollTop<h2){
                    $(".menuItem.active").removeClass("active");
                    $(".menuItem:eq(1)").addClass("active");
                }else if(scrollTop>=h2&&scrollTop<h3){
                    $(".menuItem.active").removeClass("active");
                    $(".menuItem:eq(2)").addClass("active");
                }else if(scrollTop>=h3&&scrollTop<h4){
                    $(".menuItem.active").removeClass("active");
                    $(".menuItem:eq(3)").addClass("active");
                }else if(scrollTop>=h4&&scrollTop<h5){
                    $(".menuItem.active").removeClass("active");
                    $(".menuItem:eq(4)").addClass("active");
                }else{
                    $(".menuItem.active").removeClass("active");
                    $(".menuItem:eq(5)").addClass("active");
                }
            }
        }
    },
    mounted(){
        this.h = $(".navwrapper").offset().top+$(".navwrapper").height();
        $(window).on("scroll",this.dealScroll);
    }
}
</script>

<style scoped>
/***************************************/
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
  background-image: url("../assets/intro-bg-mtn.jpg");
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
.nav>li>div{
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav>li>a{
  position: relative;
  display: block;
  padding: 10px 15px;
}
.navbar-nav>li>div{
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
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
.navbar-nav>li>div:link,.navbar-nav>li>div:visited,.navbar-nav>li>div:active{
  text-decoration: none;
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
/***************************************/
.carousel{
    position: relative;
}
/***************************************/
.navbar-static-top{
    z-index: 1000;
    border-width: 0 0 1px;
}
.navbar-inverse{
    background-color: #222;
    border-color: #080808;
}
.navbar-inverse{
    background-color: #3f89c8;
    z-index: 999;
    border-radius: 3px;
}
.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form{
    border-color: #101010;
}
.navbar-inverse .navbar-nav > li > div{
    color: #fff;
    display: block;
    text-align: center;
    cursor: pointer;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.navbar-inverse .navbar-nav > .active > div, .navbar-inverse .navbar-nav > .active > div:focus, .navbar-inverse .navbar-nav > .active > div:hover{
    background-color: #2570b3;
}
@media screen and (min-width: 768px){
    .carousel .navbar-nav{
        float: left;
        margin: 0;
        display: block;
    }
    .carousel .navbar-nav>li {
        float: left;
    }
}
/***************************************/
.jumbotron{
    padding: 30px 15px;
    margin-bottom: 30px;
    color: inherit;
    background-color: #eee;
}
.jumbotron{
    background-color: #edece4;
    margin-bottom: 20px;
}
.container .jumbotron, .container-fluid .jumbotron{
    border-radius: 6px;
}
.container .jumbotron, .container-fluid .jumbotron{
    text-align: justify;
    border-radius: 3px;
}
@media screen and (min-width: 768px){
    .container .jumbotron, .container-fluid .jumbotron{
        padding-right: 60px;
        padding-left: 60px;
    }
}
@media screen and (min-width: 992px){
    .col-lg-3{
        max-width: 100%;
    }
}
.Customize .col-lg-3{
    padding-top: 30px;
    padding-bottom: 80px;
    text-align: center;
}
.jumbotron .container{
    max-width: 100%;
}
.carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img{
    display: block;
    max-width: 100%;
    height: auto;
}
.center-block{
    display: block;
    margin-right: auto;
    margin-left: auto;
}
.img-responsive{
    display: block;
    height: auto;
    max-width: 100%;
    z-index: 999;
}
.jumbotron p{
    margin-bottom: 15px;
    font-size: 21px;
    font-weight: 200;
}
.jumbotron p{
    font-size: 16px;
    line-height: 1.5em;
    color: #666;
}
#features p{
    line-height: 1.8em;
}
.h1, .h2, .h3, h1, h2, h3{
    margin-top: 20px;
    margin-bottom: 10px;
}
.h3, h3{
    font-size: 24px;
}
@media screen and (min-width: 992px){
    .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9{
        float: left;
    }
    .col-md-5{
        width: 41.66666667%;
    }
}
.center-block{
    display: block;
    margin-right: auto;
    margin-left: auto;
}
.img-responsive{
    display: block;
    height: auto;
    max-width: 100%;
    z-index: 999;
}
.row{
    display: block;
}
</style>