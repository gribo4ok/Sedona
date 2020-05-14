$(function(){

  // form drop on/off
$('div.btn1').on('click', function(){
  $('form.drop').toggleClass('active');
});
 // form drop on/off


// form plus minus
$(".qt-plus").click(function(){
  $(this).parent().children(".qt").html(parseInt(
    $(this).parent().children(".qt").html()) + 1);
  
  $(this).parent().children(".full-price").addClass("added");
  
  var el = $(this);
  window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
});

$(".qt-minus").click(function(){
  
  child = $(this).parent().children(".qt");
  
  if(parseInt(child.html()) > 1) {
    child.html(parseInt(child.html()) - 1);
  }
  
  $(this).parent().children(".full-price").addClass("minused");
  
  var el = $(this);
  window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
});
// form plus minus

//scroll to section
$('.arrow').click(function () {
  $('html, body').animate({
    scrollTop: $(".maps ").offset().top
  }, 1000);
});
$('.info').click(function () {
  $('html, body').animate({
    scrollTop: $(".city ").offset().top
  }, 1000);
});
//scroll to section
$('.btn-date').on('click', function(e) {
	e.preventDefault();
	$.dateSelect.show({
		element: 'input[name="date"]'
	});
});

$('.btn-date2').on('click', function(e) {
	e.preventDefault();
	$.dateSelect.show({
		element: 'input[name="date2"]'
	});
});

// $('#date2').on('mousewheel', function(event) {
//   console.log(event.deltaX, event.deltaY, event.deltaFactor);
// });

})