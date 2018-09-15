
 
$(document).ready(function(){


    $(".call-popup").on("click",function(){
        $(".sun-popup").fadeIn();
    });
    $("html, .popup-title > a ").on("click",function(){
        $(".sun-popup").fadeOut();
    });
    $(".sun-popup-box, .call-popup").on("click",function(e){
        e.stopPropagation();
    });

	$('#bootstrap-touch-slider').bsTouchSlider();

	$('.gallery-carousel').owlCarousel({

		autoplay:true,
		autoplayTimeout:2500,
		smartSpeed:2000,
		loop:true,
		dots:true,
		nav:false,
		margin:20,
		mouseDrag:true,
		items:4,
		autoHeight:true
	});


	new Chart(document.getElementById("bar-chart-grouped"), {
	    type: 'bar',
	    data: {
	      labels: ["أوغندا", "ناميبيا", "أفريقيا"],
	      datasets: [
	        {
	          label: "صحة",
	          backgroundColor: "#0f2a3f",
	          data: [2421,1541,2523]
	        }, {
	          label: "تعليم",
	          backgroundColor: "#184263",
	          data: [2521,1241,2212]
	        },{
	          label: "مأوى",
	          backgroundColor: "#22567e",
	          data: [2750,2140,2162]
	        },{
	          label: "طعام",
	          backgroundColor: "#2d6d9f",
	          data: [1470,1430,1500],
	        },{
	          label: "ماء",
	          backgroundColor: "#3883bd",
	          data: [1595,1578,1584],
	        }
	      ]
	    },
	    options: {
	      title: {
	        display: true,
	        text: ''
	      },
	       animation: {
                   
                }
	    }
	});

	$(".selectors a").on("click", function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});

	$('.mission-carousel').owlCarousel({
		autoplay:false,
		autoplayTimeout:2500,
		smartSpeed:2000,
		loop:true,
		dots:false,
		nav:false,
		margin:0,
		mouseDrag:false,
		items:1,
		singleItem:true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition:'URLHash',
		animateIn:"fadeIn",
		animateOut:"fadeOut"
	});

	$(".topbar-btn").on("click",function(){
    	$(".responsive-header .topbar").slideToggle();
    	return false;
    });

    $(".btn.menu-btn, .sidemenu-btn a").on("click",function(){
    	$("nav").addClass("active");
    	return false;
    });
    $("html").on("click",function(){
    	$("nav").removeClass("active");
    });
    $(".btn.menu-btn, nav,  .sidemenu-btn a").on("click",function(e){
    	e.stopPropagation();
    });

    $(".responsive-header nav ul ul, .half-header nav ul ul").parent().addClass("menu-item-has-children");
    $(".responsive-header nav ul li.menu-item-has-children > a, .half-header nav ul li.menu-item-has-children > a").on("click", function(){
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).parent().siblings().find("ul").slideUp("slow");
        $(this).next("ul").slideToggle("slow");
        return false;
    });

    		$('.carousel1,.featured-area-caorusel').owlCarousel({
		autoplay:true,
		autoplayTimeout:2500,
		smartSpeed:2000,
		loop:true,
		dots:false,
		nav:true,
		margin:0,
		mouseDrag:true,
		items:1,
		singleItem:true,
		autoHeight:true,
		animateIn:"fadeIn",
		animateOut:"fadeOut"
	});

 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);



        $(window).scroll(function(){
            if ($(this).scrollTop() >= 400) {
                $('.scroll-top-button').addClass('visible').fadeIn();
            } else {
                $('.scroll-top-button').removeClass('visible').fadeOut();
            }

        });


    $('.scroll-top-button').tooltip('show');

        $("body").niceScroll({
        cursorcolor:"#2980b9",
        cursorwidth:"12px",
        cursorminheight: 100,
        background:"rgba(20,20,20,0.1)",
        cursorborder:"none",
        cursorborderradius:5,
        zindex:999


            
        });


});


    $('.scroll-top-button').click(function () {
        $('.scroll-top-button').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });






