<script>
    import MyButton from './components/RandomNumber.vue'
    import Likes from './components/Likes.vue'
    import UserInfo from './components/UserInfo.vue'

    export default {
        components: {
            UserInfo,
            Likes,
            MyButton
        }
    }
</script>

<template>
    <div class="main">
        <UserInfo/>
        <Likes/>
        <MyButton/>
    </div>
</template>

<style scoped>
    .main {
        display: flex;
        justify-content: space-around;
    }
</style>
