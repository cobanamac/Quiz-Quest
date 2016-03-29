/*
	poeng = experience
	bruke experience til å kjøpe potion(hints)

*/
// src til alle sangene
var playlist = [
	{
		"file":"music/1.mp3",
		"name":"super metroid",
		"hint":"Samus"
	}, {

		"file": "music/2.mp3",
		"name": "chrono trigger",
		"hint": "Time Travel, RPG"
	}, {

		"file":"music/3.mp3",
		"name":"donkey kong",
		"hint":"Samus"
	}, {

		"file":"music/4.mp3",
		"name":"earthworm jim",
		"hint":"Samus"
	}, {

		"file":"music/5.mp3",
		"name":"tmnt 4",
		"hint":"Samus"
	}, {

		"file":"music/6.mp3",
		"name":"terranigma",
		"hint":"Samus"
	}, {

		"file":"music/7.mp3",
		"name":"brandish 2",
		"hint":"Samus"
	},];


var audio = new Audio();

var yourAnswer = "#";									// din input
				
var index = 0;									// indeksen til playlist

var myTime;										// countDown, saves the interval
var points = 500; 								// Points // Score // Tot
var pMinus = 1;									// 
var totPoints = 0;


var queNumber = [];

var runde = 0;	// brukes i for loop
var answerField = document.getElementById("answer");

// Spill av melodi


function play() {

	audio.src = playlist[index].file											//	
	audio.play(playlist[index].file);										//
	//document.getElementById("hint").innerHTML = playlist[index].hint;			//
	countDown();														//
	points = 500;
}

// skriv å lagre ditt svar

function guess(e){

	if(e.keyCode){
		document.getElementById("utskrift").innerHTML = "";
	}

	if(e.keyCode === 13){										// Enter 
		yourAnswer = answerField.value; 						// input
		yourAnswer = yourAnswer.toLowerCase();					// make lowercase
		answerField.value = "";	

		if(playlist[index].name == yourAnswer){
			audio.pause(playlist[index].file);
			document.getElementById("utskrift").innerHTML = playlist[index].name + " Nice work!";	// skriver ut svaret, om det er riktig
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
		alert("Sorry bro!. try again ;)" + " " + points);			//	alert! need var for tot points later ***
	}

	document.getElementById("clock").innerHTML = points;
	
}

// Hints costs EXP
function hints(){
	
	if(totPoints <= 100){
		document.getElementById("utskrift").innerHTML = "Need more exp to use hints";

	}
	if(totPoints >= 100) {

		document.getElementById("hint").innerHTML = "Hint = " + playlist[index].hint;
		
		totPoints -= 100;

		// Writes out your totPoints
		document.getElementById("yourPoints").innerHTML = totPoints;
	}

	
}



