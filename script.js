$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
