/*
    Faites-en sorte que le cercle suive votre souris.
    Le pointeur de votre souris doit se trouver parfaitement au milieu du cercle.
*/

    const circle = document.querySelector(".circle")

    document.addEventListener("mousemove", handleCircle)

    function handleCircle(e){
        circle.style.transform = `translate(calc(${e.pageX}px - 50%), calc(${e.pageY}px - 50%))`
    }