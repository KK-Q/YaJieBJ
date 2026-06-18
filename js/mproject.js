//项目
var projectItemsData = [
];
renderProjectList(projectItemsData);

//搜索
var city = '上海市';
$('#projectCity').change(function(){
    city = $(this).val();
});
var service = '日常保洁';
$('#projectService').change(function(){
    service = $(this).val();
});

$('.project-search-click').click(function(){
	projects = searchByService(service, searchByCity(city, projectItemsData));
	$('.project-list tbody').empty();
	renderProjectList(projects);

	changePC('.project-list', width, 1520, 2200, 200, 400);
	changePCSize('.project-list table th', width, 35);
	changePCSize('.project-list table td', width, 33);
})


// 根据城市搜索的函数
function searchByCity(cityName, projectItemsDatas) {
    // 使用jQuery的filter方法筛选数据
    return $(projectItemsDatas).filter(function() {
        // 模糊匹配城市名称，忽略大小写
        return this.city.toLowerCase() === cityName.toLowerCase();
    });
}
// 根据服务内容搜索的函数
function searchByService(serviceName, projectItemsDatas) {
    // 使用jQuery的filter方法筛选数据
    return $(projectItemsDatas).filter(function() {
        // 模糊匹配城市名称，忽略大小写
        return this.service.toLowerCase().includes(serviceName.toLowerCase());
    });
}



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



changePC('.main', width, 1920, 3000, 0, 0);
changePC('.banner', width, 1920, 1234, 0, 0);

changePC('.project', width, 1920, 2000, 0, 1240);
changePC('.project-line', width, 1920, 80, 0, 0);
changePC('.project-search', width, 1520, 200, 200, 100);
changePC('.project-search-city-name', width, 150, 80, 0, 20);
changePCSize('.project-search-city-name', width, 35);
changePCLineSize('.project-search-city-name', width, 60);
changePC('.project-search-city-input', width, 300, 60, 150, 20);
changePC('#projectCity', width, 300, 80, 150, 10);
changePCSize('#projectCity', width, 30);

changePC('.project-search-service-name', width, 200, 60, 500, 20);
changePCSize('.project-search-service-name', width, 35);
changePCLineSize('.project-search-service-name', width, 60);
changePC('.project-search-service-input', width, 300, 60, 800, 20);
changePC('#projectService', width, 300, 80, 750, 10);
changePCSize('#projectService', width, 30);


changePC('.project-search-click', width, 250, 60, 1300, 20);
changePCSize('.project-search-click', width, 35);
changePCLineSize('.project-search-click', width, 60);
changePC('.project-search-intro', width, 1520, 60, 0, 120);
changePCSize('.project-search-intro', width, 30);
changePCLineSize('.project-search-intro', width, 50);

changePC('.project-list', width, 1520, 2200, 200, 400);
changePCSize('.project-list table th', width, 35);
changePCSize('.project-list table td', width, 33);



changePC('.footer', width, 1920, 700, 0, 4000);

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

// 渲染列表函数
function renderProjectList(projectItems) {
    const $container = $('.project-list tbody');
    
    // 遍历新闻数据
    $.each(projectItems, function(index, project) {
        // 创建新闻卡片元素
        const $newsCard = $(`
        	<tr>
	            <td>${project.name}</td>
	            <td>${project.service}</td>
	            <td>${project.area}</td>
	            <td>${project.status}</td>
	            <td>${project.city}</td>
	            <td class="project-list-click">查看</td>
	         </tr>

        `);
        
        // 添加到容器
        $container.append($newsCard);
    });
}
