function myFunction(x) {
    x.classList.toggle("change");
}
var menuopen = false;
var menuclicked = false;


    function animatemenu(){
        if (!$(".c-menu--slide-left").hasClass("Moved")) {
            $(".c-menu--slide-left").animate({
                "left": "0px"
            }, "slow").addClass("Moved");
            $(".menu-overlay").fadeToggle("slow");
            setTimeout(function(){ menuopen = true;}, 100);
           // alert("open");
        } else {
            $(".c-menu--slide-left").animate({
                "left": "-300px"
            }, "slow").removeClass("Moved");
            $(".menu-overlay").fadeToggle("slow");
           setTimeout(function(){ menuopen = false, menuclicked = false;}, 100);
            //alert("close");
        }
    }


$(document).ready(function () {
  $(".menu").click(function () {
  	animatemenu();
    menuopen = false;
  });

  $("#c-menu--slide-left").click(function () {
	//alert("menu");
    menuclicked = true;
    setTimeout(function(){ menuclicked = false;}, 1);
  });
});


$(document).click(function() {
        if (menuclicked == false){
            if (menuopen == true) {
                animatemenu();
            }
        }
});
