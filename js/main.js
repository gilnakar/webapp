window.addEventListener('load', init, false);

var options = {
	done: function (json){
		console.log(json);
        var notifications = document.querySelector(".notifications");
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







