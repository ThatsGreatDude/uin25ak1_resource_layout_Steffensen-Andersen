document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll("nav a");

    displayCategoryInfo("HTML");

    categoryLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const category = this.getAttribute("href").substring(1);
            displayCategoryInfo(category);
            
            categoryLinks.forEach(link => {
                link.classList.remove('selected');
            });
            
            this.classList.add('selected');
        });
    });

    function displayCategoryInfo(category) {
        const selectedCategory = resources.find(item => item.category === category); /*Bytte ut med filter!!*/
        const categoryInfoContainer = document.getElementById("category-info");

        if (selectedCategory) {
            categoryInfoContainer.innerHTML = `
                <h2>${selectedCategory.category}</h2>
                <p>${selectedCategory.text}</p>
                <ul>
                    ${selectedCategory.sources.map(source => `
                        <li><a href="${source.url}" target="_blank">${source.title}</a></li>
                    `).join('')}
                </ul>
            `;
        } 
    }
});

/*Link til det jeg har spurt ChatGPT om:*/