<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>

<style lang="scss" scoped>
    .button {
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 230px;
        height: 56px;
        background: #FFD42C;
        border-radius: 12px;
        color: #FFF;
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }
</style>