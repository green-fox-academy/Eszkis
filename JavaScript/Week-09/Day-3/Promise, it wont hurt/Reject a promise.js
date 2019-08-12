var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    let myerror = new Error('REJECTED!')
    reject(onReject(myerror))
  }, 300);
});

function onReject(error) {
 return error;
}

promise.then(onfulfilled => { }, errormsg => console.log(errormsg.message));
