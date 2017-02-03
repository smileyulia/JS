/*Конкурсная задача:
Написать функцию, проверяющую строку на палиндром. При этом необходимо уложиться в минимальное количество символов (в идеале < 80)*/

function isPalindrome(x){return(x=x.replace(/\W/g,'').toLowerCase())==x.split('').reverse().join('')}

console.log(isPalindrome("level")); // logs 'true'
console.log(isPalindrome("levels")); // logs 'false'
console.log(isPalindrome("A car, a man, a maraca")); // logs 'true'
