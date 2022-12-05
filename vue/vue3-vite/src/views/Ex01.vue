<template>
  <div>{{ message }}</div>
</template>

<script>
document.querySelector('title').innerText = 'Declarative Rendering, Hello Vue (선언적 렌더링)';

export default {
  name: 'Ex01',
  setup() {
    const message = 'Hello Vue!';

    return { message };
  },
};
</script>

<style></style>
