  var test= true;
    
    $("#open").click(function () {
        if(test){
        $(this).parent().animate({left:'0px'}, {queue: false, duration: 500});
    }
                        else{
        $(this).parent().animate({left:'-50%'}, {queue: false, duration: 500});                
        }      
       test= !test; 
   
});