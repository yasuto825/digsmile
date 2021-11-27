// jQuery
$(function () {
  //ハンバーガーメニューのアニメーション
  $(".burger-wrapper").on("click", function () {
    $(".burger-btn").toggleClass("close");
    $(".nav-wrapper").animate({ width: "toggle" }, 300);
    $(".body-mask").fadeToggle(600);
  });

  // ページ内リンクのアニメーション
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
