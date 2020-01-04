<template>
    <div class="template">
        <footer class="main-footer  main-footer1">
            <div class="container">
                <div class="row">
                <div class="col-sm-4">
                    <div class="widget">
                    <h4 class="title"><img src="../assets/logo-blue.png"></h4>
                    <div class="content recent-post">
                        <div class="recent-single-post"><div class="date">QIANTUI移动公关第一品牌，我们拥有最全面的媒介数据库资源，我们能给您提供全面的服务 。</div></div>
                        <div class="recent-single-post"><a class="post-title" href="#">北京前友推广信息科技有限公司</a><div class="date" style="padding-top:10px;">Copyright © 2017 </div></div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="widget">
                    <h4 class="title"></h4>
                    <div class="content-about">
                        <div><a href="javascript:;">关于我们</a></div>
                        <div><a href="javascript:;">联系我们</a></div>
                        <div><a href="javascript:;" target="_blank">加入我们</a></div>
                        <div><a href="javascript:;">产品服务</a></div>
                        <div><a href="javascript:;">经典案例</a></div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="widget">
                    <h4 class="title"></h4>
                    <div class="content-about">
                        <div><a href="javascript:;">平台优势</a></div>
                        <div><a href="javascript:;">服务条款</a></div>
                        <div><a href="javascript:;">免责声明</a></div>
                        <div><a href="javascript:;">合作代理</a></div>
                        <div><a href="javascript:;">帮助中心</a></div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="widget">
                    <div class="content-about">
                        <img src="../assets/ewm.jpg" width="148" height="148" style="border:1px solid #eee; padding:5px;" title="扫描二维码。关注我们。">
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:"my-footer"
}
</script>

<style scoped>
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
.main-footer1{
  background: none;
  border-top: 1px solid #e9ecef;
}
.main-footer{
  padding: 35px 0 0;
}
</style>