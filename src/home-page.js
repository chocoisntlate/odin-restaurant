function displayHomePage(contentElement) {
    const htmlString = `
    <h1>Some fancy restaurant</h1>
        <p id="brief">Careful selection, skillful execution</p>
        <p id="description">An artistic approach on food. We mix the best elements of different cuisines and combine them in a harmonic way.</p>
        <p class="description">NOTE: Currently, we only take reservations due to high demand. Check out the menu and contact pages for further details.</p>
    `
    contentElement.innerHTML = htmlString  
}

export default displayHomePage