/* 

create a function called highestScore that will
Receive a 1d array called scores
return the highest score

*/


function highestScore(score){

    var max = score[0];
    for(var i=0; i<score.length; i++ ){
        if(max<score[i]){
            max = score[i];
        }

    }
    return max;
}
var score =[44, 65, 34, 43, 88, 76];
var maxScore = highestScore(score);
document.write("Max score = " + maxScore + "<br>");
//ends

//Task 9 starts
/* 
    create a function called highestRunScorer that will
    Receive a 2d array called playersInfo
    Based on highest score, return the nme of the player

*/
function highestRunScorer(playersInfo){
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for(var x=1; x<playersInfo.length; x++){
        if(highestScore<playersInfo[x][1]){
            highestScore =playersInfo[x][1];
            highestScorer =playersInfo[x][0];

        }
    }
    return highestScorer;
}

var playersInfo =[
    ["Shangida", 25],
    ["Rtu", 30],
    ["Nabila", 123],
    ["Arifa", 45]
]
var highestScorer = highestRunScorer(playersInfo);
document.write("(Task_9 output) highest Scorer  = " + highestScorer);



