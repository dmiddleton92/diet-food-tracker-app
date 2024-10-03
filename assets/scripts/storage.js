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

function savePost(event) {
    event.preventDefault();
    const element = event.target;
    console.log("Yhis is the save enet");
    if(element.matches("#keto")) {
        let kEntry = ketEntry();
        localStorage.setItem("keto", JSON.stringify(kEntry));
    }else if(element.matches("#med")) {
        let mEntry = medEntry();
        localStorage.setItem("mediterranean", JSON.stringify(mEntry));
    }else if(element.matches("veg")) {
                let vEntry = vegEntry();
                localStorage.setItem("vegetarian", JSON.stringify(vEntry));
            };
        };
        
        // retrieving items from localStorage
        
        function retrieve() {
            
        };
        
        // Setting the event listeners
        /* I do not know if there will be a submit button for each card. As it stands, the current card has two inputs
        and no means of submitting. In case this is, in fact, the desired layout, I will have to trigger the submit
        when the user clicks off of the card. */
        /* Since buttons were added, I'll make the event a click event. I cannot use button as a query Selector,
        since button is used in the nav. Maybe use a class? */
        
        
        const dietCard = document.querySelectorAll(".enter");
        // dietCard.addEventListener("click", savePost);
        // dietCard.forEach("click", savePost);
        for(let i = 0; i < dietCard.length; i++){
            dietCard[i].addEventListener("click", savePost);
        };