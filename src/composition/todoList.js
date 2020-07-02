import {ref, onMounted, reactive, computed} from '@vue/composition-api'

export function useTodoList() {
    let todos = ref([])

    onMounted(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(res => res.json())
            .then(data => todos.value = data)
    })

    todos.value.map(todo => {
        todo.completed = false
        return todo
    })

    const form = reactive({
        title: ''
    })

    const select = reactive({
        option: 'all'
    })

    const filteredTodos = computed(() => {
        let filtered = todos.value.filter(todo => {
            switch(select.option) {
                case 'all': return todo
                case 'completed': return todo.completed
                case 'uncompleted': return !todo.completed
            }
        })
        return filtered
    })

    const addTodo = () => {
        let todo = {
            id: Date.now(),
            title: form.title.trim(),
            completed: false
        }

        if(form.title.trim()) {
            todos.value.unshift(todo)
        }

        form.title = ''
    }

    const removeTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }

    return {
        todos, form, addTodo, removeTodo, select, filteredTodos
    }
}