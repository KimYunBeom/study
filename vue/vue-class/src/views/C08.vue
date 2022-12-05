<!-- computed 1 -->
<!-- computed : 감시 대상의 값을 자동으로 변경, 반응하는 getter. 값을 Caching. watch 보다 추천. -->
<template>
  <div>
    <label for="product">상품가격 : </label>
    <input type="text" id="product" v-model="productPrice" />
    <p>할인율 : {{ discountPercentage }}%</p>
    <p>할인가격 : {{ productPrice }}원 * {{ discountPercentage }}% = {{ discountPrice }}원</p>
    <p>최종가격 : {{ productPrice }}원 - {{ discountPrice }}원 = {{ totalPrice }}원</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const productPrice = ref(1000);
const discountPercentage = ref(10);

const discountPrice = computed(() => {
  return productPrice.value / discountPercentage.value;
});

const totalPrice = computed(() => {
  return productPrice.value - discountPrice.value;
});
</script>

<style></style>
