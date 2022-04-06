<template>
    <div class="input-wrapper">
        <input
            type="number" 
            class="input"
            :value="getInputValue"
            @input="inputHandler"
        >
        <div class="input__max">Max</div>
        <small v-if="getError" class="input__error">Error proper amount</small>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
    data() {
        return {
            color: '#DFEBF5',
        }
    },
    props: {
        value: { type: Number},
        err: { type: Boolean},
    },
    methods: {
        ...mapMutations({
            setInput: "connect/setInput",
            setError: "connect/setError",
        }),
        inputHandler(e: any):void {
            const value = Number(e.target.value)
            // this.setError()
            this.setInput(value)
        }
    },
    computed: { 
        ...mapGetters({
            getInputValue: "connect/getInputValue",
            getError: "connect/getError",
        }),
        errorHandler() {
            if (this.getError) {
                return "#DA554A"
            } else {
                return "#DFEBF5"
            }
        }
    }
})
</script>

<style lang="scss" scoped>
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none; // Yeah, yeah everybody write about it
    }

    input[type='number'],
    input[type="number"]:hover,
    input[type="number"]:focus {
        appearance: none;
        -moz-appearance: textfield;
    }
    .input {
        background: #FFFFFF;
        border-width: 1px;
        border-style: solid;
        border-color: v-bind(errorHandler);
        border-radius: 8px;
        width: 100%;
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        padding: 14px 70px 14px 16px;
        margin-bottom: 8px;

        &-wrapper {
            position: relative;
        }
        &__max {
            position: absolute;
            top: 16px;
            right: 16px;
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 32px;
            color: #FFD42C;
        }

        &__error {
            font-family: 'Noto Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #DA554A;
            margin-bottom: 13px;
            margin-left: 16px;
        }
    }

</style>