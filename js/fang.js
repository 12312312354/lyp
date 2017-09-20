/*
 * 思路分析：
 * 1.获取要操作的元素
 * 2.鼠标移入 让mark 和bBox显示
 * 3.移动mark  让 bBox的图片跟着移动
 * 4.鼠标移出 让mark 和bBox隐藏
 *
 * */
//1.获取要操作的元素
var sBox=document.getElementById('sBox');
var mark=sBox.getElementsByTagName('div')[0];
var bBox=document.getElementById('bBox');
var oImg=bBox.getElementsByTagName('img')[0];

// 2.鼠标移入 让mark 和bBox显示

sBox.onmouseover=function () {
    mark.style.display='block';
    bBox.style.display='block';
};

//3.移动mark  让 bBox的图片跟着移动
sBox.onmousemove=function (e) {
    //  求出 mark 的 left 和top
    e=e||window.event;

    var l=e.pageX-this.offsetLeft-mark.offsetWidth/2;
    var t=e.pageY-this.offsetTop-mark.offsetHeight/2;
    if(l<=0){
        l=0;
    }else if(l>=this.offsetWidth-mark.offsetWidth){
        l=this.offsetWidth-mark.offsetWidth;
    }
    if(t<=0){
        t=0;
    }else if(t>=this.offsetHeight-mark.offsetHeight){
        t=this.offsetHeight-mark.offsetHeight;
    }
    mark.style.left=l+'px';
    mark.style.top=t+'px';

    var L=l/(sBox.offsetWidth-mark.offsetWidth)*(bBox.offsetWidth-oImg.offsetWidth);
    var T=t/(sBox.offsetHeight-mark.offsetHeight)*(bBox.offsetHeight-oImg.offsetHeight);
    oImg.style.left=L+'px';
    oImg.style.top=T+'px';
};
//4.鼠标移出 让mark 和bBox隐藏
sBox.onmouseout=function () {
    mark.style.display='none';
    bBox.style.display='none';
};
