const factElement = document.getElementById("catFact");
const button = document.getElementById("getFactBtn");

async function fetchCatFact() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    factElement.textContent = data.fact;
  } catch (error) {
    factElement.textContent = "Oops! Could not fetch a fact.";
    console.error(error);
  }
}

button.addEventListener("click", fetchCatFact);

// Optional: fetch one fact on page load
fetchCatFact();
