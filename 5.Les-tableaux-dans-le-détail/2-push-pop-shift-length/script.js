/* 
    Il existe une floppée de petites méthodes permettant de rajouter ou de supprimer un élément d'un tableau.
*/

/* 
    Array.prototype.pop()

    Cette méthode supprime le dernier élément d'un tableau.
*/

const numbers = [1,2,3]

numbers.pop()
/* 
    Array.prototype.shift()

    Celle-ci supprime le premier élément d'un tableau.
*/

numbers.shift()


/* 
    Array.prototype.unshift(element1, element2, ...)

    Rajoute les arguments qu'on lui passe au début d'un tableau.
*/
numbers.unshift(1)

/* 
    Array.prototype.push(element1, element2, ...)

    Cette méthode rajoute les arguments qu'on lui passe à la fin d'un tableau.
*/

numbers.push(3)

/* 
    La propriété length.

    La propriété length est utilisée dans de nombreux cas.

*/

// Connaître la longueur du tableau (nb d'éléments)

numbers.length
// Pour sélectionner le dernier élément.

numbers[numbers.length -1]
// Raccourcir un tableau
numbers.length = 1;
console.log(numbers);

// suppresion de tous les éléments
numbers.length = 0;