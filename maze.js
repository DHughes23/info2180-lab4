"use strict";

window.onload = chaCol;

function chaCol() {
	var waLink = document.querySelectorAll(".boundary");
	console.log(waLink);
	for (let q=0; q<5; q++){
			waLink[q].addEventListener("mouseover", function(){
			
			waLink[q].classList.add("youlose"); 
			
			var num = document.querySelectorAll(".boundary");
			var i =0;
			
			for (num[i]; i<5; i++){
				num[i].classList.add("youlose");
			}	
			console.log(num);
		})		
	}
}