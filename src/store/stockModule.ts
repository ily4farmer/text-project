

export const stockModule = {
    state: () => ({
        stocks: [
            {id: 1, title: 30, apy: "103,23", amountMin: 10000, amountMax: 12499},
            {id: 2, title: 90, apy: "116,86", amountMin: 12500, amountMax: 14999},
            {id: 3, title: 150, apy: "129,97",   amountMin: 15000, amountMax: 17499},
            {id: 4, title: 150, apy: "141,32",   amountMin: 17500, amountMax: 19999},
            {id: 5, title: 150, apy: "155,95",   amountMin: 20000, amountMax: 2249}
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