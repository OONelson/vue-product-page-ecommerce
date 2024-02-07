<!-- CartItem.vue -->
<template>
	<div class="cart-item">
		<img
			:src="product.src"
			:alt="product.name"
			class="cartImg"
		/>
		<div class="cart-details">
			<h4 class="cartName">
				{{ product.name }}
			</h4>
			<div class="group">
				<p class="cartPrice">
					${{ product.price }} * {{ product.quantity }}
					<span class="priceTotal">${{ productTotal() }}</span>
				</p>
			</div>
		</div>
		<div
			class="deleteItem"
			@click="removeItem(itemToRemove)"
		>
			<svg
				width="14"
				height="16"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<defs>
					<path
						d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
						id="a"
					/>
				</defs>
				<use
					fill="#C3CAD9"
					fill-rule="nonzero"
					xlink:href="#a"
				/>
			</svg>
		</div>
	</div>
	<button
		class="checkout"
		@click="clearCart"
	>
		Checkout
	</button>
</template>

<script>
export default {
	props: {
		product: Object,
		removeItem: Function
	},
	methods: {
		productTotal() {
			return this.product.price * this.product.quantity;
		},
		removeItem(itemToRemove) {
			if (this.cartItems)
				this.cartItems = this.cartItems.filter(
					item => item.id !== itemToRemove.id
				);
		},
		clearCart() {
			this.cartItems = [];
			alert('checkout complete');
		}
	}
};
</script>

<style scoped>
.cart-item {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}
.cartImg {
	max-width: 3rem;
	max-height: 3rem;
	height: 100%;
	width: 100%;
	border-radius: 0.1rem;
}
.cartName {
	font-size: 1rem;
	padding: 0;
	margin: 0;
}
.cart-details {
	padding: 0;
	margin: 0;
}
.cartPrice {
	padding: 0;
	margin: 0;
}
.group {
	display: flex;
	flex-direction: row;
	padding: 0;
}
.priceTotal {
	color: hsl(220, 13%, 13%);
	font-weight: 700;
}
.checkout {
	padding: 0.8rem 7.5rem;
	background-color: hsl(26, 100%, 55%);
	border: none;
	color: #fff;
	font-weight: 700;
	border-radius: 0.3rem;
	margin-top: 1.5rem;
}
</style>
