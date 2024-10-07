// This is the scripting for setting and retrieveing from localStorage!
/* The sample card Shane coded has two inputs: Calories and sugar. Thus, since there are three diets, I will
need to retrieve input data six times. At this time there is only one card with two inputs, neither of which
has an id. */

// Setting input variables
/* The diets are: keto, mediterranean, and vegetarian, abbreviated to ket, med, and veg respectively. 
The inputs are for calories and sugar, abbreviated to cal and sug respectively. */
const ketCal = document.querySelector("#ketCal");
const ketSug = document.querySelector("#ketSug");
const medCal = document.querySelector("#medCal");
const medSug = document.querySelector("#medSug");
const vegCal = document.querySelector("#vegCal");
const vegSug = document.querySelector("#vegSug");
// const displayK = document.querySelector("#ketTotal"); an input tag is too small for both inputs
// const displayM = document.querySelector("#medTotal"); need to diplay them separately
// const displayV = document.querySelector("#vegTotal");

// These are the displays for each P tag for each card
const displayKC = document.querySelector("#ketTotalC");
const displayKS = document.querySelector("#ketTotalS");
const displayMC = document.querySelector("#medTotalC");
const displayMS = document.querySelector("#medTotalS");
const displayVC = document.querySelector("#vegTotalC");
const displayVS = document.querySelector("#vegTotalS");
// Necessary for showing the calorie/sugar totals (setting it to 0 results in 0 displaying on page load)
let sumKC = Number(localStorage.getItem("sumKC"));
let sumKS = Number(localStorage.getItem("sumKS"));
let sumMC = Number(localStorage.getItem("sumMC"));
let sumMS = Number(localStorage.getItem("sumMS"));
let sumVC = Number(localStorage.getItem("sumVC"));
let sumVS = Number(localStorage.getItem("sumVS"));
// This is for the reset buttons; this Boolean determines the kind of object created (empty or otherwise)
let isReset = false;

// Creating objects for: Keto, Mediterranean, and Vegetarian cards
// Setting fields to 0 when reset is pressed

function ketEntry(){
    if(isReset === false) {
        const ketPost = {
            calCount: ketCal.value,
            sugCount: ketSug.value,
        };
        return ketPost;
    }else{
        const ketPost = {
            calCount: 0,
            sugCount: 0,
        };
        return ketPost;
    };
};

function medEntry(){
    if(isReset === false){
        const medPost = {
            calCount: medCal.value,
            sugCount: medSug.value,
        };
        return medPost;
    }else{
        const medPost = {
            calCount: 0,
            sugCount: 0,
        };
        return medPost;
    };
};

function vegEntry(){
    if(isReset === false) {
        const vegPost = {
            calCount: vegCal.value,
            sugCount: vegSug.value,
        };
        return vegPost;
    }else{
        const vegPost = {
            calCount: 0,
            sugCount: 0,
        };
        return vegPost;
    };
};

// setting items to localStorage
// Also need to add for total

function savePost() {
    const element = event.target;
    //console.log("This is the save event");
    if(element.matches("#keto")) {
        let kEntry = ketEntry();
        localStorage.setItem("keto", JSON.stringify(kEntry));
    }else if(element.matches("#med")) {
        let mEntry = medEntry();
        localStorage.setItem("mediterranean", JSON.stringify(mEntry));
    }else if(element.matches("#veg")) {
        let vEntry = vegEntry();
        localStorage.setItem("vegetarian", JSON.stringify(vEntry));
    };
};

// retrieving items from localStorage

function retrieve() {
    const element = event.target;
    if(element.matches("#keto")){
        const lastK = JSON.parse(localStorage.getItem("keto"));
        // displayK.value = `Calories: ${lastK.calCount} and Sugar(in grams): ${lastK.sugCount}`;
        //console.log(lastK.calCount);
        // adding
        sumKC = sumKC + Number(lastK.calCount);
        sumKS = sumKS + Number(lastK.sugCount);
        //console.log(`Keto cal count sum ${sumKC}`);
        displayKC.textContent = sumKC;
        displayKS.textContent = sumKS;
        localStorage.setItem("sumKC", sumKC);
        localStorage.setItem("sumKS", sumKS);
        //console.log("The calories:", lastK.calCount);
        ketCal.value = "";
        ketSug.value = "";
        
    }else if(element.matches("#med")){
        const lastM = JSON.parse(localStorage.getItem("mediterranean"));
        // displayM.value = `Calories: ${lastM.calCount} and Sugar(in grams): ${lastM.sugCount}`;
        sumMC = sumMC + Number(lastM.calCount);
        sumMS = sumMS + Number(lastM.sugCount);
        displayMC.textContent = sumMC;
        displayMS.textContent = sumMS;
        localStorage.setItem("sumMC", sumMC);
        localStorage.setItem("sumMS", sumMS);
        medCal.value = "";
        medSug.value = "";
        
    }else if(element.matches("#veg")){
        const lastV = JSON.parse(localStorage.getItem("vegetarian"));
        // displayV.value = `Calories: ${lastV.calCount} and Sugar(in grams): ${lastV.sugCount}`;
        sumVC = sumVC + Number(lastV.calCount);
        sumVS = sumVS + Number(lastV.sugCount);
        displayVC.textContent = sumVC;
        displayVS.textContent = sumVS;
        localStorage.setItem("sumVC", sumVC);
        localStorage.setItem("sumVS", sumVS);
        vegCal.value = "";
        vegSug.value = "";
        
    };
};

// Function for displaying the stored sums on,page load, hopefully

displayKC.textContent = localStorage.getItem("sumKC");
displayKS.textContent = localStorage.getItem("sumKS");
displayMC.textContent = localStorage.getItem("sumMC");
displayMS.textContent = localStorage.getItem("sumMS");
displayVC.textContent = localStorage.getItem("sumVC");
displayVS.textContent = localStorage.getItem("sumVS");

// Setting the event listeners
/* I do not know if there will be a submit button for each card. As it stands, the current card has two inputs
and no means of submitting. In case this is, in fact, the desired layout, I will have to trigger the submit
when the user clicks off of the card. */
/* Since buttons were added, I'll make the event a click event. I cannot use button as a query Selector,
since button is used in the nav. Maybe use a class? */

// dietCard.addEventListener("click", savePost);
// dietCard.forEach("click", savePost);
const dietCards = document.querySelectorAll(".enter");
//console.log(`dietCards: ${dietCards}; its length: ${dietCards.length}`);
// console.log(`ketCal: ${ketCal.cla}`);
for(let i = 0; i < dietCards.length; i++){
    //console.log("In the for loop");
    //console.log(`This is iteration number ${i} and ${dietCards[i]}`);
    //console.log(`How about properties? ${dietCards[i].className}`);
    dietCards[i].addEventListener("click", function (event) {
        event.preventDefault();
        savePost(); 
        retrieve();
    });
};

//Reset value to zero for new logging info

/* That last push introduced two issues:
1) Reset butons are affecting the wrong card
2) Reset buttons do not reset
For #1, event.target should resolve the issue. Since Shane used querySelector, the function was applied
to only the first button. Clicking on the second and third reset buttons does, unsurprisingly, nothing.
Using querySelectorAll will be an easy fix.
For #2, the function needs to set the appropriate sum to 0. As it stands, the function sets the
textContent to 0 and not the variable that holds the sum. It is a psuedo-reset, if you will.*/

// You need to: Reset localStorage to 0 AND reset the sums to 0
function resetCard() {
    const element = event.target;
    isReset = true;
    if(element.matches("#resetK")){
        // localStorage
        let kEntry = ketEntry();
        localStorage.setItem("keto", JSON.stringify(kEntry));
        // the sums
        localStorage.setItem("sumKC", 0);
        localStorage.setItem("sumKS", 0);
        // display
        sumKC = Number(localStorage.getItem("sumKC"));
        sumKS = Number(localStorage.getItem("sumKS"));
        displayKC.textContent = sumKC;
        displayKS.textContent = sumKS;
        // the inputs
        ketCal.value = "";
        ketSug.value = "";
    }else if(element.matches("#resetM")){
        // localStorage
        let mEntry = medEntry();
        localStorage.setItem("mediterranean", JSON.stringify(mEntry));
        // the sums
        localStorage.setItem("sumMC", 0);
        localStorage.setItem("sumMS", 0);
        // display
        sumMC = Number(localStorage.getItem("sumMC"));
        sumMS = Number(localStorage.getItem("sumMS"));
        displayMC.textContent = sumMC;
        displayMS.textContent = sumMS;
        // the inputs
        medCal.value = "";
        medSug.value = "";
    }else if(element.matches("#resetV")){
        // localStorage
        let vEntry = vegEntry();
        localStorage.setItem("vegetarian", JSON.stringify(vEntry));
        // the sums
        localStorage.setItem("sumVC", 0);
        localStorage.setItem("sumVS", 0);
        // display
        sumVC = Number(localStorage.getItem("sumVC"));
        sumVS = Number(localStorage.getItem("sumVS"));
        displayVC.textContent = sumVC;
        displayVS.textContent = sumVS;
        // the inputs
        vegCal.value = "";
        vegSug.value = "";
    };
    isReset = false;
};

const resetButtons = document.querySelectorAll(".reset");

for(let i=0;i<resetButtons.length;i++){
    resetButtons[i].addEventListener("click" , function(event) {
        resetCard();
    })};
