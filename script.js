async function getQuote() {
    try {
        let response = await fetch("https://api.adviceslip.com/advice"); 
        let data = await response.json();  // Convert response to JSON
        
        // Correct way to access advice text
        let quote = data.slip.advice;  
        
        document.getElementById("quote").innerText = `"${quote}"`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote").innerText = "Failed to fetch quote!";
    }
}
