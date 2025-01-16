const fetchButton = document.getElementById("fetch");
fetchButton.addEventListener("click", async () => {
    const response = await fetch("https://videogamesplus.ca", {
      headers: {
        "Origin": "https://axemark38.github.io",
        "Access-Control-Allow-Origin": "*"
      }});
    alert(response.status);
})
