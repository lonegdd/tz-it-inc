


let search = document.getElementById('g');
let click = document.getElementById('click');

//5 задание

let mas= [];
mas[0] = {
  name: 'Alexander',
  age: 27,
};
mas[1] = {
  name: 'Ira',
  age: 21,
};
mas[2] = {
  name: 'Vera',
  age: 41,
};

//3, 4, 5 задание



click.addEventListener ("click" , () => {
  if ( search.value === 'google') {
    alert('Yandex круче. Но это не точно' + ' '+ mas[0].name + ' ' + mas[0].age);
  } else {
  alert(search.value + ' ' + mas[0].name + ' ' + mas[0].age);
    }

});

//6, 10 задание

function superSum() {
  let firstNum = prompt('first sum', '');
  let secondNum = prompt('second sum', '');
  let sum = (+firstNum) + (+secondNum);
  alert('Sum = ' + sum);
}

setTimeout(superSum, 1000);

//7 задание

let mass = [5,2,4,7,9,4,2,114,15,61,4,432,1,];

function maxNumber(one){
  let max;
  let min = mass[0];
  for(let i = 0; i < one.length; i++){
    if((mass[i]) < min){
      min = mass[i];
    } else {
      max = mass[i];
    }
  }
  return max;
}

console.log(maxNumber(mass));

function minNumber(two){
  let max;
  let min = mass[0];
  for(let i = 0; i > two.length; i++){
    if((mass[i]) > min){
      min = mass[i];
    } else {
      max = mass[i];
    }
  }
  return min;
}

console.log(minNumber(mass));

// Задание 9

var largest = Math.max.apply(Math, mass); // 306

console.log(largest);

//8 Задание

let a = 5;
let b = 10
console.log(a,b);

let c = a;
a = b;
b = c;

console.log(a,b);










