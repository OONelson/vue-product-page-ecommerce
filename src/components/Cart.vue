<!-- Cart.vue -->
<template>
	<div class="cart">
		<h2>Cart</h2>
		<hr />
		<div v-if="cartItems.length === 0">Your cart is empty</div>
		<CartItem
			v-for="item in cartItems"
			:key="item.id"
			:product="item"
			@remove="removeItem(itemToRemove)"
		/>
	</div>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
	components: {
		CartItem
	},
	props: {
		cartItems: Array,
		removeItem: Function
	}
};
</script>

<style scoped>
.display {
	display: block;
}
.cart {
	position: absolute;
	top: 16%;
	right: 5%;
	background-color: #fff;
	padding: 0;
	width: 20rem;
	height: 12rem;
	border-radius: 0.3rem;
	box-shadow: 0 0.5rem 0.4rem 0.3rem rgb(0, 0, 0, 0.6);
}
h2 {
	color: hsl(220, 13%, 13%);
	font-size: 1rem;
	text-align: left;
	padding: 0.5rem;
}
@media only screen and (max-width: 420px) {
	.cart {
		z-index: 20;
		margin-top: 2rem;
		width: 90%;
	}
}
</style>
