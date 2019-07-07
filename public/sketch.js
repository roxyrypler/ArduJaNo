let socket;
let valOne;

function setup() {
	//createCanvas(720, 256);

	osc1Init();
	osc2Init();
	osc3Init();
	osc4Init();

	socket = io.connect('http://localhost:3000');
	socket.on('broadcast', function (data) {
		//console.log(data);
		valOne = data;
	});
}

function draw() {
	background(255);
	getAudioContext().resume();


	let oscFreq = oscSlider.value();
	let volumeSliderOsc = volumeSlider.value();

	let osc2Freq = osc2Slider.value();
	let osc2vOlumes = osc2Volume.value();
	
	let osc3Freq = osc3Slider.value();
	let osc3vOlumes = osc3Volume.value();
	let osc4Freq = osc4Slider.value();
	let osc4vOlumes = osc4Volume.value();

	OscOne(oscFreq, volumeSliderOsc);
	OscTwo(osc2Freq, osc2vOlumes);
	Osc3(osc3Freq, osc3vOlumes);
	Osc4(osc4Freq, osc4vOlumes);

}

// osc 1
function osc1Init() {
	isOsc1Active = false;
	osc1 = new p5.TriOsc(); // set frequency and type
	osc1.amp(0.5);
	// osc 1 controllers
	oscSlider = createSlider(1, 880, 100);
	oscSlider.position(20, 20);
	volumeSlider = createSlider(0, 1, 0.5, 0.001);
	volumeSlider.position(20, 80);
	osc1Button = createButton("Start/Stop");
	osc1Button.position(20, 120);
	osc1Button.mousePressed(ActivateOscOne);
}

function ActivateOscOne() {
	if (isOsc1Active == false) {
		isOsc1Active = true;
		osc1.start(0.1);
	} else {
		isOsc1Active = false;
		osc1.stop(0.1);
	}
}

function OscOne(oscFreq, volume) {
	//console.log(typeof valOne);
	//console.log(typeof Number(valOne));
	if (isOsc1Active == true) {

		console.log(valOne);
		let freq = Number(valOne);
		osc1.freq(freq);

		let amp = volume;
		osc1.amp(amp);
	}
}


// osc2

function osc2Init() {
	isOsc2Active = false;


	osc2 = new p5.TriOsc();
	osc2.amp(0.5);



	// osc 2 controllers
	osc2Slider = createSlider(40, 880, 100);
	osc2Slider.position(200, 20);
	osc2Volume = createSlider(0, 1, 0.5, 0.001);
	osc2Volume.position(200, 80);
	osc2Button = createButton("Start/Stop");
	osc2Button.position(200, 120);
	osc2Button.mousePressed(ActivateOscTwo);
}

function ActivateOscTwo() {
	if (isOsc2Active == false) {
		isOsc2Active = true;
		osc2.start(0.1);
	} else {
		isOsc2Active = false;
		osc2.stop(0.1);
	}
}



function OscTwo(oscFreq, volume) {
	if (isOsc2Active == true) {
		let freq = oscFreq;
		osc2.freq(freq);

		let amp = volume;
		osc2.amp(amp);
	}
}

// osc3

function osc3Init() {
	isOsc3Active = false;


	osc3 = new p5.TriOsc();
	osc3.amp(0.5);



	// osc 2 controllers
	osc3Slider = createSlider(40, 880, 100);
	osc3Slider.position(400, 20);
	osc3Volume = createSlider(0, 1, 0.5, 0.001);
	osc3Volume.position(400, 80);
	osc3Button = createButton("Start/Stop");
	osc3Button.position(400, 120);
	osc3Button.mousePressed(ActivateOsc3);
}

function ActivateOsc3() {
	if (isOsc3Active == false) {
		isOsc3Active = true;
		osc3.start(0.1);
	} else {
		isOsc3Active = false;
		osc3.stop(0.1);
	}
}



function Osc3(oscFreq, volume) {
	if (isOsc3Active == true) {
		let freq = oscFreq;
		osc3.freq(freq);

		let amp = volume;
		osc3.amp(amp);
	}
}

// osc3

function osc4Init() {
	isOsc4Active = false;


	osc4 = new p5.TriOsc();
	osc4.amp(0.5);



	// osc 2 controllers
	osc4Slider = createSlider(40, 880, 100);
	osc4Slider.position(600, 20);
	osc4Volume = createSlider(0, 1, 0.5, 0.001);
	osc4Volume.position(600, 80);
	osc4Button = createButton("Start/Stop");
	osc4Button.position(600, 120);
	osc4Button.mousePressed(ActivateOsc4);
}

function ActivateOsc4() {
	if (isOsc4Active == false) {
		isOsc4Active = true;
		osc4.start(0.1);
	} else {
		isOsc4Active = false;
		osc4.stop(0.1);
	}
}



function Osc4(oscFreq, volume) {
	if (isOsc4Active == true) {
		let freq = oscFreq;
		osc4.freq(freq);

		let amp = volume;
		osc4.amp(amp);
	}
}
