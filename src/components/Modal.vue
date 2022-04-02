<template>
    <div v-show="getShow" class="modal">
        <div class="modal__bg" @click="hideModal"></div>
        <div class="modal__block">
            <div class="modal__close" @click="hideModal">
               <img 
                    class="modal__close-img" 
                    src="@/Icons/Close.svg" 
                    alt="Close"
                />
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {mapState, mapGetters, mapMutations} from 'vuex'

export default defineComponent({
    methods: {
        ...mapMutations({
            showModal: "modal/showModal",
            hideModal: "modal/hideModal"
        })
    },
    computed: {
        ...mapState({

        }),
        ...mapGetters({
            getShow: "modal/getShow"
        })
    }
})
</script>

<style lang="scss" scoped>
    .modal {
        position: absolute;
        left: 0; 
        right: 0; 
        top: 0; 
        bottom: 0;
        z-index: 999;
        
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
            max-width: 670px;
            width: 100%;
            padding-bottom: 60px;
            z-index: 999;
        }

        &__close {
            cursor: pointer;
            position: absolute;
            top: 16px;
            right: 16px;
        }
    }
</style>