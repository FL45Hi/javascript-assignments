function asycF(task) {
    return new Promise(function(resolve, reject)
    {
        if (task === "")    reject(Error("Nothing "));
        setTimeout(function() {
            resolve(task);
        }, 1000);
    });
}

asycF("Task 1")     //Task 1
.then(function(result) {
    console.log(result);
    return asycF("Task 2");     //Task 2
}, function(error) {
    console.log(error);
})
.then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});

console.log("End.");