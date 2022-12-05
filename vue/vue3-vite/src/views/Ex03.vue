<template>
  <span v-if="seen">Now you see me</span>
</template>

<script>
document.querySelector('title').innerText = 'Conditionals (조건문)';

export default {
  setup() {
    const seen = true; // true : shown, false : hidden

    return { seen };
  },
};
</script>

<style></style>
