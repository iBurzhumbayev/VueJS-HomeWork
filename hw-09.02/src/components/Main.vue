<script>
    export default {
        name: 'Main',
        data() {

        },
        methods: {
            goToGalery() {
                this.$router.push(`/gallery`)
            },
            goToContacts() {
                this.$router.push(`/contacts`)
            }
        }
    }
</script>

<template>
    <div class="container">
        <button @click="goToGalery">Галерея</button>
        <button @click="goToContacts">Контакты</button>
    </div>
</template>

<style scoped>
    .container {
        width: 960px;
        margin: 0 auto;
    }
</style>
