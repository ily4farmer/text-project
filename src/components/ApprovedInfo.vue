<template>
    <div class="info">
        <h2 class="info__title">26,6666</h2>
        <span class="info__subtitle">TKN earned</span>
        <ul class="info__list">
            <li class="info__item">
                <span class="info__item-subtitle">From </span>
                <h3 class="info__item-title">{{getStakeFrom}}</h3>
            </li>
            <li class="info__item">
                <span class="info__item-subtitle">To </span>
                <h3 class="info__item-title">{{getStakeTo}}</h3>
            </li>
            <li class="info__item">
                <span class="info__item-subtitle">Staked </span>
                <h3 class="info__item-title">{{getInputValue}} TKN</h3>
            </li>
            <li class="info__item">
                <span class="info__item-subtitle">APY </span>
                <h3 class="info__item-title">{{getApy}}%</h3>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    computed: {
        ...mapGetters({
            getApy: "connect/getApy",
            getInputValue: "connect/getInputValue",
            getStakeFrom: "connect/getStakeFrom",
            getStakeTo: "connect/getStakeTo"
        })
    }
})
</script>

<style lang="scss" scoped>
    .info {
        border: 1px solid #DFEBF5;
        border-radius: 24px;
        padding: 56px 64px 32px 64px;
        margin-bottom: 52px;
        &__title {
            z-index: 550;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 800;
            font-size: 44px;
            line-height: 56px;
            letter-spacing: 0.06em;
            color: #DA554A;
        }

        &__subtitle {
            z-index: 550;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            letter-spacing: 0.02em;
            color: #B3B7BF;
        }

        &__list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        &__item {
            display: flex;
            flex-direction: column;
            background: #EFF3F8;
            border-radius: 12px;
            padding: 24px 28px;
            z-index: 500;
            &-subtitle {
                font-family: 'Noto Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #828A97;
            }
            &-title {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 800;
                font-size: 24px;
                line-height: 32px;
                letter-spacing: 0.02em;
            }
        }
    }

    @media screen and (max-width: 1045px) {
        .info {
            &__item {
                margin-bottom: 15px;
            }
        }
    }

    @media screen and (max-width: 710px) {
        .info {
            padding: 5px;
            &__list {
                flex-direction: column;
                align-items: center;
            }

            &__item {
                min-width: 220px;
            }
        }
    }
</style>