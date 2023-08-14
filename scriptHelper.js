// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    testInput = "";
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (testInput === Number) {
        return "Is a Number";
    }
		};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let list = getElementById("faultyItems");
    let pilotName = getElementById("pilotStatus");
    let copilotname = getElementById("copilotStatus");

    document.addEventListener("submit", function(event) {

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ) {
        alert("All fields requrired!");
        event.preventDefault();
        
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" ) {
        alert("Invalid input. Pilot and CoPilot must be a word!");
        event.preventDefault();
    } else if (validateInput(fuelLevel) === "Is a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Invalid input. Cargo Level and Fuel Level must be a number!");
        event.preventDefault();
    }
    })
    

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
