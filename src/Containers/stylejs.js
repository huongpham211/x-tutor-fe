// jQuery(document).ready(function () {
//   var counter = 0;

//   $("#addrow").on("click", function () {
//     var newRow = $("<tr>");
//     var cols = "";

//     cols += '<td><input type="text" class="form-control" name="name' + counter + '"/></td>';
//     cols += '<td><input type="text" class="form-control" name="mail' + counter + '"/></td>';
//     cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
//     newRow.append(cols);
//     $("table.order-list").append(newRow);
//     counter++;
//   });

//   $("table.order-list").on("click", ".ibtnDel", function (event) {
//     $(this).closest("tr").remove();
//     counter -= 1
//   });

//   $("#addrow2").on("click", function () {
//     var newRow = $("<tr>");
//     var cols = "";

//     cols += '<td><input type="text" class="form-control" name="course' + counter + '"/></td>';
//     cols += '<td><input type="text" class="form-control" name="academic' + counter + '"/></td>';
//     cols += '<td><input type="text" class="form-control" name="fee' + counter + '"/></td>';
//     cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
//     newRow.append(cols);
//     $("table.order-list2").append(newRow);
//     counter++;
//   });

//   $("table.order-list2").on("click", ".ibtnDel", function (event) {
//     $(this).closest("tr").remove();
//     counter -= 1
//   });
//   // $('.slide_menu').slideUp();

//   $('.avatar').click(function (e) {
//     $('.slide_menu').slideToggle("slow");

//   });

//   $(".txtb input").on("focus", function () {

//     $(this).addClass("focus");
//   });


//   $(".txtb input").on("blur", function () {
//     if ($(this).val() == "")
//       $(this).removeClass("focus");
//   })

//   $(".logbtn").click(function (event) {
// // code ...
// event.preventDefault()
//   });

//   var allPanels1 = $('.checkout_method .credit_info1').hide();
//   var allPanels = $('.checkout_method .credit_info');

//   $('.checkout_method .form-check input').click(function () {
//     allPanels1.slideUp();
//     allPanels.slideUp();
//     $(this).parent().next().slideDown();

//   });

//   $('.logoandmenu ul li:nth-child(3) a').on('click', function (event) {
//     event.preventDefault();
//     $('html,body').animate({ scrollTop: $('.footer').offset().top }, 1000);
//   })

//   $('.logoandmenu ul li:nth-child(4) a').on('click', function (event) {
//     event.preventDefault();
//     $('html,body').animate({ scrollTop: $('.top-courses').offset().top }, 1000);
//   })


//   var btn = $('#button');

//   $(window).scroll(function () {
//     // console.log(window.pageYOffset);
//     if ($(window).scrollTop() > 1000) {
//       btn.addClass('show1');
//     } else {
//       btn.removeClass('show1');
//     }
//   });

//   btn.on('click', function (event) {
//     event.preventDefault();
//     $('html, body').animate({ scrollTop: 0 }, '300');
//   });
// });