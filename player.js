class Player{

	constructor(){
		this.pos = createVector(width / 4, height / 2);
		this.dir = createVector(1, 0);
		this.fov = 60;
		this.rays = [];

		for(var i = this.dir.heading() - this.fov/2; i < this.dir.heading() + this.fov/2; i += 5){
			this.rays.push(new Ray(this.pos, radians(i)));
		}
	}


	show(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, 12, 12);
	}

	look(walls){
		for(var ray of this.rays){
			var closest = null;
			var record = Infinity;
			var pt;

			for(var wall of walls){	
				pt = ray.look(wall);
				if(pt){
					var dist = p5.Vector.dist(this.pos, pt);
					if(dist < record){
						record = dist;
						closest = pt;
					}
				}	
			}

			if(closest){
				stroke(random(200, 255));
				line(this.pos.x, this.pos.y, closest.x, closest.y);
			}
		}
	}


	setDirection(x, y){
		this.dir.x = x - this.pos.x;
		this.dir.y = y - this.pos.y;
		this.dir.normalize();
		console.log(degrees(this.dir.heading()));
		var j = 0;
		for(var i = degrees(this.dir.heading()) - this.fov/2; i < degrees(this.dir.heading()) + this.fov/2; i += 5){
			this.rays[j] = new Ray(this.pos, i);
			j++;
		}
	}

	rotate(val){
		var newAngle = this.dir.heading() + degrees(val);
		this.dir = p5.Vector.fromAngle(radians(newAngle));

		var j = 0;
		for(var i = degrees(this.dir.heading()) - this.fov/2; i < degrees(this.dir.heading()) + this.fov/2; i += 5){
			this.rays[j] = new Ray(this.pos, i);
			j++;
		}
		console.log(this.dir.heading());
	}
}