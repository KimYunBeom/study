<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
document.querySelector("title").innerText =
  "Handling User Input, v-model (사용자 입력 다루기)";

export default {
  data: () => ({
    message: "Hello Vue!"
  })
};
</script>

<style></style>
