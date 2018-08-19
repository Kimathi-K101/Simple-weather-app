var asyncAdd = (num1, num2) => {
  return new Promise((resolved,rejected) => {
    setTimeout(() => {
      if( typeof num1 === 'number' && typeof num2 === 'number') {
        resolved(num1 + num2);
      } else {
        rejected('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(5, '7').then ((result) => {
  console.log('Result: ', result);
  return asyncAdd(result, 33);
}).then ((result) => {
  console.log('Should be 45:', result);
}).catch ((errorMessage) => {
  console.log(errorMessage);
});





// var newPromise = new Promise( (resolved, rejected) => {
//   setTimeout(()=> {
//     //resolved('The promise has been resolved');
//     rejected('The promise has beed rejected');
//   }, 2500 );
// });
//
// newPromise.then( (resolvedMessage) =>{
//   console.log(`Success: ${resolvedMessage}`);
// }, (rejectedMessage) => {
//   console.log(`Error: ${rejectedMessage}`);
// });
