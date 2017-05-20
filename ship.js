function SHIP()
{
	this.x=width/2;
	this.col=255;
	this.display=function()
	{
		noStroke();
		fill(this.col);
		rect(this.x,height-60,20,60);
		
	}
	this.move=function(direction)
	{
		this.x+=direction*5;
	}
	this.destroy=function()
	{
		this.col=50;
	}
}