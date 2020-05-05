$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$('document').ready(function(){
    $('#turn_on').click(function(){
        $('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000);
    });
});