<!-- JavaScript Web API : fetch -->
<template>
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

let resultData = reactive({
  email: '',
  name: '',
  age: '',
  country: '',
  image: '',
});

const API = async (method, url) => {
  return await fetch(url, { method })
    .then((response) => response.json())
    .then((json) => json.results[0])
    .catch((err) => err);
};

const getPhotos = async () => {
  const method = 'GET';
  const url = 'https://randomuser.me/api';

  const result = await API(method, url);
  console.log(result);
  resultData.email = result.email;
  resultData.name = result.name.first + ' ' + result.name.last;
  resultData.age = result.dob.age;
  resultData.country = result.location.country;
  resultData.image = result.picture.large;
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
</style>
