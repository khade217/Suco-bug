// JavaScript functionality
document.getElementById("transaction-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Add form handling logic
  console.log("Transaction added");
});

document.getElementById("export-text").addEventListener("click", () => {
  console.log("Export as Text");
});

document.getElementById("export-json").addEventListener("click", () => {
  console.log("Export as JSON");
});

document.getElementById("export-csv").addEventListener("click", () => {
  console.log("Export as CSV");
});
