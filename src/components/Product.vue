<template>
	<div class="main">
		<Slides />
		<div
			class="text-content"
			v-for="product in products"
		>
			<h4 class="company-name">sneakers company</h4>
			<h1 class="product-name">{{ product.name }}</h1>
			<p class="text">
				{{ product.text }}
			</p>

			<div class="price-container">
				<p class="price">
					${{ product.price }}
					<span class="percent">{{ product.percent }}%</span>
				</p>
				<p class="old-price">${{ product.oldprice }}</p>
			</div>

			<div class="cart-area">
				<button
					class="btn"
					@click="addToCart(product)"
				>
					<svg
						class="cart-icon"
						width="45"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
							fill="#FFF"
							fill-rule="nonzero"
						/>
					</svg>
					Add to cart
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Slides from '../components/Slides.vue';

export default {
	data() {
		return {
			products: [
				{
					id: 1,
					src: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					name: 'Fall Limited Edition Sneakers',
					text: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
					price: 125.0,
					percent: 50,
					oldprice: 250.0
				}
			],
			quantity: 0
		};
	},

	props: {
		product: Object,
		addToCart: Function
	},
	methods: {
		addToCart(product) {
			this.addToCart(product);
			alert('Item added to cart');
		}
	},
	components: {
		Slides
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.main {
	padding: 3rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 4rem;
}

.text-content {
	grid-column: 2/2;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	text-align: left;
}
.company-name {
	color: hsl(26, 100%, 55%);
	text-transform: uppercase;
	line-height: 0.5;
	font-size: 0.8rem;
	font-weight: 700;
	padding-bottom: 1rem;
}
.product-name {
	font-size: 2.3rem;
	align-items: flex-start;
	line-height: 1;
	color: hsl(220, 13%, 13%);
	font-weight: 700;
}
.text {
	color: hsl(219, 9%, 45%);
	padding: 1rem 0;
}
.price-container {
	padding: 1rem 0;
}
.price {
	display: flex;
	flex-direction: row;
	align-items: center;
	color: hsl(220, 13%, 13%);
	font-size: 1.8rem;
	font-weight: 700;
}
.percent {
	background-color: hsl(25, 100%, 94%);
	padding: 0.5rem 1rem;
	font-size: 1rem;
	border-radius: 0.5rem;
	color: hsl(26, 100%, 55%);
	margin-left: 2rem;
}
.old-price {
	text-decoration: line-through;
	margin: 1rem 0;
}
.cart-area {
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
}

.btn {
	padding: 0.6rem 4rem;
	background-color: hsl(26, 100%, 55%);
	color: hsl(25, 100%, 94%);
	border: none;
	border-radius: 0.5rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-size: 1rem;
	font-weight: 700;
}
.cart-icon {
	padding-right: 0.5rem;
}
@media only screen and (max-width: 420px) {
	.main {
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;
	}
	.text-content {
		padding: 1rem 2rem;
	}
	.product-name {
		font-size: 1.8rem;
	}
	.cart-area {
		margin-left: 5rem;
		flex-direction: column;
	}
	.increament {
		width: 100%;
		margin-bottom: 1rem;
	}
	.number {
		padding: 0 4rem;
	}
	.btn {
		justify-content: center;
		width: 150%;
	}
}
</style>
