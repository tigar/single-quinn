$(document).ready(function (){
	$("#top").click(function (){
		$('html, body').animate({
			scrollTop: $('#count').position().top}, 'fast');
    });
 
	$("#charts").click(function (){
		$('html, body').animate({
			scrollTop: $("#container").position().top -100 }, 'fast');
	});
	$("#apply").click(function (){
		$('html, body').animate({
			scrollTop: $("#application").position().top -100 }, 'fast');
	});
});