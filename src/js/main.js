$(document).ready(function(){
	document.getElementById("return-to-top").style.display = "none";

	$(window).scroll(function(){
		if($(this).scrollTop() >= 100)
			{
				document.getElementById("return-to-top").style.display = "";
			}
			else 
			{
				document.getElementById("return-to-top").style.display = "none";

			}
	});

	$("#return-to-top").click(function(){
		$("body,html").animate({
			scrollTop: 0
		}, 700);
	});
});