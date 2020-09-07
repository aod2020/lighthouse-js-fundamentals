const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];
let goodStations = [];

const chooseStations = function(stations){
    for (let station of stations){
        if (station[1] >= 20 && station[2] == "school") {
           goodStations.push(station[0]);
        }
        else if (station[1] >= 20 || station[2] == "community center" ){
            goodStations.push(station[0]);
        }
    }
    return goodStations;
}

console.log(chooseStations(stations));