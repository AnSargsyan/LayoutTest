$(function() {
  var elem = $('unitWrap'),
      clone;
    $('#section').on('click', function(e) {
      e.preventDefault();
      elem.toggleClass('active');
       $('#section').toggleClass('down');
    });

  var unit_item = $('.column').children();

  $('body').click(function(){
    if(clone != undefined){
      clone.find(".back").click(function(){
          clone.remove();
      })

       clone.find('.favIcon').click(function() {
       $(this).toggleClass('redIcon');
      })
    }
  })

// unit_item.find(".back").click(function(){
// 	 event.stopPropagation();
//    console.log(clone);
//    $('[hide]').remove();
// $(this).closest("box").removeClass("full");
// });

  unit_item.click(function(e){
    var x = e.pageX,
        y = e.pageY,
        b = $(this).offset();
        // console.log(b);
    
    
    // clone.css({transform: 'translate3d(' + x + 'px, ' + y + 'px)'});
    
    // $('[hide]').css('transform','translate(' + parseInt(b.left, 10) + 'px,' + parseInt(b.top,10) + 'px)');
    //  $('[hide]').css({'top':'' + parseInt(b.top, 10) - 5 + 'px', 'left': ''+ parseInt(b.left, 10)- 5 + 'px' });
    
    //  // clone.css({ 'opacity': '0.2'});
    // // console.log(parseInt(b.top, 10));
 
    // // console.log($('[hide]').css('top'),parseInt(b.top, 10) );
    //       setTimeout(function() {
    //         // $('[hide]').css('transform', 'none');
    //         $('[hide]').css({'top': '0', 'left': '0'});
    //         // clone.css({'padding': '0', 'margin': '0', 'width': "100%", 'height': 'unset', 'z-index': '1', 'border-radius': '0', 'transform': 'scale('+ 1 +')', 'opacity': '1'});
    //        }, 20); 
          //  $('[hide]').animate({ 
          //   top: '0',
          //   left: '0'
          //  }); 

          // clone.animate({ 
          //    padding: '0',
          //    margin: '0', 
          //    width: "100%",
          //    height: 'auto', 
          //    transform: 'scale('+ 1 +')',
          //    opacity: '1'
          //  }); 
           clone = $(this).clone().appendTo('[hide]');
          clone.addClass("full").insertAfter(clone);

  });

  $('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
        var animateLeft, slideLeft;
        
        advance();
        
        if ($group.is(':animated') || currentIndex === newIndex) {
          return;
        }
        
        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');
        
        if (newIndex > currentIndex) {
          slideLeft = '100%';
          animateLeft = '-100%';
        } else {
          slideLeft = '-100%';
          animateLeft = '100%';
        }
        
        $slides.eq(newIndex).css({
          display: 'block',
          left: slideLeft
        });
        $group.animate({
          left: animateLeft
        }, function() {
          $slides.eq(currentIndex).css({
            display: 'none'
          });
          $slides.eq(newIndex).css({
            left: 0
          });
          $group.css({
            left: 0
          });
          currentIndex = newIndex;
        });
      }
      
      function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        }, 4000);
      }
      
      $('.next_btn').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      });
      
      $('.previous_btn').on('click', function() {
        if (currentIndex !== 0) {
          move(currentIndex - 1);
        } else {
          move(3);
        }
      });
      
      $.each($slides, function(index) {
        var $button = $('<a class="slide_btn">&bull;</a>');
        
        if (index === currentIndex) {
          $button.addClass('active');
        }
        $button.on('click', function() {
          move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
      });
      
      advance();
  });

});