$("h1").text("Hello World");

//// Second HTML file
$(".first").text("Replace with JQuery");
$("#first").text("Replace with JQuery use ID");
$(".man-1,.man-2,#man").text("Replace element use multiple selector of JQuery");

$("p").html("<b>Text bolded by JQuery</b>");

$("h2").append(" Using JQuery");
$("h3").prepend("Using JQuery ");

///create a element
var newElement = $("<h1></h1>").text("New Element Create using JQuery before Method");
var newElement2 = $("<h1></h1>").text("New Element Create using JQuery after Method");

$("h4").before(newElement);
$("h5").after(newElement2);

///3red HTML File
$(".link").attr("href","http://www.youtube.com/");//chenge link use JQuery
$(".rmvoeLink").removeAttr("href");

///4th HTML File
$("h1").css("color", "red");//single value added system
// $("h1").css({"font-size":"25px","color":"blue"}) // add multiple value using Jeson file
$("h1").addClass("style1");
$("h1").addClass("style2");

//5th HTML file
$(".a").click(function () { 
    $(".hello").text("Button Clicked");
});

$(".b").click(function () {  //add toggol functionality
    $(".hello").toggleClass("style3");
});

//add multiple listener to JQuery
 $(".button").click(function(){
     var value = this.innerHTML;//get button value
     $(".p").text(value + " No Button is Clicked");
 })