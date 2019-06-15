class Player{

	constructor(x1, y1){
		this.pos = createVector(x1, y1);

		this.fov = 60;
		this.rays = [];
		for(i = 0; i < this.fov; i++){
			rays[i] = 0;
		}
	}

	show(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, 12, 12);
	}


	look(){
	}
}