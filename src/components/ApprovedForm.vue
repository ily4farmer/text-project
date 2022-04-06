<template>
    <div class="modal__wrapper">
        <h2 class="modal__title">Replenish</h2>
        <form class="form">
            <div class="form__header">
                <div class="form__header-item">
                    <span class="form__header-amount">Max. amount = </span>
                    <span class="form__header-result">{{getMaxAmount}} TKN</span>
                </div>
                <div class="form__header-item">
                    <span class="form__header-amount">Available amount = </span>
                    <span class="form__header-result">40 TKN</span>
                </div>
            </div>
                <Input/>
                <Button style="margin-top: 44px;">Replenish</Button>
        </form>
    </div>
</template>

<script>
    import Input from "@/shared/Input.vue"
    import Button from "@/shared/Button.vue"
import { mapGetters } from 'vuex'
    export default {
        components: { Input, Button },
        computed: {
            ...mapGetters({
                getMaxAmount: "connect/getMaxAmount"
            })
        }
    }
</script>

<style lang="scss" scoped>
    .form {
        &__header {
            display: flex;
            justify-content: space-between;
            &-amount{
                font-family: 'Noto Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
            }

            &-result {
                font-family: 'Noto Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #DA554A;
            }
            margin-bottom: 24px;
        }

        &__submit {
            background: #FFD42C;
            border-radius: 12px;
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;
            width: 230px;
            height: 56px;
            border: none;
            margin-top: 44px;
        }
    }

    .modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &__bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(71.52deg, #395B77 16.69%, #1A242C 81.22%);
            opacity: 0.3;
        }

        &__block {
            padding: 61px;
            position:fixed;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            background: #FFFFFF;
            box-shadow: 0px 16px 44px rgba(78, 102, 120, 0.1);
            border-radius: 24px;
            width: 670px;
            /* height: 365px; */
            z-index: 999;
        }

        &__close {
            cursor: pointer;
            position: absolute;
            top: 16px;
            right: 16px;
        }

        &__title {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0.02em;
            color: #000000;
            margin-bottom: 24px;
            max-width: 423px;
        }

        &__btn {
            background: #FFFFFF;
            border: 1px solid #DFEBF5;
            border-radius: 12px;
            width: 271px;
            height: 110px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;

            &-img {
                margin-right: 16px;
            }
        }
    }
</style>