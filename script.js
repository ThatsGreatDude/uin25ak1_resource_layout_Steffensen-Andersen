document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll("nav a");
    const categoryInfoContainer = document.getElementById("category-info");

    function displayCategoryInfo(category) {
        const selectedResources = resources.filter(item => item.category === category); 

        if (selectedResources.length > 0) {
            const resourceHTML = selectedResources.map(resource => ` 
                <h2>${resource.category}</h2>
                <p>${resource.text}</p>
                <ul>
                    ${resource.sources.map(source => ` 
                        <li><a href="${source.url}" target="_blank">${source.title}</a></li>
                    `).join('')}
                </ul>
            `).join('');

            categoryInfoContainer.innerHTML = resourceHTML;
        }
    }

    const firstLink = categoryLinks[0]; 
    firstLink.classList.add("selected");

    displayCategoryInfo("HTML");

    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const category = this.dataset.category;

            displayCategoryInfo(category);

            categoryLinks.forEach(link => link.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
});

/*Chatgpt: https://chatgpt.com/share/679c9432-596c-800d-84b1-089c51a8d1b3  */
