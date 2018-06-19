
var locatx = 0;
var locaty = 0;
var nullString = "";
var delay;
var cells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function doClick(i, j)
{
	var k = 0;
	if((i == locatx && (j+1 == locaty || j-1 == locaty)) || (j == locaty && (i+1 == locatx || i-1 == locatx)))
	{
		var locat = "cell" + locatx + locaty;
		var change = "cell" + i + j;
		var loca = document.getElementById( locat );
		var chang = document.getElementById( change );
		loca.innerHTML = chang.innerHTML;
		chang.innerHTML = "";
		console.log(i*4+j);
		console.log(locatx*4+locaty);
		console.log(cells[i*4+j] + " " + cells[locatx*4+locaty]);
		k = cells[i*4+j];
		cells[i*4+j] = cells[locatx*4+locaty];
		cells[locatx*4+locaty] = k;
		console.log("check");
		locatx = i;
		locaty = j;
	}
	console.log(cells);
	if(locatx == 3 && locaty == 3)
		check();
}

function check()
{
	console.log("in check");
	var flat = 0;
	for(var i = 0; i < 4; i++)
	{
		for(var j = 0; j < 4; j++)
		{
			if(cells[i*4+j] != i * 4 + j + 1)
			{
				console.log(i*4+j);
				console.log(i * 4 + j + 1);
				flat = 1;
			}
		}
	}
	if(cells[12] != 13 ||
	   cells[13] != 14 ||
	   cells[14] != 15 )
	   {
	   flat = 1;
	   console.log("!!");
	   }
	if(flat == 0)
	{
		delay = setTimeout(alert, 100, "恭喜你! 成功還原哆啦A夢!");
	}
}

function restart()
{
	for(var i = 0; i < 4; i++)
	{
		for(var j = 0; j < 4; j++)
		{
			var k = 16 - (i * 4 + j);
			var t = "";
			if(k < 10)
				t = "0" + k;
			else
				t = k;
			console.log(t);
			if(t == '16')
			{
				
			}
			else
				document.getElementById( "cell" + i + j ).innerHTML = "<img src = 'img/" + t + ".png'>";
		}
	}
	for(var i = 0; i < 16; i++)
		cells[i] = 16-i;
	console.log(cells);
	document.getElementById( "cell00" ).innerHTML = "";
	locatx = 0;
	locaty = 0;
}

function gotoLastStep()
{
	for(var i = 0; i < 4; i++)
	{
		for(var j = 0; j < 4; j++)
		{
			var k = i * 4 + j + 1;
			var t = "";
			if(k < 10)
				t = "0" + k;
			else
				t = k;
			cells[k-1] = k;
			if(k == 16)
				break;
			document.getElementById( "cell" + i + j ).innerHTML = "<img src = 'img/" + t + ".png'>";
		}
	}
	document.getElementById( "cell30" ).innerHTML = "<img src = 'img/13.png'>";
	document.getElementById( "cell31" ).innerHTML = "<img src = 'img/14.png'>";
	document.getElementById( "cell32" ).innerHTML = "";
	document.getElementById( "cell33" ).innerHTML = "<img src = 'img/15.png'>";
	locatx = 3;
	locaty = 2;
	cells[14] = 16;
	cells[15] = 15;
	console.log(cells);
}

function importData()
{
	var msg = document.getElementById( "msg" );
	var filess = ["https://api.myjson.com/bins/yni16", "https://api.myjson.com/bins/worqi", "https://api.myjson.com/bins/ude6y"];
	var files = Math.floor( Math.random() * 3 );
	$.getJSON(filess[files], function(json)
	{
		var c = 0;
		$.each(json.puzzleData, function(x, f)
		{
			console.log(f);
			c++;
		});
		console.log("files: " + filess[files]);
		console.log("count: " + c);
		var map = Math.floor( Math.random() * c );
		console.log("map: " + map);
		for(var i = 0; i < 4; i++)
		{
			for(var j = 0; j < 4; j++)
			{
				if(json.puzzleData[map][i][j] == "")
				{
					locatx = i;
					locaty = j;
					cells[i*4+j] = "16";
					document.getElementById( "cell" + i + j ).innerHTML = "";
				}
				else
				{
					document.getElementById( "cell" + i + j ).innerHTML = "<img src = 'img/" + json.puzzleData[map][i][j] + ".png'>";
					cells[i*4+j] = json.puzzleData[map][i][j];
				}
			}
		}
		console.log(json.puzzleData[map]);
		console.log(cells);
	});
}