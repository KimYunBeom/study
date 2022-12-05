<template>
  <li>{{ todo.text }} {{ todo.id }}</li>
</template>

<script>
export default {
  props: {
    todo: Object
  }
};
</script>

<style></style>
