jQuery(document).ready(function () {


    // $('.slide_menu ul').hide();

    // $('.avatar').click(function (e) {
    //   $('.slide_menu ul').slideToggle();
    // });

    $(".txtb input").on("focus", function () {
      $(this).addClass("focus");
    });

    $(".txtb input").on("blur", function () {
      if ($(this).val() == "")
        $(this).removeClass("focus");
    })

    $(".logbtn").click(function (event) {
      event.preventDefault()
    });

    
    $(".btn.btn-primary").click(function (event) {
      event.preventDefault()
    });

    $("#update_avatar").click(function (event) {
      event.preventDefault()
    });



    var allPanels1 = $('.checkout_method .credit_info1').hide();
    var allPanels = $('.checkout_method .credit_info');

    $('.checkout_method .form-check input').click(function () {
      allPanels1.slideUp();
      allPanels.slideUp();
      $(this).parent().next().slideDown();

    });

    // $('.logoandmenu ul li:nth-child(2) a').on('click', function (event) {
    //   event.preventDefault();
    //   $('html,body').animate({ scrollTop: $('.footer').offset().top }, 1000);
    // })

 

    var btn = $('#button');

    $(window).scroll(function () {
      // console.log(window.pageYOffset);
      if ($(window).scrollTop() > 1000) {
        btn.addClass('show1');
      } else {
        btn.removeClass('show1');
      }
    });

    btn.on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });
  });