<!-- computed 2 -->
<!-- computed : 감시 대상의 값을 자동으로 변경, 반응하는 getter. 값을 Caching. watch 보다 추천. -->
<!-- https://codesandbox.io/s/bugagacise-gyesan-2x6reb?file=/src/App.vue -->
<template>
  <div>
    <label for="sellingPrice">소비자가격 : </label>
    <input type="number" id="sellingPrice" v-model="sellingPrice" />
  </div>
  <div>
    <span>물품가액 : {{ productPriceFormatted }}원</span>
  </div>
  <div>
    <span>부가가치세 : {{ vatFormatted }}원</span>
  </div>
  <div>참조 :</div>
  <div>
    <span>
      <img src="https://cdn.banksalad.com/entities/etc/1517463655748-%EC%98%81%EC%88%98%EC%A6%9D.jpg" alt="영수증" />
    </span>
    <span>&nbsp;</span>
    <span>
      <img src="https://image.kmib.co.kr/online_image/2018/0114/611211110012048428_1.jpg" alt="영수증" />
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const sellingPrice = ref(10000);

/**
 * Value-Added Tax(KR) : 10%
 * 출처 : http://tex.ktrentercar.com 원금에서 부가세 계산하기
 */
const vat = computed(() => {
  return Math.round((sellingPrice.value * 10) / 110);
});

/**
 * 천 단위 , 추가
 */
const vatFormatted = computed(() => {
  return vat.value.toLocaleString();
});

/**
 * 연산 및 천 단위 , 추가
 */
const productPriceFormatted = computed(() => {
  return (sellingPrice.value - vat.value).toLocaleString();
});
</script>

<style></style>
