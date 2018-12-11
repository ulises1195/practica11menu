$(document).ready(main);

function main(){
	$('#menu').click(function(){
		//$('nav').toggle();
		$('nav').toggle("slow", function(){});
	});
}