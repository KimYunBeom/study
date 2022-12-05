<template>
  <ol>
    <todoItem></todoItem>
  </ol>
</template>

<script>
document.querySelector('title').innerText = 'Composing with Components - todoItem (구성 요소를 조립)';

import todoItem from './todoItem.vue';

export default {
  components: {
    todoItem,
  },
  setup() {},
};
</script>

<style></style>
