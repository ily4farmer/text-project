

export const stockModule = {
    state: () => ({
        stocks: [
            {id: 1, title: 30, apy: "103,23", amountMin: 100, amountMax: 299},
            {id: 2, title: 90, apy: "116,86", amountMin: 100, amountMax: 299},
            {id: 3, title: 150, apy: "129,97",   amountMin: 500, amountMax: 1000}
        ]
    }),
    getters: {
       
    },
    mutations: {
       
    },
    actions: {
    },
    namespaced: true
}