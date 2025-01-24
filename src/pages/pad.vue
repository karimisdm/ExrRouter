<script setup>
import { ref } from 'vue';
const props = defineProps(["id"]);
const pad= ref(null);

const fetchPadDetail = async()=> {
    const response = await fetch(`"https://api.spacexdata.com/v5/launches/${props.id}"`);
    if(response.ok){
        const result= await response.json();
        pad.value= result;
    } else{
        alert("error");
    }
};
fetchPadDetail();
</script>
<template>
    <div v-if="pad">
        <h2>{{ pad.name }}</h2>
        <p>{{ pad.details }}</p>

    </div>
</template>