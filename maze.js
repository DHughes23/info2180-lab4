"use strict";

window.onload = chaCol;
var startGame = false;
var lostGame = false;

//document.getElementById("start").addEventListener("click", begin);
//document.getElementById("end").addEventListener("mouseover", end);

function chaCol() {
	var waLink = document.querySelectorAll(".boundary");
	for (let q=0; q<5; q++){
		waLink[q].addEventListener("mouseover", changeBounds)	
	}
	document.getElementById("end").addEventListener("mouseover", end);
	document.getElementById("start").addEventListener("click", begin);
}

function changeBounds(){
	if (startGame==true){
		var num = document.querySelectorAll(".boundary");
		for (let i=0; i<5; i++){
			num[i].classList.add("youlose");
		}
	}	
	lostGame= true;
}

function begin(){
    resetBounds;
    startGame = true;
    lostGame = false;
    setStatus("The Race is afoot!");
}

function resetBounds(){
	var num = document.querySelectorAll(".boundary");
	for (let i=0; i<5; i++){
		num[i].className = "boundary";
	}
	console.log(num);
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