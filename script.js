const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const count = document.getElementById("count")
const logError = document.getElementById("error")

incBtn.addEventListener("click", ()=>{
    let val = Number(count.textContent);
    logError.textContent = "";
    count.textContent = val+1;
});

decBtn.addEventListener("click", ()=>{
    let val = Number(count.textContent);
    if(val == 0){
        logError.textContent = "Error: Can't go below 0"
    }else{
        count.textContent = val-1;
    }
});

clearBtn.addEventListener("click", ()=>{
    let val = Number(count.textContent);
    count.textContent = 0;
    logError.textContent = "";
});