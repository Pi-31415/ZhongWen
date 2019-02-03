function getRndInteger(min,max) {
    var temp = Math.floor(Math.random() * (max - min) ) + min;
    return temp;
}
localStorage.setItem("deckload", "numbers");

function loaddeck(deck){
    localStorage.setItem("deckload", deck);

}

var colors = ["blue"];


//Here is all the topic list

var topicname = ["Numbers","Dates,Days, Months", "Chinese Zodiac","My Family","Countries and Languages","Body Parts","Colours","Clothes","Daily Routine"];
var jsname = ["numbers","dates","zodiac","family","countries","body","colours","clothes","routine"];
//topic list ends

var curcolor = colors[getRndInteger(0,colors.length)];
console.log(curcolor);

var btnmain = "";

var i;
for (i = 0; i < topicname.length; i++) { 
    
    curcolor = colors[getRndInteger(0,colors.length)];
    
console.log(curcolor);
    
    btnmain += "<br><br><a class=\"waves-effect waves-light btn "+curcolor+"\" href=\"write.html\" style=\"width:85%;\" onclick=\"loaddeck('"+jsname[i]+".js')\">"+(i+1)+" - "+topicname[i]+"</a>";
      
    //console.log(btnmain);
    
}

document.getElementById("links").innerHTML = btnmain;