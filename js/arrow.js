
$(document).ready(function(){

    $(".fakeloader").fakeLoader({
                    timeToHide:3000,
                    zIndex:"1200",
                    bgColor:"#fff",
                    spinner:"spinner3",
                    imagePath:"image/arrow-img/gears.gif"
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

    
    $(".responsive-header nav ul li.menu-item-has-children > a, .half-header nav ul li.menu-item-has-children > a").on("click", function(){
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).parent().siblings().find("ul").slideUp("slow");
        $(this).next("ul").slideToggle("slow");
        return false;
    });

    window.addEventListener("scroll", Animation);
    function Animation()
    {
        // $(".title-blue").addClass("activet");
        // $(".service-img").addClass("active-img");
     //    $(".animate-bounce:visible").addClass("animated bounceInUp");
       
    }


                   

    $( '.launch-overlay' ).simpleOverlay();

    $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.scroll-top-button').addClass('visible');

    } else {
        $('.scroll-top-button').removeClass('visible');
    }

    });

    $("body").niceScroll({
        cursorcolor:"#2980b9",
        cursorwidth:"12px",
        cursorminheight: 100,
        background:"rgba(20,20,20,0.1)",
        cursorborder:"none",
        cursorborderradius:5


            
        });


      
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
             password: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: '.. .. Please supply your password'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '.. .. Please supply your email address'
                    },
                    emailAddress: {
                        message: '.. .. Please supply a valid email address'
                    }
                }
            }
            }
        })
        .on('success.form.bv', function(e) {

            swal("success", "You clicked the button!", "success")
            // $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            
            // Prevent form submission
            e.preventDefault();


            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');




        });

        

    
});

new WOW().init();




