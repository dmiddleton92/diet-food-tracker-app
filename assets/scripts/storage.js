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

// Creating objects for: Keto, Mediterranean, and Vegetarian cards

function ketEntry(){
    const ketPost = {
        calCount: ketCal.value,
        sugCount: ketSug.value,
    };
};

function medEntry(){
    const medPost = {
        calCount: medCal.value,
        sugCount: medSug.value,
    };
};

function vegEntry(){
    const vegPost = {
        calCount: vegCal.value,
        sugCount: vegSug.value,
    };
};

// setting items to localStorage

function save(event) {
    const element = event.target;
    if(element.matches("#keto")) {
        ketEntry();
        localStorage.setItem("keto", JSON.stringify(ketPost));
    }else if(element.matches("#med")) {
        medEntry();
        localStorage.setItem("mediterranean", JSON.stringify(medPost));
    }else if(element.matches("veg")) {
        vegEntry();
        localStorage.setItem("vegetarian", JSON.stringify(vegPost));
    };
};

// retrieving items from localStorage
 
function retrieve() {

};

// Setting the event listeners
/* I do not know if there will be a submit button for each card. As it stands, the current card has two inputs
   and no means of submitting. In case this is, in fact, the desired layout, I will have to trigger the submit
   when the user clicks off of the card. */

const dietCard = document.querySelector(".card");
dietCard.addEventListener("blur", save);
