<script>
	export default {
		name: "Contacts",
		data() {
			return {
				city: 'Астана',
                street: 'Сыганак 50',
                phoneNumber: '+7 (777) 777 77 77',
                email: 'primer@mail.ru'
			}
		},
		methods: {
            goToMain() {
			    this.$router.push('/')
		    }
        }
	}
</script>

<template>
	<div class="container">
		<div class="wrapper">
            <p style='font-weight: 600'>Контакты</p>
            <p>Город: {{city}}</p>
            <p>Улица: {{street}}</p>
            <a href="tel:+77777777777">Телефон: {{phoneNumber}}</a>
            <a href="mailto:primer@mail.ru">Email: {{email}}</a>
        </div>
        <button @click="goToMain">Вернуться на главную</button>
	</div>
</template>

<style scoped>
	.container {
		width: 960px;
		margin: 0 auto;
	}
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    a {
        text-decoration: none;
        color: black;
        margin: 0 0 10px 0;
    }
    p {
        margin: 0 0 10px 0;
    }
</style>