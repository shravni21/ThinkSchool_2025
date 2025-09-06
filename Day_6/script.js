
fetch("data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load JSON");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const container = document.getElementById("card-container");
        const categories = Object.keys(data);

        categories.forEach(category => {
            data[category].forEach(item => {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
      <h3>${item.keyword} <small>(${category})</small></h3>
      <p>${item.description}</p>
      <pre><code>${item.example}</code></pre>
    `;

                container.appendChild(card);
            });
        });
        const searchInput = document.getElementById("search-input");
        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase();
            const cards = container.getElementsByClassName("card");
            for (const card of cards) {
                const keyword = card.querySelector("h3").textContent.toLowerCase();
                if (keyword.includes(searchTerm)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    })
    .catch(error => console.error(error));
