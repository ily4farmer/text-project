interface State {
    auth: boolean,
    all: number,
    __approveWallet: boolean
  }
  
  export const connectModule = {
      state: ():State => ({
          auth: false,
          all: 0,
          __approveWallet: false
      }),
      getters: {
         
      },
      mutations: {
          
        },
      actions: {
        
      },
      namespaced: true
  }