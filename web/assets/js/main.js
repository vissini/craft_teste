 jQuery(function($) {'use strict',

	//Countdown js
	//  $("#countdown").countdown({
	// 		date: "10 july 2017 12:00:00",
	// 		format: "on"
	// 	},

		function() {
			// callback function
		};

//
//
//   $('.pgwSlider').pgwSlider({
// 			"listPosition": "left"
// 	});

	//Scroll Menu

	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
      $('.main-nav').removeClass('fixed-menu animated slideInDown');
			$(window).on('scroll', function(){

        if($(window).width() > 767){
		  		if( $(window).scrollTop()>400 ){
  	        $('.main-nav').addClass('fixed-menu animated slideInDown');
  	      } else {
  	        $('.main-nav').removeClass('fixed-menu animated slideInDown');
  		    }

  		    if( $(window).scrollTop()=== 0){
  		    	setTimeout(function(){
  		    		main_height = $('.main-nav').height()+10;
      				$('#home').css('padding-top', main_height+'px');
      			},300);
  		    }
          }else{
            $('.main-nav').addClass('fixed-menu animated slideInDown');
          }

			});
			if( $(window).scrollTop()>400 ){
  	    $('.main-nav').addClass('fixed-menu animated slideInDown');
  	  }
		}else{
			$('.main-nav').addClass('fixed-menu animated slideInDown');
		}
    setTimeout(function(){
      main_height = $('.main-nav').height()+10;
      $('#home').css('padding-top', main_height+'px');
    },1000);
	}

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
	menuToggle();

  function setMenu(){
    var windowWidth = $(window).width();

    if(windowWidth > 767 && $(window).scrollTop()===0){
      $('.main-nav').removeClass('fixed-menu animated slideInDown');
    }else{

    }
  }

  function resize_slider(){
    slider_size = $('.carousel-inner').height()
    pill_height = slider_size/5
    $('.nav-pills > li').height(pill_height)
    $('.nav-pills > li > a').height(pill_height)
    $('.nav-pills > li > a > img').height(pill_height-10);
  }


	// // Carousel Auto Slide Off
	// $('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
	// 	interval: false
	// });
  // $('#carousel1').carousel({
  //     interval: 4000
  // });

  var clickEvent = false;

  $('#carousel1').on('click', '.nav-slider a', function () {
      clickEvent = true;
      $('.nav-slider li').removeClass('active');
      $('.nav-slider li').removeClass('arrow_box');
      $(this).parent().addClass('active');
      $(this).parent().addClass('arrow_box');
      $(this).parent().find('.arrow-right').removeClass('hide');
  }).on('slid.bs.carousel', function (e) {
    if (!clickEvent) {
      var count = $('.nav-slider').children().length - 1;
      var current = $('.nav-slider li.active');
      current.removeClass('active').next().addClass('active');
      current.removeClass('arrow_box').next().addClass('arrow_box');
      current.find('.arrow-right').addClass('hide')//.next().removeClass('hide');
      current.next().find('.arrow-right').removeClass('hide');
      var id = parseInt(current.data('slide-to'));
      if (count == id) {
          $('.nav-slider li').first().addClass('active');
          $('.nav-slider li').first().addClass('arrow_box');
          $('.nav-slider li').first().find('.arrow-right').removeClass('hide');
      }
    }
    clickEvent = false;
  });

  $(window).load(function() {
    resize_slider();

    // menuToggle();

    menuToggle();
  });

  $(window).resize(function() {
    resize_slider();
    setMenu();
    setTimeout(function(){
      menuToggle();
      //fixProduto();
    },500);
  });

	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});


	jQuery.fn.extend({
    adjustHeight: function(){
        var element = $(this);
        var finalHeight = 0;
        $.each(element,function(i,compare){
            if($(compare).height() > finalHeight){
                finalHeight = $(compare).height();
            }
        });
        $.each(element,function(i,change){
            $(change).height(finalHeight);
        });
	    return $(this);
	    }
	});

  function accordion(){
  	$('.portfolio-legend').adjustHeight();
    $( '#cbp-ntaccordion' ).cbpNTAccordion();
    $( '#cbp-ntaccordion1' ).cbpNTAccordion();
  }
  accordion();
});


// Google Map Customization
//(function(){
// -23.516332, -51.697463
/*	var map;
	map = new GMaps({
		el: '#gmap',
		lat: -23.516332,
		lng: -51.697463,
		scrollwheel:false,
		zoom: 16,
		zoomControl : true,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		clickable: false
	});

	var image = '../images/map-icon.png';
	map.addMarker({
    lat: -23.516332,
		lng: -51.697463,
		icon: image,
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#3e8bff',
	});


	var styles = [

	{
		"featureType": "road",
		"stylers": [
		{ "color": "#b4b4b4" }
		]
	},{
		"featureType": "water",
		"stylers": [
		{ "color": "#d8d8d8" }
		]
	},{
		"featureType": "landscape",
		"stylers": [
		{ "color": "#f1f1f1" }
		]
	},{
		"elementType": "labels.text.fill",
		"stylers": [
		{ "color": "#000000" }
		]
	},{
		"featureType": "poi",
		"stylers": [
		{ "color": "#d9d9d9" }
		]
	},{
		"elementType": "labels.text",
		"stylers": [
		{ "saturation": 1 },
		{ "weight": 0.1 },
		{ "color": "#000000" }
		]
	}

	];

	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"
	});

	map.setStyle("map_style");


}());
 */

    
$(".leiaMais").on("click", function(){
	$(this).fadeOut('400');
	$(this).next('.noticiaCompleta').fadeIn('400');
});

$('#maisNoticias').on("click",function() {
	$( ".noticiaEscondida" ).each(function( index ) {
  	if(index < 3){
    	$(this).fadeIn(400);
    	$(this).removeClass('noticiaEscondida');
  	}
	});
	if($( ".noticiaEscondida" ).length === 0){
  	$(this).fadeOut('400');
	}
});


//Enviar Email
$('#sendEmail').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	var sVarError = "";
	var sVarMensagem = "";
	var sVarExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	if($('#nome').val() == undefined || $('#nome').val() === ""){
		sVarError = "Sim";
		sVarMensagem += "Campo Nome é obrigatório";
	}
	if($('#email').val() == undefined || $('#email').val() === ""){
		if(sVarError == "Sim") sVarMensagem +="<br>";
		sVarError = "Sim";
		sVarMensagem += "Campo E-mail é obrigatório";
	}else if($('#email').val() == undefined ||  !sVarExp.test($('#email').val())){
		if(sVarError == "Sim") sVarMensagem +="<br>";
		sVarError = "Sim";
		sVarMensagem += "Campo E-mail não possui um e-mail válido";
	}
	if($('#mensagem').val() == undefined || $('#mensagem').val() === ""){
		if(sVarError == "Sim") sVarMensagem +="<br>";
		sVarError = "Sim";
		sVarMensagem += "Campo Mensagem é obrigatório";
	}

	if(sVarError != ""){
		sVarHtml = ''
				+'<div class="alert-danger">'
  					+'<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
  					+sVarMensagem
				+'</div>';
		$('.contact-report').html(sVarHtml);		
		return false;
	}

	$.ajax({
		type: "post",
		url: "http://www.montalmaq.ind.br/index.php/index/sendmail",
		cache: false,				
		data: $('#main-contact-form').serialize(),
		success: function(json){						
			try{		
				var obj = jQuery.parseJSON(json);
				var sVarClass = "";
				var sVarHtml = "";
         
				if(obj['tipo'] == "erro"){
					sVarClass = "alert alert-danger";
				}else{
					sVarClass = "alert alert-success";
					$('#nome').val("");
					$('#email').val("");
					$('#telefone').val("");
					$('#mensagem').val("");
				}
				sVarHtml = ''
				+'<div class="'+sVarClass+'">'
  					+'<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
  					+obj['mensagem']
				+'</div>';
				$('.contact-report').html(sVarHtml);		
				
			}catch(e) {		
				alert('Erro ao enviar seu contato, entre em contato com o administrador do site 2');
			}		
		},
		error: function(){						
			alert('Erro ao enviar seu contato, entre em contato com o administrador do site 1');
		}
 	});
});

 $('.contact-report').on('click', '.close', function(event) {
 	event.preventDefault();
 	/* Act on the event */
 	$('.contact-report').html('');
 });



 //function fixProduto(){
 //	$('.portfolio-legend').attr({
// 		style: ''
// 	});
// 	$('.portfolio-legend').adjustHeight();
// }