
 window.onload = function() {

	var list = $('.tab').children();

	for(let i = 0;  i < list.length; i++) {
	    $(`<li id=${$(list[i]).attr('name')}>`).text($(list[i]).attr('name')).appendTo($('ul#nav_item'));
	    var elements = $('li');
	}

	for(let i = 0;  i < elements.length; i++) {
	    elements[i].addEventListener('click', selectClass);
	

	function selectClass() {
		for(let i = 0;  i < list.length; i++) {
	 		if(list[i].classList.contains(this.id)) {
				$(list[i]).attr('selected', '')
			}  	else {
		       		$(list[i]).removeAttr('selected', '')
		        }
	    }
 	}
 	}		
}
// console.log($('[myId="home"]')[0]);