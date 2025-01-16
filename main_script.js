const fetchButton = document.getElementById("fetch");
fetchButton.addEventListener("click", async () => {
    const response = await fetch("https://videogamesplus.ca", {
      headers: {
          "Access-Control-Request-Headers": "accept,text/html",
        "Content-Security-Policy": "connect-src https:"
      }});
    console.log(response.status);
})
