<template>
  <ol>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ol>
</template>

<script>
document.querySelector("title").innerText = "Loops (반복문)";

export default {
  name: "Ex04",
  data: () => ({
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" }
    ]
  })
};
</script>

<style></style>
