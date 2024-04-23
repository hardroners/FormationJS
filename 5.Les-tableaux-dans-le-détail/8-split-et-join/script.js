/* 
    1. .split(separator)

    Cette méthode permet de transformer une chaîne en tableau à partir d'un séparateur.

    Exemple : 

    "abc".split("") devient ["a","b","c"]
*/

let string = "abc def ijk";
console.log(string.split(""))

/* 
    2. .join(separator)

    Celle-ci fait l'inverse de .split(), elle transforme un tableau en chaîne.
*/

let arr = ["a","b","c"];
console.log(arr.join(""));

let test = "abcdef";

console.log(test.split("").reverse().join(""));