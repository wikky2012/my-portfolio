$(document).ready(function () {
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 650) {
      $("header nav").addClass("fixed");
    } else {
      $("header nav").removeClass("fixed");
    }
  });

  $("body").prognroll({
    height: 4,
    color: "#E31B6D",
  });

  $.each($("#navbar").find("li"), function () {
    $(this).toggleClass(
      "active",
      window.location.pathname.indexOf($(this).find("a").attr("href")) > -1
    );
  });

  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});

$(".dev").hover(function () {
  $(".development-showing").toggle();
  $(".development-hidden").toggle();
});
$(".desn").hover(function () {
  $(".design-showing").toggle();
  $(".design-hidden").toggle();
});
$(".const").hover(function () {
  $(".consult-showing").toggle();
  $(".consult-hidden").toggle();
});
$(".app").hover(function () {
  $(".app-showing").toggle();
  $(".app-hidden").toggle();
});
$(".brand").hover(function () {
  $(".brand-showing").toggle();
  $(".brand-hidden").toggle();
});
$(".prod").hover(function () {
  $(".product-showing").toggle();
  $(".product-hidden").toggle();
});

$({ Counter: 0 }).animate(
  {
    Counter: $(".number").text(),
  },
  {
    duration: 1500,
    easing: "swing",
    step: function () {
      $(".number").text(Math.ceil(this.Counter));
    },
  }
);

var backToTop = $("#back-top");
var scrollAmount = 150;
$(window).scroll(function () {
  if ($(this).scrollTop() > scrollAmount) {
    backToTop.fadeIn();
  } else {
    backToTop.fadeOut();
  }
});
backToTop.click(function (e) {
  $("html, body").animate({ scrollTop: 0 }, 200);
});

// var count = 0;
// $(document).ready(function () {
//   SetValues();
//   $(window).scroll(function () {
//     SetValues();
//     if ($(window).scrollTop() == $(document).height() - window.innerHeight) {
//       $("#loading").fadeIn();
//       setTimeout("appendContent()", 1000);
//     }
//   });
// });
// var appendContent = function () {
//   $("#content").append(
//     "@@@@@@@@@ ---------- " + count + " TIMES  ---------- @@@@@@@@@<br/>"
//   );
//   count++;
//   for (var i = 0; i < 10; i++) {
//     $("#content").append("This is Dynamic Added Content<br/>");
//   }
//   $("#loading").fadeOut();
// };
// var SetValues = function () {
//   $("table tr:first-child td:nth-child(2)").html($(window).scrollTop());
//   $("table tr:first-child td:nth-child(4)").html($(document).height());
//   $("table tr:first-child td:nth-child(6)").html(window.innerHeight); //$(window).height()
// };
