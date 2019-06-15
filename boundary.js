class Boundary {
	constructor(x1, y1, x2 , y2){
		this.position = createVector(x1, y1);
		this.direction = createVector(x2, y2);
	}

	show(){
		stroke(255);
		line(this.position.x, this.position.y, this.direction.x, this.direction.y);
	}
}