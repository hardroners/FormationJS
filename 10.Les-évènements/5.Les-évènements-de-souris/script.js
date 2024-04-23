/* 
    Voici les évènements de pointage : click, dblclick, mouseup, mousedown.

    L'objet d'évènement fourni à la callback nous donnera donc des informations spécifiques au pointage.
*/

    document.addEventListener("click", handleClick)
    // document.addEventListener("dbclick", handleClick)
    // document.addEventListener("mousedown", handleClick)
    // document.addEventListener("mouseup", handleClick)

    function handleClick(e){
        console.log(e)
        document.querySelector(".clic-info").textContent = `Event : ${e.type}, X : ${e.pageX}, Y : ${e.pageY}`
    }


/* 
    Il existe également d'autres évenements en rapport avec la souris, sans le clic.

    Notamment : mouseover, mousemove, mouseout, mouseenter, mouseleave, wheel 
*/
    
    const box = document.querySelector(".box")

    box