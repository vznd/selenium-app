function simpleAlert() {
    setTimeout(function() {
        alert("Simple Alert");
    }, 3000);
}

function refreshButton() {
    setTimeout(function() {
        var refreshingBlock = document.getElementById("refreshing-block");
        refreshingBlock.disabled = false;
        refreshingBlock.innerHTML = '<button id="to-refresh" onclick="window.open(\'/pages/explicit-wait.html\')" disabled>Refreshed</button>';
    }, 3000);
}