"use strict";

window.onload = chaCol;
var startGame = false;
var lostGame = false;

function chaCol() {
	var waLink = document.querySelectorAll(".boundary");
	for (let q=0; q<5; q++){
		waLink[q].addEventListener("mouseover", changeBounds)	
	}
	
	
	document.getElementById("start").addEventListener("click", begin);
	document.getElementById("start").onclick = resetBounds;
	document.getElementById("end").addEventListener("mouseover", end);
	document.getElementById("maze").onmouseout=changeBounds;
}

function changeBounds(){
	var num = document.querySelectorAll(".boundary");
	for (let i=0; i<5; i++){
		num[i].classList.add("youlose");
	}	
	lostGame= true;
}

function resetBounds(){
	var them = document.querySelectorAll(".boundary");
	for (let i=0; i<5; i++){
		them[i].classList.remove("youlose");
	}
}

function begin(){
    resetBounds;
    startGame = true;
    lostGame = false;
    setStatus("The Race is afoot!");
}	

function end(){
    if(startGame == true){
        if(lostGame == false){
            setStatus("You Win!");
        }
        else{
            setStatus("You Lose!");
        }
        startGame = false;
    }
}

function setStatus(message){
    document.getElementById("status").innerHTML = message;
}