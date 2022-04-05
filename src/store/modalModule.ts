

export const modalModule = {
    state: () => ({
        show: false,
        notice: false
    }),
    getters: {
        getShow(state: any) {
          return state.show
        },
        getNotice(state: any) {
          return state.notice
        }
    },
    mutations: {
        showModal(state: any) {
          state.show = true;
        },
        hideModal(state: any) {
          state.show = false;
        },
        showNotice(state: any) {
          state.notice = true
        },
        hideNotice(state: any) {
          state.notice = false
        }
      },
    actions: {
    },
    namespaced: true
}