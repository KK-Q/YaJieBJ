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


changePC('.main', width, 1920, 1850, 0, 0);
changePC('.banner', width, 1920, 1850, 0, 0);

changePC('.videos', width, 1920, 1550, 0, 500);
changePC('.videos-image-title', width, 200, 29, 250, 0);
changePC('.videos-bank-title', width, 200, 29, 250, 560);
changePCSize('.videos-image-title,.videos-bank-title', width, 29);
changePCLineSize('.videos-image-title,.videos-bank-title', width, 29);
changePC('.videos-image-one', width, 711, 400, 250, 80);
changePC('.videos-image-two', width, 320, 180, 1000, 80);
changePC('.videos-image-three', width, 320, 180, 1360, 80);
changePC('.videos-image-four', width, 320, 180, 1000, 300);
changePC('.videos-image-five', width, 320, 180, 1360, 300);
changePC('.videos-bank-one', width, 281, 500, 230, 650);
changePC('.videos-bank-two', width, 281, 500, 530, 650);
changePC('.videos-bank-three', width, 281, 500, 830, 650);
changePC('.videos-bank-four', width, 281, 500, 1130, 650);
changePC('.videos-bank-five', width, 281, 500, 1430, 650);




changePC('.footer', width, 1920, 600, 0, 1850);

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
