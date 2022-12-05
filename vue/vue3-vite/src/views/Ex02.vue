<template>
  <span :title="message"> Hover your mouse over me for a few seconds to see my dynamically bound title! </span>
</template>

<script>
document.querySelector('title').innerText = 'Declarative Rendering, message and title (선언적 렌더링)';

export default {
  setup() {
    const message = 'You loaded this page on ' + new Date().toLocaleString();

    return { message };
  },
};
</script>

<style></style>
