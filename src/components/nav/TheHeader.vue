<template>
    <header>
        <h1>
            <router-link to="/">VueShop</router-link>
        </h1>

        <nav>
            <ul>
                <li>
                    <router-link to="/products">Product</router-link>
                </li>
                <li>
                    <router-link to="/cart">Cart</router-link>
                    <base-badge mode="elegent">{{ quantity }}</base-badge>
                </li>
                <li v-if="isLoggedIn">
                    <router-link to="/admin">Admin</router-link>
                </li>
            </ul>
        </nav>
        <div>
            <button @click="isAuth" v-if="!isLoggedIn">Login</button>
            <button @click="isAuth" v-else>Logout</button>
        </div>
    </header>
    
</template>

<script lang="ts">
import { computed, defineComponent, registerRuntimeCompiler } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup(){
    const store= useStore()

    const quantity = computed(() => store.getters.quantity);

    const isLoggedIn= computed(()=> store.getters.isLoggedIn)

    const isAuth= ()=>{
      store.dispatch('isAuth', isLoggedIn)
    }

    return {quantity, isLoggedIn, isAuth}
  }

  
});
</script>

<style scoped>
header {
  height: 5rem;
  width: 100%;
  background-color: rgb(107, 143, 189);
  /* margin: 0 10%; */
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 2rem 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>

