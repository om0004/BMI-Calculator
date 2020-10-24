document.getElementById("head").style.color = "blue";
document.getElementById("head").style.textAlign="center";
var e=0;

function cal()
{
var height=document.getElementById("height").value;
var weight=document.getElementById("weight").value;
	if(height>0&&weight>0)
		e++;
	if(e==0)
		alert("fill all fields!");
	var check=document.getElementById("o").value;
	if(check=="feet")
	{
		var f=parseInt(height);
		console.log(f);
		var i=(height-f)*100;
		console.log(f);
		var m=((f*12)+i)*0.0254;
		console.log(m);
		var bmi=weight/(m*m);
		document.getElementById("result").value=bmi;
		e=0;
	}
	else
	{
		var bmi=weight/(height*height);
		document.getElementById("result").value=bmi;
		e=0;
	}

}