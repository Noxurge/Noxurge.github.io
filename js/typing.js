document.addEventListener('DOMContentLoaded', function() {
	var title = "Welcome to Noxurge Room!";
	var titleContainer = document.getElementById('typing-title');
	var i = 0;

	function typeTitle() {
		    if (i < title.length) {
					        titleContainer.innerHTML += title.charAt(i);
					        i++;
					        setTimeout(typeTitle, 100);
					    }
	}

	typeTitle();
});
