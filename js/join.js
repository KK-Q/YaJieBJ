let width = $(window).width();
let height = $(window).height();

changePC('.header', width, 1920, 90, 0, 0);
changePC('.header-logo', width, 140, 70, 120, 10);
changePC('.header-line', width, 1100, 50, 800, 20);
changePC('.header-line div', width, 100, 30, 30, 10);
changePCSize('.header-line div a', width, 18);
changePCSize('.header-line div', width, 18);
changePCLineSize('.header-line div', width, 30);
changePC('.header-service-list', width, 270, 210, 1100, 80);
changePC('.header-service-list ul', width, 250, 210, 20, 0);
changePCSize('.header-service-list li', width, 18);
changePCLineSize('.header-service-list li', width, 50);


changePC('.main', width, 1920, 4500, 0, 0);
changePC('.banner', width, 1920, 900, 0, 0);

changePC('.join-banner-left', width, 853, 447, 290, 1000);
changePC('.join-banner-left-title', width, 500, 60, 300, 40);
changePCSize('.join-banner-left-title', width, 40);
changePCLineSize('.join-banner-left-title', width, 60);
changePC('.join-banner-left-title-en', width, 500, 60, 150, 80);
changePCSize('.join-banner-left-title-en', width, 30);
changePCLineSize('.join-banner-left-title-en', width, 60);
changePC('.join-banner-right', width, 421, 447, 1150, 1000);
changePC('.join-banner-right-title', width, 350, 60, 50, 140);
changePCSize('.join-banner-right-title', width, 40);
changePCLineSize('.join-banner-right-title', width, 60);
changePC('.join-banner-right-title-en', width, 350, 60, 50, 180);
changePCSize('.join-banner-right-title-en', width, 26);
changePCLineSize('.join-banner-right-title-en', width, 60);
changePC('.join-banner-right-content', width, 350, 60, 50, 220);
changePCSize('.join-banner-right-content', width, 26);
changePCLineSize('.join-banner-right-content', width, 60);
changePC('.join-banner-content', width, 1920, 700, 0, 1300);
changePC('.join-banner-content-one', width, 66, 42, 200, 200);
changePC('.join-banner-content-two', width, 66, 42, 1000, 500);
changePC('.join-banner-content-three', width, 620, 155, 1100, 400);
changePC('.join-banner-content-intro', width, 800, 450, 200, 250);
changePCSize('.join-banner-content-intro', width, 18);
changePCLineSize('.join-banner-content-intro', width, 30);

changePC('.join-banner-phone', width, 1920, 700, 0, 2100);
changePC('.join-banner-phone-title', width, 1672, 92, 124, 0);
changePCSize('.join-banner-phone-title', width, 40);
changePCLineSize('.join-banner-phone-title', width, 180);
changePC('.join-banner-phone-left', width, 500, 400, 300, 200);
changePC('.join-banner-phone-right', width, 500, 400, 1100, 200);
changePC('.join-banner-phone-left-img,.join-banner-phone-right-img', width, 100, 100, 200, 70);
changePC('.join-banner-phone-left-title,.join-banner-phone-right-title', width, 500, 50, 0, 200);
changePCSize('.join-banner-phone-left-title,.join-banner-phone-right-title', width, 30);
changePCLineSize('.join-banner-phone-left-title,.join-banner-phone-right-title', width, 50);
changePC('.join-banner-phone-left-content,.join-banner-phone-right-content', width, 500, 50, 0, 280);
changePCSize('.join-banner-phone-left-content,.join-banner-phone-right-content', width, 30);
changePCLineSize('.join-banner-phone-left-content,.join-banner-phone-right-content', width, 50);

changePC('.join-banner-map', width, 1920, 700, 0, 2900);
changePC('.join-banner-map-title', width, 1672, 92, 124, 0);
changePCSize('.join-banner-map-title', width, 40);
changePCLineSize('.join-banner-map-title', width, 180);
changePC('.join-banner-map-content', width, 1672, 92, 124, 100);
changePCSize('.join-banner-map-content', width, 18);
changePCLineSize('.join-banner-map-content', width, 92);
changePC('.join-banner-map-address', width, 1520, 771, 200, 200);




changePC('.footer', width, 1920, 600, 0, 4600);

changePC('.footer-one', width, 300, 400, 100, 100);
changePC('.footer-two', width, 300, 400, 400, 100);
changePC('.footer-three', width, 300, 400, 800, 100);
changePC('.footer-four', width, 550, 400, 1200, 100);

changePC('.footer-title', width, 500, 30, 0, 0);
changePCSize('.footer-title', width, 25);
changePCLineSize('.footer-title', width, 30);
changePC('.footer-list', width, 300, 400, 0, 50);
changePC('.footer-list li', width, 300, 30, 0, 20);
changePCSize('.footer-list li', width, 22);
changePCLineSize('.footer-list li', width, 30);

changePC('.footer-logo', width, 800, 80, 0, 50);
changePC('.footer-shipinghao', width, 80, 80, 0, 0);
changePC('.footer-gongzhonghao', width, 80, 80, 120, 0);
changePC('.footer-xiaohongshu', width, 80, 80, 240, 0);
changePC('.footer-douyin', width, 80, 80, 360, 0);

changePC('.footer-phone', width, 500, 30, 0, 200);
changePC('.footer-email', width, 500, 30, 0, 240);
changePC('.footer-address', width, 500, 30, 0, 280);
changePCSize('.footer-phone,.footer-email,.footer-address', width, 24);
changePCLineSize('.footer-phone,.footer-email,.footer-address', width, 30);

changePC('.footer-container', width, 1920, 30, 0, 500);
changePCSize('.footer-container', width, 22);
changePCLineSize('.footer-container', width, 30);

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
