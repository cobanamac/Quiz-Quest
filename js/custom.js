/*
	poeng = experience
	bruke experience til å kjøpe potion(hints)

*/


var playlist = new Array("music/title.mp3",		// src til alle sangene
						 "music/chrono.mp3");
var audio = new Audio();

var yourAnswer = "#";									// din input
var songName = ["Super Metroid", 						// riktig svar
				"Chrono Trigger"]; 		

var hints = ["Samus",							// HINTS // IKKE LAGT TIL ENDA!!
			 "Time travel, Rpg"	]					

var index = 0;									// indeksen til playlist

var myTime;										// countDown, saves the interval
var points = 500; 								// Points // Score // Tot
var pMinus = 1;									// 
var totPoints = 0;


var queNumber = [];

var runde = 0;	// brukes i for loop

// Spill av melodi


function play() {

	audio.src = playlist[index]											//	
	audio.play(playlist[index]);										//
	document.getElementById("hint").innerHTML = hints[index];			//
	countDown();														//
	points = 500;
}

// skriv å lagre ditt svar

function guess(e){

	if(e.keyCode){
		document.getElementById("utskrift").innerHTML = "";
	}

	if(e.keyCode === 13){										// Enter 
		yourAnswer = document.getElementById("answer").value; 	// input
		document.getElementById("answer").value = "";	

		if(songName[index] == yourAnswer){
			audio.pause("music/title.mp3");
			document.getElementById("utskrift").innerHTML = songName[index] + " Nice work!";	// skriver ut svaret, om det er riktig
			index ++;	// neste sang, playlist[]
			points ++;
			
			totPoints += points;
			document.getElementById("yourPoints").innerHTML = totPoints+ " Exp";


			clearInterval(myTime);		// Clear time of var myTime
		}
	}
}



function countDown() {
 	myTime = setInterval(countPoints, 100);
 }

function countPoints(){
	points = points - pMinus;

		if(points === 0){											//	When points reaches 0
		clearInterval(myTime);										//  stop counting
		audio.pause();												//	stop music
		alert("Sorry bro!. prøv igjen ;)" + " " + points);			//	alert! need var for tot points later ***
	}

	document.getElementById("clock").innerHTML = points;
	
} 





