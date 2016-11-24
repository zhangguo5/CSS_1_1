// JavaScript Document

window.onload=function()
{
	getTime();
	window.setInterval("getTime()",1000);
	
	var speed=30;
	var GD=document.getElementById('demo'); 
	var GD1=document.getElementById('demo1');
	var GD2=document.getElementById('demo2');
	GD2.innerHTML=GD1.innerHTML;
	function Marquee(){
		if(GD2.offsetWidth-GD.scrollLeft<=0){
			GD.scrollLeft=0;
		}else{
			GD.scrollLeft++;
		}
	}
	var MyMar=setInterval(Marquee,speed);
	GD.onmouseover=function() {clearInterval(MyMar);}
	GD.onmouseout = function () { MyMar = setInterval(Marquee, speed); }
}