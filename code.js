$(document).ready(function(){
    //choose random quote to start with
    let x = Math.floor(Math.random()*13);
    console.log(quotes[x][0]);
    //generate the quote
    $("#quotetext").text(quotes[x][0]);
    $("#quoteauthor").text(quotes[x][1]);
    $("#authorinfo").text(quotes[x][2]);
    
    //generate next quote when button is clicked
    $("#button").click(function(){
        //there are only 13 quotes so if it gets to the last one, start over
        if(x < 12){
            x++;
            $("#quotetext").text(quotes[x][0]);
            $("#quoteauthor").text(quotes[x][1]);
            $("#authorinfo").text(quotes[x][2]);
        }
        else{
            x = 0;
            $("#quotetext").text(quotes[x][0]);
            $("#quoteauthor").text(quotes[x][1]);
            $("#authorinfo").text(quotes[x][2]);
        }
    });
});