/*
    Prévenez le comportement par défaut du formulaire afin de récupérer les données écrites dans les inputs et les afficher dans les paragraphes correspondants.
*/

    const form = document.querySelector("form")
    const inputs = document.querySelectorAll("form input")
    const firstNametext = document.querySelector(".firstname")
    const lastNametext = document.querySelector(".lastname")
    

    form.addEventListener("submit", handleForm)

    function handleForm(e){
        e.preventDefault()
        firstNametext.textContent = inputs[0].value
        lastNametext.textContent = inputs[1].value
        form.reset()
    }