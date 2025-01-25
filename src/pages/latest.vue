<script setup>
import { ref } from 'vue';
import Title from './title.vue';
import Pad from './pad.vue';
import Crew from '@/pages/crew.vue';

  const latestLaunch = ref(null);

  const fetchLatestLaunch = async()=>{
    const response = await fetch("https://api.spacexdata.com/v5/launches/latest");
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
    <div v-if="latestLaunch">
        <Title :name="latestLaunch.name" :logo="latestLaunch.links.patch.small"/>
        <!-- <Pad :id="latestLaunch.launchpad"/> -->
         <Crew :crow="latestLaunch.crew"/>
         {{ latestLaunch.crew}}
    </div>
    
</template>