// Functionize Minecraft Fishing Start Code

//HTML variables
let resultIMG = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

//Fish Count
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  console.log("Fish");

  //DetermineCharacter
  let character = document.getElementById("character-select").value;
  console.log(character);

  if (character === "steve") {
    //Steve Fish Sim
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultIMG.src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod = numCod + 1;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.9) {
      resultIMG.src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon = numSalmon + 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      resultIMG.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical = numTropical + 1;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultIMG.src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuffer = numPuffer + 1;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Alex Fish Sim
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultIMG.src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod = numCod + 1;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultIMG.src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon = numSalmon + 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultIMG.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical = numTropical + 1;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultIMG.src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuffer = numPuffer + 1;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "villager") {
    // Villager Fish Sim
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultIMG.src = "img/Raw-Cod.png";
      console.log("Cod");
      numCod = numCod + 1;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.5) {
      resultIMG.src = "img/Raw-Salmon.png";
      console.log("Salmon");
      numSalmon = numSalmon + 1;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      resultIMG.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numTropical = numTropical + 1;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultIMG.src = "img/Pufferfish.png";
      console.log("Puffer");
      numPuffer = numPuffer + 1;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
}
