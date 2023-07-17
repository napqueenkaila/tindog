import Pet from './Pet.js'
import pets from './data.js'

let currentPetIndex = 0
let currentPet = new Pet(pets[currentPetIndex])
let tindog = false
const dogsOnly = pets.filter(pet => pet.isDog)
const catsOnly = pets.filter(pet => !pet.isDog)

// DOM ELEMENTS
const startPage = document.getElementById("start-page")
const tinDogBtn = document.getElementById("tindog")
const scratchBtn = document.getElementById("scratch")
const profileCard = document.getElementById("card")
const btnContainer = document.getElementById("button-container")
const likeBtn = document.getElementById("like-btn")
const dislikeBtn = document.getElementById("dislike-btn")


// EVENT LISTENERS
tinDogBtn.addEventListener("click", renderTindog)
scratchBtn.addEventListener("click", renderScratch)

likeBtn.addEventListener('click', handleLike)
dislikeBtn.addEventListener("click", handleDislike)

// FUNCTIONS
function renderTindog() {
    startPage.classList.add("hidden")
    profileCard.classList.remove("hidden")
    btnContainer.classList.remove("hidden")

    tindog = true
    let currentPet = new Pet(dogsOnly[currentPetIndex])
    profileCard.innerHTML = currentPet.getPetHtml()
}

function renderScratch() {
    startPage.classList.add("hidden")
    profileCard.classList.remove("hidden")
    btnContainer.classList.remove("hidden")

    let currentPet = new Pet(catsOnly[currentPetIndex])
    profileCard.innerHTML = currentPet.getPetHtml()
}

function getNewPet() {
    if (tindog) {
        if (currentPetIndex < dogsOnly.length - 1) {
            currentPetIndex += 1
        } else {
            document.getElementById("container").innerHTML = `
            <div class="end-message">
                <h1>No more dogs in your area</h1>
                <h2>Check back later or click <a href="index.html">here</a> to swipe again.</h2>
            </div>`
        }
        currentPet = new Pet(dogsOnly[currentPetIndex])
        renderTindog()
    } else {
        if (currentPetIndex < catsOnly.length - 1) {
            currentPetIndex += 1
        } else {
            document.getElementById("container").innerHTML = `
            <div class="end-message">
                <h1>No more cats in your area</h1>
                <h2>Check back later or click <a href="index.html">here</a> to swipe again.</h2>
            </div>`
        }
        currentPet = new Pet(catsOnly[currentPetIndex])
        renderScratch()
    }
}


function handleLike() {
    likeBtn.disabled = true
    dislikeBtn.disabled = true
    currentPet.setMatchStatus(true)
    document.getElementById("like-badge").style.display = "block"
    setTimeout(function () {
        likeBtn.disabled = false
        dislikeBtn.disabled = false
        document.getElementById("like-badge").style.display = "none"
        getNewPet()
    }, 1500)

}

function handleDislike() {
    likeBtn.disabled = true
    dislikeBtn.disabled = true
    currentPet.setMatchStatus(false)
    document.getElementById("dislike-badge").style.display = "block"
    setTimeout(function () {
        likeBtn.disabled = false
        dislikeBtn.disabled = false
        document.getElementById("dislike-badge").style.display = "none"
        getNewPet()
    }, 1500)
}