<template>
    <ul class="stock__list">
        <StockItem v-for="el in $store.state.stock.stocks" :key="el.id" :el="el"/>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StockItem from "@/components/StockItem.vue"

export default defineComponent({
    components: { StockItem }, 

    data() {
        return {
           stock: [
               {id: 1, title: 30, apy: "103,23", amountMin: 100, amountMax: 299},
               {id: 2, title: 90, apy: "116,86", amountMin: 100, amountMax: 299},
               {id: 3, title: 150, apy: "129,97",   amountMin: 500, amountMax: 1000}
           ]
        }
    },
})
</script>

<style lang="scss" scoped>
    .stock{
        &__list {
            display: flex;
            justify-content: space-between;
            margin-bottom: 52px;
            flex-wrap: wrap;
        }
    }

     @media screen and (max-width: 688px) {
        .stock {
            &__list {
                justify-content: center;
            }
        }
     }
</style>