// The second function receives a smaller count until the calls reach zero.
function first(remaining) {
    if (remaining <= 0) return;
    document.body.append("First. ");
    second(remaining - 1);
}
function second(remaining) {
    if (remaining <= 0) return;
    document.body.append("Second. ");
    first(remaining - 1);
}
first(4);
