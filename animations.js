$('.option').on('click', function() {
    $(this).toggleClass('clicked');
});

$('#option').on('click', function() {
	$('#cards').hide().fadeIn('slow');
})