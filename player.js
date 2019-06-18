class Player{

	constructor(){
		this.pos = createVector(width / 4, height / 2);
		this.dir = createVector(1, 0);
		this.fov = 30;
		this.density = 0.1;
		this.rays = [];

		for(var i = this.dir.heading() - this.fov/2 - this.density; i < this.dir.heading() + this.fov/2; i += this.density){
			this.rays.push(new Ray(this.pos, radians(i)));
		}
	}


	show(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, 12, 12);
		stroke(0);
		var headVector = p5.Vector.add(this.pos, p5.Vector.mult(this.dir, 20));
		// headVector.normalize();
		line(this.pos.x, this.pos.y, (headVector.x), (headVector.y));

		if(this.pos.x > width/2) this.pos.x = width/2;
		if(this.pos.x < 0) this.pos.x = 0;
		if(this.pos.y > height) this.pos.y = height;
		if(this.pos.y < 0) this.pos.y = 0;
	}

	look(walls){
		var itr = -1;
		for(var ray of this.rays){
			itr += 1;
			var closest = null;
			var record = Infinity;
			var pt;

			for(var wall of walls){	
				pt = ray.look(wall);
				if(pt){

					var dist = p5.Vector.dist(this.pos, pt);
					var angl = ray.dir.heading() - this.dir.heading();
					dist *= cos(angl);

					if(dist < record){
						record = dist;
						closest = pt;
					}
				}	
			}

			if(closest){
				stroke(200);
				line(this.pos.x, this.pos.y, closest.x, closest.y);

				/* draw walls 3D view */
				rectMode(CENTER);
				var rectSide = (width/2) / this.rays.length;

				var brightness = map(p5.Vector.dist(closest, this.pos), 0, height, 255, 0);
				var rectHeight = map(p5.Vector.dist(closest, this.pos), 0, height, height, 0);
				stroke(brightness);
				fill(brightness);
				rect(width/2 + (itr+1)*rectSide, height/2, 2*rectSide, rectHeight);
			}
		}
	}


	setDirection(x, y){
		this.dir.x = x - this.pos.x;
		this.dir.y = y - this.pos.y;
		this.dir.normalize();

		var j = 0;
		for(var i = degrees(this.dir.heading()) - this.fov/2 - this.density; i < degrees(this.dir.heading()) + this.fov/2; i += this.density){
			this.rays[j] = new Ray(this.pos, i);
			j++;
		}
	}

	rotate(val){
		var newAngle = degrees(this.dir.heading()) + degrees(val);
		this.dir = p5.Vector.fromAngle(radians(newAngle));
		this.dir.normalize();

		var j = 0;
		for(var i = degrees(this.dir.heading()) - this.fov/2 - this.density; i < degrees(this.dir.heading()) + this.fov/2; i += this.density){
			this.rays[j] = new Ray(this.pos, i);
			j++;
		}
		// console.log(this.dir.heading());
	}

	move(val){
		this.pos = p5.Vector.add(this.pos, p5.Vector.mult(this.dir, val));
		var j = 0;
		for(var i = degrees(this.dir.heading()) - this.fov/2 - this.density; i < degrees(this.dir.heading()) + this.fov/2; i += this.density){
			this.rays[j] = new Ray(this.pos, i);
			j++;
		}
	}
}