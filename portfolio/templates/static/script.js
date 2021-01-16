window.onload = window.onload = prepareButton;
function prepareButton(){
	document.getElementById('scrl').onclick = function(){
	window.scroll({
		top: 1000, 
  	left: 0, 
  	behavior: 'smooth'
	});
}
}