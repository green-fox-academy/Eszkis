undefined;
null;
NaN;

null !== undefined;
NaN !== undefined;
null !== NaN;

null == undefined;

typeof undefined; // 'undefined'
typeof null; // 'object'
typeof NaN; // 'number'

let apple;
console.log(apple); // undefined
console.log(apple + 1); // NaN
apple = null;
console.log(apple); // null