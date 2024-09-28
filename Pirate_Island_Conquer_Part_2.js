//https://www.codewars.com/kata/5962b98c2e8c8b02fa0000b4

function conquerIsland(map) {
    let cordsU = [];
    let cordsM = [];
    let cordsP = [];
     
    for (let i = 0; i < map.length; i++) {
        for (let ii = 0; ii < map[i].length; ii++) {
            let island = map[i][ii];
            if(island==="u"){
                cordsU.push([i,ii])
            }
            if(island==="m"){
                cordsM.push([i,ii])
            }
            if(island==="p"){
                cordsP.push([i,ii])
            }
        }
    }

    if (cordsU.length > 0 & cordsP.length>0) {
        return getShortestDistances(cordsU, cordsP);
    } else if (cordsM.length > 0 & cordsP.length>0) {
        return getShortestDistances(cordsM, cordsP);
    } else {
        return [];
    }
 }
 
 
function getShortestDistances(cordsCandidates, pirateIslands) {
    let shortestDistance = 14;
    let candidates = [];
 
    for (let p = 0; p < pirateIslands.length; p++) {
        for (let i = 0; i < cordsCandidates.length; i++) {  

            let distance = Math.abs(cordsCandidates[i][0]-pirateIslands[p][0]) + Math.abs(cordsCandidates[i][1]-pirateIslands[p][1]);
    
            if (distance < shortestDistance) {
                shortestDistance = distance;
                candidates = [cordsCandidates[i]];

            } else if (distance === shortestDistance) {
                candidates.push(cordsCandidates[i]);

            }
        }   
    }
 
    return Array.from(new Set(candidates));
}
