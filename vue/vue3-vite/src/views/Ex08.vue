<template>
  <ol>
    <todoItem v-for="item in groceryList" :todo="item" :key="item.id"></todoItem>
  </ol>
</template>

<script>
document.querySelector('title').innerText = 'Composing with Components - todoItem2, props (구성 요소를 조립)';

import todoItem from './todoItem2.vue';

export default {
  components: {
    todoItem,
  },
  setup() {
    const groceryList = [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' },
    ];

    return { groceryList };
  },
};
</script>

<style></style>
