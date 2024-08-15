(function($){

	//Opacity of the Icon when hover
	function chSiblingOpacity(){

		// this code will make the other icon to have a 50% opacity and the current hover 100% opacity
		$( ".shapebox-items" ).hover(function(){
			$('.shapebox-items').not(this).find('.box-color').css('opacity', '0.5');
		  	$(this).find('.box-color').css('opacity', '1');
		}, function(){
			$('.shapebox-items').find('.box-color').css('opacity', '1');
		})
	}

	//This function will change icons shape when click.
	function chColorShape(){
		$("a.shapebox-items").click(function(){
	     	if ($(this).hasClass('active')) {
	     		// change the icon from circle to square and move it to the row below
                $(this).prependTo('.shapebox-container.circle-section');
                $(this).removeClass('active');
                console.log('Active class removed.');

            } else {
            	// change the icon from quare to circle and move it to the row above
            	$(this).appendTo('.shapebox-container.square-section');
                $(this).addClass('active');
                console.log('Active class added.');
            }
		});
	}

	// Runs only after the HTML document has been fully loaded
	$(document).ready(function () {
		chSiblingOpacity();
		chColorShape();
	});

 

})(jQuery);