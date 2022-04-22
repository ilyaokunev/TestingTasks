// 1 Task:

function anagramCheck(first, second) {
  const firstModified = first.toLowerCase().split("").sort().join("").replace(/\W/g, "");
  const secondModified = second.toLowerCase().split("").sort().join("").replace(/\W/g, "");
  return firstModified === secondModified;
}

//2 Task:
function poly(str) {
  const newStr = str.split("").reverse().join("");

  return str === newStr;
}

//3 Task:

function vowelCounter(str) {
  const lib = ["a", "e", "i", "u", "o"];
  let counter = 0;

  const arr = str.split("");
  arr.forEach((elem) => {
    if (lib.includes(elem)) {
      counter++;
    }
  });
  return counter;
}

// 4 Task:

var a = 34;
var b = 20;
var c = "Новая ";

a = a + 2;
b = b - 5;
c = c + "строка!";
console.log(a);
console.log(b);
console.log(c);

// 5 Task:

let res = window.prompt("Введите сумму зарплаты");
res = +res;
window.alert(`Премия 15%. На руки ${(res *= 1.15)}`);
window.alert(`Налог - 10%. На руки ${(res -= res *= 0.1)}`);
window.alert(`В магазине - 190. Осталось ${(res -= 190)}`);
window.alert(`Жене половину отдал. Осталось ${(res /= 2)}`);

// 6 Task:

const func = (a, b) => {
  return a > b ? a : a === b ? 0 : b;
};

// 7 Task:

function glue(...args) {
  document.write(args.join(" "));
}

// 8 Task:

function complexDigit(...args) {
  return +args.join("");
}
