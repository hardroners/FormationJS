/*
  L'event delegation permet d'avoir un code plus propre et de moins surcharger le navigateur d'écouteurs d'évènement.
*/

// Exemple 1

  // const cells = document.querySelectorAll(".cell")
  // const txtInfo = document.querySelector(".txt-info")

  // cells.forEach(cell => cell.addEventListener("click", handleCellClick))

  // function handleCellClick(e){
  //   console.log(e.target);
  //   txtInfo.textContent = e.target.textContent
  // }

// Exemple 2

  const grid = document.querySelector(".grid")
  const txtInfo = document.querySelector(".txt-info")

  grid.addEventListener("click", handleGridClick)

  function handleGridClick(e){
    console.log(e.target)
    if(e.target.classList.contains("cell")){
      txtInfo.textContent = e.target.textContent

    }
  }