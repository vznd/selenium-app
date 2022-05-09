function openTabs() {
    var initialWindow = window;
    for (let i = 0; i < 2; i++) {
        window.open("/pages/iframes.html", '_blank');
    }
}

function openSimpleAlert() {
    window.open("/pages/simple-alert.html","_self")
}
