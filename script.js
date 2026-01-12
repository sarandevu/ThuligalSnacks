// Function to scroll down to the menu
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Function to handle adding items to cart
function addToCart(itemName) {
    alert(itemName + " has been added to your cart!");
    // In a real website, this would update a database or local storage
}