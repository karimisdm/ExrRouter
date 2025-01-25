<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
const goHome = ()=>{
 router.push("/");

};


</script>

<template>
  <div class="flex">
    <button @click="goHome()">Go back Home</button>
    <nav>SpaceX</nav>
  </div>
    
</template>

<style scoped>
.flex {
  display: flex;
  margin: 10px 20px;
}
  nav {
    flex-grow: 1;
    color: green;
    font-size: 30px;
    text-align: center;
  }
</style>