<template>
  <span v-if="seen">Now you see me</span>
</template>

<script>
document.querySelector("title").innerText = "Conditionals (조건문)";

export default {
  name: "Ex03",
  data: () => ({
    seen: true // true : shown, false : hidden
  })
};
</script>

<style></style>
