//sündmus on brauseri teada tegevuse kohta, mis toimub veebilehel. 
// Sündmused võivad olla näiteks hiireklõpsud, klaviatuuris vajutused.
// lehe laadimine või vormi esitamine. JavaScriptis saab sündmusi kasitleda,

const clickButton = document.querySelector("click-button");
const clickResult = document.querySelector("click-result");
const targetResult = document.querySelector("target-result");

let click = 0;
function countClicks(event) {
    click++;
    clickResult.textContent = `Klõpsude arv: ${click}`;
    targetResult.textContent = "type: " + event.type + ", target: " + event.target.tagName;
    ", target: " + event.target.tagName;
    ", currentTarget: " + event.currentTarget.tagName;

}
clickButton.addEventListener("click", countClicks);