$(() => {
  $('.thumbnail').addClass('hover-1');

  $('a[href*="#"]:not([href="#"])').click((e) => {
    const target = $(e.target.hash);

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);

      return false;
    }
  })

  const text = $(".text");
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();

    if (scroll >= 200) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});