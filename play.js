function playSequence()
{

    //linear sequence
    if(stepIndex[0] >= mapW-1) {   
        stepIndex[0] = 0; 
        if(stepIndex[1] >= mapH-numberOfLayers) {

            stepIndex[1] = 0; 
        }
        else { 
            stepIndex[1] += numberOfLayers; 
        }
    }
    else { stepIndex[0]++; }

    for(let y = 0; y < numberOfLayers; y++)
    {
        let tile = tileTypes[gameMap[toIndex(stepIndex[0],stepIndex[1]+y)]];
        selectSnd(tile.index);
    }
    //drawing hoverover handled in main function of index.html    
}

