<script setup>
const { cars } = useCars();

const favorite = useLocalStorage('favorite', {});

function handleFavorite(id) {
    if (id in favorite.value) {
        delete favorite.value[id];
    } else {
        favorite.value = {
            ...favorite.value,
            [id]: true
        }
    }
}
</script>

<template>
    <div class="w-full">
        <ClientOnly>
            <CarCard 
                v-for="car in cars" 
                @favor="handleFavorite"
                :key="car.id"
                :car="car"
                :favored="car.id in favorite"
            />
        </ClientOnly>
    </div>
</template>