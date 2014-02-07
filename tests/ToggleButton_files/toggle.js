window.onload = init;
function init()
{
	var objCheck=document.getElementById('toggleTest');
	objCheck.setAttribute('role','button');
	objCheck.setAttribute('aria-pressed','false');
objCheck.onclick = function()
{
	return doCheck(objCheck);
};
}
function doCheck(objCheck)
{
	var currentvalue = objCheck.getAttribute('aria-pressed');
	var objSample=document.getElementById('sample');
	
	if(currentvalue=='false')
	{
		objCheck.setAttribute('alt', 'highlight on');
		objCheck.setAttribute('src', 'ToggleButton_files/highlight.gif');
		objCheck.setAttribute('aria-pressed', 'true');
		objSample.style.backgroundColor='#ffff00';	
		
	}
	
	else 
	{
	objCheck.setAttribute('alt', 'highlight off');
		objCheck.setAttribute('src', 'ToggleButton_files/nohighlight.gif');
		objCheck.setAttribute('aria-pressed', 'false');
		objSample.style.backgroundColor='#f5f5f5';
		}
	
	return true;
}
