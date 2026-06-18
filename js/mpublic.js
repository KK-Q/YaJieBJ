function changePC(className, width, widthNum, heightNum, marginLeft, marginTop){
    $(className).css('width', width/1920*widthNum + 'px');
    $(className).css('height', width/1920*heightNum + 'px');
    $(className).css('margin-left', width/1920*marginLeft + 'px');
    $(className).css('margin-top', width/1920*marginTop + 'px');
}

function changePCSize(className, width, fontSize){
    $(className).css('font-size', width/1920*fontSize/16 + 'rem');
}
function changePCLineSize(className, width, fontSize){
    $(className).css('line-height', width/1920*fontSize + 'px');
}

function changePCWH(className, width, widthNum, heightNum){
    $(className).css('width', width/1920*widthNum + 'px');
    $(className).css('height', width/1920*heightNum + 'px');
}
function changePCW(className, width, widthNum, marginLeft, marginTop){
    $(className).css('width', width/1920*widthNum + 'px');
    $(className).css('margin-left', width/1920*marginLeft + 'px');
    $(className).css('margin-top', width/1920*marginTop + 'px');
}

// 等待1秒（1000毫秒）后执行函数
$('body').hide();
$(document).ready(function() {
    // 等待1秒后执行的操作
    setTimeout(function() {
        $('body').show();
    }, 800); // 1000毫秒 = 1秒
});

//导航栏下拉
var is_menu_hide = true;
$('.header-menu').click(function(){
    if (is_menu_hide === true) {
        $('.header-hide').show();
        is_menu_hide = false;
        $(".header-menu img").attr("src", "./image/mindex/close.png");
    } else {
        $('.header-hide').hide();
        is_menu_hide = true;
        $(".header-menu img").attr("src", "./image/mindex/menu.png");
    }
})


var is_hide = true;
$('.header-hide-service-show').click(function(){
    if (is_hide === true) {
        $('.header-hide-service').show();
        is_hide = false;
    } else {
        $('.header-hide-service').hide();
        is_hide = true;
    }
})

// 判断设备类型的函数
function isMobileDevice() {
    // 方法1: 检测常见移动设备的用户代理字符串
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileAgents = [
        'iphone', 'ipad', 'ipod', 'android', 'windows phone',
        'blackberry', 'symbian', 'opera mini', 'ucweb', 'mobile'
    ];
    
    // 方法2: 检测屏幕宽度（小于768px视为移动设备）
    const isSmallScreen = $(window).width() < 768;
    
    // 方法3: 检测设备是否支持触摸事件
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // 综合判断：满足任一移动设备特征即视为手机端
    return mobileAgents.some(agent => userAgent.includes(agent)) || 
           (isSmallScreen && isTouchDevice);
}

var newsUrl = 'http://admin.yajie.com/api/v2/news/findNewsList';
var webUrl = 'www.yajiebj.com';
// 获取当前完整URL
const currentUrl = window.location.href;
// 检查URL是否包含目标域名
const containsDomain = currentUrl.indexOf(webUrl) !== -1;

if (containsDomain) {
    newsUrl = 'https://api.yajiebj.com/api/v2/news/findNewsList';
}



