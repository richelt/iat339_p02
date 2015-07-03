$('.button-nav-side').click(function(){
	if($('#sidebartoggler').is(':checked')){
		$('#sidebartoggler').prop('checked', false); 
	}

	else {
		$('#sidebartoggler').prop('checked', true);
	}
});


function change(id){
 if ($('#'+id).is(':checked')) {
    $('#'+id +"label").html('X');
  }else{
    $('#'+id+ "label").html('MENU');
  }
};



$(document).ready(function() {
  
  $("body").css("display", "none");

    $("body").fadeIn(2000);
    
  $("a.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);    
  });
    
  function redirectPage() {
    window.location = linkLocation;
  }
  
});


$('li').click(function(){
    $(this).css('color','red');
});