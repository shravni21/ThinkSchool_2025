// Escape HTML special characters
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

fetch("data.json")
  .then(response => {
    if (!response.ok) throw new Error("Failed to load JSON");
    return response.json();
  })
  .then(data => {
    const container = document.getElementById("card-container");
    const categories = Object.keys(data);

    function renderCards(category = "All") {
      container.innerHTML = "";
      categories.forEach(cat => {
        if (category === "All" || category === cat) {
          data[cat].forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
              <h3>${escapeHtml(item.keyword)} <small>(${cat})</small></h3>
              <h4>${escapeHtml(item.title)}</h4>
              <p>${escapeHtml(item.description)}</p>
              <pre><code>${escapeHtml(item.example)}</code></pre>
              <p><strong>Keywords:</strong> ${item.associatedKeywords.map(k => escapeHtml(k)).join(", ")}</p>
              <p><strong>Category:</strong> ${escapeHtml(item.category)}</p>
              <p><strong>Difficulty:</strong> ${escapeHtml(item.difficulty)}</p>
            `;
            container.appendChild(card);
          });
        }
      });
    }

    renderCards();

    // Category filter
    document.querySelectorAll(".sheetNav ul li").forEach(li => {
      li.addEventListener("click", () => {
        document.querySelectorAll(".sheetNav ul li").forEach(item => item.classList.remove("active"));
        li.classList.add("active");
        renderCards(li.dataset.category);
      });
    });

    // Search
    const searchInput = document.getElementById("search-bar");
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const cards = container.getElementsByClassName("card");
      for (const card of cards) {
        const keyword = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = keyword.includes(searchTerm) ? "block" : "none";
      }
    });

    // Theme toggle
    document.getElementById("theme-toggle").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  })
  .catch(error => console.error(error));
