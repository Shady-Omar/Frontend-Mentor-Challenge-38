// ******************
// Desktop Menu

let product = document.querySelector("#prod");
let company = document.querySelector("#comp");
let connect = document.querySelector("#connect");

let prods = document.querySelector(".product");
let comps = document.querySelector(".comps");
let cons = document.querySelector(".cons");


product.addEventListener('click', () => {
    prods.classList.toggle("hide")

    if (comps.classList.contains("hide") === false) {
        comps.classList.add("hide")
    }

    if (cons.classList.contains("hide") === false) {
        cons.classList.add("hide")
    }
});

company.addEventListener('click', () => {
    comps.classList.toggle("hide")

    if (prods.classList.contains("hide") === false) {
        prods.classList.add("hide")
    }

    if (cons.classList.contains("hide") === false) {
        cons.classList.add("hide")
    }
});

connect.addEventListener('click', () => {
    cons.classList.toggle("hide")

    if (prods.classList.contains("hide") === false) {
        prods.classList.add("hide")
    }

    if (comps.classList.contains("hide") === false) {
        comps.classList.add("hide")
    }
});

// ******************
// Mobile Menu

let menu = document.querySelector("#menu");
let closeBtn = document.querySelector("#close")
let menuLinks = document.querySelector(".menu-links");


menu.addEventListener('click', () => {
    menuLinks.classList.remove("hide");
    menu.classList.add("hide");
    closeBtn.classList.remove("hide");
});

closeBtn.addEventListener('click', () => {
    menuLinks.classList.add("hide");
    menu.classList.remove("hide");
    closeBtn.classList.add("hide");
});

let productMob = document.querySelector("#prod-mob");
let companyMob = document.querySelector("#comp-mob");
let connectMob = document.querySelector("#connect-mob");

let prodMob = document.querySelector(".prod-mob");
let compMob = document.querySelector(".comp-mob");
let conMob = document.querySelector(".connect-mob");

productMob.addEventListener('click', () => {
    prodMob.classList.toggle("hide")

    if (compMob.classList.contains("hide") === false) {
        compMob.classList.add("hide")
    }

    if (conMob.classList.contains("hide") === false) {
        conMob.classList.add("hide")
    }
});

companyMob.addEventListener('click', () => {
    compMob.classList.toggle("hide")

    if (prodMob.classList.contains("hide") === false) {
        prodMob.classList.add("hide")
    }

    if (conMob.classList.contains("hide") === false) {
        conMob.classList.add("hide")
    }
});

connectMob.addEventListener('click', () => {
    conMob.classList.toggle("hide")

    if (prodMob.classList.contains("hide") === false) {
        prodMob.classList.add("hide")
    }

    if (compMob.classList.contains("hide") === false) {
        compMob.classList.add("hide")
    }
});