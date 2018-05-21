console.log('fpl extention running!');

let delay = 500;
setTimeout(function(){
    getData('selectedPercent', 'selected_by_percent', '', '% Owned');
}, delay);

function getData(className, jsonKey, beforeText, afterText){
    resp = "";
    $.get('https://fantasy.premierleague.com/drf/transfers', function(data){
        resp = data;
    }).then(function(){
        $.get('https://fantasy.premierleague.com/drf/bootstrap-static', function(allPlayers){

        }).then(function(allPlayers){
            $('.ism-element__data').each(function(index, tag){
                player = resp.picks[index].element;
                plrs = allPlayers.elements
                $.each(plrs, function(index, plr){
                    if (plr.id == player){
                        $(tag).after('<div class="ism-element__data ' + className + '" style="background-color: rgba(0, 111, 55, 0.9); color: #ffffff">' + beforeText + '' + plr[jsonKey] + '' + afterText + '</div>');
                    }
                })
            })
        })
    })
}

chrome.runtime.onMessage.addListener(onMessage);

function onMessage(message, sender, sendResponse){

    if (message.selectedPercent){
        getData('selectedPercent', 'selected_by_percent', '', '% Owned');
    }
    else{
        $('.selectedPercent').remove();
    }
    if (message.goalsScored){
        getData('goalsScored', 'goals_scored', '', ' Goals');
    }
    else{
        $('.goalsScored').remove();
    }
    if (message.cleanSheets){
        getData('cleanSheets', 'clean_sheets', '', ' clean sheets');
    }
    else{
        $('.cleanSheets').remove();
    }

    if (message.yellowCards){
        getData('yellowCards', 'yellow_cards', '', ' bookings');
    }
    else{
        $('.yellowCards').remove();
    }
    if (message.redCards){
        getData('redCards', 'red_cards', '', ' red cards');
    }
    else{
        $('.redCards').remove();
    }
    if (message.totalPoints){
        getData('totalPoints', 'total_points', 'Total Pts: ', '');
    }
    else{
        $('.totalPoints').remove();
    }
    if (message.assists){
        getData('assists', 'assists', '', ' assists');
    }
    else{
        $('.assists').remove();
    }

    // ---------------------------------------------------

    if (message.clear){
        $('.selectedPercent .goalsScored .cleanSheets .yellowCards .redCards .totalPoints').remove();
    }
}
