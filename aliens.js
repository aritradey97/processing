function ALIENS(x,y)
{
	this.x=x;
	this.y=y;
	this.r=60;
	this.display=function()
	{
		fill(255,0,0);
		ellipse(this.x,this.y,this.r,this.r);
	}
	this.move=function()
	{
		this.y=this.y+random(4);
	}
}
