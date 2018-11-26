
 window.onload = function() {

	var tab_item = $('.tab').children();

	for(let i = 0;  i < tab_item.length; i++) {
	     $(`<li>`).text($(tab_item[i]).attr('name')).appendTo($('ul#nav_item'));
	     var nav_item = $('li');
	}

	$(`<i>`).text('home').attr('class', 'material-icons').appendTo($('li:nth-child(1)'));
	$(`<i>`).text('phone_forwarded').attr('class', 'material-icons').appendTo($('li:nth-child(4)'));

	var myArr = [];

	for(let j = 0;  j < nav_item.length; j++) {
	    nav_item[j].addEventListener('click', select);
	    myArr.push(nav_item[j]);
	}

		$(nav_item[0]).css('background-image', 'linear-gradient(to bottom, rgba(255,255,255,.8)  0%,rgba(255,255,255,.3) 100%)');

		var counter = 0;

		 function select(ev){
 
		 	$(nav_item[counter]).css('background-image', '');
		 	$(tab_item[counter]).removeAttr('selected', '')
		 	
			$(ev.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(255,255,255,.8)  0%,rgba(255,255,255,.3) 100%)');
			var index = myArr.indexOf(ev.currentTarget);
			counter = index;
			$(tab_item[index]).attr('selected', '')
	 	}		
}
// console.log($('[myId="home"]')[0]);


	// function select() {
		// 	for(let i = 0;  i < tab_item.length; i++) {
		//  		if(i == j) {
		// 			$(tab_item[i]).attr('selected', '')
		// 		}

		// 		if((i == j) && (tab_item[i].hasAttribute('selected'))) {

		// 			$(nav_item[j]).css('background-image', 'linear-gradient(to bottom, rgba(255,255,255,.8)  0%,rgba(255,255,255,.3) 100%)')
		// 			container = j;
		// 		}	
		// 		else {
		// 	       		$(tab_item[i]).removeAttr('selected', '')
		// 	       		$(nav_item[j]).css('background-image', '')
		// 	        }
		//     }
	 // 	}

