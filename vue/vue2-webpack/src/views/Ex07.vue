<template>
  <div>
    <ol>
      <todoItem></todoItem>
    </ol>
  </div>
</template>

<script>
document.querySelector("title").innerText =
  "Composing with Components - todoItem (구성 요소를 조립)";

import todoItem from "./todoItem";

export default {
  components: {
    todoItem
  }
};
</script>

<style></style>
