<template>
    <div class="items-status">
        <p>Completed Tasks: {{todos.filter(todo => {return todo.doneCheck === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.doneCheck === false}).length}}</p>
        <div v-show="0 === todos.length">No Tasks Found</div>
    </div>
</template>

<script>
    export default {
        name: "itemStatus",
        props: ['todos']
    }
</script>

<style scoped lang="scss">

    .items-status {
        max-width: 600px;
        margin: 0 auto;
    }

</style>