<template>
    <div class="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
      <!-- 商品信息展示区域 -->
      <div class="flex p-3">
        <!-- 商品图片 -->
        <img
          :src="props.item.image"
          class="h-28 rounded-lg"
          :alt="props.item.title"
        />
        <!-- 商品标题和价格 -->
        <div class="ml-10 self-start space-y-5">
          <h1 class="text-xl text-white font-bold">{{ props.item.title }}</h1>
          <p class="text-white font-extrabold">{{ props.item.price }}$</p>
        </div>
      </div>
      <!-- 移除购物车按钮 -->
      <div>
        <button @click="handleRemoveFromCart" class="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
          Remove from cart
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '/src/stores/cart.js';
  import { defineProps } from 'vue';
  
  // 定义从父组件传入的props属性
  const props = defineProps({
    item: {
      type: Object, // 修正类型为Object而不是Array
      required: true // 确保item属性是必须的
    }
  });
  
  // 引入购物车的全局状态管理
  const cartStore = useCartStore();
  
  // 移除商品的处理函数
  const handleRemoveFromCart = () => {
    cartStore.removeItem(props.item.id); // 从购物车中移除该商品
  };
  </script>
  