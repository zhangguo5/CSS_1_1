function setHome(obj)
{
	obj.style.behavior='url(#default#homepage)';
	obj.setHomePage('http://www.jlwwy.com'); 
	return false;
}

function addSite()
{
window.external.addFavorite('http://www.jlwwy.com','长沙剑龙生物科技发展有限公司'); 
return false;	 
}

function getTime()
{
	var spanTime=document.getElementById("spanTime");
	spanTime.innerHTML="时间："+new Date().toLocaleString();
}

function baiduShare() {
    var str = "<script type='text/javascript' id='bdshare_js' data='type=slide&amp;img=1&amp;uid=793025' ></script>";
    str += "<script type='text/javascript' id='bdshell_js'></script>";
    str += "<script type='text/javascript'>";
    str += " document.getElementById('bdshell_js').src = 'http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=' + new Date().getHours();";
    str += "</script>";
    return str;
}
