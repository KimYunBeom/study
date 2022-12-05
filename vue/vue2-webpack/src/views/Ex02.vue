<template>
  <div>
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
  </div>
</template>

<script>
document.querySelector("title").innerText =
  "Declarative Rendering, message and title (선언적 렌더링)";

export default {
  name: "Ex02",
  data: () => ({
    message: "You loaded this page on " + new Date().toLocaleString()
  })
};
</script>

<style></style>
