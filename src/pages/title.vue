<script setup>
const props = defineProps(["name","logo"]);

</script>
<template>
    <div>
        <img :src="logo" :alt="`Patch of Launch ${name}`"/>
        <h1>
            Launch "<i>{{ name }}</i>"
        </h1>
    </div>
</template>