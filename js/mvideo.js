let width = $(window).width();
let height = $(window).height();

changePC('.header', width, 1920, 200, 0, 0);
changePC('.header-logo', width, 280, 100, 120, 30);
changePC('.header-menu', width, 120, 120, 1700, 50);
changePCW('.header-hide', width, 1300, 0, 200);
changePC('.header-hide-line', width, 1300, 1000, 0, 0);
changePC('.header-hide-line li', width, 1200, 120, 50, 0);
changePCSize('.header-hide-line li', width, 45);
changePCLineSize('.header-hide-line li', width, 120);


changePC('.header-line', width, 1100, 50, 800, 20);
changePC('.header-line div', width, 100, 30, 30, 10);
changePCSize('.header-line div a', width, 18);
changePCSize('.header-line div', width, 18);
changePCLineSize('.header-line div', width, 30);
changePC('.header-service-list', width, 270, 210, 1100, 80);
changePC('.header-service-list ul', width, 250, 210, 20, 0);
changePCSize('.header-service-list li', width, 18);
changePCLineSize('.header-service-list li', width, 50);


changePC('.main', width, 1920, 1850, 0, 0);
changePC('.banner', width, 1920, 5902, 0, 0);

changePC('.videos', width, 1920, 1550, 0, 1000);
changePC('.videos-image-title', width, 200, 50, 250, 0);
changePC('.videos-bank-title', width, 200, 50, 250, 2000);
changePCSize('.videos-image-title,.videos-bank-title', width, 50);
changePCLineSize('.videos-image-title,.videos-bank-title', width, 50);
changePC('.videos-image-one', width, 1420, 750, 250, 100);

changePC('.videos-image-two', width, 640, 360, 250, 1000);
changePC('.videos-image-three', width, 640, 360, 1000, 1000);
changePC('.videos-image-four', width, 640, 360, 250, 1450);
changePC('.videos-image-five', width, 640, 360, 1000, 1450);

changePC('.videos-bank-one', width, 500, 900, 130, 2200);
changePC('.videos-bank-two', width, 500, 900, 700, 2200);
changePC('.videos-bank-three', width, 500, 900, 1270, 2200);


changePC('.footer', width, 1920, 700, 0, 5400);

changePC('.footer-one', width, 860, 400, 200, 100);
changePC('.footer-two', width, 860, 400, 1000, 100);
changePC('.footer-three', width, 1720, 400, 100, 100);

changePC('.footer-title', width, 500, 50, 0, 0);
changePCSize('.footer-title', width, 40);
changePCLineSize('.footer-title', width, 50);
changePC('.footer-three .footer-title', width, 1620, 50, 0, 0);
changePC('.footer-list', width, 500, 400, 0, 100);
changePC('.footer-list li', width, 500, 50, 0, 20);
changePCSize('.footer-list li', width, 35);
changePCLineSize('.footer-list li', width, 50);

changePC('.footer-logo', width, 800, 80, 0, 80);
changePC('.footer-shipinghao', width, 140, 140, 300, 0);
changePC('.footer-gongzhonghao', width, 140, 140, 600, 0);
changePC('.footer-xiaohongshu', width, 140, 140, 900, 0);
changePC('.footer-douyin', width, 140, 140, 1200, 0);

changePC('.footer-phone', width, 600, 50, 300, 240);
changePC('.footer-email', width, 600, 50, 1000, 240);
changePC('.footer-address', width, 1000, 50, 300, 310);
changePCSize('.footer-phone,.footer-email,.footer-address', width, 40);
changePCLineSize('.footer-phone,.footer-email,.footer-address', width, 50);

changePC('.footer-container', width, 1920, 40, 0, 600);
changePCSize('.footer-container', width, 35);
changePCLineSize('.footer-container', width, 40);


$(window).resize(function () {          //当浏览器大小变化时
    let width = $(window).width();



});

//鼠标移入事件
$(document).ready(function() {
    $('.header-line div').mouseenter(function() {
       $('.header-service-list').hide();
    });
    $('.header-service').mouseenter(function() {
       $('.header-service-list').show();
    });
});
//检测页面滚动
$(window).scroll(function() {
    $('.header-service-list').hide();
});
