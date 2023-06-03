<script setup>
import CopyButton from './components/CopyButton.vue';
import { watch, ref, createApp } from 'vue';

const isTooltip = ref(false);

// use setTimeout to wait for the tooltip to be created
setInterval(() => {
    const res = document.querySelector('.box.box-tip.sidebar-toolbar') !== null;
    if (res != isTooltip.value) {
        isTooltip.value = res;
        console.log('isTooltip', isTooltip.value);
    }
}, 200);

watch(isTooltip, (newVal) => {
    if (newVal) {
        const copyShortcut = document.createElement('span');
        copyShortcut.classList.add('sidebar-toolbar-item');
        const tooltips = document.querySelector('.box.box-tip.sidebar-toolbar');
        // add copy button to tooltip at first pos
        tooltips.insertBefore(copyShortcut, tooltips.firstChild);
        const copyApp = createApp(CopyButton);
        copyApp.mount(copyShortcut);
    }
});
</script>
<template>
    <div></div>
</template>
