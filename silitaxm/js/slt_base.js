/**
 * Created by lip on 2017/12/16.
 */
$(window).resize(function ()// �󶨵����ڵ�����¼���
{
    var wW = window.innerWidth;// ��ǰ���ڵĿ��
    var whdef = 100/1920;// ��ʾ1920�����ͼ,ʹ��100PX��Ĭ��ֵ
    if(wW<768){
        whdef = 100/750;
    }
    var wH = window.innerHeight;// ��ǰ���ڵĸ߶�

    var rem = wW * whdef;// ��Ĭ�ϱ���ֵ���Ե�ǰ���ڿ��,�õ��ÿ���µ���ӦFONT-SIZEֵ
    $('html').css('font-size', rem + "px");
});