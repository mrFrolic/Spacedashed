float radius = 180;
int X,Y;
int Xbis;
int nX,nY;
int delay = 14;
int delay2 = 25;
int posEtoileX;
int posEtoiley;
int yinitstars;
int xinitstars;
int couleurStar;
int pomme;
int a;
int t;
int u;
int h;
int k;
int ail;
int lineFast;
int valueSmoke;
int valueAileH;
int valueColor;
int truc;
int alpha;
int thing;
int aileX1;
int aileX2;
int aileY;
int alphaAile;
float depart;
float b = random()*width;
float c = random()*width;
float d = random()*width;
float e = random()*width;
float f = random()*width;
float aileCount;
int valueLineVertX;
int valueLineVertY;
void setup() {
	size( 690,820 );
	background( 60 );
	smooth();
	frameRate( 60 );
	ProcessingInit();
	W = width / 2;
	Y = height / 2;
	nX = X;
  	nY = Y; 
};

void draw(){
	aileX1 = X+35;
	aileX2 = X-35;

	aileY = height-60;
	alphaAile = 65;
	a = frameCount%(200);
	t = frameCount%(300);
	u = frameCount%(250);
	h = frameCount%(400);
	k = frameCount%(650);
	ail = frameCount%(40);
	lineFast=frameCount%(10);
	if (frameCount%(200) == 0) {
		b = random()*(width-20);	
	};
	if (frameCount%(300) == 0) {
		c = random()*(width-20);	
	};
	if (frameCount%(250) == 0) {
		d = random()*(width-20);	
	};
	if (frameCount%(400) == 0) {
		e = random()*(width-20);	
	};
	if (frameCount%(650) == 0) {
		f = random()*(width-20);	
	};
	background(60);
	X+=(nX-X)/delay;
	Xbis+=(nX-X)/delay2;
	for (var i = width/25; i < width; i+= width/25) {
		lineVert(i);
	};
	for (var i = -250; i < width; i+= height/15) {
		lineHo(i+2*a);
	};
	stars(30,30,75, width/8.5);
	stars(-211+X/60,12,95, width/6.13);
	mechant(b,5*a, -5);
	mechant(c,5*t, -500);
	mechant(d,5*u, -200);
	Gmechant(e,6*h, -1200);
	Gmechant(f,6*k, -1900);
	for (int i = 0; i < 10; i++){
		turbo(i/8-frameCount%(2), i+frameCount%(6), i/3+2*(frameCount%(6)));
	}
	//console.log(height-60+valueSmoke, height-60, ail);
	for (int i=0; i < 80; i++){
		aile(aileX1 + random()*(i/7), aileX2 - random()*(i/7), aileY + i , alphaAile-i);
		}
	ship();
};

void etoile(posEtoileX, posEtoileY, couleurStar){
	strokeWeight(1);
	stroke(couleurStar);
	line(posEtoileX, posEtoileY, posEtoileX+5, posEtoileY+5);
	line(posEtoileX+5, posEtoileY, posEtoileX, posEtoileY+5);
};

void resize(X, Y) {
    size(X,Y-60);   
};

void stars(xinitstars, yinitstars, couleurStar, pomme){
	for (int y = xinitstars; y < width; y += pomme)
  	{
	  	for (int i = yinitstars; i < height; i += pomme)
	  	{
		etoile(y, i, couleurStar); 
		};
	} ;
};

void mechant(b, a, depart){
	noStroke();
	rectMode(CENTER);
	fill(45);
	rect(b+10,depart+a, 10, 10 );
};

void Gmechant(b, a, depart){
	noStroke();
	rectMode(CENTER);
	fill(35);
	rect(b,depart+a, 20, 8 );
};

void lineVert(valueLineVertX){
	strokeWeight(1);
	fill(20);
	stroke(62);
	line(valueLineVertX, 0, valueLineVertX, height)
}

void lineHo(valueLineHoY){
	strokeWeight(2);
	fill(0);
	stroke(62);
	line(0, valueLineHoY, width, valueLineHoY)
}

void turbo(thing, truc){
	noStroke();
	fill( 48, 179, 173);
	rectMode(CENTER);
	rect(X+10+thing, height-50+truc, 6, 5);
	rect(X-10-thing, height-50+truc, 6, 5);
}

void aile(aileX1, aileX2, aileY, alphaAile){
	noStroke();
	fill(175,alphaAile);
	rectMode(CENTER);
	rect( aileX1, aileY, 1, 6 );
	rect( aileX2, aileY, 1, 6 );
}
void ship(){
	rectMode(CENTER);
	noStroke();
	fill(175);
	rect(X+15, height-88, 2, 18);
	rect(X-15, height-88, 2, 18);
	//rect(X-3, height-115, 1, 8);
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


void mouseMoved(){
	nX = mouseX;
	nY = mouseY;  
};