<template>
    <div class="notice">
        <p class="notice__text">Transaction confirmed! Click here to see it</p>
        <img class="notice__img" src="@/Icons/NoticeClose.svg" alt="Close" @click="hideNotice"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

export default defineComponent({
    methods: {
        ...mapMutations({
            hideNotice: "modal/hideNotice"
        })
    }
})
</script>

<style lang="scss">
    .notice {
        position: absolute;
        top: -45px;
        left:50%;
        transform:translate(-50%);
        max-width: 549px;
        width: 100%;
        display: flex;
        align-items: center;
        background: #6AD288;
        border-radius: 20px;
        padding: 24px 28px;
        &__text {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
        }

        &__img {
            margin-left: 20px;
            cursor: pointer;
        }
    }
</style>