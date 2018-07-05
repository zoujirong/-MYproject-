/**
 * Created by lip on 2017/12/17.
 */
$(function() {
    /*初始化工具提示*/
    $('[data-toggle="tooltip"]').tooltip();

    /*获取当前所有item*/
    var items = $(".carousel-inner .item");
    /*监听屏幕的大小改变*/
    $(window).on("resize", function () {
        /*1.获取当前屏幕的宽度*/
        var width = $(window).width();
        /*2.判断屏幕的宽度*/
        if (width >= 768) {/*说明非移动端*/
            /*为每一个item添加子元素--遍历*/
            $(items).each(function (index, value) {
                var item = $(this);
                /*当前自定义属性中 存储的图片路径*/
                var imgSrc = item.data("largeImage");
                console.log(imgSrc);
                /*添加非移动端的子元素*/
                item.html($('<div class="pcImg">' +
                    ' <div class="home-pc-xz hidden-xs">' +
                    '<a href="http://www.biaodaa.com/file/biaodaa.apk"><img src="image/home_andriod.png" alt=""/></a> <a href="https://itunes.apple.com/us/app/biao-da-da/id1278802484?l=zh&ls=1&mt=8"><img src="image/home_ios.png" alt=""/></a></div>'
                    +'</div>').css("backgroundImage", "url('" + imgSrc + "')"));



            });
        }
        else {
            $(items).each(function (index, value) {
                var item = $(this);
                var imgSrc = item.data("smallImage");
                item.html('<a href="javascript:;" class="mobileImg"><img src="' + imgSrc + '" alt="..."></a>');
            });
        }
    }).trigger("resize");
});