<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div><router-link to="/C01">C01</router-link></div>
    <div><router-link to="/C02">C02</router-link></div>
    <div><router-link to="/C03">C03</router-link></div>
    <div><router-link to="/C04">C04</router-link></div>
    <div><router-link to="/C05">C05</router-link></div>
    <div><router-link to="/C06">C06</router-link></div>
    <div><router-link to="/C07">C07</router-link></div>
    <div><router-link to="/C08">C08</router-link></div>
    <div><router-link to="/C09">C09</router-link></div>
    <div><router-link to="/C10">C10</router-link></div>
    <div><router-link to="/C11">C11</router-link></div>
    <div><router-link to="/C12">C12</router-link></div>
    <div><router-link to="/C13">C13</router-link></div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 0;
}

nav div:after {
  margin: 0 4px;
  content: '';
}

nav div a {
  text-decoration: none;
}

nav div a:visited {
  color: mediumslateblue;
}

nav div a:hover {
  color: orange;
}
</style>
