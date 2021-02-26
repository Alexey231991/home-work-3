// Первое задание
let result = '';
for (let index = 10; index < 20; index++) {
    result += index + ', ';
}

console.log(result);


// Второе задание
result = '';
for (let index = 10; index <= 20; index++) {
    result += index * index + ', ';
}

console.log(result);


// Третье задание
for (let index = 1; index <= 10; index++) {
    console.log(index + " * 7 = " + index * 7);
}


// Четвертое задание
result = 0;
for (let index = 1; index <= 15; index++) {
    result += index;
    
}
console.log(result);


// Пятое задание
result = 1;
for (let index = 15; index <= 35; index++) {
    result = result * index;
    
}
console.log(result);


// Шестое задание
result = 0;
for (let index = 1; index <=500; index++) {
    result += index;

}
console.log(result / 500);


// Седьмое задание
result = 0;
for (let index = 30; index <= 80; index = index + 2) {
    result += index;
}
console.log(result);


// Восьмое задание
for (let index = 100; index <= 200; index++) {
    if (index % 3 === 0) {
        console.log(index);
    }
}


// Девятое задание
result = '';
let num = 180;
let sumEven = 0;
let countEven = 0;
for (let index = 2; index <= num; index++) {
    if (num % index === 0) {
        num = num / index;
        result = result + ' ' + index;
        if (index % 2 === 0) {
            countEven = countEven + 1;
            sumEven = sumEven + index;
        }
        index = 1;
    }
}
console.log(result);
console.log(countEven);
console.log(sumEven);


// Десятое задание
for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <=10; b++) {
        console.log( a + " * " + b + "=" + a * b);
    }
}


// Одинадцатое задание
 const random = Math.floor(Math.random() * 10);
 let game = true;
 console.log(random);

 while (game) {
   let userNumber = prompt('Введите число');
   if (+userNumber === random || userNumber === null) {
       game = false;
   }
 }
 