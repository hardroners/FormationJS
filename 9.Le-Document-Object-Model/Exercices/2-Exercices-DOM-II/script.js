const data = [
    {
        content: "Lait",
        category: "Diary"
    },
    {
        content: "Fromage",
        category: "Diary"
    },
    {
        content: "Savon",
        category: "Wellness"
    },
    {
        content: "Pommes",
        category: "Fruits"
    },
    {
        content: "Poulet",
        category: "Meat"
    },
]

/*
    1. Écrivez une fonction fillList(list, data) qui transforme les données data en <li>.

    Un <li> par objet doit être créé.

    Chaque <li> contiendra un <p> avec le contenu de la propriété .content et un autre <p> avec le contenu de la propriété .category.

    Ajoutez ensuite chaque <li> dans la liste <ul>
*/

function fillList(list, data){
    data.forEach(element => {
        const li = document.createElement("li");
        const liContent = `
        <p></p>
        <p></p>
        `
        li.innerHTML = liContent;
        li.querySelector("p:nth-child(1)").textContent = `${element.content}`
        li.querySelector("p:nth-child(2)").textContent = `${element.category}`
        list.appendChild(li)
    });
}

    const list  = document.querySelector(".list")
    fillList(list,data)
/*
    2. Supprimez maintenant le premier et dernier élément de la liste.
*/
