var X, Y;
var horizontal_speed = 0;
var speed_x = 0;
var truc, alpha;
var delay = 26;
var line_pos = 0;
int mechant_positionX = 50;
int mechant_positionY = 50;
Array mechants_array;
ArrayList shots_array;
int:constant border_limit = 80;
bool shooting = false;
float delta_time = 0;


/* ------------------------------------------
				JAVASCRIPT   
------------------------------------------  */


document.getElementById("canvas").focus();
function loadContent() {
	$('header p:first-child span').text( int(frameRate) );
	$('header p:nth-child(2) span').text( int(X) );
	$('header p:nth-child(3) span').text( int(speed_x) );
}


//-- CLASSE MECHANT --//

class Mechant {
	public float pos_x;
	public float pos_y;
	public float speed;

	Mechant(_pos_x, _pos_y, _speed)
	{
		pos_x = _pos_x;
		pos_y = _pos_y;
		speed = _speed;
	}

	void update()
	{
		pos_x += speed;
		if (pos_x > width)
		{
			pos_x = 0;
			pos_y += 100;
		}
		if (pos_y > height - 100)
		{
			pos_y = 0;
		}
	}

	void draw()
	{
		noStroke();
		fill(196, 54, 85);
		rectMode(CENTER);
		rect(pos_x, pos_y, 20, 50);
	}
}

//----- SHOT CLASS ----//

class Shot {
	public float pos_x;
	public float pos_y;
	public float speed;
	public bool deleted = false;

	Shot(_pos_x, _pos_y, _speed)
	{
		pos_x = _pos_x;
		pos_y = _pos_y;
		speed = _speed;
	}

	void update()
	{
		pos_y -= speed;
		if (pos_y < 0)
			deleted = true;
	}

	void draw()
	{
		noStroke();
		fill(196, 54, 85);
		rectMode(CENTER);
		rect(pos_x, pos_y, 5, 10);
	}
}

//------------------------------------------//

void  setup() {
	background(15, 32, 48);
	frameRate(40);
	ProcessingInit();	
	X = width >> 1;
	
	mechants_array = new Mechant[10];
	for (int i = 0; i < 10; i++)
		mechants_array[i] = new Mechant(i * 50, 0, 5);
	
	shots_array = new ArrayList();
}

void draw() {
	update();
	loadContent();
	display();
}

//------------------------------------------//

void resize(w, h) {
	size(w, h);
	X = X > w ? w : X - border_limit;
}

void update() {
	
	speed_x += (horizontal_speed - speed_x) * .1;
	if (X > width - border_limit && speed_x > 0)
		speed_x += ((width - border_limit - X) -speed_x) * .5;
	else if (X < 80 && speed_x < 0)
		speed_x += ((border_limit - X) -speed_x) * .5;
	X += speed_x;
	
	line_pos += .9;
	line_pos = line_pos > border_limit ? 0 : line_pos;

	for (int i = 0; i < mechants_array.length; i++)
		mechants_array[i].update();
		
	Shot s;
	for (int i = 0; i < shots_array.size(); i++)
	{
		s = shots_array.get(i);
		s.update();	
		if (s.deleted)
			shots_array.remove(s);
	}
	
	if (shooting && shots_array.size() < 60)
		shots_array.add(new Shot(X, height - 120, 12));
}

void display() {
	background(15, 32, 48);
	ligneVerticales();
	for (int i = 0; i < 45; i+=4){
		turbo(i+frameCount%(6), (i+2*(frameCount%(6)))*6);
	}
	ship();

	console.log(shots_array.size());

	for (int i = 0; i < mechants_array.length; i++)
		mechants_array[i].draw();
	for (int i = 0; i < shots_array.size(); i++)
		shots_array.get(i).draw();
}

void keyPressed()
{
  if (key == CODED) {
	if (keyCode == LEFT) {
	  horizontal_speed = -20;
	} else if (keyCode == RIGHT) {
	  horizontal_speed = 20;
	}
  }
  
  if (key == ' ')
  	shooting = true;
}

void keyReleased()
{
   if (key == CODED) {
	if (keyCode == LEFT || keyCode == RIGHT) {
	  horizontal_speed = 0;
	}
  }
  if (key == ' ')
  	shooting = false;
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
