var sum = 0;

function addThree(num) {
    sum += num;
    console.log(sum);
}
function addFive(num) {
    sum += num;
    console.log(sum);
}
console.log(addThree(3));
console.log(addFive(5));
module.exports = {
    addThree,
    addFive
};