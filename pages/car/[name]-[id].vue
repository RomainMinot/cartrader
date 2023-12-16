<script setup>
const route = useRoute();
const { cars } = useCars();
const { capitalizeFirstLetter } = useUtilities();

useHead({
    title: capitalizeFirstLetter(route.params.name)
});

definePageMeta({
   layout: 'custom'
});

const car = computed(() => {
    return cars.find((c) => {
        return c.id === parseInt(route.params.id);
    });
});

if (!car.value) {
    throw createError({
        statusCode: 404,
        message: `Car with ID of ${route.params.id} does not exist`
    });
}
</script>

<template>
    <div v-if="car" class="mt-10">
        <CarDetailHero 
            :car="car" 
        />
        <CarDetailAttributes 
            :features="car.features"
        />
        <CarDetailDescription
            :description="car.description"
        />
        <CarDetailContact />
    </div>
</template>