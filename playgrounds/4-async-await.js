// Always return a promise when using async
/**
 *  
 *  Async always use await 
 *  asynchronous based code using promised
 *  
 */

const readline = require('readline');

 const add = (a,b) => {
    return new Promise((resolve,reject) => {
             setTimeout(() => {
                if(a < 0 || b < 0){

                    return reject('Numbers must not be negatif')
                }

                resolve(a +  b);
             },1500)
    })
}

const doWork = async () => {
    console.log('waiting 1 second ...');
    const adding = await add(1,3);
    console.log(adding);
    console.log('waiting  another 1 second ...');
    const adding2 = await add(adding,5);
    console.log(adding2);
    console.log('waiting  another 1 second ...');
    const data = Number(await readline('Entre a number'));
      if(data <= 0){
        console.log('the app is craching')
      }
    const adding3 = await add(adding2,data);

    return adding3;
}

doWork().then(result => {
    console.log(result);
}).catch(e => {
    console.log(e);
})
