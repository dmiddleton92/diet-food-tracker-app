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
const displayKC = document.querySelector("#ketTotalC");
const displayKS = document.querySelector("#ketTotalS");
const displayMC = document.querySelector("#medTotalC");
const displayMS = document.querySelector("#medTotalS");
const displayVC = document.querySelector("#vegTotalC");
const displayVS = document.querySelector("#vegTotalS");
let sumKC = 0;
let sumKS = 0;
let sumMC = 0;
let sumMS = 0;
let sumVC = 0;
let sumVS = 0;

// Creating objects for: Keto, Mediterranean, and Vegetarian cards

function ketEntry(){
    const ketPost = {
        calCount: ketCal.value,
        sugCount: ketSug.value,
    };
    return ketPost;
};

function medEntry(){
    const medPost = {
        calCount: medCal.value,
        sugCount: medSug.value,
    };
    return medPost;
};

function vegEntry(){
    const vegPost = {
        calCount: vegCal.value,
        sugCount: vegSug.value,
    };
    return vegPost;
};

// setting items to localStorage
// Also need to add for total

function savePost() {
    const element = event.target;
    console.log("This is the save event");
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
        console.log(lastK.calCount);
        // adding
        sumKC = sumKC + Number(lastK.calCount);
        sumKS = sumKS + Number(lastK.sugCount);
        console.log(`Keto cal count sum ${sumKC}`);
        displayKC.textContent = sumKC;
        displayKS.textContent = sumKS;
        console.log("The calories:", lastK.calCount);
        
    }else if(element.matches("#med")){
        const lastM = JSON.parse(localStorage.getItem("mediterranean"));
        // displayM.value = `Calories: ${lastM.calCount} and Sugar(in grams): ${lastM.sugCount}`;
        sumMC = sumMC + Number(lastM.calCount);
        sumMS = sumMS + Number(lastM.sugCount);
        displayMC.textContent = sumMC;
        displayMS.textContent = sumMS;
        
    }else if(element.matches("#veg")){
        const lastV = JSON.parse(localStorage.getItem("vegetarian"));
        // displayV.value = `Calories: ${lastV.calCount} and Sugar(in grams): ${lastV.sugCount}`;
        sumVC = sumVC + Number(lastV.calCount);
        sumVS = sumVS + Number(lastV.sugCount);
        displayVC.textContent = sumVC;
        displayVS.textContent = sumVS;

    };
};

// Setting the event listeners
/* I do not know if there will be a submit button for each card. As it stands, the current card has two inputs
and no means of submitting. In case this is, in fact, the desired layout, I will have to trigger the submit
when the user clicks off of the card. */
/* Since buttons were added, I'll make the event a click event. I cannot use button as a query Selector,
since button is used in the nav. Maybe use a class? */

// dietCard.addEventListener("click", savePost);
// dietCard.forEach("click", savePost);
const dietCards = document.querySelectorAll(".enter");
console.log(`dietCards: ${dietCards}; its length: ${dietCards.length}`);
// console.log(`ketCal: ${ketCal.cla}`);
for(let i = 0; i < dietCards.length; i++){
    console.log("In the for loop");
    console.log(`This is iteration number ${i} and ${dietCards[i]}`);
    console.log(`How about properties? ${dietCards[i].className}`);
    dietCards[i].addEventListener("click", function (event) {
        event.preventDefault();
        savePost(); 
        retrieve();
    });
};

//Reset value to zero for new logging info
const elements = document.querySelectorAll(".reset");
for (let i=0;i<elements.length;i++){
    elements[i].addEventListener('click', function(){
        displayKC.textContent = "0";
        displayKS.textContent = "0";
        displayMC.textContent = "0";
        displayMS.textContent = "0";
        displayVC.textContent = "0";
        displayVS.textContent = "0";

    })
};
