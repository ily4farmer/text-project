<template>
    <footer class="footer">
        <Notice v-if="getNotice"/>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Notice from "@/components/Notice.vue"
import { mapGetters } from 'vuex'

export default defineComponent({
    components: { Notice },
    computed: {
        ...mapGetters({
            getNotice: "modal/getNotice"
        })
    }
})
</script>
