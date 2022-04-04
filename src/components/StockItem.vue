<template>
    <li class="stock__item">
        <h3 class="stock__title">{{el.title}} Days</h3>
        <div class="stock__apy">
            <span class="stock__apy-text">APY: {{el.apy}}% </span>
            <img src="@/Icons/Question.svg" alt="Question">
            <!-- <div class="stock__hover">Tip text hover</div> -->
        </div>
        <div class="stock__amount">Amount: {{el.amountMin}} - {{el.amountMax}} TKN</div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   props: {
       el: { type: Object, required: true }
   },
})
</script>

<style lang="scss" scoped>
    .stock {
        &__item {
            padding: 24px 28px 20px 28px;
            border: 1px solid #DFEBF5;
            border-radius: 24px;
            max-width: 330px;
            margin-bottom: 15px;
        }

        &__title {
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 40px;
        }

        &__apy {
            color: #DA554A;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            letter-spacing: 0.02em;
            display: flex;
            align-items: center;
            margin-right: 8px;
            position: relative;
            width: 100%;
            margin-top: 8px;
            margin-bottom: 8px;
            &-text {
                color: #DA554A;
                margin-right: 5px;
            }
        }

        &__hover {
            position: absolute;
            right: -85px;
            background: #C4C4C4;
            border-radius: 12px;
            padding: 12px 13px;
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #FFFFFF;
            &::before, &::after {
                position: absolute;
                left: -15px;
                content: "";
                width: 25px;
                height: 5px;
                background: #333;
            }
        }

        &__amount {
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 32px;
            color: #828A97;
        }
    }

    @media screen and (max-width: 688px) {
        .stock {
            &__item {
                margin-bottom: 15px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>