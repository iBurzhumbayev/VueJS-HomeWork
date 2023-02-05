<script>
export default {
    data() {
        return {
            images: [],
            image: 0,
            src: ""
        }
    },
    methods: {
        addImg() {
            if (this.src == "") {
                return
            }
            let newBlock = this.src
            this.images.push(newBlock)
            this.src = ""
        },
		setRandomImage() {
				this.image = Math.floor(Math.random() * this.images.length);
		}
    }
}
</script>

<template>
    <main>
        <div class="wrapper">
            <input type="text" placeholder="URL" v-model="src">
            
            <button @click="addImg">Добавить</button>
            <button style="margin-right:10px" @click="setRandomImage">Случайная картинка</button>
        </div>

        <div class="wrapper__img">
			<img class="imgSelection" :src="images[image]" v-for="(n, i) in images" :key="i" @click="image = i">
		</div>
        <transition name="image" mode="out-in">
            <img class="imgShow" :key="image" :src="images[image]">
        </transition>
    </main>
</template>

<style scoped>
	main{
		display: flex;
		flex-direction: column;
		width: 420px;
		margin: 0 auto;
		border: 2px solid black;
		padding: 10px 10px 10px 20px;
	}
	.image-enter-active,
	.image-leave-active {
	transition: opacity .3s;
	}
	.image-enter, .image-leave-to {
	opacity: 0;
	}
	.imgSelection {
		width: 50px;
		height: 50px;
		margin-right: 10px;
		margin-top: 10px;
	}
	.imgShow {
		width: 410px;
		margin-top: 10px;
	}
	.wrapper {
		display: flex;
		justify-content: space-between;
	}
	.wrapper__img {
		display: flex;
		flex-wrap: wrap;
	}
</style>