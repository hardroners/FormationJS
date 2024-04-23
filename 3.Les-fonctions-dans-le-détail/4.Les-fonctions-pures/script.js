/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :

    A. Elle retourne toujours la même chose en fonction des mêmes paramètres.
    B. Elle n'utilise aucune valeur en dehors de sa portée et n'a pas d'effets secondaires en dehors de son bloc.

*/
function add(a,b){ //Pures
    return a + b;
}
add(5,5);

let VAT = 20;

function getFinalPrice(rawPrice){ // pas pures
    return rawPrice * (100 + VAT) / 100;
}



