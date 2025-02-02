<script setup>
const props = defineProps(["creationDate", "updateDate"]);
</script>

<template>
    <p class="postDate">
        <em v-if="props.creationDate">Publié le {{ props.creationDate }}</em>
        <span v-if="props.updateDate"> - </span>
        <em v-if="props.updateDate">Mis à jour le {{ props.updateDate }}</em>
    </p>
</template>