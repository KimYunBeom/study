<!-- boostrap -->
<!-- source : https://getbootstrap.com -->
<!-- $npm i bootstrap@5.2.3 -->
<template>
  <fade-loader id="spinner" :loading="loaderConfig.isOn" :color="loaderConfig.color"></fade-loader>
  <div>
    <div>
      <button @click="getPhotos">Get</button>
    </div>
    <div>&nbsp;</div>
    <div class="table-responsive">
      <table class="table table-light table-hover">
        <thead>
          <tr class="table-primary">
            <th class="text-center text-nowrap">email</th>
            <th class="text-center text-nowrap">name</th>
            <th class="text-center text-nowrap">age</th>
            <th class="text-center text-nowrap">country</th>
            <th class="text-center text-nowrap">image</th>
          </tr>
        </thead>
        <tbody>
          <tr role="button" v-if="resultData.email">
            <td class="text-start">{{ resultData.email }}</td>
            <td class="text-center">
              {{ resultData.name }}
            </td>
            <td class="text-end">{{ resultData.age }}</td>
            <td class="text-center">{{ resultData.country }}</td>
            <td class="text-center">
              <img :src="resultData.image" alt="이미지" />
            </td>
          </tr>
          <tr v-else>
            <td class="text-center" colspan="5">조회된 결과가 없습니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
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
