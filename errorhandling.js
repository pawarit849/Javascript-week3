function criticalCode() {
throw "Throwing an exception";
}

function logEror(theException) {
    console.log(theException);
}

console.log("\n*********Try..Catch*********\n");

try {
    criticalCode(); 
} catch (ex) {
    console.log("Gor an error");
    logEror(ex);
}

console.log("\n*********Throwing in Try*********\n")

try {
    throw "An exception that is thrown every time";
} catch(ex) {
    console.log("Got an error ");
    logEror(ex);
}

console.log("\n*********Try..Catch..Finally*********\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logEror(ex);
} finally {
    console.log("Code that always will run");
}
function hello() {
    console.log("\n*********Throwing Exceptions*********\n");

}


