
/*******************************************/
/*jQuery*/
/*******************************************/
$(function () {

/*Dropdown Menu*/

    $(".action-list").hide();
    $(".nav-section").hover(
		function () {
		    $(this).find(".action-list").slideDown();
		    $(this).find(".arrow").removeClass('rotate-reset');
		    $(this).find(".arrow").addClass('rotate');
		    

		},
		function () {
		    $(this).find(".action-list").slideUp();
		    $(this).find(".arrow").removeClass('rotate');
		    $(this).find(".arrow").addClass('rotate-reset');
		    
		    
	});

/*Tabs Menu*/	
	$(".tablist li").click(
	 	function(){
	 		var a_href = $(this).find("a").attr('href');
	 		console.log(a_href);
	 		window.hash =  a_href;
	 		$(".tab-panel").hide();
	 		$(".tabs").find(".tab").css("background-color","#444");
	 		$(".tabs").find(".tab").css("color","white");

	 		$(".tabs").find(a_href).slideToggle();
	 		$(this).find("a").css("background-color"," #E6E6E6");
	 		$(this).find("a").css("color"," black");
	 	   
	});




});
		






/*******************************************/
/*ajax notifications from JSON*/
/*******************************************/

window.addEventListener('load', init, false);

var options = {
    done: function (json) {
        console.log(json);
        var notifications = UTILS.qs(".notifications");
        if (json.notification) {
            var content = document.createTextNode(json.notification);
            notifications.appendChild(content);
        };

    },
    fail: function (err) {
        console.log(err)
    }
}

function init() {
    UTILS.ajax('data/config.json', options);
}







