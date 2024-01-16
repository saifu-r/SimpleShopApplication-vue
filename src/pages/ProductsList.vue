<template>
  <section>
    <ul>
      <product-item
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :image="product.image"
        :description="product.description"
        :price="product.price"
      ></product-item>
    </ul>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import ProductItem from "../components/products/ProductItem.vue";

export default defineComponent({
  components: { ProductItem },
  setup() {
    const store = useStore();
    const products = computed(() => store.getters.products);

    return { products };
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>

