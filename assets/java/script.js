$(document).ready(function(){

	
	$("#sidebar-button").click(function(){
    if ($(".sidebar-container").hasClass("sidebar-active")){
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".page-wrapper").removeClass("wrapper-active");

  } else{
    $("#sidebar-button").addClass("button-active");
    $(".sidebar-container").addClass("sidebar-active");
    $(".page-wrapper").addClass("wrapper-active");
    setTimeout(function(){
    $('body').addClass('no-scroll');
    },300); 
  }
  })

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

  $(".page-wrapper").click(function(){
    if ($(".sidebar-container").hasClass("sidebar-active")){
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".page-wrapper").removeClass("wrapper-active");
    }
  })


  $(window).scroll(function(){
    // console.log("hello")
    //using console lets you check if the code is working//
    var currentScroll = $(window).scrollTop();
    console.log(currentScroll)
  
  if (currentScroll >= 0) {
    // console.log("AT THE TOP")

  $("#test").addClass("search-bar-fixed");


  }
})

  $("a").click(function() {
    $("body").removeClass("no-scroll");
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 300);

    setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");     
    }, 300);
    return false;
  })

$(function(){
    $('.fly-in-text').removeClass('hidden')
}, 500);

// --- test ---

$(window).scroll(function(){
    // console.log("hello")
    //using console lets you check if the code is working//
  var secondScroll = $(window).scrollTop();
  console.log(secondScroll)
  
  if (currentScroll >= 0) {
    // console.log("AT THE TOP")

  $("#test").addClass("search-bar-fixed");


  }
})

// var $myabout = $('#about-img');
//   $myabout.waypoint(function() {
//     console.log('waypoint!');
//   }); 

$("#contact-container").waypoint(function(direction){
  console.log("NOCONTACT");
})


});



