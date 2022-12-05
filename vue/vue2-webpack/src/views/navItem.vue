<template>
  <li>
    <a
      :href="menu.url"
      :target="menu.target"
      :title="menu.seq + ' ' + menu.text"
    >
      {{ menu.text }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    menu: Object
  }
};
</script>

<style></style>
