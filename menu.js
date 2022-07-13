$(function() {

	let pathname_url = window.location.pathname;
	let href_url = window.location.href;

	$(".menu li").each(function () {
		let link = $(this).find("a").attr("href");

		if(pathname_url == link || href_url == link) {

			$(this).addClass("active");
		}
	});

});