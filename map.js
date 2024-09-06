function drawCurrentMap()
{
    for(let x = 0; x <= mapW; x++)
    {
        for(let y = 0; y <= mapH; y++)
        {
            if(gameMap[toIndex(x,y)] >=0)
            {
                var tile = tileTypes[gameMap[toIndex(x,y)]];
                ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
                    x*tileW, y*tileH, tileW, tileH);
    
                // if(y >= mapH-1) { ctx.fillStyle = 'black'; }
                // else { ctx.fillStyle = 'rgba(0,0,0,0.5'; }
                // ctx.fillRect(x*tileW, y*tileH, tileW, tileH);
            }
        }
    }
}

function shuffle()
{
    if(hasStarted)
    {
        for(let y = 0; y < mapH; y++)
        {
            let oddX = randomInt(availableSounds);
            let evenX = randomInt(availableSounds-1)+1;
            for(let x = 0; x < mapW; x++)
            {
                if(x % 2 != 0) { gameMap[toIndex(x,y)] = oddX; }
                else { gameMap[toIndex(x,y)] = evenX; }
            }
        }
        // for(let i = 0; i < mapW*mapH; i++) { gameMap[i] = randomInt(availableSounds); }
    }

}

function clearAll()
{
    if(hasStarted)
    {
        for(let i = 0; i < gameMap.length; i++) { gameMap[i] = 0; } 
    }

}

function drawGridlines()
{
    for(let x = 0; x <= mapW; x++)
    {
        for(let y = 0; y <= mapH; y++)
        {
            //verts
            ctx.lineWidth = '1';
            if(x == 0)
            {
                ctx.beginPath();
                ctx.moveTo((x*tileW)+1, y*tileH);
                ctx.lineTo((x*tileW)+1, (y*tileH)+tileH);
                ctx.stroke();
                ctx.closePath();
            }
            else if(x == mapW)
            {
                ctx.beginPath();
                ctx.moveTo((x*tileW)-1, y*tileH);
                ctx.lineTo((x*tileW)-1, (y*tileH)+tileH);
                ctx.stroke();
                ctx.closePath();
            }
            else
            {
                ctx.beginPath();
                ctx.moveTo(x*tileW, y*tileH);
                ctx.lineTo(x*tileW, (y*tileH)+tileH);
                ctx.stroke();
                ctx.closePath();
            }

            //horiz
            if(y == mapH)
            {
                ctx.beginPath();
                ctx.moveTo(0, y*tileH-2);
                ctx.lineTo(x*tileW, y*tileH-2);
                ctx.stroke();
                ctx.closePath();
            }
            else
            {
                ctx.beginPath();
                ctx.moveTo(0, (y*tileH));
                ctx.lineTo(x*tileW, (y*tileH));
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function drawStepSequencer()
{
    let thisIndex = [stepIndex[0], stepIndex[1]]
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.fillRect(thisIndex[0]*tileW,thisIndex[1]*tileH,tileW,tileH*numberOfLayers);

    //shade out systems that are not active
    let colNumber = mapH/numberOfLayers;
    for(let i = 0; i < colNumber; i++)
    {
        if(i*numberOfLayers != stepIndex[1]) {
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fillRect(0,i*numberOfLayers*tileH,tileW*mapW,tileH*numberOfLayers);   
        }
    }
}

function drawSectionLines(n)
{
    ctx.lineWidth = '8';
    for(let y = 0; y < mapH; y++)
    {
        if(y % n == 0)
        {
            ctx.beginPath();
            ctx.moveTo(0, y*tileH-4);
            ctx.lineTo(mapW*tileW, y*tileH-2);
            ctx.stroke();
            ctx.closePath();
        }
    }
}