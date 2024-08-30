import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(product) {
      this.items.push(product);
      console.log(this.items);
    },
    removeItem(productId){
        this.items=this.items.filter(item=>item.id!==productId);
        console.log(this.items);
    }
  },
});
