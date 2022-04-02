

export const modalModule = {
    state: () => ({
        show: false,
    }),
    getters: {
        getShow(state: any) {
          return state.show
        }
    },
    mutations: {
        showModal(state: any) {
          state.show = true;
        },
        hideModal(state: any) {
          state.show = false;
        },
      },
    actions: {
    },
    namespaced: true
}