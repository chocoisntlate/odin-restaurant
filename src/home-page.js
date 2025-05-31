function loadPage() {
    let content = document.getElementById("content")
    const htmlString = `
        <h1>
            This restaurant is like good or something.
        </h1>
        <ul>
            <li>"good food" - Alex</li>
            <li>"good price" - Ali</li>
        </ul>
    `
    content.innerHTML = htmlString  
}

export default loadPage