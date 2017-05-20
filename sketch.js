var ship;
var aliens=[];
var guli=[];
var count=0;
function setup()
{
	createCanvas(600,400);
	ship=new SHIP();
	for(var i=0;i<7;i++)
		aliens[i]=new ALIENS(70*i+70,70);
	
}
function draw()
{
	background(50);
	ship.display();
	for(var i=0;i<aliens.length;i++)
	{
		aliens[i].display();
		aliens[i].move();
		if(aliens[i].y>340)
		{
			textSize(100);
			text("Game Over",23,height/2);
			ship.destroy();
		}
		
	}
	for(var i=0;i<guli.length;i++)
	{
		guli[i].display();
		guli[i].move(2);
		for(var j=0;j<aliens.length;j++)
		{
			var d=dist(aliens[j].x,aliens[j].y,guli[i].x,guli[i].y);
			if(d<(aliens[j].r+guli[i].r))
			{
				aliens.splice(j,1);
				
				
			}
		}
	}
	
}	

function keyPressed()
{
		if(keyCode===LEFT_ARROW)
			ship.move(-10);
		else if(keyCode===RIGHT_ARROW)
			ship.move(10);
		else if(keyCode===32)
		{
			var SingleGuli=new GULI(ship.x,height-60);
			guli.push(SingleGuli);
			
		}	
}