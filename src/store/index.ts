import { createStore } from 'vuex'
import { modalModule } from './modalModule'
import { stockModule } from './stockModule'
import { connectModule } from './connectModule'
  
export default createStore({
  modules: {
    modal: modalModule,
    stock: <any>stockModule,
    connect: connectModule
  }
})
