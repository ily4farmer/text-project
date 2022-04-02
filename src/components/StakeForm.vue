<template>
    <div class="stake">
        <form class="stake__form">
            <Input/>
            <!-- <small class="stake__error">Error proper amount</small> -->
            <div class="stake__reward">Reward for 30 days: <span class="stake__sum">400 TKN</span></div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Input from "@/shared/Input.vue"
export default defineComponent({
    components: { Input },
})
</script>

<style lang="scss" scoped>
    .stake {

        &__form {
            display: flex;
            flex-direction: column;
            margin-bottom: 52px;
        }

        &__reward {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            letter-spacing: 0.02em;
        }

        &__sum {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0.02em;
            color: #DA554A;
        }
    }
</style>