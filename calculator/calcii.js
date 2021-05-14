function getHistory()
{
	return document.getElementById("history value").innerText;
}
function printHistory(num)
{
	document.getElementById("history value").innerText=num;
}
function getOutput()
{
	return document.getElementById("output value").innerText;
}
function printOutput(num)
{
	if(num==" ")
	{
		document.getElementById("Output Value").innerText=num
	}
	else
	{
	document.getElementById("output value").innerText= getFormattedNumber(num);
	}
}
function getFormattedNumber(num)
{
	var n= Number(num);
	var values = n.toLocaleString("en");
	return values;
}

function getreverseNumberFormat(num){
	 return Number(num.replace(/,/g/''));
}


var operator= document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
	operator[i].addEventListener('click',function(){
	if(this.id=="clear")
	{
		printHistory("");
		printOutput("");
	}
	if(this.id=="backspace")
	{
		var output= getreverseNumberFormat(getOutput()).toString()
		if(output)
		{
			output=output.substr(0,output.length-1);
			printOutput(output);
		}
	  

	}
	})
	
var number= document.getElementsByClassName("number");
for(var i=0;i<12;i++)
{
	number[i].addEventListener('click',function()
	{
		var output=getFormattedNumber(getOutput());
		if(output!= NaN)
		{
	    output=output+this.id;
		printOutput(output);
		}
	})
}