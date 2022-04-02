<template>
    <div class="content">
        <div class="container">
            <div class="content__block">
                <img class="content__bg" src="@/Icons/ApprovedBg.svg" alt="ApprovedBg"/>
                <div class="content__header">
                    <h1 class="content__title">Staking App</h1>
                    <div class="content__approved">
                        Wallet approved
                        <img 
                            class="content__approved-img" 
                            src="@/Icons/Succes.svg" 
                            alt="Succes"
                        />
                    </div>
                </div>
                <ApprovedInfo/>
                <div class="content__footer">
                    <div class="content__footer-wrapper" v-if="true">
                        <Button style="background: #B7C6D8; margin-right: 12px;">
                            00:00:09
                        </Button>  
                        <Button>
                            Replenish
                        </Button> 
                    </div>
                    <div class="content__footer-wrapper" v-if="false">
                        <Button style="margin-right: 12px;">
                           Restake
                        </Button>  
                        <div class="content__vallet" style="width: 230px; margin-top: 0;">Unstake</div>  
                    </div>
                     <div class="content__footer-wrapper" v-if="false">
                        <Button style="background: #B7C6D8; margin-right: 12px;" >
                            00:00:09
                        </Button>   
                        <div class="content__notice">You have max. amount TKN</div>  
                    </div>
                    <div class="content__vallet" @click="$store.commit('increment')">
                            View contract
                    </div>  
                </div>
            </div>
        </div>
        <Notice/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StockList from "@/components/StockList.vue"
import StakeForm from "@/components/StakeForm.vue"
import ApprovedInfo from "@/components/ApprovedInfo.vue"
import Button from "@/shared/Button.vue"

export default defineComponent({
    components: { StockList, StakeForm, ApprovedInfo, Button},
    props: {
        approved: { type: Boolean }
    }
})
</script>

<style lang="scss" scoped>
    .content {
        &__block {
            background: #FFFFFF;
            box-shadow: 0px 16px 44px rgba(78, 102, 120, 0.1);
            border-radius: 24px;
            /* height: 634px; */
            width: 100%;
            padding: 64px 56px;
            position: relative;
        }

        &__bg {
            z-index: 5;
            position: absolute;
            top: 64px;
            right: 264px;
        }

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 55px;
        }

        &__title {
            z-index: 50;
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
            &-wrapper {
                display: flex;
                justify-content: flex-start;
            }
        }

        &__connect {
            background: #FFFFFF;
            position: relative;
        }

        &__wallet {
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
            &:first-child {
                margin-right: 12px;
            }
        }

        &__vallet {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            border: 1px solid #DFEBF5;
            border-radius: 12px;
            padding: 18px 65px;
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
        }

        &__notice {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            letter-spacing: 0.02em;
            color: #B3B7BF;
            display: flex;
            align-items: center;
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

    @media screen and (max-width: 920px) {
        .content {
            &__footer {
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            &__vallet {
                margin-top: 15px;
            }

            &__bg {
                display: none;
            }
        }
    }

    @media screen and (max-width: 710px) {
        .content {
            &__header {
                flex-direction: column;
                align-items: center;
            }

            &__title {
                margin-bottom: 15px;
            }
        }
    }

    @media screen and (max-width: 540px) {
        .content {
            &__footer {
                &-wrapper {
                    flex-direction: column;
                    & > button {
                        &:first-child {
                            margin-bottom: 15px;
                        }
                    }
                }
            }
        }
    }
</style>