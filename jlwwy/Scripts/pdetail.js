window.onload=function()
{
	getTime();
	window.setInterval("getTime()",1000);
	
	var spanPrint=document.getElementById("spanPrint");
	var spanClose=document.getElementById("spanClose");
	
	spanPrint.onclick=function()
	{
		window.print() ;
	}
	
	spanClose.onclick=function()
	{
		window.close();
	}
}