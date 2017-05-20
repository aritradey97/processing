function GULI(x,y)
{
	this.y=height/10;
	this.x=x;
	this.y=y;
	this.r=10;
	this.display=function()
	{
		fill(0,0,255);
		ellipse(this.x,this.y,this.r,this.r);
	}
	this.move=function(dir)
	{
		this.y=this.y-dir;
	}
}
