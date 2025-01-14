navigator.serviceWorker.register("./serviceWorker.js");

const fetchButton = document.getElementById("fetch");
fetchButton.addEventListener("click", async () => {
  try {
    const response = await fetch("https://videogamesplus.ca", {
      headers: {
        "Origin": "https://axemark38.github.io",
        "Access-Control-Allow-Origin": "*"
      }});
    console.log(response.status);
    
  } catch (error){console.log(error)}
})
