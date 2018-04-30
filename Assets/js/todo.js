//$("li").click(function(){
//    $(this).css("color","red");
//});

$("ul").on("click", "span", function(e){
    //console.log(this);
    $(this).parent().fadeOut(500, function(){
        // console.log(this);
        $(this).remove();
});
    e.stopPropagation();
});

$("input[type='text']").click(function(){
    $(this).val("");
}
)

$("input[type='text']").keypress(function(e){
   if((e).which === 13){
       //grabbing new todo text from input
       var todoText = $(this).val();
       //using val as a setter, to set an empty string
       $(this).val("Add to do"); 
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$("#toggle-form").click( function(){
    $("input[type='text']").fadeToggle();
});

