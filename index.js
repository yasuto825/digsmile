$(function () {
  //ハンバーガーメニューのアニメーション
  $(".burger-wrapper").on("click", function () {
    $(".burger-btn").toggleClass("close");
    $(".nav-wrapper").animate({ width: "toggle" }, 300);
    $("body").toggleClass("noscroll");
  });
});
