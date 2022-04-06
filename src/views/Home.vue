<template>
    <div class="content">
        <div class="container">
            <div class="content__block">
                <div class="content__header">
                    <h1 class="content__title">Staking App</h1>
                    <div class="content__approved" v-if="getHideFrom">
                        Wallet approved
                        <img 
                            class="content__approved-img" 
                            src="@/Icons/Succes.svg" 
                            alt="Succes"
                        />
                    </div>
                </div>
                <StockList/>
                <div class="prompt" v-if="!getHideFrom">
                    <p class="prompt__text">
                        <img class="prompt__img" src="@/Icons/Informatıon.svg" alt="Informatıon"/>
                        To perform actions on the page, connect your wallet
                    </p>
                </div>
                <StakeForm v-if="getHideFrom"/>
                <div class="content__footer" v-if="!getConnectAccount">
                    <div class="content__connect" @click="showModal">
                        <Button>
                            Connect wallet
                        </Button>  
                    </div>
                    <a href="https://testnet.bscscan.com/address/0x3514E8A6Ca64B6861B7054bbFb5A5ea75392eb9C#code" class="content__vallet">
                            View contract
                    </a>  
                </div>
                <div class="content__footer" v-if="getApproveWallet && !getHideFrom">
                    <div class="content__connect" @click="approveWallet">
                        <Button>
                            Approve wallet
                        </Button>  
                    </div>
                     <a href="https://testnet.bscscan.com/address/0x3514E8A6Ca64B6861B7054bbFb5A5ea75392eb9C#code" class="content__vallet">
                            View contract
                    </a>   
                </div>
                <div class="content__footer" v-if="getHideFrom">
                    <div class="content__connect" @click="setHideFrom">
                        <Button @click="stakeHandler">
                            Stake
                        </Button>  
                    </div>
                     <a href="https://testnet.bscscan.com/address/0x3514E8A6Ca64B6861B7054bbFb5A5ea75392eb9C#code" class="content__vallet">
                            View contract
                    </a>  
                </div>
            </div>
        </div>
        <!-- <Modal/> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StockList from "@/components/StockList.vue"
import StakeForm from "@/components/StakeForm.vue"
import Modal from "@/components/Modal.vue"
import Button from "@/shared/Button.vue"
import { mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default defineComponent({
    components: { StockList, StakeForm, Modal, Button },
    methods: {
        ...mapMutations({
            showModal: "modal/showModal",
            setConnect: "connect/setConnect",
            setApproveWallet: "connect/setApproveWallet",
            setHideFrom: "connect/setHideFrom",
            setStakeTo: "connect/setStakeTo",
        }),
        ...mapActions({
            approveWallet: "connect/approveWallet",
        }),

        stakeHandler() {
            if (!this.getError) {
                this.setStakeTo();
                this.$router.push('/approved')   
            } else {
                alert("Fix Error")
            }
        }
    },
    computed: {
        ...mapState({
            connectAccount: "connect/connectAccount",
        }),
        ...mapGetters({
            getConnectAccount: "connect/getConnectAccount",
            getApproveWallet: "connect/getApproveWallet",
            getHideFrom: "connect/getHideFrom",
            getError: "connect/getError"
        })
    }
})
</script>

<style lang="scss" scoped>
    .content {
        &__block {
            background: #FFFFFF;
            box-shadow: 0px 16px 44px rgba(78, 102, 120, 0.1);
            border-radius: 24px;
            width: 100%;
            padding: 64px 56px;
        }

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 55px;
        }

        &__title {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 800;
            font-size: 44px;
            line-height: 56px;
            letter-spacing: 0.06em;
        }

        &__approved {
            display: flex;
            align-items: center;
            background: #EFF3F8;
            border-radius: 16px;
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 32px;
            color: #828A97;
            padding: 12px 16px;
            &-img {
                margin-left: 8px;
            }
        }

        &__footer {
            display: flex;
            justify-content: space-between;
        }

        &__connect {
            background: #FFFFFF;
            position: relative;
        }

        &__wallet {
            &-bg {
                border: 1px solid #000000;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 95%;
                z-index: 1;
            }

            width: 100%;
            z-index: 99;
            background: #FFD42C;
            border-radius: 12px;
            padding: 18px 55px;
            color: #FFF;
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;
        }

        &__vallet {
            background: #FFFFFF;
            border: 1px solid #DFEBF5;
            border-radius: 12px;
            padding: 18px 65px;
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            /* max-width: 230px; */
        }
    }

    .prompt {
        margin-bottom: 52px;
        &__text {
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: -0.2875px;
            color: #828A97;
            background: #EFF3F8;
            border-radius: 16px;
            padding: 20px;
            display: flex;
            align-items: center;
        }

        &__img {
            margin-right: 20px;
        }
    }

    @media screen and (max-width: 625px) {
        .content {
            &__header {
                flex-direction: column;
                & > div {
                    margin-top: 10px;
                }
            }

            &__title {
                text-align: center;
            }

            &__footer {
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            &__vallet {
                margin-top: 15px;
            }
        }
    }
</style>