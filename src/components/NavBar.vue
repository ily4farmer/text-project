<template>
    <header class="header">
        <div class="container">
            <div class="header__block">
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item" @click="$router.push('/')">Stacking</li>
                        <li class="nav__item" style="margin-left: 40px" @click="$router.push('/approved')">Bridge</li>
                        <li class="nav__item" style="margin-left: 40px">SHO</li>
                        <li class="nav__item">
                            <div @click="showModal" class="nav__button" v-if="!getHideFrom">
                                Connect wallet
                            </div>
                            <div class="nav__account" v-if="getHideFrom">
                                <div class="nav__wallet">
                                    <span>0хCb99...8EBb</span>
                                    <img 
                                        class="content__approved-img" 
                                        src="@/Icons/AddressAccount.svg" 
                                        alt="Succes"
                                    />
                                </div>
                                <div class="nav__balance">
                                    <span>0.029 BUSD</span>
                                    <img
                                        class="content__approved-img" 
                                        src="@/Icons/Currency.svg" 
                                        alt="Succes"
                                    />
                                </div>
                                <img
                                    class="content__approved-img" 
                                    src="@/Icons/MenuWallet.svg" 
                                    alt="Succes"
                                />
                            </div>
                        </li>
                    </ul>
                </nav>
                <div class="mobile">
                    <div class="mobile__btn" v-show="!this.show" @click="showMenu">
                        <span></span>
                    </div>
                    <ul class="mobile__list" v-show="this.show">
                        <div class="mobile__close" @click="hideMenu">X</div>
                        <li class="mobile__item" @click="$router.push('/')">Stacking</li>
                        <li class="mobile__item"  @click="$router.push('/approved')">Bridge</li>
                        <li class="mobile__item">SHO</li>
                        <li class="mobile__item">
                            <div @click="showModal" class="nav__button" v-if="!getHideFrom">
                                Connect wallet {{$store.state.connect.walletAddress}}
                            </div>
                            <div class="nav__account" v-if="getHideFrom">
                                <div class="nav__wallet">
                                    <span>0хCb99...8EBb</span>
                                    <img 
                                        class="content__approved-img" 
                                        src="@/Icons/AddressAccount.svg" 
                                        alt="Succes"
                                    />
                                </div>
                                <div class="nav__balance">
                                    <span>0.029 BUSD</span>
                                    <img
                                        class="content__approved-img" 
                                        src="@/Icons/Currency.svg" 
                                        alt="Succes"
                                    />
                                    <img
                                        style="margin-left: 10px;"
                                        class="content__approved-img" 
                                        src="@/Icons/MenuWallet.svg" 
                                        alt="Succes"
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations} from 'vuex'

export default defineComponent({
    data() {
        return {
            show: false

        }
    },
    methods: {
        ...mapMutations({
            showModal: "modal/showModal",
            fetchAccount: "connect/fetchAccount"
        }),
        showMenu() {
            this.show = true
        },    
        hideMenu() {
            this.show = false
        }, 
    },
    computed: {
        ...mapGetters({
            getAll: "connect/getAll",
            getHideFrom: "connect/getHideFrom",
        }),
    }
})
</script>

<style lang="scss" scoped>
    .header {
        border-bottom: 1px solid #fff;
        padding: 15px 0 20px 0;
    }

    .mobile {
        justify-content: flex-end;
        display: none;
        position: relative;
        min-height: 20px;
        &__list {
            position: absolute;
            z-index: 586;
            padding: 25px 10px;
            background: #fff;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            border-radius: 12px;
            border: 1px solid #DFEBF5;
        }

        &__close {
            position: absolute;
            top: 6px;
            right: 6px;
            cursor: pointer;
        }

        &__item {
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: end;
            padding-bottom: 3px;
            margin-bottom: 5px;
            &:last-child {
                border-bottom: none;
            }
        }

        &__btn {
            width: 20px;
            height: 20px;
            position: relative;
            display: flex;
            align-items: center;
            & > span {
                height: 3px;
                background: #333;
                width: 100%;
            }
            &::before, &::after {
                content: "";
                position: absolute;
                left: 0;
                height: 3px;
                background: #333;
                width: 100%;
            }
            &::before {
                top: 0;
            }
            &::after {
                bottom: 0;
            }
        }
    }
    .nav {
        display: flex;
        justify-content: flex-end;
        &__list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            /* width: 45%; */
        }

        &__item {
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: -0.2875px;
            cursor: pointer;
            position: relative;
            &:first-child {
                font-family: 'Noto Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                color: #DA554A;
                &::before {
                    content: "";
                    width: 100%;
                    height: 4px;
                    position: absolute;
                    bottom: -35px;
                    left: 0;
                    background: red;
                }
            }

            &:last-child {
                margin-left: 55px;
            }
        }

        &__button {
            padding: 14px 25px;
            background: #fff;
            border-radius: 12px;
            margin-left: 57px;
        }

        &__account {
            background: #FFFFFF;
            border-radius: 12px;
            padding: 8px 16px 8px 8px;
            display: flex;
        }

        &__wallet {
            padding: 8px;
            background: #fff6d5;
            border-radius: 8px;
            display: flex;
            align-items: center;
            & > span {
                font-family: 'Noto Sans';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 18px;
                letter-spacing: -0.2875px;
                color: #E2AD06;
                margin-right: 8px;
            }
        }

        &__balance {
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-right: 16px;
            & > span {
                margin-right: 12px;
            }
        }
    }

    @media screen and (max-width: 800px) {
        .nav {
            display: none;
            &__account {
                flex-direction: column;
                justify-content: flex-end;
                padding-right: 0;
                & > img {
                    width: 10px;
                    height: 10px;
                }
            }
            &__button {
                border: 1px solid #333;
                margin-left: 0;
            }
        }
        .mobile {
            display: flex;
        }
    }
</style>