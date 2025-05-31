import displayHomePage from "./home-page"
import displayMenuPage from "./menu-page";
import displayContactPage from "./contact-page"

import "./styles.css"

let contentElement = document.getElementById("content")

displayHomePage(contentElement);

let homeButton = document.getElementById("home-button")
let menuButton = document.getElementById("menu-button")
let contactButton = document.getElementById("contact-button")


homeButton.addEventListener("click", function(e) {
    displayHomePage(contentElement)
})

menuButton.addEventListener("click", function(e) {
    displayMenuPage(contentElement)
})

contactButton.addEventListener("click", function(e) {
    displayContactPage(contentElement)
})
