const products = [
    {
        name: "Laptop",
        price: 999.99,
        description: "Powerful laptop for all your computing needs.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Headphones",
        price: 79.99,
        description: "High-quality headphones for immersive audio experience.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Smartphone",
        price: 699.99,
        description: "Advanced smartphone with cutting-edge features.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Tablet",
        price: 449.99,
        description: "Portable tablet for entertainment and productivity.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Smartwatch",
        price: 249.99,
        description: "Stay connected and track your fitness with this smartwatch.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Gaming Console",
        price: 399.99,
        description: "Experience the thrill of gaming with this powerful console.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Camera",
        price: 599.99,
        description: "Capture life's moments with stunning clarity and detail.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Wireless Speaker",
        price: 129.99,
        description: "Enjoy your favorite music wirelessly with this speaker.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "External Hard Drive",
        price: 129.99,
        description: "Expand your storage and backup your files with ease.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Wireless Mouse",
        price: 29.99,
        description: "Navigate your computer with precision and comfort.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Printer",
        price: 199.99,
        description: "Print documents and photos with exceptional quality.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Desk Lamp",
        price: 49.99,
        description: "Illuminate your workspace with adjustable brightness.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Fitness Tracker",
        price: 79.99,
        description: "Monitor your health and track your workouts.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Bluetooth Earbuds",
        price: 99.99,
        description: "Wireless earbuds for on-the-go audio enjoyment.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Portable Charger",
        price: 39.99,
        description: "Charge your devices anywhere, anytime.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "USB Flash Drive",
        price: 19.99,
        description: "Store and transfer your files conveniently.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Monitor",
        price: 299.99,
        description: "Upgrade your display for enhanced productivity.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Keyboard",
        price: 49.99,
        description: "Type comfortably with this reliable keyboard.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Computer Mousepad",
        price: 9.99,
        description: "Enhance your mouse precision with this smooth pad.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Graphic Tablet",
        price: 199.99,
        description: "Express your creativity with this digital drawing tablet.",
        type: ["type1", "type2", "type3"]
    },
    {
        name: "Wireless Router",
        price: 79.99,
        description: "Fast and reliable internet connection for your home network.",
        type: ["type1", "type2", "type3"]
    }
];


const div = document.querySelector('#products');

for (let i = 0; i < products.length; i++) {

    const randomIndex = Math.floor(Math.random() * products[i].type.length);

    div.innerHTML += `
    <h1>Name: ${products[i].name}</h1>
     <h1>Price: ${products[i].price}</h1>
     <h5>Description: ${products[i].description}</h5>
     <h3>Type: ${products[i].type[randomIndex]}</h3>
     <hr>
      `;
}