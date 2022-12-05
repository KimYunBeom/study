<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
document.querySelector("title").innerText =
  "Handling User Input, methods and Event (사용자 입력 다루기)";

export default {
  data: () => ({
    message: "Hello Vue.js!"
  }),
  methods: {
    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style></style>
