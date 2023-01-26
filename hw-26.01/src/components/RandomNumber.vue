<script>
    export default {
        data () {
            return {
                counter: [],
                number: 100
            } 
        },
        methods: {
            getRandom(){
                this.counter.push(Math.floor(Math.random() * this.number))
            }
        },
    }
</script>

<template>
    <div>
        <button @click="getRandom">Сгенерировать число</button>
        <div class="wrapper">
            <p v-for="index in counter" :key="index">{{ index }}</p>
        </div>
    </div>
</template>

<style scoped>
    button {
        margin-block-start: 1em;
    }
    .wrapper {
        width: 150px;
        display: flex;
        flex-wrap: wrap;
    }
    p {
        margin: 5px 5px 0 5px;
    }
</style>