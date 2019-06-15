var i = 10;

function setup(){
	createCanvas(windowWidth, windowHeight);

	player = new Player(200, 400);
	boundary = new Boundary(400, 300, 400, 500);
}

function draw(){
	background(50);
	player.show();
	boundary.show();
}