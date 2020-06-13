var verifyAge = function (age) {
    new Promise(function (resolve, reject) {
        setTimeout(function(){
            if (age >= 18){
            resolve();
            } else {
                reject();
            }
        }, 2000)
    })
}

verifyAge(20)
    .then(function () {
        console.log('Idade maior que 18 anos');
    })
    .catch(function () {
        console.log('Idade menor que 18 anos')
});