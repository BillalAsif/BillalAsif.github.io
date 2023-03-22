/* Porfolio Links Variable */
var allLink = document.querySelector("#all");
var javascriptLink = document.querySelector("#javascript");
var htmlcssLink = document.querySelector("#htmlcss");
var sqlLink = document.querySelector("#sql");

/* Portfolio Columns */
var bjjPortfolio = document.getElementById('bjjCol');
var jsgamePortfolio = document.getElementById('jsgameCol');
var jstodoPortfolio = document.getElementById('jstodoappCol');
var sqlPortfolio = document.getElementById('sqlCol');
var hobsgasPortfolio = document.getElementById('hobsgasCol');
var timerPortfolio = document.getElementById('timerCol');

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

document.getElementById('portfolio-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('2').scrollIntoView();
    removeActiveNav();
    activateNav(portfolioLink)
});

/* Navigation active event listeners */
helloLink.addEventListener('click', () => {
    removeActiveNav();
    activateNav(helloLink)
});
portfolioLink.addEventListener('click', () => {
    removeActiveNav();
    activateNav(portfolioLink)
});
skillsLink.addEventListener('click', () => {
    removeActiveNav();
    activateNav(skillsLink)
});
experienceLink.addEventListener('click', () => {
    removeActiveNav();
    activateNav(experienceLink)
});
educationLink.addEventListener('click', () => {
    removeActiveNav();
    activateNav(educationLink)
});
contactLink.addEventListener('click', () => {
    removeActiveNav();
    activateNav(contactLink)
});

/*Auto activate nav links on scroll*/

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
    jsgamePortfolio.classList.remove('hide');
    jstodoPortfolio.classList.remove('hide');
    timerPortfolio.classList.remove('hide');
});

htmlcssLink.addEventListener('click', () => {
    removeActivePortfolio();
    htmlcssLink.classList.add('active');
    hideAll();
    bjjPortfolio.classList.remove('hide');
    hobsgasPortfolio.classList.remove('hide');
});

sqlLink.addEventListener('click', () => {
    removeActivePortfolio();
    sqlLink.classList.add('active');
    hideAll();
    sqlPortfolio.classList.remove('hide');
});


/* FUNCTIONS */

/* Activate navigation link */
function activateNav(section) {
    section.classList.add('active');
}

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
    sqlLink.classList.remove('active');

}

/* Hide all portfolio items */
function hideAll() {

    bjjPortfolio.classList.add('hide');
    jsgamePortfolio.classList.add('hide');
    jstodoPortfolio.classList.add('hide');
    sqlPortfolio.classList.add('hide');
    hobsgasPortfolio.classList.add('hide');
    timerPortfolio.classList.add('hide');

}

/* Show all portfolio items */
function showAll() {

    bjjPortfolio.classList.remove('hide');
    jsgamePortfolio.classList.remove('hide');
    jstodoPortfolio.classList.remove('hide');
    sqlPortfolio.classList.remove('hide');
    hobsgasPortfolio.classList.remove('hide');
    timerPortfolio.classList.remove('hide');

}

// Modal

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})