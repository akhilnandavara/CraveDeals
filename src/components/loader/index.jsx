const imageSources = [
    "/loader/logo.gif",
    "/loader/pizza.gif",
    "/loader/hot-dog.gif",
    "/loader/egg.gif",
    "/loader/hamburger.gif",
    // Add more image sources as needed
  ];
  
  // Function to get a random image source
  export default function getRandomLoader() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
  }
  