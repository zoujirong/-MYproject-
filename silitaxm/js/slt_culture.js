/**
 * Created by lip on 2017/12/17.
 */
$(function() {
    /*��ʼ��������ʾ*/
    $('[data-toggle="tooltip"]').tooltip();

    /*��ȡ��ǰ����item*/
    var items = $(".carousel-inner .item");
    /*������Ļ�Ĵ�С�ı�*/
    $(window).on("resize", function () {
        /*1.��ȡ��ǰ��Ļ�Ŀ��*/
        var width = $(window).width();
        /*2.�ж���Ļ�Ŀ��*/
        if (width >= 768) {/*˵�����ƶ���*/
            /*Ϊÿһ��item�����Ԫ��--����*/
            $(items).each(function (index, value) {
                var item = $(this);
                /*��ǰ�Զ��������� �洢��ͼƬ·��*/
                var imgSrc = item.data("largeImage");
                console.log(imgSrc);
                /*��ӷ��ƶ��˵���Ԫ��*/
                item.html($('<div class="pcImg"></div>').css("backgroundImage", "url('" + imgSrc + "')"));



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
});/**
 * Created by lip on 2017/12/17.
 */
