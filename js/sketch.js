//the words needs to be put back in separate file

//from now on these are chinese language functions

var deck="none";
var n = 1;

function getRndInteger(min,maxt) {
    var max = maxt/2;
    var temp = Math.floor(Math.random() * (max - min) ) + min;
    temp = (2*temp) + 1;
    return temp;
}
    
function geteng(x){
    return mand[x];
}

function getmand(x){
    return mand[x-1];
}
    
n = getRndInteger(1,mand.length)

geteng(n);
getmand(n);



//speaking

function speak() {
            speaker = "Chinese Male";
            speed = 0.95;
            var para = getmand(n);;
            console.log(para);
    
            responsiveVoice.speak(para, speaker, {
                rate: speed
            });
    
        }

//this is p5js functions
function toggletext(id,disp){
  var x = document.getElementById(id);
    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    x.innerHTML = disp;
}

function switchtext(id,disp){
  var x = document.getElementById(id);
    x.innerHTML = disp;
}

function toggle(id){
  var x = document.getElementById(id);
    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function chincheck(){
    
  toggletext("chineseword",getmand(n));
    speak();
    toggle("next");
    toggle("check");
    toggle("img");
    
    var q = geteng(n);
                $('#img').html('');
                $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&&pithumbsize=200&origin=*&prop=pageimages&titles=" + q, function(data) {
                    $.each(data.query.pages, function(i) {
                        $('#img').html("<img src='" + data.query.pages[i].thumbnail.source +"' height='100' width='auto'>");
                    });

                });
}

function next(){
    n = getRndInteger(1,mand.length)
    toggletext("chineseword");
    switchtext("engword",geteng(n));
 switchtext("chineseword",getmand(n));
    toggle("next");
    toggle("check");
    toggle("img");
    clear();
}

//p5 functions

function setup() {
    switchtext("engword",mand[n]);
    var wid = displayWidth;
    var hid = (displayHeight*3)/3;
 	createCanvas(wid,hid);
	strokeWeight(5)
	stroke(0);
}

function touchMoved() {
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
    
}

function clrscr(){
    clear();
    return false;
}

