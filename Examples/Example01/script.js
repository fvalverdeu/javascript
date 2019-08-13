/*
setTimeout(function(){
    console.log('hi');
    setTimeout(function(){
        console.log('hello');
    }, 1000);
}, 1000);
console.log('hola');
*/

function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 1000);
    });
}

asyncFunc("work1")
.then(function(result) {
    console.log(result);
    return asyncFunc("work2");
}, function(error) {
    console.log(error);
})
.then(function(result){
    console.log(result);
}, function(error) {
    console.log(error);
});
console.log("end");