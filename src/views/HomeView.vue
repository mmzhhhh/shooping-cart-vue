<template>
    <!-- 如果正在加载，则显示加载动画 -->
    <div v-if="loading" class="min-h-screen w-full flex justify-center items-center">
      <VueSpinnerHourglass :size="150" :color="'rgb(127 29 29)'" />
    </div>
  
    <!-- 商品列表展示区域 -->
    <div
      v-else
      class="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3"
    >
      <ProductTile
        v-for="(productItem, index) in products"
        :key="index"
        :product="productItem"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue"; // 引入ref和onMounted
  import { VueSpinnerHourglass } from "vue3-spinners"; // 引入加载动画组件
  import ProductTile from "/src/components/product-tile/ProductTileComponent.vue"; // 引入产品组件
  
  // 定义响应式变量products来存储产品列表
  const products = ref([]);
  
  // 定义响应式变量loading来控制加载状态
  const loading = ref(false);
  
  // 异步函数，用于获取产品列表
  const fetchListOfProducts = async () => {
    loading.value = true; // 开始加载，显示加载动画
    try {
      const response = await fetch("https://fakestoreapi.com/products"); // 发送请求获取产品数据
      const data = await response.json(); // 将响应数据转换为JSON格式
      if (data) {
        products.value = data; // 将数据赋值给products
      }
    } catch (error) {
      console.log(error); // 捕获并打印错误信息
    } finally {
      loading.value = false; // 加载完成，隐藏加载动画
    }
  };
  
  // 组件挂载后，调用fetchListOfProducts函数获取产品数据
  onMounted(() => {
    fetchListOfProducts();
  });
  </script>
  