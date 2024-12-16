console.log("Start");

// function - regular
setTimeout(function(params) {
    console.log(5);
}, 2000);

console.log("Finish");

function giveFifeAfterSevenSeconds() {
    setTimeout(function(){
        return 5
    }, 7000)    
}

let res = giveFifeAfterSevenSeconds ();
console.log(res);

const promise = new Promise(function (resolve, reject) {
    // Arrow function
    setTimeout(() => 5, 7000)
})