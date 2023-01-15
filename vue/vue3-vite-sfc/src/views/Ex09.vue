<!-- Composing with Components - appNav, props (구성 요소를 조립) -->
<template>
  <ol>
    <appNav v-for="item in navList" :menu="item"></appNav>
  </ol>
</template>

<script setup>
import appNav from './navItem.vue';

const navList = [
  { seq: 0, text: 'Home', url: '#', target: '_self' },
  { seq: 1, text: 'Google', url: 'http://google.com', target: '_blank' },
  { seq: 2, text: 'Naver', url: 'http://naver.com', target: '_blank' },
];
</script>

<style scoped>
ol {
  flex-direction: row;
}

li {
  list-style: none;
  float: left;
  margin: 0 5px;
}

li a {
  text-decoration: none;
}

li a:hover {
  color: orange;
}
</style>
