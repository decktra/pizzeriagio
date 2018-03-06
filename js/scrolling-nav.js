//jQuery to collapse the navbar on scroll
$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function(){$(document).on("click","a.page-scroll",function(t){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},1500,"easeInOutExpo"),t.preventDefault()})});
