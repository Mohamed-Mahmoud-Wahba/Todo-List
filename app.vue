<template>
  <div>
    <div class="todo">
      <div class="container">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title">MyTodos</h1>
            <div class="add-todo">
              <input
                type="text"
                placeholder="Add a New Todo..."
                class="input"
                v-model="input"
              />
              <button class="btn" @click="handleClick">Add</button>
            </div>
          </div>
          <div
            @click="() => updateTodo(todo.id)"
            class="card"
            id="cards"
            v-for="todo in todos"
            :key="todo.id"
          >
            <div class="card-item">
              <h4 :class="todo.completed ? 'completed' : null">
                {{ todo.item }}
              </h4>
              <p class="delete" @click="() => deleteTodo(todo.id)">x</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const input = ref("");
const { todos, addTodo, updateTodo, deleteTodo } = useTodos();
const handleClick = () => {
  addTodo(input.value);
  input.value = "";
};
</script>
<style scoped>
.todo {
  padding-top: 100px;
}
.card {
  padding: 2rem;
}
.add-todo {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
.input {
  width: 100%;
  border: none;
}
.input:focus-visible {
  outline: none;
}
.btn {
  border: 1px solid;
  width: 100%;
  max-width: 10%;
  margin-left: 12px;
}
.card-item {
  display: flex;
  justify-content: space-between;
}
#cards {
  padding: 15px 25px 15px 25px;
  margin-top: 20px;
}
.delete {
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
}
</style>
