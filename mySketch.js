function setup() {
	createCanvas(windowWidth, windowHeight);
	print(windowWidth);
	print(windowHeight);
	print(windowWidth/2);
	print(windowHeight/2);
}

function draw() {
	background(255);
	rectMode(CENTER);
	rect(mouseX, mouseY, windowWidth/2, windowHeight/2);
	fill(163);
	line(0, 0, mouseX-windowWidth/4, mouseY-windowHeight/4);
	line(windowWidth, windowHeight, mouseX+windowWidth/4, mouseY+windowHeight/4);	
	line(0, windowHeight, mouseX-windowWidth/4, mouseY+windowHeight/4);
	line(windowWidth, 0, mouseX+windowWidth/4, mouseY-windowHeight/4);
}
