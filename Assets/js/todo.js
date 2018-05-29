$("li").click(function(){
    //this refers to the particular li that was clicked on
    $(this).toggleClass("completed");
});

//we pass in the event object
$("span").click(function(event){
    // “this” inside of an event handler always 
    // refers to the element it was triggered on.  
    $(this).parent().fadeOut(500, function(){
        // the second 'this' here,  goes up the scope
        // chain to 
        $(this).remove();
    });
    event.stopPropagation();
});