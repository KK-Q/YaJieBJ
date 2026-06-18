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

changePC('.wisdom', width, 1920, 2000, 0, 900);
changePC('.wisdom-intro', width, 1920, 600, 0, 0);
changePC('.wisdom-intro-title', width, 1920, 50, 0, 80);
changePCSize('.wisdom-intro-title', width, 40);
changePCLineSize('.wisdom-intro-title', width, 50);
changePC('.wisdom-intro-content', width, 1120, 50, 400, 150);
changePCSize('.wisdom-intro-content', width, 22);
changePCLineSize('.wisdom-intro-content', width, 30);
changePC('.wisdom-intro-one', width, 250, 100, 380, 350);
changePC('.wisdom-intro-num-title', width, 250, 60, 0, 0);
changePCSize('.wisdom-intro-num-title', width, 34);
changePCLineSize('.wisdom-intro-num-title', width, 60);
changePC('.wisdom-intro-num-content', width, 250, 40, 0, 60);
changePCSize('.wisdom-intro-num-content', width, 18);
changePCLineSize('.wisdom-intro-num-content', width, 40);
changePC('.wisdom-intro-two', width, 250, 100, 650, 350);
changePC('.wisdom-intro-three', width, 250, 100, 950, 350);
changePC('.wisdom-intro-four', width, 250, 100, 1250, 350);
changePC('.wisdom-service', width, 1920, 1000, 0, 600);
changePC('.wisdom-service-title', width, 1920, 50, 0, 80);
changePCSize('.wisdom-service-title', width, 40);
changePCLineSize('.wisdom-service-title', width, 50);
changePC('.wisdom-service-list', width, 1320, 100, 300, 200);
changePCSize('.wisdom-service-li', width, 25);
changePCLineSize('.wisdom-service-li', width, 100);
changePC('.wisdom-service-list-city-guards', width, 200, 100, 250, 0);
changePC('.wisdom-service-list-village-guards', width, 200, 100, 830, 0);

changePC('.wisdom-service-content', width, 1520, 600, 200, 350);
changePC('.wisdom-service-content-title', width, 300, 50, 100, 120);
changePCSize('.wisdom-service-content-title', width, 25);
changePCLineSize('.wisdom-service-content-title', width, 50);
changePC('.wisdom-service-content-intro', width, 500, 300, 100, 190);
changePCSize('.wisdom-service-content-intro', width, 18);
changePCLineSize('.wisdom-service-content-intro', width, 30);
changePC('.wisdom-service-content-image', width, 700, 451, 700, 50);
changePC('.wisdom-feature', width, 1920, 800, 0, 1600);
changePC('.wisdom-feature-title', width, 1920, 50, 0, 80);
changePCSize('.wisdom-feature-title', width, 40);
changePCLineSize('.wisdom-feature-title', width, 50);
changePC('.wisdom-feature-img', width, 648, 650, 635, 70);


changePC('.wisdom-scene', width, 1920, 800, 0, 2400);
changePC('.wisdom-scene-title', width, 1920, 50, 0, 80);
changePCSize('.wisdom-scene-title', width, 40);
changePCLineSize('.wisdom-scene-title', width, 50);
changePC('.wisdom-scene-img', width, 920, 800, 500, 200);


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


$('.wisdom-service-list-city-guards').click(function(){
	$('.wisdom-service-li').removeClass('action');
	$(this).addClass('action');
	$('.wisdom-service-content').hide();
	$('.wisdom-service-content-city').show();
})
$('.wisdom-service-list-village-guards').click(function(){
	$('.wisdom-service-li').removeClass('action');
	$(this).addClass('action');
	$('.wisdom-service-content').hide();
	$('.wisdom-service-content-village').show();
})






