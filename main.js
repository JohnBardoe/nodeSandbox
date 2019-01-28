var util = require("util")

var obj = {
    a: 5,
    b: "log",
    _inspect: function () {
        return "abc"
    }
};

console.log(util.inspect(obj))