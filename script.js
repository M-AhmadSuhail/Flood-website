const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const getCityCoordinates= () => {
    const cityName = cityInput.ariaValueMax.trim();  
    // user se value le ga aur sapce hatayega
    if(!cityName) return; // agr kuch nhi enter kia user ne
     
    const GEOCODING_API_URL =
}