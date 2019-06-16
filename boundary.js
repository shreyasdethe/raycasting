class Boundary {
	constructor(x1, y1, x2 , y2){
		this.pos = createVector(x1, y1);
		this.dir = createVector(x2, y2);
	}

	show(){
		stroke(255);
		line(this.pos.x, this.pos.y, this.dir.x, this.dir.y);
	}
}