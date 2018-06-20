
var auth=['<p style="font-size:24px;">&nbsp&nbsp此次專題分工<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp網站構思，蒐集資料，撰寫code</p><br><p style="font-size:24px;">&nbsp&nbsp專案心得<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp寫個網站不容易，包含資料整理，功能實作，平常看起來沒什麼的功能，寫起來也是頗為麻煩。<br><br><br><br>',
		  '<p style="font-size:24px;">&nbsp&nbsp此次專題分工<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp撰寫code，網站美化，炫泡功能實作</p><br><p style="font-size:24px;">&nbsp&nbsp專案心得<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp沒事不要把期末專案拖到期末再做，特別是有多個專案的時候 Orz<br><br><br><br>'];
var data=['<img src = "img/0001.gif" height = "180" width = "180" id="cool" style="margin-left:-10px;"><p style = "font-size: 20px;text-align: center;">陳品逸</p><p style = "font-size: 20px;text-align: center;">作者之一</p><p style = "font-size: 20px;text-align: center;">學號:00457026</p>',
		  '<img src = "img/222.jpg" height = "180" width = "180" id="coo" style="margin-left: -10px;"><p style = "font-size: 20px;text-align: center;">方子元</p><p style = "font-size: 20px;text-align: center;">作者之二</p><p style = "font-size: 20px;text-align: center;">學號:00457040</p>'];

function change(i)
{
	changeauth = document.getElementById('mainD');
	changedata = document.getElementById('gotoD');
	changeauth.innerHTML = auth[i];
	changedata.innerHTML = data[i];
}

$(document).on('mouseover', '#cool', function(){
	$(this).attr('src', 'img/0002.jpg');
})

$(document).on('mouseout', '#cool', function(){
	$(this).attr('src', 'img/0001.gif');
})

$(document).on('mouseover', '#coo', function(){
	$(this).attr('src', 'img/223.jpg');
})

$(document).on('mouseout', '#coo', function(){
	$(this).attr('src', 'img/222.jpg');
})
