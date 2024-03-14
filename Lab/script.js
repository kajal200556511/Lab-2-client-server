// ToyCar constructor
function ToyCar(model, brand, color, price, decade, packaging, scale, features, manufacturer) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.decade = decade;
    this.packaging = packaging;
    this.scale = scale;
    this.features = features;
    this.manufacturer = manufacturer;
}

// Example instance
const camaro = new ToyCar(
    "Chevy Camaro",
    "Chevrolet",
    "Green",
    8.99,
    "70s",
    "Window Box",
    "1/32 Scale",
    ["Openable doors", "Detailed interior and exterior", "5'L x 2'W x 1.75'H"],
    "Jada"
);

// Display car details on the HTML page
document.getElementById("carDetails").innerHTML = `
    <h2>${camaro.brand} ${camaro.model}</h2>
    <p><strong>Color:</strong> ${camaro.color}</p>
    <p><strong>Decade:</strong> ${camaro.decade}</p>
    <p><strong>Packaging:</strong> ${camaro.packaging}</p>
    <p><strong>Scale:</strong> ${camaro.scale}</p>
    <p><strong>Price:</strong> $${camaro.price}</p>
    <p><strong>Manufacturer:</strong> ${camaro.manufacturer}</p>
    <p><strong>Features:</strong></p>
    <ul>
        ${camaro.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
`;

// Function to change the color of the toy car
function changeColor() {
    camaro.color = prompt("Enter new color:");
    updateCarDetails();
}

// Function to update car details on the page
function updateCarDetails() {
    document.getElementById("carDetails").innerHTML = `
        <h2>${camaro.brand} ${camaro.model}</h2>
        <p><strong>Color:</strong> ${camaro.color}</p>
        <p><strong>Decade:</strong> ${camaro.decade}</p>
        <p><strong>Packaging:</strong> ${camaro.packaging}</p>
        <p><strong>Scale:</strong> ${camaro.scale}</p>
        <p><strong>Price:</strong> $${camaro.price}</p>
        <p><strong>Manufacturer:</strong> ${camaro.manufacturer}</p>
        <p><strong>Features:</strong></p>
        <ul>
            ${camaro.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
}
