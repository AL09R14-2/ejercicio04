// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
$('#btn_sonido').click(function(){
	//alert("click a btn_sonido");
	if($('#btn_sonido').hasClass('ui-icon-audio'))
	{
		//apagar el audio
		$('#btn_sonido').removeClass('ui-icon-audio');
		$('#btn_sonido').addClass('ui-icon-bars');
		alert('se apago el sonido')
	}
	else
	{
		//prender el audio
		$('#btn_sonido').removeClass('ui-icon-bars');
		$('#btn_sonido').addClass('ui-icon-audio');
		navigator.notification.beep(1);
		alert('se prendio el sonido')
	}
});//click a btn_sonido

//}); 
});

