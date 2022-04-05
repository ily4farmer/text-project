<template>
<div>
  <NavBar/>
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
  <Modal>
    <HomeConnect v-if="!getTransition"/>
    <ApprovedForm v-if="getTransition"/>
  </Modal>
</div>
</template>

<script lang="ts">


import { defineComponent } from 'vue'
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
import Modal from "@/components/Modal.vue"
import ModalApproved from "@/components/ModalApproved.vue"
import HomeConnect from "@/components/HomeConnect.vue"
import ApprovedForm from "@/components/ApprovedForm.vue"
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
    components: { NavBar, Footer, Modal, HomeConnect, ModalApproved, ApprovedForm },
    methods: {
      ...mapMutations({
        setStakeFrom: "connect/setStakeFrom"
      })
    },
    computed: {
      ...mapGetters({
        getTransition: "connect/getTransition"
      })
    },
    mounted() {
      this.setStakeFrom()
      this.$router.push('/')

    }
})
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #343840;
}

body {
  position: relative;
}

body, #app { 
  width: 100%;
  height: 100%;
}

#app {
  background: #FDf5E0;
}

main {
  padding: 130px 0;
  height: 100%;
}

input:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}

button::-moz-focus-outer, ::-moz-focus-inner {
    border: none;
    padding: 0;
}

footer {
  background: #fff;
  height: 100px;
  position: relative;
}

.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 5px;
}

a { 
  text-decoration: none;
}

ul, li {
  list-style-type: none;
}

</style>
