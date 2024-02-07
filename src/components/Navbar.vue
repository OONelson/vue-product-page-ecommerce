<template>
	<div class="nav__container">
		<div id="wrapper">
			<picture>
				<img
					src="../assets/images/icon-menu.svg"
					alt="menu"
					class="nav__menubtn"
					@click="toggleMenu"
					v-if="!showMenu"
				/>
				<img
					src="../assets/images/logo.svg"
					alt="Logo"
					class="nav__logo"
				/>
			</picture>
			<div
				class="list__container"
				v-if="showMenu"
			>
				<img
					src="../assets/images/icon-close.svg"
					alt="icon-close"
					class="nav__menuclose"
					@click="toggleOff"
					v-if="showMenu"
				/>
				<ul
					class="nav__list"
					v-if="showMenu"
				>
					<li class="nav__item">
						<a
							href="#"
							class="nav__link"
							>Collections</a
						>
					</li>
					<li class="nav__item">
						<a
							href="#"
							class="nav__link"
							>Men</a
						>
					</li>
					<li class="nav__item">
						<a
							href="#"
							class="nav__link"
							>Women</a
						>
					</li>
					<li class="nav__item">
						<a
							href="#"
							class="nav__link"
							>About</a
						>
					</li>
					<li class="nav__item">
						<a
							href="#"
							class="nav__link"
							>Contact</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div id="group">
			<img
				src="../assets/images/image-avatar.png"
				alt="avatar"
				class="nav__profile"
			/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showMenu: false
		};
	},
	methods: {
		toggleMenu() {
			this.showMenu = true;
		},
		toggleOff() {
			this.showMenu = false;
		}
	},
	props: {
		product: Object,
		decrementItem: Function,
		incrementItem: Function,
		removeItem: Function
	},
	computed: {
		totalItems() {
			return this.cartItems.reduce((total, item) => total + item.quantity, 0);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
	list-style-type: none;
	padding: 0;
	display: flex;
}
li {
	margin-right: 1rem;
	position: relative;
	justify-items: center;
}

li:last-child {
	margin: 0;
}
a {
	text-decoration: none;
	color: hsl(220, 14%, 75%);
	transition: all 0.2s ease;
}

a::before {
	margin-top: 3.7rem;
	content: '';
	width: 2.5px;
	height: 3px;
	position: absolute;
	top: 0;
	left: 0;
	transform: scaleY(0);
	background-color: hsl(26, 100%, 55%);
	transition: transform 0.1s, width 0.3s cubic-bezier(1, 0, 0, 1) 0.1s;
}
a:hover::before {
	transform: scaleY(1);
	width: 100%;
}
a:hover {
	color: hsl(219, 9%, 45%);
}
.nav__container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 0;
	position: relative;
}
.nav__container::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 1px;
	background-color: hsl(220, 14%, 75%);
	top: 100%;
}
#wrapper {
	display: flex;

	align-items: center;
	flex-direction: row;
}
#group {
	display: flex;
	align-items: center;
	cursor: pointer;
}

.nav__logo {
	margin-right: 1.5rem;
}
.nav__menubtn {
	display: none;
}
.nav__cartIndicator {
	position: absolute;
	top: 24%;
	right: 6%;
	color: white;
	background-color: hsl(26, 100%, 55%);
	width: 1.2rem;
	height: 1.2rem;
	padding: 0 0.2rem;
	border-radius: 45%;
	display: none;
}
.nav__menuclose {
	display: none;
}
.nav__profile {
	height: 3rem;
	width: 3rem;
	margin-left: 2rem;
	transition: all 0.1s ease;
}
.nav__profile:hover {
	border: 1px solid hsl(26, 100%, 55%);
	border-radius: 50%;
}
.display {
	display: block;
}
@media only screen and (max-width: 420px) {
	picture {
		display: flex;
	}
	.nav__container {
		width: 93%;
		align-items: center;
		padding: 1rem;
	}
	.nav__menubtn {
		display: block;
		padding-right: 1rem;
	}
	.nav__list {
		flex-direction: column;
		background-color: #fff;
		height: 300vh;
		width: 70vw;
		position: absolute;
		top: -5%;
		left: 0;
		z-index: 10;
		padding: 6rem 1rem 1rem 1rem;
		color: rgb(0, 0, 0);
	}

	.list__container {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.6);
	}
	.nav__menuclose {
		display: block;
		z-index: 20;
		position: absolute;
		top: 2%;
		left: 2%;
		padding: 1rem 0 2rem 0;
	}
	.nav__link {
		color: rgb(0, 0, 0);
		font-size: 1.2rem;
		font-weight: 700;
	}
	.nav__item {
		margin-bottom: 1rem;
	}
	ul {
		align-items: start;
	}
}
</style>
