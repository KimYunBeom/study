<!-- State Management : Vuex(X), Pinia(O) -->
<!-- source : https://www.npmjs.com/package/vuex, Pinia is now the new default -->
<!-- source : https://www.npmjs.com/package/pinia -->
<template>
  <div>
    <div>
      <span>My Profile 1</span>
    </div>
    <div>
      <label for="mySeq">seq : </label>
      <input type="number" id="mySeq" v-model="seq" />
    </div>
    <div>
      <label for="myId">id : </label>
      <input type="text" id="myId" v-model="id" placeholder="아이디" />
    </div>
    <button @click="setMyProfile">Set</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// store
import { userStoreRaw } from '@/store/user.js';
const userStore = userStoreRaw();

const seq = ref(0);
const id = ref('');

const setMyProfile = () => {
  userStore.setSeq(seq);
  userStore.setId(id);
};
</script>

<style></style>
