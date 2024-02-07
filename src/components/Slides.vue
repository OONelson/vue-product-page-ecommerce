<template>
	<div class="image-slider">
		<!-- Main slider -->
		<div class="main-slider">
			<img
				src="../assets/images/icon-previous.svg"
				alt="icon-previous"
				class="prevBtn"
				@click="prevBtn"
			/>
			<img
				:src="currentImage.src"
				:alt="currentImage.alt"
				class="main-image"
			/>
			<img
				src="../assets/images/icon-next.svg"
				alt="icon-next"
				class="nextBtn"
				@click="nextBtn"
			/>
		</div>

		<!-- Thumbnails -->
		<div class="thumbnail-container">
			<div
				v-for="(image, index) in images"
				:key="index"
				@click="changeImage(index)"
				:class="{
					thumbnail: true,
					'current-thumbnail': index === currentImageIndex
				}"
			>
				<img
					:src="image.src"
					:alt="image.alt"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			images: [
				{
					src: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					alt: 'Image 1'
				},
				{
					src: 'https://images.unsplash.com/photo-1603808033596-5d1fa1629eae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
					alt: 'Image 2'
				},
				{
					src: 'https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
					alt: 'Image 3'
				},
				{
					src: 'https://images.unsplash.com/photo-1603808033587-935942847de4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
					alt: 'Image 4'
				}
			],
			currentImageIndex: 0
		};
	},
	computed: {
		currentImage() {
			return this.images[this.currentImageIndex];
		}
	},
	methods: {
		changeImage(index) {
			this.currentImageIndex = index;
		},
		nextBtn() {
			this.currentImageIndex =
				(this.currentImageIndex + 1) % this.images.length;
		},
		prevBtn() {
			this.currentImageIndex =
				(this.currentImageIndex - 1 + this.images.length) % this.images.length;
		}
	}
});
</script>

<style scoped>
.image-slider {
	grid-column: 1/1;
	max-width: 400px;
	margin: auto;
}

.main-slider {
	text-align: center;
}

.main-image {
	width: 400px;
	height: 370px;
	border: 1px solid #ddd;
	border-radius: 1rem;
}

.thumbnail-container {
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
}

.thumbnail {
	cursor: pointer;
	margin: 0 5px;
}

.thumbnail img {
	width: 80px;
	height: 80px;
	border-radius: 0.5rem;
	transition: all 0.4s ease-out;
}
.current-thumbnail {
	opacity: 0.4;
	border: 2px solid hsl(26, 100%, 55%);
	border-radius: 0.5rem;
}
.prevBtn,
.nextBtn {
	display: none;
}
@media only screen and (max-width: 420px) {
	.image-slider {
		width: 420px;
		padding: 0;
		display: flex;
		flex-direction: column;
	}
	.main-image {
		width: 420px;
		border-radius: 0;
	}
	.thumbnail-container {
		display: none;
	}
	.main-slider {
		position: relative;
	}
	.prevBtn {
		position: absolute;
		top: 50%;
		left: 1%;
		background-color: #fff;
		border-radius: 50%;
		padding: 1rem;
	}
	.nextBtn {
		position: absolute;
		top: 50%;
		right: 1%;
		background-color: #fff;
		border-radius: 50%;
		padding: 1rem;
	}
	.prevBtn,
	.nextBtn {
		display: block;
	}
}
</style>
