$(document).ready(function() {
  $('.product').click(function() {
  	$('body, html').animate({
  		scrollTop: $(".section-product").offset().top
  	},1000)
  })

  $('.membership-link').click(function() {
  	$('body, html').animate({
  		scrollTop: $('.membership').offset().top
  	},1000)
  })

  $('.about-us').click(function() {
  	$('body, html').animate({
  		scrollTop: $('footer').offset().top
  	},3000)
  })

  $('.try-it-out').click(function() {
  	$('body, html').animate({
  		scrollTop: $('.membership').offset().top - 30
  	},1000)
  })

 const myFooter = parseInt($('footer').offset().top)

 if ($('body, html').scrollTop(myFooter)) {
 	$('.on').show()
 }

 $('.on').click(function() {
 	$('body, html').animate({
 		scrollTop: 0
 	},1000)
 })

})