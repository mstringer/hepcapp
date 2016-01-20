$(function(){
  // Bind the swipeleftHandler callback function to the swipe event on div.container
  $( "div.container" ).on( "swipeleft", swipeleftHandler );
 
  // Callback function references the event target and adds the 'swipeleft' class to it
  function swipeleftHandler( event ){
	alert("swiped left!");
  }

  // Bind the swiperightHandler callback function to the swiperight event on div.container
  $( "div.container" ).on( "swiperight", swiperightHandler );
 
  // Callback function references the event target and adds the 'swipeleft' class to it
  function swiperightHandler( event ){
	alert("swiped right!");
  }
});
