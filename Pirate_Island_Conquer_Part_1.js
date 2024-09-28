//https://www.codewars.com/kata/59604925a68b04598e00001e

function conquerIsland(map) {
   let distancesU = [];
    let distancesM = [];
    
    for (let i = 0; i < map.length; i++) {
        for (let ii = 0; ii < map[i].length; ii++) {
            if (map[i][ii] === "u") {
                distancesU.push([i, ii]);
            }else if (map[i][ii] === "m") {
                distancesM.push([i, ii]);
            }
        }
    }

    if (distancesU.length > 0) {
        return getShortestDistances(distancesU);
    } else if (distancesM.length > 0) {
        return getShortestDistances(distancesM);
    } else {
        return [];
    }
}


function getShortestDistances(cords) {
    let minDistance = 14;
    let candidates = [];

    for (let i = 0; i < cords.length; i++) {

        let distance = cords[i][0]+cords[i][1]

        if (distance < minDistance) {
            minDistance = distance;
            candidates = [cords[i]];
        } else if (distance === minDistance) {
            candidates.push(cords[i]);
        }
    }

    return candidates;
}