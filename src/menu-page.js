function displayMenuPage() {
    let content = document.getElementById("content")
    const htmlString = `
            <div class="category-wrap">
            <div class="categories">
                hors-d'oeuvres
            </div>
            <ul>
            <li class="item-name">some small proportion stuff</li>
            <li class="item-description">Not quite sure what this means, unclear, but people use this for appetizers I</li>

            <li class="item-name">appetizers is probably the main way they make money right.</li>
            <li class="item-description">Like it's really not worth it, just get a main.</li>
            </ul>
        </div>

        <div class="category-wrap">
            <div class="categories">amuse-bouche</div>
            <ul>
           <li class="item-name">Probably another fancy word for appetisers</li>
            <li class="item-description">Just sounds premium, sounds expensive.</li>
            </ul>
 
        </div>

        <div class="category-wrap">
            <div class="categories">entrée</div>
            <ul>
            <li class="item-name">Either the main course or the dish before it</li>
            <li class="item-description">So that we charge them higher, gotta sound fancy. :)</li>
            </ul>
        </div>
        <div class="category-wrap">
            <div class="categories">dessert</div>
            <ul>
            <li class="item-name">Vanilla icecream</li>
            <li class="item-description">I will die on this hill. Vanilla definietly the best flavor. Most accessible, works with other food, all that good stuff.</li>
            </ul>
        </div>
        
    `
    content.innerHTML = htmlString  

}
export default displayMenuPage