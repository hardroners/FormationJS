/* 
    1. Les événements.

    Les évènements permettent à l'utilisateur d'une page web d'intéragir avec celle-ci.
    Voici quelques évènements très connus : click, submit, input, mousedown/up/over, drag&drop, load, scroll, touch, etc ...

*/
const title = document.querySelector("h1");

title.addEventListener("click",handleClick);

function handleClick(event){
    console.log(event);
    console.log("Clicked !");
    title.style.backgroundColor = "Crimson"
}

window.addEventListener("load", handleLoad)

function handleLoad(){
    console.log("Loaded !!!!!!!!")
}