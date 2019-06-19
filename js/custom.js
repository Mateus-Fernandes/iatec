$( ".botao_solucao" ).click(function() {
    $(this).children(".solucao_dropdown").slideToggle( "slow", function() {
    });
});
$(".hamburger").click(function()
{
    $(".navigation").toggleClass("open_menu");
});

$(".dropdown-mobile").click(function()
{
    $(".dropdown-mobile_ul").toggleClass("abrir_menu");
});