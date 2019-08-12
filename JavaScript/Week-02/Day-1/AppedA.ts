// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ['Koal', 'pand', 'zebr'];

let animals2 = animals.map(function (append) {
  return (append = append + 'a');
})
console.log(animals2);
