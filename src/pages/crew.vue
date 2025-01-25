<script setup>

const props= defineProps(["crow"])
</script>



<template>
    <h2 class="titleCrew">Crew Role : Crew Id</h2>
    <ul>
        <li v-for="c in crow">
            {{ c.role}} : {{ c.crew }} ;
        </li>
    </ul>
    <hr/>
 
</template>
<style scoped>
 .titleCrew {
    color: brown;
    font-size: 35px;
    padding: 5px 10px;
 }
 li {
    color: rgb(211, 112, 20);
    font-size: 25px;
 }
</style>