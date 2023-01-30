<script>
	export default {
		name: "Img",
		data() {
			return {
                images: [
                    'https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg',
                    'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
                    'https://vjoy.cc/wp-content/uploads/2019/07/4-5.jpg'
                ],
				id: this.$route.params.id
			}
		},
		methods: {
            goToGalery() {
                this.$router.push(`/gallery`)
            },
            goToMain() {
			    this.$router.push('/')
		    }
        }
	}
</script>

<template>
	<div class="container">
        <img :src="images[id]"/>
        <button @click="goToGalery">Назад</button>
        <button @click="goToMain">Вернуться на главную</button>
	</div>
</template>

<style scoped>
	.container {
		width: 960px;
		margin: 0 auto;
        display: flex;
        flex-direction: column;
	}
    img {
        width: 200px;
        height: 200px;
    }
    button {
        width: 200px;
        margin-top: 20px;
    }
</style>