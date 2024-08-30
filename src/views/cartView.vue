<template>
  <!-- 如果购物车中有商品，则显示商品列表和购物车汇总 -->
  <div
    v-if="cartStore.items && cartStore.items.length"
    class="grid md:grid-cols-2 justify-center"
  >
    <div class="min-h-[80vh] max-w-6xl mx-auto">
      <!-- 遍历购物车中的商品，并为每个商品渲染一个CartTileComponent组件 -->
      <div
        v-for="item in cartStore.items"
        :key="item.id"
        class="flex flex-col justify-center items-center p-3"
      >
        <CartTileComponent :item="item" />
      </div>
    </div>
    <!-- 显示购物车汇总信息 -->
    <div class="w-[300px]">
      <div class="flex flex-col justify-center p-3">
        <h1 class="font-bold text-lg text-red-800">Your Cart Summary</h1>
        <p>
          <span class="text-gray-800 font-bold">Total Items</span>
          <span>: {{ cartStore.items.length }}</span>
        </p>
        <p>
          <span class="text-gray-800 font-bold">Total Amount</span>
          <span>: ${{ total }}</span>
        </p>
      </div>
    </div>
  </div>

  <!-- 如果购物车为空，显示提示信息和“Shop Now”按钮 -->
  <div v-else class="min-h-[80vh] flex flex-col items-center justify-center">
    <h1 class="text-gray-800 font-bold text-xl mb-2">Your cart is empty</h1>
    <router-link to="/">
      <button
        class="bg-red-950 text-white border-2 rounded-lg font-bold p-4 uppercase"
      >
        shop now
      </button>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue"; // 引入computed函数，用于计算属性
import { useCartStore } from "/src/stores/cart.js"; // 引入购物车存储
import CartTileComponent from "/src/components/cart-tile/CartTileComponent.vue"; // 引入CartTileComponent组件

const cartStore = useCartStore(); // 获取购物车存储实例

// 计算购物车中所有商品的总金额
const total = computed(() => {
  return cartStore.items.reduce((acc, curr) => acc + curr.price, 0);
});
</script>
