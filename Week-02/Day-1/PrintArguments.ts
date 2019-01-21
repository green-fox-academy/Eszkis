// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)


function printPrams(param: any[]) {
  for (let x: number = 0; x <= param.length; x++) {
    console.log(param[x]);
  }
}

printPrams(['asd', 'sdfaufoa', 'sidfb1j23', 123, 13, 145, 1235, 1234,]);
