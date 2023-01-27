<script>
    export default {
        data() {
            return {
                list: [
                    {
                        id: 1,
                        text: 'Убраться дома',
                        isDone: false
                    },
                    {
                        id: 2,
                        text: 'Сходить в качку',
                        isDone: false
                    }
                ]
            }
        },
        methods: {
            createNewToDoItem() {
                if (!this.todo) {
                    return alert("Please enter a todo!"); 
                }
                const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
                this.list.push({ id: newId, text: this.todo, isDone: false});
            },
            onDeleteItem(todo) {
                this.list = this.list.filter(item => item !== todo);
            },
            toggleDone(id) {
                this.list.map((todo) => (todo.id === id ? (todo.isDone = !todo.isDone) : undefined));
            },
            completedTask() {
                let number = 0;
                this.list.map((item) => (item.isDone? number++ : ''));
                return number
            },
            completedDelete() {
                this.list = this.list.filter((todo) => !todo.isDone)
            }
        },
    }
</script>

<template>
    <div class="wrapper">
        <div class="header">ToDo List</div>
        <div class="wrapper__task">
            <p style="font-size: 20px">{{completedTask()}} task(s) left</p>
            <button style="cursor: pointer; font-size: 16px" @click="completedDelete()">Delete Completed</button>
        </div>
        <input class="task__add" type="text" placeholder="Add a new task" v-model="todo" v-on:keyup.enter="createNewToDoItem"/>
        <div class="wrapper__todo" v-for="todo in list" 
                    :todo="todo" 
                    :key="todo.id">
            <input class="task__check" @click="toggleDone(todo.id)" type="checkbox">
            <p style="font-size: 20px" :class="{ done: todo.isDone }">{{todo.text}}</p>
            <button class="button__delete" @click="onDeleteItem(todo)">&#10006;</button>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        width: 960px;
        padding: 50px 0;
    }
    .header {
        background: gray;
        color: white;
        border-radius: 12px;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
    }
    .wrapper__task {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    .task__add {
        width: 100%;
        margin: 20px 0;
        border: 1px solid gray;
        background: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
    }
    .wrapper__todo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid gray;
        padding: 10px;
    }

    p {
        color: white;
    }
    .done {
        text-decoration: line-through;
    }
    .task__check {
        width: 26px;
        height: 26px;
        cursor: pointer;
    }
    .button__delete {
        cursor: pointer; 
        width: 26px;
        height: 26px;
        font-size: 20px;
        line-height: 20;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>