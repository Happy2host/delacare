//Flex it
$(window).load(function() {
  $('.class-name').flexslider({
    animation: "slide",
    controlNav: false, 
    animationLoop: false,
    slideshowSpeed: 3000,
    animationSpeed: 500,
    //selector: ".instagram-pics > li", //For Instagram - equivalent name for ul.slides
    prevText: "",
    nextText: "",	
    start: function(slider) {
    	$('.client-slider .loader').css("display","none");
	},
    after: function(slider) {
    	/* auto-restart player if paused after action */
    	if (!slider.playing) {
      		slider.play();
    	}
  	}    
  });
});

//Scroll to
$(document).ready(function() {
    var newHeight = $("html").height();
    $(".button-class").click(function(event){
        $('html, body').animate({scrollTop: newHeight}, {duration: 1000, easing: 'easeOutQuint'});
    });
});

//Menu btn
$(document).ready(function(){
    $('.menu-btn').on('click',function(){
        $('.menu-btn button').toggleClass('is-active');
    })
})

//Full browser height
$(document).ready(sizeContent);
function sizeContent() {
    var newHeight = $("html").height();
    $(".large-window").css("height", newHeight);
    $(".bio-window").css("height", newHeight);
}

$(window).resize(function () { 
    var newHeight = $("html").height();
    $(".large-window").css("height", newHeight);
    $(".bio-window").css("height", newHeight);
});	

//Parallax
$(document).ready(function(){
	$(window).bind('scroll',function(e){
   		parallaxScroll();
   	});
   	function parallaxScroll(){
   		var scrolledY = $(window).scrollTop();
		$('.large-window').css('background-position','center -'+((scrolledY*0.3))+'px');   	
	}
});

//Parallax Content
$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.onscroll = function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }
  }
  
  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };
  
  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  };
  
  // ---- Initialization
  $(function(){
    $('[data-scroll-speed]').moveIt();
  });

//Page switch delay
$(document).ready(function(){
    $("").click(function(e) {
	    e.preventDefault();
	    setTimeout(function(){
		    $('main, aside').animate({
			    top: '30px',
			    opacity: '0'
		    })
		}, 0);
    var href = $(this).attr('href');
//     	setTime(function(){$('main, aside').removeClass('active')},1000);
    	setTimeout(function(){$('main, aside').addClass('page-out')},1000);
		setTimeout(function() {window.location = href}, 1200);
		return false;
	});                            
});

/* Add to Footer after body tag
<script>
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload(); 
    }
};
</script>		
*/

// Waypoints
$(document).ready(function(){
  $('').waypoint(function(direction) {
    if (direction === 'down') {
      // Do stuff
    }
  }, {
    offset: '25%'
  }).waypoint(function(direction) {
    if (direction === 'up') {
      // Do stuff
    }
  }, {
    offset: '75%'
  });
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
  var headerHeight=$('header').height();
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').css('top',-headerHeight);
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').css('top','0');
        }
    }
    
    lastScrollTop = st;
}

//Anchor for animated header
$(document).ready(function() {
    var newHeight = $("html").height();
    var s = $("header");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var projectpos = $('.project-form').scrollTop();
//         s.html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
        if (windowpos >= 50 || projectpos >= 50) {
            s.addClass("reduce");
            setTimeout(function(){
              $('nav').addClass('hide');
              $('nav .btn').addClass('hide');
              $('.floating-btn').addClass('active');
            }, 500);
            //$('.return-to-single').fadeIn(500);
        } else if (windowpos < 180 || projectpos >= 50){
            s.removeClass("reduce");        
            setTimeout(function(){
             $('nav .btn').removeClass('hide');
             $('nav').removeClass('hide');
             $('.floating-btn').removeClass('active');
             $('.filter-panel').removeClass('active');
           }, 500);
            //$('.return-to-single').fadeOut(500);
        }
    });
});