<!-- computed vs watch -->
<!-- computed : 감시 대상의 값을 자동으로 변경, 반응하는 getter. 값을 Caching. watch 보다 추천. -->
<!-- watch    : 감시 대상의 값 변경에 의해 반응하는 callback function. 값을 Caching하지 않고 항상 재계산. -->
<template>
  <div>
    <label for="input">입력 : </label>
    <input type="text" id="input" v-model="search" />
    <p>검색어 : {{ search }}</p>
    <div>결과</div>
    <div v-if="isResult">일치하는 결과 없음</div>
    <div v-else>
      <div v-for="name in matchingNames" :key="name">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const search = ref('');
const names = ref(['Aaron', 'Bread', 'Chris', 'David', 'Edward']);
let isResult = ref(false);

/**
 * 일치하는 값들을 추출 후 반환
 */
const matchingNames = computed(() => {
  return names.value.filter((name) => name.toLowerCase().includes(search.value.toLowerCase()));
});

/**
 * 파라미터 변수가 변경될 때마다 재실행
 */
watch(search, () => {
  if (matchingNames.value.length) {
    isResult = false;
  } else {
    isResult = true;
  }
});
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
