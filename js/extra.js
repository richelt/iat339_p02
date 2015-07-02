// $('#sidebartoggler').click(function() {
//   if ($(this).is(':checked')) {
//     $(this).siblings('label').html('X');
//   } else {
    
//     $(this).siblings('label').html("MENU");
//   }

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