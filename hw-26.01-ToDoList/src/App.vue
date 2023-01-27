<script>
    import ToDoList from './components/ToDoList.vue'

    export default {
        components: {
            ToDoList
        }
    }
</script>

<template>
    <div class="main">
        <ToDoList/>
    </div>
</template>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        background: #000;
    }
    .main {
        display: flex;
        justify-content: center;
        background-color: #000;
        min-height: 100vh;
    }
</style>
