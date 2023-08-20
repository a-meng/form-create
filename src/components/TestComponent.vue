<template>
    <div>
        <input type="text" :value="modelValue" @input="onInput($event)">
    </div>
</template>
<script setup lang="ts">
defineProps<{
    modelValue: string
}>();
const emits = defineEmits<{
    (event: 'update:modelValue', v: string): void
}>();
function onInput(event: Event) {
    emits('update:modelValue', (event.target as HTMLInputElement).value);
}
</script>