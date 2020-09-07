const moves = /*['north', 'north', 'west', 'west', 'north', 'east','north'];*/
[
    'south',
    'south',
    'south',
    'south',
    'south',
    'north',
    'south'
  ];
let position = [0,0];

const finalPosition = function (moves){
    for (let move of moves){
        if (move === "north"){
            position[1] = position[1] + 1;
        }
        else if (move === "south"){
            position[1] = position[1] - 1;
        }
        else if (move === "east"){
            position[0] = position[0] + 1;
        }
        else if (move === "west"){
            position[0] = position[0] - 1;
        }  
    }
    return position;
}

let result = finalPosition(moves);
console.log(result);