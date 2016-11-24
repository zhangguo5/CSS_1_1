window.onload=function()
{
	getTime();
	window.setInterval("getTime()",1000);
	
	var txtA=document.getElementById("txtA");
	var txtB=document.getElementById("txtB");
	var txtC=document.getElementById("txtC");
	var conts=document.getElementById("conts");
	
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
	
    txtA.onclick=function()
	{
		conts.style.fontSize="15px";
	}
	
	 txtB.onclick=function()
	{
		conts.style.fontSize="14px";
	}
	
	 txtC.onclick=function()
	{
		conts.style.fontSize="13px";
	}
}