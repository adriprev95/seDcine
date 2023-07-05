<template>
    <nav class="join grid grid-cols-2">
        <button class="join-item btn btn-outline btn-primary w-40" @click="$emit('down')">Anterior</button>
        <button class="join-item btn btn-outline btn-primary w-40" @click="$emit('next')">Siguiente</button>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped></style>