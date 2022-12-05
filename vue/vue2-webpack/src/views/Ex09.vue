<template>
  <div>
    <ol>
      <appNav v-for="item in navList" :menu="item" :key="item.seq"></appNav>
    </ol>
  </div>
</template>

<script>
document.querySelector("title").innerText =
  "Composing with Components - appNav (구성 요소를 조립)";

import appNav from "./navItem";

export default {
  components: {
    appNav
  },
  data: () => ({
    navList: [
      { seq: 0, text: "Home", url: "#", target: "_self" },
      { seq: 1, text: "Google", url: "http://google.com", target: "_blank" },
      { seq: 2, text: "Naver", url: "http://naver.com", target: "_blank" }
    ]
  })
};
</script>

<style>
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
