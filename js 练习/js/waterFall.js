/**
 * Created by quwang on 2017/6/13.
 */
function wang() {//定义成函数便于调用
    var contleft = $('.content-left');
    var li = $(".adiv");//这里是区块名称
    var margin = 0;//这里设置间距
    var li_W = li[0].offsetWidth + margin;//取区块的实际宽度（包含间距，这里使用源生的offsetWidth函数，不适用jQuery的width()函数是因为它不能取得实际宽度，例如元素内有pandding就不行了）
    var h = [];//记录区块高度的数组
    var n = 2//窗口的宽度除以区块宽度就是一行能放几个区块
    var pos = [];
    for (var i = 0; i < li.length; i++) {//有多少个li就循环多少次
        li_H = li[i].offsetHeight;//获取每个li的高度
        if (i < n) {//n是一行最多的li，所以小于n就是第一行了
            h[i] = li_H;//把每个li放到数组里面
            li.eq(i).css("top", 0);//第一行的Li的top值为0
            li.eq(i).css("left", i * li_W);//第i个li的左坐标就是i*li的宽度
        }
        else {
            min_H = Math.min.apply(null, h);//取得数组中的最小值，区块中高度值最小的那个
            minKey = getarraykey(h, min_H);//最小的值对应的指针
            h[minKey] += li_H + margin;//加上新高度后更新高度值
            li.eq(i).css("top", min_H + margin);//先得到高度最小的Li，然后把接下来的li放到它的下面
            li.eq(i).css("left", minKey * li_W);	//第i个li的左坐标就是i*li的宽度
//                pos[min_H] += li.eq(i).outerHeight();
        }
    }
    var maxh = Math.max.apply({}, h) + 10;
    contleft.css('height', maxh);
}
/* 使用for in运算返回数组中某一值的对应项数(比如算出最小的高度值是数组里面的第几个) */
function getarraykey(s, v) {
    for (k in s) {
        if (s[k] == v) {
            return k;
        }
    }
}
//    window.setTimeout(function(){$(".content-left").css({"height":$("body")[0].scrollHeight+"px"})},500);
//    这里一定要用onload，因为图片不加载完就不知道高度值
//设置最外容器的高以适应内容的变化

window.onload = function () {
    wang();
};
window.onresize = function () {
    wang();
};