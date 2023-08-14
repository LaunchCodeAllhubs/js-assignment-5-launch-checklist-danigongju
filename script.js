// Write your JavaScript code here!

const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets = myFetch();
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = planetsReturned;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    let planetChoice = pickPlanet(listedPlanets);

    addDestinationInfo(planetChoice);
   })
   formSubmission();
})
