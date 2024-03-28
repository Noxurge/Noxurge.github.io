document.addEventListener('DOMContentLoaded', function() {
    var title = "Welcome to Noxurge Room!";
    var titleContainer = document.getElementById('typing-title');
    var i = 0;
    function typeTitle() {
        if (i < title.length) {
            titleContainer.innerHTML += title.charAt(i);
            i++;
            setTimeout(typeTitle, 100);
        } else {
            setTimeout(eraseTitle, 1000);
        }
    }
    function eraseTitle() {
        if (titleContainer.innerHTML.length > 0) {
            titleContainer.innerHTML = titleContainer.innerHTML.slice(0, -1);
            setTimeout(eraseTitle, 100);
        }
    }
    typeTitle();
});