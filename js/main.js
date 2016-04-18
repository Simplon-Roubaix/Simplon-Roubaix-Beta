$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

          $(document).scroll(function() {
if ($(this).scrollTop() > 120){
    $('.container').addClass("sticky");
  }
  else{
    $('.container').removeClass("sticky");
  }
});

                    $(window).scroll(function() {
if ($(this).scrollTop() > 120){
    $('#ul').addClass("sticky");
  }
  else{
    $('#ul').removeClass("sticky");
  }
});

                    $(window).scroll(function() {
if ($(this).scrollTop() > 120){
    $('#logo1').addClass("sticky");
  }
  else{
    $('#logo1').removeClass("sticky");
  }
});

                                        $(window).scroll(function() {
if ($(this).scrollTop() > 120){
    $('#mainmenu').addClass("sticky");
  }
  else{
    $('#mainmenu').removeClass("sticky");
  }
});

                                        $(window).scroll(function() {
if ($(this).scrollTop() > 120){
    $('.navbar-toggle').addClass("sticky");
  }
  else{
    $('.navbar-toggle').removeClass("sticky");
  }



/* #######################################################################################
############################         JS PAGE ADEP        #################################
######################################################################################## */

var conditions = document.getElementById("conditions");


});
