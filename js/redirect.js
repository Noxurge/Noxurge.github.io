if (window.location.protocol === 'http:') {
    var newUrl = window.location.href.replace(/^http:/, 'https:');
    window.location.href = newUrl;
}

var browserlang = navigator.language || navigator.userLanguage; 
if (browserlang == "pt-PT" || browserlang == "pt-BR") {
    window.location.href = "pt/";
}
else {
    window.location.href = "en/";
}