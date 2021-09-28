import './style.css'



$('.hamburger').on('click', function() {
  $('.hamburger').toggleClass('is-active');
  $('.popout-menu').toggleClass('menu-open');
  $('.popout-nav').toggleClass('popout-inactive');
});

