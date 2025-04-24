function scope() {
    foo = 1;
    var foo;
}

function scope () {
    var foo;
    foo = 1;
}

// Both of these are valid due to hoisting variables in JavaScript