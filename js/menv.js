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
changePC('.main', width, 1920, 4500, 0, 0);
changePC('.banner', width, 1920, 1234, 0, 0);

changePC('.wisdom', width, 1920, 2000, 0, 1234);
changePC('.wisdom-intro', width, 1920, 700, 0, 0);
changePC('.wisdom-intro-title', width, 1920, 60, 0, 80);
changePCSize('.wisdom-intro-title', width, 60);
changePCLineSize('.wisdom-intro-title', width, 60);
changePC('.wisdom-intro-content', width, 1620, 50, 150, 180);
changePCSize('.wisdom-intro-content', width, 35);
changePCLineSize('.wisdom-intro-content', width, 45);

changePC('.wisdom-intro-one', width, 400, 150, 100, 450);
changePC('.wisdom-intro-num-title', width, 400, 60, 0, 30);
changePCSize('.wisdom-intro-num-title', width, 45);
changePCLineSize('.wisdom-intro-num-title', width, 60);
changePC('.wisdom-intro-num-content', width, 400, 40, 0, 90);
changePCSize('.wisdom-intro-num-content', width, 30);
changePCLineSize('.wisdom-intro-num-content', width, 40);

changePC('.wisdom-intro-two', width, 400, 150, 500, 450);
changePC('.wisdom-intro-three', width, 400, 150, 900, 450);
changePC('.wisdom-intro-four', width, 400, 150, 1300, 450);

changePC('.wisdom-service', width, 1920, 1300, 0, 700);
changePC('.wisdom-service-title', width, 1920, 60, 0, 80);
changePCSize('.wisdom-service-title', width, 60);
changePCLineSize('.wisdom-service-title', width, 60);
changePC('.wisdom-service-list', width, 1720, 100, 100, 200);
changePCSize('.wisdom-service-li', width, 40);
changePCLineSize('.wisdom-service-li', width, 100);
changePC('.wisdom-service-list-city-guards', width, 400, 100, 250, 0);
changePC('.wisdom-service-list-village-guards', width, 400, 100, 1000, 0);

changePC('.wisdom-service-content', width, 1720, 600, 100, 350);
changePC('.wisdom-service-content-title', width, 500, 50, 0, 120);
changePCSize('.wisdom-service-content-title', width, 40);
changePCLineSize('.wisdom-service-content-title', width, 50);
changePC('.wisdom-service-content-intro', width, 500, 300, 0, 190);
changePCSize('.wisdom-service-content-intro', width, 35);
changePCLineSize('.wisdom-service-content-intro', width, 50);
changePC('.wisdom-service-content-image', width, 1100, 500, 600, 10);


changePC('.wisdom-feature', width, 1920, 1200, 0, 1900);
changePC('.wisdom-feature-title', width, 1920, 60, 0, 50);
changePCSize('.wisdom-feature-title', width, 60);
changePCLineSize('.wisdom-feature-title', width, 60);
changePC('.wisdom-feature-img', width, 1320, 800, 300, -100);

changePC('.wisdom-scene', width, 1920, 800, 0, 3100);
changePC('.wisdom-scene-title', width, 1920, 60, 0, 80);
changePCSize('.wisdom-scene-title', width, 60);
changePCLineSize('.wisdom-scene-title', width, 60);
changePC('.wisdom-scene-img', width, 1320, 800, 300, 180);



changePC('.footer', width, 1920, 700, 0, 5500);

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






