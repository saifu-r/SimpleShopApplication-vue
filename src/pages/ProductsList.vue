<template>
    <h1>This is Product List Page</h1>
    <h4>{{ emptyVal }}</h4>
    
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const emptyVal= ref("hello")

    return {emptyVal}


  },
});
</script>

<style scoped>

</style>

