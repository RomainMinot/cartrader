<template>
    <div class="flex flex-col w-[48%] mt-2">
        <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
        <input :name="name" type="text" class="p-2 border w-100 rounded" :placeholder="placeholder" v-model="state" @input="onChange">
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    name: String,
    placeholder: String
});

const emits = defineEmits(['changeInput']);
const state = ref('');

function onChange() {
    emits('changeInput', state.value, props.name);
}
</script>