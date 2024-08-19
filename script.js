document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F</p>
        <p>${celsius}°C is equal to ${kelvin.toFixed(2)}K</p>
    `;
});