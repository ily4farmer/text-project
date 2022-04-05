
export const stockModule = {
    state: () => ({
        stocks: [
            {id: 1, title: 30, apy: "103,23", amountMin: 10000, amountMax: 12499, color: true},
            {id: 2, title: 60, apy: "116,86", amountMin: 12500, amountMax: 14999, color: false},
            {id: 3, title: 90, apy: "129,97",   amountMin: 15000, amountMax: 17499, color: false},
            {id: 4, title: 180, apy: "141,32",   amountMin: 17500, amountMax: 19999, color: false},
            {id: 5, title: 360, apy: "155,95",   amountMin: 20000, amountMax: 22249, color: false}
        ],
        
    }),
    getters: {
      
    },
    mutations: {
       activeItem(state:any, id: number) {
            const idItem = state.stocks.filter((el:any) => {
                if(el.id === id) {
                    el.color = true
                    return el
                }
            })
            const newItem = state.stocks.filter((el:any) => {
               if (el.id !== id) {
                el.color = false
                return el
               }
            })
            const newArr = [...idItem, ...newItem]
       }
    },
    actions: {
    },
    namespaced: true
}