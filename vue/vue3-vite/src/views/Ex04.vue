<template>
  <ol>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ol>
</template>

<script>
document.querySelector('title').innerText = 'Loops (반복문)';

export default {
  setup() {
    const todos = [{ text: 'Learn JavaScript' }, { text: 'Learn Vue' }, { text: 'Build something awesome' }];

    return { todos };
  },
};
</script>

<style></style>
