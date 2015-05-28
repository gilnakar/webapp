


		var cancel = UTILS.qs('.cancel');
		console.log(cancel);

		UTILS.addEvent(cancel, 'click', function(e) {
			var form = UTILS.qs('#form1');
			form.className = "hidden";
			
			
			});
		;
		






/*******************************************/
/*ajax notifications from JSON*/
/*******************************************/

window.addEventListener('load', init, false);

var options = {
	done: function (json){
		console.log(json);
        var notifications = UTILS.qs(".notifications");
        if (json.notification){
            var content = document.createTextNode(json.notification);
            notifications.appendChild(content);
        };

    },
	fail: function (err){
		console.log(err)
	}
}

function init(){
	UTILS.ajax('data/config.json', options);
}







