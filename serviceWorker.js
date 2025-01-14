// This code executes in its own worker or thread
async function fetchTest(){
    try {
        
        const res = await fetch("https://videogamesplus.ca/collections/limited-run-games");
        //const stock = html.querySelector("span.collection-filters__filter-list-item-text")
        console.log(`Response status: ${res.status}`);
        
    } catch (error){console.log(error)}
}
self.addEventListener("install", event => {
   console.log("Service worker installed");
});
self.addEventListener("activate", event => {
   console.log("Service worker activated");
   fetchTest();
});
