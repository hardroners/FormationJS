/* 
    1.Les méthodes.

    Une méthode est une propriété d'un objet contenant une fonction.
    On appelle une méthode en utilisant le nom de la propriété qui lui est associée.

*/

const athlete = {
    name: "Tom",
    jump: () => {
        console.log('JUMP');
    },
    swim: function(){
        console.log("SWIM");
    },
    run(){
        console.log("RUN");
    }
}
athlete.jump();
athlete.run();
athlete.swim();