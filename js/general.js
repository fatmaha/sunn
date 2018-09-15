

$(document).ready(function(){

    $(".toggle").each(function(){
        $(this).find('.content').hide();
        $(this).find('h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
        $('h2', this).click(function(){
            if ($(this).next().is(':hidden')){
                $(this).parent().parent().find("h2").removeClass('active').next().slideUp(500).parent().removeClass("activate");
                $(this).toggleClass('active').next().slideDown(500).parent().toggleClass("activate");
            }
        });
    });

    $(".call-popup").on("click",function(){
        $(".sun-popup").fadeIn();
    });
    $("html, .popup-title > a ").on("click",function(){
        $(".sun-popup").fadeOut();
    });
    $(".sun-popup-box, .call-popup").on("click",function(e){
        e.stopPropagation();
    });


    $(".selectors a").on("click", function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
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

    $("body").niceScroll({
        cursorcolor:"#2980b9",
        cursorwidth:"12px",
        cursorminheight: 100,
        background:"rgba(20,20,20,0.1)",
        cursorborder:"none",
        cursorborderradius:5,
        zindex:999



    });
    
    // $('#login-form').validator();

    $('#contact-form').bootstrapValidator({
        message: 'هذه القيمة غير صالحة',
        fields: {
            username: {
                message: 'اسم المستخدم غير صالح',
                validators: {
                    notEmpty: {
                        message: 'اسم المستخدم مطلوب ولا يمكن أن يكون فارغا'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'يجب أن يكون اسم المستخدم أكثر من 6 وأقل من 30 حرفا'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\u0621-\u064A\u0660-\u0669_\.]+$/,
                        message: 'يمكن أن يتكون اسم المستخدم فقط من أبجدي، عدد، نقطة ونقطة سفلية'
                    },
                    different: {
                        field: 'password',
                        message: 'لا يمكن أن يكون اسم المستخدم وكلمة المرور متماثلين مع بعضهما البعض'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'عنوان البريد الإلكتروني مطلوب ولا يمكن أن يكون فارغا'
                    },
                    emailAddress: {
                        message: 'ادخال غير صالح لعنوان بريد الكتروني'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'الرسالة مطلوبة'
                    },
                    stringLength: {
                        max: 700,
                        message: 'يجب أن تكون الرسالة أقل من 700 حرف'
                    }
                }
            }

        }
    }).on('success.form.bv', function(e) {

        $('#contact-form').submit(function (e, params) {
            var localParams = params || {};

            if (!localParams.send) {
                swal({
                    title: "شكراً",
                    text: "لقد تم إرسال الرسالة بنجاح",
                    type: 'success',
                    confirmButtonColor: '#002e52'

                });
            }

            document.getElementById("contact-form").reset();
        });


    });

});

    $('.scroll-top-button').click(function () {
        $('.scroll-top-button').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });



