
function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Alice')
sayHello('Bob')

/////

const square = function (x) { return Math.pow(x, 2) }

console.log(square(2))
console.log(square(5))

///////

const multiply = (x, y) => { return x * y }

console.log(multiply(2, 3))
console.log(multiply(4, 5))

/////

const car = {
    make: "toyota",
    model: "subra",
    year: 2022,
    color: "blue",
    getCarInfo: function () {
        var info = this.make + ' ' + this.model + ' ' + this.year + ' ' + this.color;
        return info;
    }
};
console.log(car.getCarInfo())


//////

const colors = ["yellow", "green", "blue", "red", "black"];

const printColors = function (box) {
    for (let i = 0; i < box.length; i++) {
        console.log(box[i])
    }
}

printColors(colors)


//////


function getStringLength(x) {
    return x.length
}

console.log(getStringLength('hello'))
console.log(getStringLength('school'))

/////


function getUpperCase(x) {
    return x.toUpperCase()
}

console.log(getUpperCase('welcome to orange'))


/////

function stringToArray(x) {
    let y = x.split(' ')
    return y
}

console.log(stringToArray('hello world'))
console.log(stringToArray("I'm a web developer"))