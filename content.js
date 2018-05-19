console.log('fpl extention running!');

let delay = 500;
setTimeout(function(){
    getSelectedPercent();
}, delay);

function getSelectedPercent(){
    response = "";

    $.get("https://fantasy.premierleague.com/drf/transfers", function(data){
        response = data;
    }).then(function(){
        $.get('https://fantasy.premierleague.com/drf/bootstrap-static', function(allPlayers){

        }).then(function(allPlayers){
                $('.ism-element__data').each(function(index, tag){
                    player = response.picks[index].element;
                    plrs = allPlayers.elements
                    $.each(plrs, function(index, plr){
                        if (plr.id == player){
                            $(tag).after('<div class="ism-element__data selectedPercent" style="background-color: rgba(0, 111, 55, 0.9); color: #ffffff">' + plr.selected_by_percent + '% Owned</div>');
                        }
                    });
                });
            });
        });
}

function getGoals(){
    $.get('https://fantasy.premierleague.com/drf/transfers', function(data){

    }).then(function(){
        $.get('https://fantasy.premierleague.com/drf/bootstrap-static', function(allPlayers){

        }).then(function(allPlayers){
            $('.ism-element__data').each(function(index, tag){
                player = response.picks[index].element;
                plrs = allPlayers.elements
                $.each(plrs, function(index, plr){
                    if (plr.id == player){
                        $(tag).after('<div class="ism-element__data goalsScored" style="background-color: rgba(0, 111, 55, 0.9); color: #ffffff">' + plr.goals_scored + ' Goals</div>');
                    }
                })
            })
        })
    })
}

function getCleanSheets(){
    $.get('https://fantasy.premierleague.com/drf/transfers', function(data){

    }).then(function(){
        $.get('https://fantasy.premierleague.com/drf/bootstrap-static', function(allPlayers){

        }).then(function(allPlayers){
            $('.ism-element__data').each(function(index, tag){
                player = response.picks[index].element;
                plrs = allPlayers.elements
                $.each(plrs, function(index, plr){
                    if (plr.id == player){
                        $(tag).after('<div class="ism-element__data cleanSheets" style="background-color: rgba(0, 111, 55, 0.9); color: #ffffff">' + plr.clean_sheets + ' clean sheets</div>');
                    }
                })
            })
        })
    })
}

function getYellowCards(){
    $.get('https://fantasy.premierleague.com/drf/transfers', function(data){

    }).then(function(){
        $.get('https://fantasy.premierleague.com/drf/bootstrap-static', function(allPlayers){

        }).then(function(allPlayers){
            $('.ism-element__data').each(function(index, tag){
                player = response.picks[index].element;
                plrs = allPlayers.elements
                $.each(plrs, function(index, plr){
                    if (plr.id == player){
                        $(tag).after('<div class="ism-element__data yellowCards" style="background-color: rgba(0, 111, 55, 0.9); color: #ffffff">' + plr.yellow_cards + ' bookings</div>');
                    }
                })
            })
        })
    })
}

function getRedCards(){
    $.get('https://fantasy.premierleague.com/drf/transfers', function(data){

    }).then(function(){
        $.get('https://fantasy.premierleague.com/drf/bootstrap-static', function(allPlayers){

        }).then(function(allPlayers){
            $('.ism-element__data').each(function(index, tag){
                player = response.picks[index].element;
                plrs = allPlayers.elements
                $.each(plrs, function(index, plr){
                    if (plr.id == player){
                        $(tag).after('<div class="ism-element__data redCards" style="background-color: rgba(0, 111, 55, 0.9); color: #ffffff">' + plr.red_cards + ' red cards</div>');
                    }
                })
            })
        })
    })
}


chrome.runtime.onMessage.addListener(onMessage);

function onMessage(message, sender, sendResponse){

    if (message.selectedPercent){
        // display selected percent
        getSelectedPercent();
    }
    else{
        $('.selectedPercent').remove();
    }
    if (message.goalsScored){
        getGoals();
    }
    else{
        $('.goalsScored').remove();
    }
    if (message.cleanSheets){
        getCleanSheets();
    }
    else{
        $('.cleanSheets').remove();
    }

    if (message.yellowCards){
        getYellowCards();
    }
    else{
        $('.yellowCards').remove();
    }
    if (message.redCards){
        getRedCards();
    }
    else{
        $('.redCards').remove();
    }
    // ---------------------------------------------------

    if (message.clear){
        $('.selectedPercent .goalsScored .cleanSheets .yellowCards .redCards').remove();
    }
}
