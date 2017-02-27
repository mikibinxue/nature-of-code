var DEBUG_MODE = false;
var p;
var particles = [];

function setup() {
	createCanvas(500, 600);
	background(0);
	if (DEBUG_MODE) {
		frameRate(5);
	}

	for (var i = 0; i < 50; i++) {
		particles.push(new Particle(width / 2, height / 2));
	}


}

function draw() {
	background(0, 10);


	for (var i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].display();
	}

}

function mousePressed(){
	for (var i = 0; i<particles.length;i++){
		particles[i].vel = createVector(random(-30,30),random(-30,30));
	}
}
