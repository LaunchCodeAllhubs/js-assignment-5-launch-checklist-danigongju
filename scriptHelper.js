// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const target = document.getElementById("missionTarget");

    target.innerHTML = ` 
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (typeof Number(testInput) === "number") {
        return "Is a Number";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


    let status = document.getElementById("launchStatus");
    let pilotStat = document.getElementById("pilotStatus");
    let copilotStat = document.getElementById("copilotStatus");
    let fuelStat = document.getElementById("fuelStatus");
    let cargoStat = document.getElementById("cargoStatus");



    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields requrired!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" ||
        validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure all input fields are valid!");
    } else {
        list.style.visibility = "visible";
        pilotStat.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStat.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            fuelStat.innerHTML = "Fuel level high enough for launch";
            cargoStat.innerHTML = "Cargo mass low enough for launch";
            status.innerHTML = "Shuttle is Ready for Launch";
            status.style.color = "#419F6A";
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            cargoStat.innerHTML = "Cargo mass too heavy for launch";
            fuelStat.innerHTML = "Fuel level high enough for launch";
            status.innerHTML = "Shuttle Not Ready for Launch";
            status.style.color = "#C7254E";
        } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelStat.innerHTML = "Fuel level too low for launch";
            cargoStat.innerHTML = "Cargo mass low enough for launch";
            status.innerHTML = "Shuttle Not Ready for Launch";
            status.style.color = "#C7254E";
        } else {
            fuelStat.innerHTML = "Fuel level too low for launch";
            cargoStat.innerHTML = "Cargo mass too heavy for launch";
            status.innerHTML = "Shuttle Not Ready for Launch";
            status.style.color = "#C7254E";
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();

    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNum = Math.floor(Math.random() * planets.length);
    return planets[randomNum];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
