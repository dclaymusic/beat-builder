/* All functions that involve CSS and handling menu items */

function startGame() { 

    // let infoimg = document.getElementById('infoimg');
    // infoimg.style.visibility = 'visible';

    let loadscreen = document.querySelector('#loadscreen');
    loadscreen.style.visibility = 'hidden';

    document.querySelector('#soundtitle').style.visibility = 'visible';
    document.querySelector('#sounddiv').style.visibility = 'visible';
    document.querySelector('#play').style.visibility = 'visible';
    document.querySelector('#tempodiv').style.visibility = 'visible';
    document.querySelector('#shuffle').style.visibility = 'visible';
    document.querySelector('#clear').style.visibility = 'visible';
    document.querySelector('#layerdiv').style.visibility = 'visible';



    //masterGain.gain.linearRampToValueAtTime(-0.001, (audioCtx.currentTime)); 
    //setTimeout(() => { masterGain.gain.linearRampToValueAtTime(1, (audioCtx.currentTime) + 5.0); }, 5000);

    hasStarted = true;

}

function frameRate()
{
    ////////////frame rate check
    ctx.fillStyle = "#ff0000";
    ctx.font = "30px Andale Mono";
    ctx.textAlign = "start";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
}

function toggleInfo()
{ 
    if(hasStarted)
    {
        // infoWindow = !infoWindow; 

        // let loadscreen = document.getElementById('loadscreen');
        // if(loadscreen.style.visibility == 'visible')
        // { loadscreen.style.visibility = 'hidden'; 
        //     document.getElementById('infotext').style.visibility = 'hidden';
        // }
        // else 
        // { 
        //     document.getElementById('loadbarfull').style.visibility = 'hidden';
        //     document.getElementById('loadbarloading').style.visibility = 'hidden';
        //     document.getElementById('loadtext').style.visibility = 'hidden';
        //     loadscreen.style.visibility = 'visible'; 
        //     document.getElementById('infotext').style.visibility = 'visible';
        // }
    }
}

function togglePlay() {

    if(hasStarted)
    {
        isPlaying = !isPlaying;

        if(isPlaying)
        {
            document.getElementById("play").innerHTML = 'Stop';
            stepIndex = [0,0];
            let tile = tileTypes[gameMap[toIndex(stepIndex[0],stepIndex[1])]]
            selectSnd(tile.index);
            timer = setInterval(playSequence, tempo); // this will be in "MAP" file
            // document.getElementById('play').innerHTML = 'Stop';
        }
        else
        {
            // document.getElementById("tempo").disabled = false;
            // sequenceStep = 0;
            // document.getElementById('play').innerHTML = 'Play';
            // for(let i = 0; i < songImages.length; i++)
            // {
            // 	document.getElementById(songImages[i]).style.outline = 'none';
            // }
            document.getElementById("play").innerHTML = 'Play';
            clearInterval(timer);
        }

    }
}


function toggleLayers()
{
    if(hasStarted)
    {
        if(isPlaying) { togglePlay(); }
        let sel = document.getElementById('layers');
        if(sel.value == '1') { numberOfLayers = 1; }
        if(sel.value == '2') { numberOfLayers = 2; }
        if(sel.value == '3') { numberOfLayers = 3; }
        if(sel.value == '6') { numberOfLayers = 6; }

    }
}

// function resetTimer()
// {
// 	// sequenceStep = 0;
// 	// document.getElementById('play').innerHTML = 'Play';
// 	// for(let i = 0; i < songImages.length; i++)
// 	// {
// 	// 	document.getElementById(songImages[i]).style.outline = 'none';
// 	// }
// 	// clearInterval(timer);
// }


function toIndex(x, y)
{
	return((y * mapW) + x);
}

function fromIndex(m)
{
	y = Math.floor(m / mapW);
	x = (m % mapW);
	return([x, y]);
}

function randomInt(max)
{
	rand_val = Math.floor(Math.random() * Math.floor(max + 1))
	return rand_val;
}

function loadImages()
{    
	tileset = new Image();
	
	tileset.onerror = function()
	{
		ctx = null;
		alert("Failed loading tileset.");
	};

	tileset.onload = function() { tilesetLoaded = true; }
	tileset.src = tilesetURL;
}