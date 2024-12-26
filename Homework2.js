let str = "Table";

//does the same as
// for (let char of str) console.log(char);
let iterator = str[Symbol.iterator]();

//while loop
while (true) {
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value); // outputs characters one by one 
}

//for loop
for(let char of "Chairs") {
    //triggers 6 times: once for each character
    console.log( char ); //  C, then h, then a, then i, then r, then,s
}

for(let char of "Couch") {
    //triggers 5 times: once for each character
    console.log( char ); //  C, then o, then u, then c, then h
}