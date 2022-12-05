<!-- State Management : Vuex(X), Pinia(O) -->
<!-- source : https://www.npmjs.com/package/vuex, Pinia is now the new default -->
<!-- source : https://www.npmjs.com/package/pinia -->
<template>
  <div>
    <div>
      <span>My Profile 2</span>
    </div>
    <div>
      <span>seq : </span>
      <span> {{ result.seq }}</span>
    </div>
    <div>
      <span> id : </span>
      <span> {{ result.id }}</span>
    </div>
  </div>
  <div>
    <button @click="getMyProfile">Get</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// store
import { userStoreRaw } from '@/store/user.js';
const userStore = userStoreRaw();

let result = ref({});

const getMyProfile = () => {
  result.value = userStore;
};
</script>

<style></style>
