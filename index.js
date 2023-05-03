import Dog from './Dog.js'
import dogsData from './data.js'

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

const likeBtn = document.getElementById("like-btn")
const dislikeBtn = document.getElementById("dislike-btn")

likeBtn.addEventListener('click', handleLikeBtn)
dislikeBtn.addEventListener("click", handleDislikeBtn)

function getNewDog(){
    if(currentDogIndex < dogsData.length-1){
        currentDogIndex += 1
    } else{
        document.getElementById("container").innerHTML = `
            <div class="end-message">
                <h1>No more dogs in your area</h1>
                <h2>Check back later or click <a href="index.html">here</a> to swipe again.</h2>
            </div>`
        console.log("no more dogs")
    }
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}

function handleLikeBtn() {
    likeBtn.disabled = true
    dislikeBtn.disabled = true
    currentDog.setMatchStatus(true)
    document.getElementById("like-badge").style.display = "block"
    setTimeout(function(){
        getNewDog()
        likeBtn.disabled = false
        dislikeBtn.disabled = false
        document.getElementById("like-badge").style.display = "none"
    }, 1500)
}



function handleDislikeBtn(){
    likeBtn.disabled = true
    dislikeBtn.disabled = true
    currentDog.setMatchStatus(false)
    // isWaiting = true
    document.getElementById("dislike-badge").style.display = "block"
    setTimeout(function(){
        getNewDog()
        likeBtn.disabled = false
        dislikeBtn.disabled = false
        document.getElementById("dislike-badge").style.display = "none"
    }, 1000)
}



function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

render()