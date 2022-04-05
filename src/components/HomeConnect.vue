<template>
    <div class="modal__wrapper">
        <h2 class="modal__title">Select the payment card that you want to use for payment</h2>
        <span class="modal__subtitle">The selected wallet will be connected to your staking</span>
        <div class="modal__footer">
            <div class="modal__btn" @click="connectAccount">
                <img 
                    class="modal__btn-img" 
                    src="@/Icons/MetaMask.svg" 
                    alt="MetaMask"
                />
                    MetaMask
            </div>
            <div class="modal__btn">
                    <img 
                        class="modal__btn-img" 
                        src="@/Icons/Walletconnect.svg" 
                        alt="Walletconnect"
                    />
                Walletconnect
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapMutations } from 'vuex'

export default defineComponent({
    methods: {
        ...mapMutations({
            hideModal: "modal/hideModal"
        }),
        ...mapActions({
            fetchAccount: "connect/fetchAccount"
        }),
        async connectAccount():Promise<void> {
            await this.fetchAccount()
            await this.hideModal()
        }
    },
})
</script>

<style lang="scss" scoped>
    .modal {
        &__title {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0.02em;
            color: #000000;
            margin-bottom: 32px;
            max-width: 423px;
        }

        &__subtitle {
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
        }

        &__footer {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
        }

        &__btn {
            cursor: pointer;
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

     @media screen and (max-width: 700px) {
        .modal {
            &__footer {
                flex-direction: column;
                align-items: center;
                & > div {
                    &:first-child {
                        margin-bottom: 15px;
                    }
                }
            }
        }
     }
</style>