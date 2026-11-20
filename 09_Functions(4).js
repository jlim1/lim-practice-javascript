// The caller displays the value returned by each function.
function tooEasy() {
    return "Gametime";
}

document.body.append(tooEasy());

function addNumbers(a, b) {
    let c = a + b;
    return c;
}

document.body.append(addNumbers(3, 6));
