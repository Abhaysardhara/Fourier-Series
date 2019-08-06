let time = 0;
let wave= [];

let slider;

function setup()
{
	createCanvas(400, 400);
	slider = createSlider(1, 10, 4);
}

function draw()
{	
	background(0);
	translate(100, 150);
	let radius = 50;

	let x = 0;
	let y = 0;

	for(let i=0; i<slider.value(); i++)
	{
		let prevx = x;
		let prevy = y;
		let n = i * 2 + 1;
		let radius = 50*(4 / (n * PI))
		x  += radius * cos(n* time);
		y += radius * sin(n * time);	

		stroke(255, 100);
		noFill();
		ellipse(prevx, prevy, 2 * radius);

		fill(255);
		stroke(255);
		line(prevx, prevy, x, y);
		// ellipse(prevx, prevy , 8);

	}
	wave.unshift(y);

	translate(150, 0);
	line(x-150, y, 0, wave[0]);

	beginShape();
	noFill();
	for(let i=0; i< wave.length; i++)
	{
		vertex(i, wave[i]);
	}
	endShape();
	
	time += 0.03;

	if(wave.length > 150)
	{
		wave.pop();
	}

}