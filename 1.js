
var locatio = ["mainD", "mainDD", "mainDA", "mainDB"];

//回到最上層
$(function(){
	//動畫方式回到上層
	$("#gotopD").click(function(){
			jQuery("html,body").animate({scrollTop:0},300,);
			//jQuery("html,body").animate({scrollTop: $("#labelD").offset().top},300);
});

//目前的位置距離網頁頂端，若大於300px則顯示回上層圖示;否則隱藏
$(window).scroll(function() {
	if ( $(this).scrollTop() > 300){
		var scrolls = $(window).scrollTop();
		$('#gotopD').fadeIn("fast");
		//$('#gotoD').css("top", (scrolls + 100) + "px");
	}
	else {
		$('#gotopD').stop().fadeOut("fast");
		//$('#gotoD').css("top", "25%");
	}
	});
});
/*
function goTo(i)
{
	jQuery("html,body").animate({scrollTop: $("#" + locatio[i]).offset().top - 50},300);
}*/