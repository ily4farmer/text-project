<template>
    <header class="header">
        <div class="container">
            <div class="header__block">
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item" @click="$router.push('/')">Stacking</li>
                        <li class="nav__item" @click="$router.push('/approved')">Bridge</li>
                        <li class="nav__item">SHO</li>
                        <li class="nav__item">
                            <div @click="showModal" class="nav__button">
                                Connect wallet {{$store.state.connect.walletAddress}}
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations} from 'vuex'

export default defineComponent({
    methods: {
        ...mapMutations({
            showModal: "modal/showModal",
            fetchAccount: "connect/fetchAccount"
        })
    },
    computed: {
        ...mapGetters({
            getAll: "connect/getAll"
        })
    }
})
</script>

<style lang="scss" scoped>
    .header {
        border-bottom: 1px solid #fff;
        padding: 15px 0 20px 0;
    }

    .nav {
        display: flex;
        justify-content: flex-end;
        &__list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 45%;
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
        }

        &__button {
            padding: 14px 25px;
            background: #fff;
            border-radius: 12px;
            margin-left: 57px;
        }
    }

    @media screen and (max-width: 625px) {}
</style>