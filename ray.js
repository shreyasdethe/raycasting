class Ray{

	constructor(pos, angle){
		this.pos = pos;
		this.dir = p5.Vector.fromAngle(angle);
	}


	look(wall){
		var x1 = wall.pos.x;
		var y1 = wall.pos.y;
		var x2 = wall.dir.x;
		var y2 = wall.dir.y;

		var x3 = this.pos.x;
		var y3 = this.pos.y;
		var x4 = this.pos.x + this.dir.x;
		var y4 = this.pos.y + this.dir.y;

		var den = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4);

		if(den == 0) return;

		var t = ((x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4)) / den;

		var u = -((x1 - x2)*(y1 - y3) - (y1 - y2)*(x1 - x3)) / den;

		if(t > 0 && t < 1 && u > 0){
			var pt = createVector(0, 0);
			pt.x = x1 + t*(x2 - x1);
			pt.y = y1 + t*(y2 - y1);
			return pt;
		}

		else{
		}

	}
}