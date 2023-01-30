<script>
	export default {
		name: "Contacts",
		data() {
			return {
				images: [
                    'https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg',
                    'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
                    'https://vjoy.cc/wp-content/uploads/2019/07/4-5.jpg'
                ],
                currentIndex: 0
            }
		},
        computed: {
            currentImage() {
                return this.images[this.currentIndex]
            },
            showPrevButton() {
                return this.currentIndex > 0
            },
            showNextButton() {
                return this.currentIndex < this.images.length - 1
            }
        },
		methods: {
            prevImage() {
                this.currentIndex--
            },
            nextImage() {
                this.currentIndex++
            },
            goToMain() {
			    this.$router.push('/')
		    },
            commitBuying() {
                let id = this.currentIndex
                this.$router.push(`/gallery/${id}`)
            }
        }
	}
</script>

<template>
	<div class="container">
		<div class="slider">
            <button @click="prevImage" :disabled="!showPrevButton">&lt;</button>
            <img :src="currentImage" @click="commitBuying"/>
            <button @click="nextImage" :disabled="!showNextButton">&gt;</button>
        </div>
        <button style="width: 300px; margin-top: 50px" @click="goToMain">Вернуться на главную</button>
	</div>
</template>

<style scoped>
	.container {
		width: 960px;
		margin: 0 auto;
	}
    img {
        width: 200px;
        height: 200px;
        cursor: pointer;
    }
    .slider {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;
    }
</style>