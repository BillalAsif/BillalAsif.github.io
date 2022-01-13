/* Porfolio Links Variable */
var allLink = document.querySelector("#all");
var templatesLink = document.querySelector("#templates");
var javascriptLink = document.querySelector("#javascript");
var htmlcssLink = document.querySelector("#htmlcss");
var phpLink = document.querySelector("#php");
var sqlLink = document.querySelector("#sql");

/* Portfolio Columns */
var snappyrepairsPortfolio = document.getElementById('snappyrepairsCol');
var gloryPortfolio = document.getElementById('gloryCol');
var randomquotesPortfolio = document.getElementById('randomquotesCol');
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

templatesLink.addEventListener('click', () => {
    removeActivePortfolio();
    templatesLink.classList.add('active');
    hideAll();
    snappyrepairsPortfolio.classList.remove('hide');
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
    templatesLink.classList.remove('active');
    javascriptLink.classList.remove('active');
    htmlcssLink.classList.remove('active');
    phpLink.classList.remove('active');
    sqlLink.classList.remove('active');

}

/* Hide all portfolio items */
function hideAll() {

    snappyrepairsPortfolio.classList.add('hide');
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

/* Currnt month function */
function getCurrentMonth() {
    var d1 = new Date().getMonth(); //"now"
    var d2 = new Date("2021/06/01").getMonth();  // some date
    var y1 = new Date().getFullYear(); //"now"
    var y2 = new Date("2021/06/01").getFullYear();  // some date
    var diffMonth = d1 - d2;
    var diffYear = y1 - y2;

    if (diffYear === 0) {
        document.getElementById("month").innerHTML = diffMonth;
    } else {
        document.getElementById("month").innerHTML = diffYear + " years and " + diffMonth;
    }
}
getCurrentMonth();

