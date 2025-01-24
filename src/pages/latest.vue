<script setup>
import { ref } from 'vue';
import Title from './title.vue';
import Pad from './pad.vue';

  const latestLaunch = ref(null);

  const fetchLatestLaunch = async()=>{
    const response = await fetch("https://developer.mozilla.org/en-US/docs/Web/HTTP/Status");
    if(response.ok){
        const result= await response.json();
        latestLaunch.value= result;
    } else{
        alert("error");
    }
  }
 fetchLatestLaunch();
</script>


<template>
    <div>
        this is Latest page
    </div>
    <div v-if="latestLaunch">
      <pre>{{ latestLaunch }}</pre>
      <Title :name="latestLaunch.name" :logo="latestLaunch.links.path.small"></Title>
    </div>
</template>