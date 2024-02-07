<template>
	<Navbar />
	<Cart
		v-if="showCart"
		:cartItems="cartItems"
		:removeItem="removeCartItem"
	/>

	<div class="cart">
		<img
			src="./assets/images/icon-cart.svg"
			alt="icon-cart"
			class="nav__cartbtn"
			@click="toggleCart"
		/>
		<!-- <span class="nav__cartIndicator">{{ product.quantity }} </span> -->
	</div>
	<Product
		:product="product"
		:addToCart="addToCart"
		:decrementItem="decrementCartItem"
		:incrementItem="incrementCartItem"
	/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Product from './components/Product.vue';
import Cart from './components/Cart.vue';

import { ref } from 'vue';
export default {
	setup() {
		const showCart = ref(false);

		const cartItems = ref([]);

		const addToCart = product => {
			const existingItem = cartItems.value.find(item => item.id === product.id);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				cartItems.value.push({ ...product, quantity: 1 });
			}
		};

		const toggleCart = () => {
			showCart.value = !showCart.value;
		};
		return {
			showCart,
			cartItems,
			addToCart,
			toggleCart
		};
	},
	props: {
		product: Object
	},
	name: 'App',
	components: {
		Navbar,
		Product,
		Cart
	}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

#app {
	font-family: 'Kumbh Sans', sans-serif;
	font-weight: 400;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background-color: hsl(223, 64%, 98%);
	color: hsl(220, 14%, 75%);
	padding: 0 8rem;
}
body {
	margin: 0;
}
button {
	cursor: pointer;
	transition: all 0.3s ease-in;
}
button:active {
	opacity: 0.4;
}
.nav__cartbtn {
	position: absolute;
	top: 7%;
	right: 15%;
}
@media only screen and (max-width: 420px) {
	#app {
		padding: 0;
		display: flex;
		flex-direction: column;
	}
	.nav__cartbtn {
		top: 12%;
		right: 16%;
		z-index: 30;
	}
}
</style>
