function alertWithRedirect() {
    if(confirm("Alert with redirect")) {
        window.location.href = "/selenium-app/pages/click-and-hold.html";
    }
}

function promptWithRedirect() {
    let result = prompt("Do you want to change search engine? Write answer: 100 + 55 = ?");

    if(result.toLowerCase() == "155") {
        window.location.href = "/selenium-app/pages/click-and-hold.html";
    }
}

function simpleAlert() {
    alert("Simple Alert")
}
