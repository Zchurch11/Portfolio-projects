let scoreHome = 0;
let scoreAway = 0;
let homeEl = document.getElementById("home-el");
let awayEl = document.getElementById("away-el");

function home1Plus() {
    scoreHome +=1;
    homeEl.textContent = scoreHome

}
function home2Plus() {
    scoreHome +=2;
    homeEl.textContent = scoreHome
}
function home3Plus() {
    scoreHome +=3;
    homeEl.textContent = scoreHome
}
function away1Plus() {
    scoreAway +=1;
    awayEl.textContent = scoreAway
}
function away2Plus() {
    scoreAway +=2;
    awayEl.textContent = scoreAway
}
function away3Plus() {
    scoreAway +=3;
    awayEl.textContent = scoreAway
}
function resetScore() {
    scoreHome = 0
    homeEl.textContent = 0
    scoreAway = 0
    awayEl.textContent = 0

}