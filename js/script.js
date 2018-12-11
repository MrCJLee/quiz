/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        
        var result1 =  question1(q1Result);
        var result2 =  question2(q2Result);
        var result3 =  question3(q3Result);
        var result4 =  question4(q4Result);
        
        var totalScore;
        
    });

});

function question1(answer){
    if (answer === "Pirate") {
        return 1000
    } else if (answer ==="Marine"){
        return 2000
    } else if (answer ==="Revolutionary"){
        return 3000
    }
     else
        {return 0}
}

function question2(answer) {
    if (answer==="sword") {
        return 10
    } else if (answer==="artiaory"){
        return 20
    } else if (answer==="punch")
        return 30
    }
     else
     {return 0}
}








function question3(answer) {
    if (answer ==="Male") {
        return 100
    } else if (answer==="Female"){
        return 200
    }
}





function question4(answer) {
    if (answer==="yes") {
        return 10
    } else if (answer==="no"){
        return 20
    }
}

