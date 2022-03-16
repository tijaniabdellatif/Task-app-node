const doWorkPromise = new Promise((resolve,reject) => {

     setTimeout(() => {

            // resolve([1,2,5]);

            reject('this is my error');
     },2000)

});

doWorkPromise.then((result) => {

    console.log('success : ' + result)

}).catch((error) => {

     console.log(error);

});