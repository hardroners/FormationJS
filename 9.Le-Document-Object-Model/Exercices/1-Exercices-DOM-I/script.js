/*
    1. Sélectionnez et changez la couleur du <h1> en "plum" en JavaScript.
*/

    const h1Text = document.querySelector("h1")
    h1Text.style.color = "Plum"

/*
    2. Sélectionnez le paragraphe sous le titre à l'aide de son ID.

    Deux façons de faire sont possibles.
*/

    const paragraphe = document.getElementById("subtitle")
    const subtitle = document.querySelector("#subtitle")

/*
    3. Loggez le texte du troisième <li> dans la console.
*/

    const liLog = document.querySelector("ul")
    console.log(liLog.childNodes[5].textContent);
    console.log(document.querySelector("ul li:nth-child(3)").textContent)


/*  
    4. Loggez le contenu de l'attribut "src" de l'image dans la console.
*/


    const srcLog = document.querySelector("img")
    console.log(srcLog.getAttribute("src"));

/*
    5. Rajoutez un <li> contenant le texte "Nouveau LI !" à la liste. 
*/
    const list = document.querySelector(".list")
    const li = document.createElement("li");
    const liContent = `Nouveau LI !`
    li.innerHTML = liContent;
    list.appendChild(li)