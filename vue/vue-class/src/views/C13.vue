<!-- vue-spinner -->
<!-- source : https://www.npmjs.com/package/vue-spinner -->
<!-- $npm i vue-spinner -->
<!-- <fade-loader> -->
<template>
  <fade-loader id="spinner" :loading="loaderConfig.isOn" :color="loaderConfig.color"></fade-loader>
  <div>
    <button @click="getPhotos">Get</button>
  </div>
  <div>&nbsp;</div>
  <div>
    <table>
      <thead>
        <tr>
          <th>email</th>
          <th>name</th>
          <th>age</th>
          <th>country</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ resultData.email }}</td>
          <td>
            {{ resultData.name }}
          </td>
          <td>{{ resultData.age }}</td>
          <td>{{ resultData.country }}</td>
          <td>
            <img :src="resultData.image" alt="이미지" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

import FadeLoader from 'vue-spinner/src/FadeLoader.vue';

import axios from 'axios';

const loaderConfig = reactive({
  isOn: false,
  color: 'navy',
});

let resultData = reactive({
  email: '',
  name: '',
  age: '',
  country: '',
  image: '',
});

const API = async (method, url, data, headers) => {
  return await axios({
    method,
    url,
    data,
    headers,
  })
    .then((res) => {
      return res.data.results[0];
    })
    .catch((err) => {
      return err;
    });
};

const getPhotos = async () => {
  loaderConfig.isOn = true;

  const method = 'GET';
  const url = 'https://randomuser.me/api';
  const data = {};

  const result = await API(method, url, data);
  console.log(result);
  resultData.email = result.email;
  resultData.name = result.name.first + ' ' + result.name.last;
  resultData.age = result.dob.age;
  resultData.country = result.location.country;
  resultData.image = result.picture.large;

  loaderConfig.isOn = false;
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

table th,
td {
  border: 1px solid black;
}

#spinner {
  position: fixed !important;
  top: 40%;
  left: 50%;
  z-index: 99999;
}
</style>
