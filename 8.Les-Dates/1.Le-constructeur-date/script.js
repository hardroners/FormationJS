/* 
    En JavaScript, on peut construire un objet date à l'aide du constructeur Date().
*/  

const date = new Date();
console.log(date);


/* 
    1. Date.prototype.getDate/Day/FullYear/Hours/Millisecondes/Minutes/Month/Seconds()

    Retourne le jour, l'heure, l'année, les minutes, etc ... en fonction de la méthode utilisée.
*/
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMinutes());

/* 
    2. Date.now() 

    Retourne le nombre de millisecondes écoulées depuis le 1er Janvier 1970.
    C'est un date arbitraire qui a été choisie pour faciliter les calculs.
*/

console.log(Date.now())

/* 
    3. Modifier une date avec Date.prototype.setHours/Minutes/Secondes() etc ... 
*/
date.setHours(18)
date.setMinutes(55);
date.setFullYear(2004);

/*
    4. On peut directement faire des calculs avec les objets Date.
    La valeur en millisecondes de ces dates sera utilisée.

    On peut également accèder à cette valeur avec Date.prototype.valueOf().
*/

console.log(new Date(1988,5,13));
