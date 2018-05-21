console.log('background scripts running....');

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(null, {file: "jquery-3.3.1.min.js"});
// });

let params = {
    active: true,
    currentWindow: true
}
console.log('test');
$(document).on('change', 'input[name=choice]:checked', function (){
    console.log(this.value + ' changed');
    chrome.tabs.query(params, gotTabs);
});

function gotTabs(tabs){
    console.log("got tabs");
    let selectedPercent = $('#selectedPercent').is(':checked')
    let goalsScored = $('#goalsScored').is(':checked');
    let cleanSheets = $('#cleanSheets').is(':checked');
    let yellowCards = $('#yellowCards').is(':checked');
    let redCards = $('#redCards').is(':checked');
    let totalPoints = $('#totalPoints').is(':checked');
    let assists = $('#assists').is(':checked');
    let none = $('#clear').is(':checked');

    let message = {
        selectedPercent: selectedPercent,
        goalsScored: goalsScored,
        cleanSheets: cleanSheets,
        yellowCards: yellowCards,
        redCards: redCards,
        totalPoints: totalPoints,
        assists: assists,
        clear: clear
    }

    chrome.tabs.sendMessage(tabs[0].id, message);
}
