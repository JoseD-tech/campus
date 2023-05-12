<template>
    <div v-show="modalActive" class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
        <div v-if="modalActive" class="p-10 bg-white self-start mt-32 max-w-screen-sm rounded-md">
            <slot />
            <button class="text-white mt-8 bg-blue-500 py-4 rounded w-full" @click="$emit('close-modal')">
                Cerrar
            </button>
        </div>
    </div>
</template>

<script setup>

defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});

</script>

