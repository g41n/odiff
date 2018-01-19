//const a = require("./a");
//const b = require("./b");
const a = require("./test1");
const b = require("./test2");

function odiff(a, b, level) {
    let k = [];
    for (i in a) {
        k.push(i);
        if (typeof a[i] === 'object' && typeof b[i] === 'object') {
            odiff(a[i], b[i], level + `.${i}`);
        } else {
            if (a[i] != b[i]) {
                console.log(`${level}.${i}(${a[i]},${b[i]})`);
            }
        }
    }

    for (i in b) {
        if (!k.includes(i)) {
            console.log(`${level}.${i}(${a[i]},${b[i]})`);
        }
    }
}

odiff(a, b, "");
