function openTabs() {
    var initialWindow = window;
    for (let i = 0; i < 2; i++) {
        window.open("/selenium-app/pages/iframes.html", '_blank');
    }
}

function openSimpleAlert() {
    window.open("/selenium-app/pages/simple-alert.html","_self")
}
