<template>
    <div>
      <div
        class="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl"
      >
        <!-- 图片展示区域 -->
        <div class="h-[180px]">
          <img
            :src="props.product.image"
            :alt="props.product.title"
            class="object-cover h-full w-full"
          />
        </div>
        <!-- 商品标题展示 -->
        <div>
          <h1 class="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {{ props.product.title }}
          </h1>
        </div>
        <!-- 动态渲染按钮区域 -->
        <div class="flex items-center justify-center w-full mt-5">
          <button @click="handleButtonClick" class="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
            {{ isInCart ? 'Remove from Cart' : 'Add to Cart' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from "vue";
  import { useCartStore } from "/src/stores/cart.js";
  
  // 接收传入的product属性
  const props = defineProps({
    product: Object,
  });
  
  // 使用CartStore管理购物车状态
  const cartStore = useCartStore();
  
  // 计算属性，用于判断当前商品是否在购物车中
  const isInCart = computed(() => {
    return cartStore.items.some((item) => item.id === props.product.id);
  });
  
  // 按钮点击处理函数，根据是否在购物车中执行相应操作
  const handleButtonClick = () => {
    if (isInCart.value) {
      cartStore.removeItem(props.product.id); // 从购物车移除商品
    } else {
      cartStore.addItem(props.product); // 添加商品到购物车
    }
  };
  </script>
  