let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
let counterDom = document.querySelector("#counter");
let increaseDom = document.querySelector("#increase");
let decreaseDom = document.querySelector("#decrease");
let resetDom = document.querySelector("#reset");



counterDom.innerHTML = counter;

increaseDom.addEventListener("click", clickEvent);
decreaseDom.addEventListener("click", clickEvent);
resetDom.addEventListener("click", resetEvent);

function clickEvent() {
    this.id == "increase" ? counter++ : counter--;
    localStorage.setItem("counter", counter);

    counterDom.innerHTML = counter;
}

function resetEvent() {
    localStorage.clear();
    counter = 0;
    counterDom.innerHTML = 0;
}