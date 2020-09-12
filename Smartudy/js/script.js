//Abre menu mobile
$(document).ready(function(){
	$('.sidenav').sidenav();
});

// Carrosel de imagens página inicial
$('.carousel.carousel-slider').carousel({
	fullWidth: true,
	indicators: true
});

//Verifica se é mobile
function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

//Se não é mobile passa imagens automaticamente
if (!isMobile()) {
	$('.carousel').carousel({
		padding: 200    
	});
	autoplay();
	function autoplay() {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 8000);
	} 
}

//Accordion
$(document).ready(function(){
	$('.collapsible').collapsible();
});

//Menu lateral mobile
 $(".button-collapse").sideNav();

//Tooltip para botões
 $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
        
//Modal
 $(document).ready(function(){
    $('.modal').modal();
  });

