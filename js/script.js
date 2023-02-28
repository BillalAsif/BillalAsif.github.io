/* Porfolio Links Variable */
var allLink = document.querySelector("#all");
var javascriptLink = document.querySelector("#javascript");
var htmlcssLink = document.querySelector("#htmlcss");
var sqlLink = document.querySelector("#sql");

/* Portfolio Columns */
var sosPortfolio = document.getElementById('bjjCol');
var jsgamePortfolio = document.getElementById('randomquotesCol');
var booklistPortfolio = document.getElementById('booklistCol');
var sunnahmarketPortfolio = document.getElementById('sunnahmarketCol');
var dbPortfolio = document.getElementById('sqlCol');

/* Navigation variable */
var helloLink = document.querySelector("#hello");
var portfolioLink = document.querySelector("#portfolio");
var skillsLink = document.querySelector("#skills");
var experienceLink = document.querySelector("#experience");
var educationLink = document.querySelector("#education");
var contactLink = document.querySelector("#contact");

/* Navigation scrolling event listener */
document.getElementById('hello').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('1').scrollIntoView();

});

document.getElementById('portfolio').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('2').scrollIntoView();

});

document.getElementById('skills').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('3').scrollIntoView();

});
document.getElementById('experience').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('4').scrollIntoView();

});
document.getElementById('education').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('5').scrollIntoView();

});
document.getElementById('contact').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('6').scrollIntoView();

});
document.getElementById('contactme').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('6').scrollIntoView();
    removeActiveNav();
    contactLink.classList.add('active');
});

/* Navigation active event listeners */
helloLink.addEventListener('click', () => {
    removeActiveNav();
    helloLink.classList.add('active');
});
portfolioLink.addEventListener('click', () => {
    removeActiveNav();
    portfolioLink.classList.add('active');
});
skillsLink.addEventListener('click', () => {
    removeActiveNav();
    skillsLink.classList.add('active');
});
experienceLink.addEventListener('click', () => {
    removeActiveNav();
    experienceLink.classList.add('active');
});
educationLink.addEventListener('click', () => {
    removeActiveNav();
    educationLink.classList.add('active');
});
contactLink.addEventListener('click', () => {
    removeActiveNav();
    contactLink.classList.add('active');
});

/* Show only specific Portfolio event listeners */
allLink.addEventListener('click', () => {
    removeActivePortfolio();
    allLink.classList.add('active');
    hideAll();
    showAll();
});

javascriptLink.addEventListener('click', () => {
    removeActivePortfolio();
    javascriptLink.classList.add('active');
    hideAll();
    gloryPortfolio.classList.remove('hide');
    randomquotesPortfolio.classList.remove('hide');

});

htmlcssLink.addEventListener('click', () => {
    removeActivePortfolio();
    htmlcssLink.classList.add('active');
    hideAll();
    booklistPortfolio.classList.remove('hide');
    booklistPortfolio.classList.remove('hide');
});

phpLink.addEventListener('click', () => {
    removeActivePortfolio();
    phpLink.classList.add('active');
    hideAll();
    sunnahmarketPortfolio.classList.remove('hide');
});

sqlLink.addEventListener('click', () => {
    removeActivePortfolio();
    sqlLink.classList.add('active');
    hideAll();
    dbPortfolio.classList.remove('hide');
});

/* FUNCTIONS */

/* Remove active navigation */
function removeActiveNav() {

    helloLink.classList.remove('active');
    portfolioLink.classList.remove('active');
    skillsLink.classList.remove('active');
    experienceLink.classList.remove('active');
    educationLink.classList.remove('active');
    contactLink.classList.remove('active');

}

/* Remove all active portfolio nav */
function removeActivePortfolio() {

    allLink.classList.remove('active');
    javascriptLink.classList.remove('active');
    htmlcssLink.classList.remove('active');
    phpLink.classList.remove('active');
    sqlLink.classList.remove('active');

}

/* Hide all portfolio items */
function hideAll() {

    gloryPortfolio.classList.add('hide');
    randomquotesPortfolio.classList.add('hide');
    booklistPortfolio.classList.add('hide');
    sunnahmarketPortfolio.classList.add('hide');
    dbPortfolio.classList.add('hide');

}

/* Show all portfolio items */
function showAll() {

    snappyrepairsPortfolio.classList.remove('hide');
    gloryPortfolio.classList.remove('hide');
    randomquotesPortfolio.classList.remove('hide');
    booklistPortfolio.classList.remove('hide');
    sunnahmarketPortfolio.classList.remove('hide');
    dbPortfolio.classList.remove('hide');

}