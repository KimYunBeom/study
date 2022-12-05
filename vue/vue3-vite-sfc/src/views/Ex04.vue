<!-- Loops (반복문) -->
<template>
  <div>
    <ol>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ol>
  </div>
</template>

<script setup>
const todos = [{ text: 'Learn JavaScript' }, { text: 'Learn Vue' }, { text: 'Build something awesome' }];
</script>

<style></style>
