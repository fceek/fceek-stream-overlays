<script setup lang="ts">

import { ref } from 'vue'
import { timelineItem } from '../types/timelineItem'

defineProps<{
    timelineItems: timelineItem[]
}>()


</script>

<template>
    <p v-for="item in timelineItems" v-key="item.text">
        {{item.description()}}
    </p>
    <canvas id="generated-timeline">

    </canvas>
</template>

<style>
</style>