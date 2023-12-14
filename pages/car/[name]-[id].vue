<script setup>
const route = useRoute();
const { capitalizeFirstLetter } = useUtilities();

useHead({
    title: capitalizeFirstLetter(route.params.name)
});

definePageMeta({
   layout: 'custom'
});
</script>

<template>
    <div class="mt-10">
        <CarDetailHero />
        <CarDetailAttributes />
        <CarDetailDescription />
        <CarDetailContact />
    </div>
</template>