function setup(){
	createCanvas(windowWidth, windowHeight);

	player = new Player();
	boundary = new Array(5);
	for(var i = 0; i < 5; i++){
		boundary[i] = new Boundary(random(800), random(800), random(800), random(800));
	}
}

function draw(){
	background(50);
	player.show();

	for(var i = 0; i < 5; i++){
		boundary[i].show();
	}

	player.setDirection(mouseX, mouseY);
	player.look(boundary[i]);
}