$("#btn1").click(function(){
    // $(".para").hide(2000).show(2000);
    $(".para").toggle(2000);

})

$("#btn2").click(function(){
    // $(".para").fadeIn(2000).fadeOut(2000);
    $(".para").fadeToggle(2000);

})

$("#btn3").click(function(){
   
    $(".para").fadeTo(2000,.3);

})

$("#btn4").click(function(){
    // $(".para").slideUp(2000).slideDown(2000);
    $(".para").slideToggle(2000);

})

$("#btn5").click(function(){
    
    $(".para").animate({height: "300px",width:"700px"},2000);

})