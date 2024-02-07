import { ref } from 'vue';

// Reactive variable to store the cart items
export const cartItems = ref([]);

// Function to add an item to the cart
export const addItemToCart = item => {
	cartItems.value.push(item);
};

// Function to remove an item from the cart
export const removeItemFromCart = index => {
	cartItems.value.splice(index, 1);
};

// Function to clear all items from the cart
export const clearCart = () => {
	cartItems.value = [];
};
