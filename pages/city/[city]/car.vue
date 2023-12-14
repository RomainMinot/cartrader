<script setup>
const route = useRoute();
const { capitalizeFirstLetter } = useUtilities();

useHead({
    title: `${route.params.make ? capitalizeFirstLetter(route.params.make) : 'Cars'} in ${capitalizeFirstLetter(route.params.city)}`
});

definePageMeta({
   layout: 'custom'
});
</script>

<template> 
    <div class="mt-32 flex">
        <CarSideBar />
        <NuxtPage />
    </div>
</template>