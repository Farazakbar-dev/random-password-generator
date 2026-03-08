// get both generate password paragraphs
let genPassOne = document.getElementById("gen-pass-result-1")
let genPassTwo = document.getElementById("gen-pass-result-2")

// get Button
let passBTN = document.getElementById("gen-pass-btn")

// get all characters 
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function randomPassword() {
    let password = ""
    for (let i=0; i<15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length); 
        password += characters[randomIndex]
    }

    return password
}

passBTN.addEventListener("click", function(){
    genPassOne.textContent = randomPassword()
    genPassTwo.textContent = randomPassword()

}) 



function copyText(element) {
    navigator.clipboard.writeText(element.innerText)
}

genPassOne.addEventListener("click", function () {
    navigator.clipboard.writeText(genPassOne.innerText)
    showToast("Password copied!")
})

genPassTwo.addEventListener("click", function () {
    navigator.clipboard.writeText(genPassTwo.innerText)
    showToast("Password copied!")
})

const toast = document.getElementById("toast")
function showToast(message) {
    toast.innerText = message         // set the message
    toast.style.display = "block"       // make it visible
    setTimeout(() => {
        toast.style.display = "none"  // hide after 2 seconds
    }, 2000)
}

