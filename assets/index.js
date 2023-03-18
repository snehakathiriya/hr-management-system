// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active');
//     const dropdownMenu = toggle.nextElementSibling;
//     dropdownMenu.classList.toggle('active');
//   });
// });
// $('.sub-menu ul').hide();
// $(".sub-menu a").click(function () {
// 	$(this).parent(".sub-menu").children("ul").slideToggle("100");
// 	$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
// });
$(document).ready(function(){
  //jquery for toggle sub menus
  $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden");
  });

  $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
  });
});

