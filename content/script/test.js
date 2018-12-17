
window.onload = function () {

    var tab_item = $('.tab').children();

    for (let i = 0; i < tab_item.length; i++) {
        $(`<li>`).text($(tab_item[i]).attr('name')).appendTo($('ul#nav_item'));
        var nav_item = $('ul#nav_item').children();
        $(nav_item[0]).attr('selected', 'selected')
    }
        var myArr = [];

    for (let j = 0; j < nav_item.length; j++) {
        nav_item[j].addEventListener('click', select);
        myArr.push(nav_item[j]);
    
        var counter;

        function select(e) {
            $('[selected = "selected"]').removeAttr('selected')

            $(nav_item[counter]).removeAttr('selected', 'selected')

            $(e.currentTarget).attr('selected', 'selected')
            var index = myArr.indexOf(e.currentTarget);
            counter = index;
            $(tab_item[index]).attr('selected', '')
            
        }
    }
    var nav_menu = $('ul.nav_menu').children();
    // console.log(nav_menu);

    nav_menu.click(function(event){
        nav_menu.removeAttr('marked', 'marked');
        $(this).attr('marked', 'marked')   
        event.preventDefault();
       
   });

    $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
        $("#mySearch item").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
   
}
// console.log($('[myId="home"]')[0]);

      
        // function select() {
		// 	for(let i = 0;  i < tab_item.length; i++) {

		//  		if(i == j) {
		// 			$(tab_item[i]).attr('selected', 'selected')
		// 			$(nav_item[j]).attr('selected', 'selected')
		// 		}
		// 		else {
		// 	       		$(tab_item[i]).removeAttr('selected', '')
		// 	       		$(nav_item[j]).removeAttr('selected', '')
		// 	        }
		//     }
	 	// }