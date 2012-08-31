var X, Y;
var nX, nY;
var truc, alpha;
var delay = 14;
var line_pos = 0;
int mechant_positionX = 50;
int mechant_positionY = 50;


void  setup() {
	size(10, 10);
	background(15, 32, 48);
	frameRate(60);
	ProcessingInit();
	nX = X;
	nY = Y;
	
}
void draw() {
	update();
	display();
}

//------------------------------------------//

void resize(X, Y) {
	size(X, Y - 60);
}
void mouseMoved() {
	nX = mouseX;
	nY = mouseY;
}
void update() {
	X+=(nX-X)/delay;
	line_pos += .9;
	line_pos = line_pos > 80 ? 0 : line_pos;
	mechant_positionX += 5;
	if(mechant_positionX > width - 420){
		mechant_positionX = 50;
		mechant_positionY += 100;
	}else if(mechant_positionY > height-200){
		mechant_positionX = 50;
		mechant_positionY = 50;
	}else{
		mechant_positionX = mechant_positionX;
	}
	/*
	mechant_positionX = mechant_positionX > width - 420 ? 50 : mechant_positionX;
	mechant_positionY = mechant_positionX > width - 420 ? mechant_positionY += 100 : mechant_positionY = mechant_positionY ;
	*/

}
	
void display() {
	background(15, 32, 48);
	ligneVerticales();
	for (int i = 0; i < 45; i+=4){
		turbo(i+frameCount%(6), (i+2*(frameCount%(6)))*6);
	}
	mechant();
	ship();
	
}

//------------------------------------------//

void ligneVerticales() {
	for ( i = 0; i < height; i += 80) {
		for ( j = 0; j < width; j += 80) {
			stroke(20, 37, 53);
			line(0, i + line_pos, width, i + line_pos);
			line(j + 0.1 * X, 0, j + 0.1 * X, height);

			stroke(5, 22, 38);
			line(j - width * 0.003, i, j + width * 0.003, i);
			line(j, i - height * 0.005, j, i + height * 0.005);

		}
	}
}

//------------------------------------------//

void turbo(truc, alpha){
	noStroke();
	fill( 196, 54, 85, alpha );
	rectMode(CENTER);
	rect(X+10, height-50+truc, 6, 5);
	rect(X-10, height-50+truc, 6, 5);
}


void ship(){
	rectMode(CENTER);
	noStroke();
	fill(175);
	rect(X+15, height-88, 2, 18);
	rect(X-15, height-88, 2, 18);
	fill(45);
	rect(X+10, height-55, 8, 5);
	rect(X-10, height-55, 8, 5);
	fill(205);
	rect(X,height-85, 25, 7);
	for (int i = 0; i < 40; i+= 1) {
		rect(X,height-87-i, 25-i/2, 1);
	}
	for (int i = 0; i < 30; i++) {
		fill(50+i/6);
		rect(X+10+i,height-70+i*0.15,1,25-i*0.3);
	};
	for (int i = -30; i < 0; i++) {
		fill(50-i/6);
		rect(X-9+i,height-70-i*0.15,1,25+i*0.3);
	};
	fill(175);
	rect(X,height-75,20,35);
	fill(48);
	rect(X+5, height-72, 2, 20);
	rect(X-5, height-72, 2, 20);
	fill(48);
	rect(X+5, height-72, 2, 20);
	rect(X-5, height-72, 2, 20);
	fill(5);
	rect(X, height-59,75,3);
};


//------------------------------------------//

void mechant(){
	noStroke();
	fill(196, 54, 85);
	rectMode(CENTER);
	for (int i = 0 ; i < 8; i++){
		rect(mechant_positionX + 50*i, mechant_positionY, 20, 50);
	}
}
