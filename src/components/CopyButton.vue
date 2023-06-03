<template>
    <span
        class="text-link dark:text-link-dark inline-flex items-center align-bottom justify-center hover:border-b-[1px] hover:-mb-[1px] hover:border-link dark:hover:border-link-dark"
        @click="copy"
        ><span class="icon"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                class="fill-link dark:fill-link-dark"
            >
                <path
                    d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
                /></svg></span
        ><label>复制全文</label>
    </span>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script setup>
import { copy_full_text } from '../api';
import { GM_setClipboard } from '$';

async function copy() {
    const hole_id = document
        .querySelector(
            'div.sidebar > div.sidebar-content.sidebar-content-show div.box-header.box-header-top-icon > code.box-id'
        )
        .innerHTML.trim()
        .substring(1);
    console.log('hole_id', hole_id);
    const full_text = await copy_full_text(hole_id);
    GM_setClipboard(full_text);
}
</script>
