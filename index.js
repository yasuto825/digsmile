$(function () {
  //ハンバーガーメニューのアニメーション
  $(".burger-wrapper").on("click", function () {
    $(".burger-btn").toggleClass("close");
    $(".nav-wrapper").animate({ width: "toggle" }, 300);
    $(".body-mask").fadeToggle(600);
    $("body").toggleClass("noscroll");
  });
});
