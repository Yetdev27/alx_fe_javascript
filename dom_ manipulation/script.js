// script.js
const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Motivation" },
    { text: "Innovation distinguishes between a leader and a follower.", category: "Technology" },
    // Add more quotes here
];

function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category}`;
}

function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
    
    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);
        showRandomQuote();
    } else {
        alert("Please enter both quote text and category.");
    }
}

// Initial display
showRandomQuote();

// script.js

// Load quotes from local storage (if available)
const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
const quotes = [...storedQuotes];

function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

// ... (existing code)

function addQuote() {
    // ... (existing code)
    saveQuotes(); // Save quotes to local storage
}

// Add this function to your script.js

function exportToJSON() {
    const jsonBlob = new Blob([JSON.stringify(quotes)], { type: 'application/json' });
    const url = URL.createObjectURL(jsonBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'quotes.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Add this function to your script.js

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            quotes.push(...importedQuotes);
            saveQuotes();
            alert('Quotes imported successfully!');
        } catch (error) {
            alert('Error importing quotes. Please ensure the JSON file is valid.');
        }
    };
    fileReader.readAsText(event.target.files[0]);
}

// script.js

// ... (existing code)

function populateCategories() {
    const categoryFilter = document.getElementById("categoryFilter");
    const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
    
    // Populate dropdown options
    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function filterQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    const filteredQuotes = selectedCategory === "all"
        ? quotes
        : quotes.filter(quote => quote.category === selectedCategory);
    
    // Display filtered quotes
    // (You'll need to update your existing display logic here)
}
// script.js

// ... (existing code)

function saveLastSelectedCategory(selectedCategory) {
    localStorage.setItem("lastSelectedCategory", selectedCategory);
}

function loadLastSelectedCategory() {
    const lastSelectedCategory = localStorage.getItem("lastSelectedCategory");
    document.getElementById("categoryFilter").value = lastSelectedCategory || "all";
}

// Call this function during initialization
loadLastSelectedCategory();


// Simulate periodic data fetching and updating local storage
function syncWithServer() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(quotesFromServer => {
            // Merge quotesFromServer with your existing local quotes
            // Implement conflict resolution (e.g., server data takes precedence)
            // Update local storage
            // Notify users if data was updated
        });
}

// Call syncWithServer periodically (e.g., every 5 minutes)
setInterval(syncWithServer, 300000); // 5 minutes in milliseconds


