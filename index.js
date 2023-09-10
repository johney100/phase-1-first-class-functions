
function receivesAFunction(callBack){
    return callBack();
}

function returnsANamedFunction(){

    return function namedFunction(){console.log("this is named")};
}

function returnsAnAnonymousFunction(){

    return function () {
    console.log(`This is delicious!`);
    }
}