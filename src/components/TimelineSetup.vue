<script setup lang="ts">
import { ref } from 'vue'
import { timelineItem } from '../types/timelineItem'

let timelineItems= ref<timelineItem[]>([]);
let newStartHour = ref(0);
let newStartMin = ref(0);
let newEndHour = ref(0);
let newEndMin = ref(0);
let newColor = ref("000000");
let newText = ref("Change this");

function pushNewTimelineItem() {
  var newItem = new timelineItem(newStartHour.value, newStartMin.value, newEndHour.value, newEndMin.value, newColor.value, newText.value);
  timelineItems.value.push(newItem);
  console.log(newItem.description());
}

const emit = defineEmits(["generate"]);
function generateTimeline() {
    emit("generate", timelineItems.value);
}
</script>

<template>
    <div id="timeline-data">
        <ol>
            <li v-for="item in timelineItems" :key="item.text" :style="{color: item.colorStr()}">
                {{item.description()}}
            </li>
            <input v-model.number="newStartHour">
            <input v-model.number="newStartMin">
            <input v-model.number="newEndHour">
            <input v-model.number="newEndMin">
            <input v-model="newColor">
            <input v-model="newText">
            <button @click="pushNewTimelineItem">Submit</button>
        </ol>
        <button @click="generateTimeline">Generate</button>
    </div>
</template>

<style>

</style>