<script>
    import Posts from './components/Posts.vue'

    export default {
        components: {
            Posts
        }
    }
</script>

<template>
    <div class="main">
        <Posts/>
    </div>
</template>

<style scoped>
    .main {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 1050px;
        margin: 0 auto;
        padding-top: 50px;
    }
</style>
