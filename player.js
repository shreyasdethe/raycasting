class Player{

	constructor(){
		this.pos = createVector(width / 2, height / 2);
		this.dir = createVector(1, 0);
		this.fov = 60;
		this.rays = [];

		for(var i = 0; i < this.fov; i++){
			this.rays.push(new Ray(this.pos, radians(i)));
		}
	}


	show(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, 12, 12);
	}

	look(wall){
		for (var ray of this.rays){
			ray.look(wall);
		}
	}


	setDirection(x, y){
		this.dir.x = x - this.pos.x;
		this.dir.y = y - this.pos.y;
		this.dir.normalize();
	}
}