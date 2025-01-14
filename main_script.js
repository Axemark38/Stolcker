const fetchButton = document.getElementById("fetch");
fetchButton.addEventListener("click", async () => {
  try {
    const response = await fetch("https://videogamesplus.ca");
    console.log(response.status);
    
  } catch (error){console.log(error)}
})
