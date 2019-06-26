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

(function () {
    $('.uploadbutton').on('change', '.input-file', function (event) {
      $(this).siblings('.input-file-text').html(this.value);
    });
  
  }).call(this);

  $('.slide_parceiros').slick({
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.linha_do_tempo').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
    ]
  });


  $('.cada_ano').click(function() {
    $('.cada_ano > .abrir_linha').hide('slow');
    $(this).children('.abrir_linha').show('slow', function(){
    
    });
  });


  $('.slider_trabalhar').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  $( ".vaga_open" ).click(function() {
    $(this).children('.abrir_vaga').slideToggle( "slow", function() {
    });
});

$( ".compartilhar" ).click(function() {
  $(this).children('.abrir_compartilhar').slideToggle( "slow", function() {
  });
});


$('.carousel_slick').slick({
  dots: true
});