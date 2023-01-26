<script>
    export default {
        data () {
            return {
                counter: 0,
            } 
        },
        methods: {
            logger(){
                this.counter++
            },
        },
        
    }
</script>

<template>
    <div class="wrapper">
        <p>Счетчик лайков</p>
        <button @click="logger">{{ counter }}</button>

    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        padding: 0 5px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>