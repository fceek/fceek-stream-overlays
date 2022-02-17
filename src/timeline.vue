<script setup lang="ts">

import Globals from './components/Globals.vue';
import { timelineItem } from './types/timelineItem'
import TimelineSetup from './components/TimelineSetup.vue'


function generateTimeline(_data: timelineItem[]) {
  let data = JSON.stringify(_data);
  window.location.href = "./generated-timeline.html?data=" + data;
}

</script>

<template>
  <Globals />

  <div class="container">
    <TimelineSetup @generate="generateTimeline" />
  </div>
</template>

<style>

</style>
