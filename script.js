
function addCount(id){
    let count = +document.getElementById(id).innerText;
    document.getElementById(id).innerText = count + 1;
}


// fav count 
const hearts = document.querySelectorAll(".fa-heart");

hearts.forEach(heart => {
    heart.addEventListener("click", function() {addCount("heart-count")
    })
})


// copy count 

const copyBtns = document.querySelectorAll(".copy");

copyBtns.forEach(copyBtn => {
    copyBtn.addEventListener("click", function() {
        addCount('copy-count')
    })

})


// call funtionality

const callHistory = document.querySelector('.history');



function makeCall(serviceName, number) {
    let coins = +document.getElementById("coins").innerText;
    if ( coins >= 20) {
        alert(`📞Calling ${serviceName} ${number}...`,);

        const callLog = document.createElement("li");

        callLog.classList.add("flex", "justify-between", "items-center", "bg-gray-100", "p-3", "rounded-md", "mb-2");

        callLog.innerHTML = `<div><h1 class="font-bold">${serviceName}</h1><p>${number}</p></div><div><p class="font-semibold">time</p></div>`;


        callHistory.appendChild(callLog);

        document.getElementById("coins").innerText = coins - 20;


    } else {
        alert("You don't have enough coins.")
    }
}


function clearHistory(){
    callHistory.innerHTML = "";
}