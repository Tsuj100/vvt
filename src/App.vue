<template>
    <Home></Home>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./pages/home.vue";

export default defineComponent({
    components: {
        Home
    }
});
</script>

<style>
#app {
    margin: 0;
    padding: 0;
    height: 100%;
}
</style>
