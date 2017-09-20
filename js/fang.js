/*
 * ˼·������
 * 1.��ȡҪ������Ԫ��
 * 2.������� ��mark ��bBox��ʾ
 * 3.�ƶ�mark  �� bBox��ͼƬ�����ƶ�
 * 4.����Ƴ� ��mark ��bBox����
 *
 * */
//1.��ȡҪ������Ԫ��
var sBox=document.getElementById('sBox');
var mark=sBox.getElementsByTagName('div')[0];
var bBox=document.getElementById('bBox');
var oImg=bBox.getElementsByTagName('img')[0];

// 2.������� ��mark ��bBox��ʾ

sBox.onmouseover=function () {
    mark.style.display='block';
    bBox.style.display='block';
};

//3.�ƶ�mark  �� bBox��ͼƬ�����ƶ�
sBox.onmousemove=function (e) {
    //  ��� mark �� left ��top
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
//4.����Ƴ� ��mark ��bBox����
sBox.onmouseout=function () {
    mark.style.display='none';
    bBox.style.display='none';
};
