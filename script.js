
function addCount(id){
    let count = +document.getElementById(id).innerText;
    document.getElementById(id).innerText = count + 1;
}


// favourite count 
const hearts = document.querySelectorAll(".fa-heart");

hearts.forEach(heart => {
    heart.addEventListener("click", function() {addCount("heart-count")
    })
})


// copy funtionality

function copyText(hotline) {
    navigator.clipboard.writeText(hotline);
    addCount("copy-count");

    alert(`copied ${hotline}`);


}

const callHistory = document.querySelector('.history');

function localTime(){
    let time = new Date();
    return time.toLocaleTimeString();
}

function makeCall(serviceName, number) {
    let coins = +document.getElementById("coins").innerText;
    if ( coins >= 20) {
        alert(`📞Calling ${serviceName} ${number}...`,);

        const callLog = document.createElement("li");

        callLog.classList.add("flex", "justify-between", "items-center", "bg-gray-100", "p-3", "rounded-md", "mb-2");

        callLog.innerHTML = `<div><h1 class="font-bold">${serviceName}</h1><p>${number}</p></div><div><p class="font-semibold">${localTime()}</p></div>`;


        callHistory.appendChild(callLog);

        document.getElementById("coins").innerText = coins - 20;
        


    } else {
        alert("❌ You don't have enough coins.")
    }
}


function clearHistory(){
    callHistory.innerHTML = "";
}