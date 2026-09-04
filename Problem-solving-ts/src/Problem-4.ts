type Light = "red"|"yellow"|"green"; 

function getTrafficAction(light: Light): string {

    return light==="red"?"Stop" : light==="yellow" ? "Slow Down" : light==="green"? "Go" : "Invalid Sign";

}

console.log(getTrafficAction("red"))