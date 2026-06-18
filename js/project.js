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


	changePC('.project-list', width, 1520, 1500, 200, 300);
	changePCSize('.project-list table th', width, 20);
	changePCSize('.project-list table td', width, 18);
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

changePC('.project', width, 1920, 2000, 0, 900);
changePC('.project-line', width, 1920, 80, 0, 0);
changePC('.project-search', width, 1520, 200, 200, 100);
changePC('.project-search-city-name', width, 150, 80, 0, 20);
changePCSize('.project-search-city-name', width, 20);
changePCLineSize('.project-search-city-name', width, 60);
changePC('.project-search-city-input', width, 250, 60, 80, 20);
changePC('.project-search-city-input select', width, 210, 60, 20, 0);
changePCSize('.project-search-city-input select', width, 22);

changePC('.project-search-service-name', width, 150, 60, 360, 20);
changePCSize('.project-search-service-name', width, 20);
changePCLineSize('.project-search-service-name', width, 60);
changePC('.project-search-service-input', width, 250, 60, 480, 20);
changePC('.project-search-service-input select', width, 210, 60, 20, 0);
changePCSize('.project-search-service-input select', width, 22);

changePC('.project-search-click', width, 250, 60, 1000, 20);
changePCSize('.project-search-click', width, 20);
changePCLineSize('.project-search-click', width, 60);
changePC('.project-search-intro', width, 1520, 60, 0, 120);
changePCSize('.project-search-intro', width, 16);
changePCLineSize('.project-search-intro', width, 20);

changePC('.project-list', width, 1520, 1500, 200, 300);
changePCSize('.project-list table th', width, 20);
changePCSize('.project-list table td', width, 18);


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









