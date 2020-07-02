<template>
  <div id="app">
    <h1 class="app__title">Composition API todo App</h1>
    <hr>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  padding: 30px;
  width: 800px;
  margin: auto;
}
</style>
