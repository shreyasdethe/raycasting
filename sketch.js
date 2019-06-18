function setup(){
	createCanvas(1280, 720);

	player = new Player();
	boundary = new Array(5);

	for(var i = 0; i < 5; i++){
		boundary[i] = new Boundary(random(width/2), random(height), random(width/2), random(height));
	}

	// boundary[0] = new Boundary(100, 100, 100, 500);
	// boundary[1] = new Boundary(100, 500, 500, 500);
	// boundary[2] = new Boundary(500, 500, 500, 300);
	// boundary[3] = new Boundary(500, 300, 200, 200);
	// boundary[4] = new Boundary(200, 200,  50, 200);
}

function draw(){
	background(50);
	stroke(255);
	line(width/2, 0, width/2, height);
	// player.setDirection(mouseX, mouseY);

	for(var i = 0; i < boundary.length; i++){
		boundary[i].show();
	}
	player.look(boundary);


	if(keyIsDown(UP_ARROW)) player.move(5);
	else if(keyIsDown(DOWN_ARROW)) player.move(-5);
	else if(keyIsDown(LEFT_ARROW)) player.rotate(-0.05);
	else if(keyIsDown(RIGHT_ARROW)) player.rotate(0.05);
 	
	player.show();

}

// function keyPressed(){
// 	if(keyCode == UP_ARROW) player.pos.y -= 5;
// 	else if(keyCode == DOWN_ARROW) player.pos.y += 5;
// 	else if(keyCode == RIGHT_ARROW) player.rotate(0.01);
// }
