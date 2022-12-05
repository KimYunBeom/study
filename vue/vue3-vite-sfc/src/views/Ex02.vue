<!-- Declarative Rendering, message and title (선언적 렌더링) -->
<template>
  <span :title="message"> Hover your mouse over me for a few seconds to see my dynamically bound title! </span>
</template>

<script setup>
const message = 'You loaded this page on ' + new Date().toLocaleString();
</script>

<style></style>
