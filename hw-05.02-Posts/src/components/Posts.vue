<script>
export default {
    data() {
        return {
            blocks: [
                {
                    text: 'Домашнее задание №3: Работа с формами. Двустороннее связывание',
                    textColor: '#000000',
                    background: '#FFFFFF',
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
					textDecoration: 'none'
                },
				{
                    text: 'Пост состоит из блоков, которые хранятся в массиве',
                    textColor: '#000000',
                    background: '#FFFFFF',
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
					textDecoration: 'none'
                },
				{
                    text: 'Каждому отдельному блоку можно установить цвет текста, фон, шрифт, размер шрифта, начертание шрифта (курсив, жирный). ',
                    textColor: '#000000',
                    background: '#FFFFFF',
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
					textDecoration: 'none'
                },
				{
                    text: 'Редактирование текста реализовать через textarea. Все переносы должны сохраняться в готов тексте.',
                    textColor: '#000000',
                    background: '#FFFFFF',
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
					textDecoration: 'none'
                }
            ]
        }
    },
	methods: {
		savePost() {
			let data = JSON.stringify(this.blocks);
			localStorage.setItem('postData', data);
            alert('Пост сохранен')
		},
		getPost() {
			let postData = localStorage.getItem('postData');
			if (postData) {
				this.blocks = JSON.parse(postData);
				console.log(this.blocks)
			}
		}
	},
	mounted() {
		this.getPost();
	}
}
</script>

<template>
    <div class="editor" v-for="(block, index) in blocks" :key="index">
        <textarea 
            v-model="block.text"
            :style="{
                color: block.textColor,
                background: block.background,
                fontFamily: block.fontFamily,
                fontSize: block.fontSize + 'px',
                fontWeight: block.fontWeight,
                fontStyle: block.fontStyle,
				textDecoration: block.textDecoration
            }"
            >
        </textarea>
        <div class="tools">
            <div class="color flex">
				<p>Цвет текста</p>
                <input type="color" v-model="block.textColor">
            </div>
            <div class="background flex">
				<p>Цвет фона</p>
                <input type="color" v-model="block.background">
            </div>
            <div class="font-family flex">
				<p>Шрифт</p>
                <select v-model="block.fontFamily">
                    <option value="Roboto">Roboto</option>
                    <option value="Arial">Arial</option>
                    <option value="Courier">Courier</option>
                    <option value="Tahoma">Tahoma</option>
                </select>
            </div>
            <div class="font-size flex">
				<p>Размер шрифта</p>
                <input type="number" min="10" max="30" v-model="block.fontSize">
            </div>
            <div class="font-weight flex">
				<p style="font-weight: bold">Ж</p>
                <input type="checkbox" v-model="block.fontWeight" true-value="bold" false-value="normal">
            </div>
            <div class="font-style flex">
				<p style="font-style: italic">К</p>
                <input type="checkbox" v-model="block.fontStyle" true-value="italic" false-value="normal">
            </div>
			<div class="text-decoration flex">
				<p style="text-decoration: underline">Ч</p>
                <input type="checkbox" v-model="block.textDecoration" true-value="underline" false-value="none">
            </div>
        </div>
		<button @click='savePost'>Сохранить</button>
    </div>
</template>

<style scoped>
	.editor {
		width: 500px;
		margin-bottom: 50px;
	}
	textarea {
		width: 100%;
		height: 100px;
	}
	.tools {
		display: flex;
		justify-content: space-between;
	}
	.flex {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	button {
		display: block;
		margin: 0 auto;
		margin-top: 20px;
		cursor: pointer;
	}
	input {
		cursor: pointer;
	}
	select {
		cursor: pointer;
	}
</style>

