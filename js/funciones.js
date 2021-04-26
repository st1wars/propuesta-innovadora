jQuery(document).ready(listo);
function listo(){
	jQuery(".hamb").clik(function(e){
		e.preventDefault();
		jQuery("header .container nav").toggleClass("open");
		jQuery(".hamb i").removeClass("fa-times")
	});
	jQuery("header .container nav").clik(function){
		jQuery("header .container nav").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");
		var dev=jquery(this).attr("href");
		jQuery("html,body").animate({
			"scrolltop":jQuery(dev).offset().top-76
		})
	}
}
