/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});

function question1(answer){
    if (answer === "Pirate") {
        return 100
    } else if (answer ==="Marine"){
        return 200
    } else if (answer ==="Revolutionary"){
        return 300
    }
     else
        {return 0}
}